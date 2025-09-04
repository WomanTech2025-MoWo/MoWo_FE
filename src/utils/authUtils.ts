import SecureTokenStorage from './secureStorage';

// 간단하게 Record 타입 사용

export class AuthUtils {
  static getAuthHeaders(includeAuth: boolean = true): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = SecureTokenStorage.getAccessToken();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    return headers;
  }

  static async makeAuthenticatedRequest(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const headers = this.getAuthHeaders();
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...(options.headers as Record<string, string>),
      },
      credentials: 'include',
    });

    // 401 에러시 자동 로그아웃
    if (response.status === 401) {
      this.handleUnauthorized();
      throw new Error('인증이 필요합니다. 다시 로그인해주세요.');
    }

    return response;
  }

  static handleUnauthorized(): void {
    SecureTokenStorage.clearTokens();
    
    // 현재 페이지가 인증이 필요한 페이지라면 로그인 페이지로 리다이렉트
    const currentPath = window.location.pathname;
    const publicPaths = ['/login', '/signup'];
    
    if (!publicPaths.some(path => currentPath.startsWith(path))) {
      window.location.href = '/login';
    }
  }

  static isAuthenticated(): boolean {
    return SecureTokenStorage.isTokenValid();
  }

  static logout(): void {
    SecureTokenStorage.clearTokens();
    window.location.href = '/login';
  }

  // API 응답에서 토큰 추출 및 저장
  static handleLoginResponse(response: any): void {
    if (response.result?.accessToken) {
      const expiresIn = response.result.expiresIn || 3600; // 기본 1시간
      const expiresAt = Date.now() + (expiresIn * 1000);
      
      SecureTokenStorage.setTokens({
        accessToken: response.result.accessToken,
        refreshToken: response.result.refreshToken,
        expiresAt,
      });
    }
  }
}

export default AuthUtils;