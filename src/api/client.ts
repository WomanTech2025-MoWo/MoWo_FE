import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import SecureTokenStorage from '../utils/secureStorage';

// 실제 백엔드 API 응답 형태
export interface ApiResponse<T = any> {
  isSuccess: boolean;
  code: string;
  message: string;
  result?: T;
}

// 페이지네이션 응답용
export interface PageableResponse<T = any> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

// 커스텀 에러 클래스
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string,
    public response?: AxiosResponse
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Axios 인스턴스 생성
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  // 요청 인터셉터: 자동 인증 헤더 추가
  client.interceptors.request.use(
    (config) => {
      const token = SecureTokenStorage.getAccessToken();
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // 요청 로깅 (개발 환경에서만)
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
          headers: config.headers,
          data: config.data,
        });
      }

      return config;
    },
    (error) => {
      console.error('❌ Request interceptor error:', error);
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터: 에러 처리 및 자동 로그아웃
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      // 성공 응답 로깅 (개발 환경에서만)
      if (process.env.NODE_ENV === 'development') {
        console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, {
          status: response.status,
          data: response.data,
        });
      }

      return response;
    },
    (error: AxiosError<ApiResponse>) => {
      const { response, config } = error;

      // 에러 로깅
      console.error(`❌ API Error: ${config?.method?.toUpperCase()} ${config?.url}`, {
        status: response?.status,
        statusText: response?.statusText,
        data: response?.data,
        message: error.message,
      });

      // 401 Unauthorized: 토큰 만료 또는 인증 실패
      if (response?.status === 401) {
        console.warn('🔒 인증 실패 - 자동 로그아웃 처리');
        
        // 토큰 삭제
        SecureTokenStorage.clearTokens();
        
        // 로그인 페이지로 리다이렉트 (현재 페이지가 공개 페이지가 아닌 경우)
        const currentPath = window.location.pathname;
        const publicPaths = ['/login', '/signup'];
        
        if (!publicPaths.some(path => currentPath.startsWith(path))) {
          window.location.href = '/login';
        }
        
        throw new ApiError(
          '로그인이 필요합니다. 다시 로그인해주세요.',
          401,
          'UNAUTHORIZED',
          response
        );
      }

      // 403 Forbidden: 권한 없음
      if (response?.status === 403) {
        throw new ApiError(
          '접근 권한이 없습니다.',
          403,
          'FORBIDDEN',
          response
        );
      }

      // 404 Not Found
      if (response?.status === 404) {
        throw new ApiError(
          '요청한 리소스를 찾을 수 없습니다.',
          404,
          'NOT_FOUND',
          response
        );
      }

      // 500 Internal Server Error
      if (response?.status === 500) {
        throw new ApiError(
          '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          500,
          'INTERNAL_SERVER_ERROR',
          response
        );
      }

      // 네트워크 에러 (서버 응답 없음)
      if (!response) {
        throw new ApiError(
          '네트워크 연결을 확인해주세요.',
          0,
          'NETWORK_ERROR'
        );
      }

      // 서버에서 isSuccess: false 응답이 온 경우
      if (response?.data && !response.data.isSuccess) {
        throw new ApiError(
          response.data.message || '요청 처리에 실패했습니다.',
          response.status,
          response.data.code,
          response
        );
      }

      // 기타 에러
      const message = response?.data?.message || error.message || '알 수 없는 오류가 발생했습니다.';
      throw new ApiError(
        message,
        response?.status,
        response?.data?.code,
        response
      );
    }
  );

  return client;
};

// API 클라이언트 인스턴스
export const apiClient = createApiClient();

// 편의 메서드들
export const api = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.get(url, config),

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.post(url, data, config),

  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.put(url, data, config),

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.patch(url, data, config),

  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.delete(url, config),
};

export default apiClient;