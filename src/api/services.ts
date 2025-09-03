import { api } from './client';
import { 
  isTodosResponse, 
  isLoginResponse, 
  isUserInfo,
  isTodoItem,
  isCreateTodoResponse,
  isNotificationItem,
  parseApiResponse,
  safeFilter
} from '../utils/typeGuards';

// === 타입 정의 ===

// 인증 관련
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  userInfo: {
    username: string;
    nickName: string;
  };
}

// 임신 정보
export interface PregnancyInfo {
  pregnantWeek: number;
  ddayToBirth: number;
  region?: string;
}

// 사용자 정보 (백엔드 API와 일치)
export interface UserInfo {
  userName: string;
  nickName: string;
  region?: string;
  pregnantWeek?: number;
  ddayToBirth?: number;
  birthday?: string;
  pregnantStatus?: string;
  hasTwins?: boolean;
  dueDate?: string;
  frequentUrination?: boolean;
  jointPain?: boolean;
  heartburn?: boolean;
  abdominalTightness?: boolean;
  drowsiness?: boolean;
  morningSickness?: boolean;
  constipationOrHemorrhoids?: boolean;
  swelling?: boolean;
  dizziness?: boolean;
  insomniaOrSleepDisorder?: boolean;
}

// 투두 관련
export interface TodoItem {
  id: number;
  title: string;
  todoCategory: 'HEALTH' | 'WORK' | 'PERSONAL';
  todoDate: string;
  memo?: string;
  isCompleted: boolean;
  isFixed?: boolean;
  isStorage?: boolean;
}

export interface CreateTodoRequest {
  title: string;
  todoCategory: 'HEALTH' | 'WORK' | 'PERSONAL';
  todoDate: string;
  memo?: string;
  isFixed: boolean;
  isStorage: boolean;
  alarmDate?: string;
}

export interface TodosResponse {
  health: {
    completedCount: number;
    totalCount: number;
    todos: TodoItem[];
  };
  work: {
    completedCount: number;
    totalCount: number;
    todos: TodoItem[];
  };
  personal: {
    completedCount: number;
    totalCount: number;
    todos: TodoItem[];
  };
}

// 알림
export interface NotificationItem {
  content: string;
  todoCategory: 'HEALTH' | 'WORK' | 'PERSONAL';
}

// === API 서비스들 ===

export const authService = {
  // 로그인 (타입 가드 적용)
  login: async (credentials: LoginRequest) => {
    const response = await api.post('/members/auth/login', credentials);
    
    console.log('🔍 로그인 API 전체 응답:', response.data);
    
    // API 응답이 {isSuccess, code, message, result} 형태이므로 parseApiResponse 사용
    const parsedResult = parseApiResponse(response.data, isLoginResponse);
    
    if (!parsedResult.success) {
      console.error('❌ 로그인 응답 검증 실패:', parsedResult.error);
      throw new Error(`Invalid login response: ${parsedResult.error}`);
    }
    
    return parsedResult.data;
  },

  // 로그아웃 (서버 API가 있다면)
  logout: async () => {
    try {
      await api.post('/members/auth/logout');
    } catch (error) {
      console.warn('서버 로그아웃 실패 (무시 가능):', error);
    }
  },
};

export const userService = {
  // 사용자 정보 조회 (타입 가드 적용)
  getProfile: async () => {
    const response = await api.get('/members');
    
    console.log('🔍 프로필 조회 API 전체 응답:', response.data);
    console.log('🔍 프로필 조회 result 부분:', response.data.result);
    
    const parsedResult = parseApiResponse(response.data, isUserInfo);
    
    if (!parsedResult.success) {
      console.error('❌ 프로필 조회 응답 검증 실패:', parsedResult.error);
      console.error('❌ 실제 응답 데이터:', JSON.stringify(response.data, null, 2));
      throw new Error(parsedResult.error);
    }
    
    return parsedResult.data;
  },

  // 사용자 정보 수정 (타입 가드 적용)
  updateProfile: async (data: Partial<UserInfo>) => {
    const response = await api.patch('/members', data);
    
    console.log('🔍 프로필 수정 API 전체 응답:', response.data);
    
    // 프로필 수정은 단순히 성공 메시지만 반환하므로 성공 여부만 확인
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '프로필 수정 실패');
    }
    
    return response.data.result; // 성공 메시지 반환
  },

  // 임신 정보 조회
  getPregnancyInfo: async () => {
    const response = await api.get<PregnancyInfo>('/members/pregnancy-week');
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '임신 정보 조회 실패');
    }
    
    return response.data.result!;
  },
};

export const todoService = {
  // 투두 목록 조회 (타입 가드 적용)
  getTodos: async (date?: string) => {
    const params = date ? { date } : {};
    const response = await api.get<TodosResponse>('/todos', { params });
    
    console.log('🔍 투두 목록 API 전체 응답:', response.data);
    console.log('🔍 투두 목록 result 부분:', response.data.result);
    console.log('🔍 result 타입:', typeof response.data.result);
    
    const parsedResult = parseApiResponse(response.data, isTodosResponse);
    
    if (!parsedResult.success) {
      console.error('❌ 투두 목록 응답 검증 실패:', parsedResult.error);
      console.error('❌ 실제 응답 데이터 전체:', response.data);
      console.error('❌ result 부분 상세:', JSON.stringify(response.data.result, null, 2));
      throw new Error(parsedResult.error);
    }
    
    return parsedResult.data;
  },

  // 투두 생성 (타입 가드 적용)
  createTodo: async (todo: CreateTodoRequest) => {
    const response = await api.post('/todos', todo);
    
    console.log('🔍 투두 생성 API 전체 응답:', response.data);
    
    const parsedResult = parseApiResponse(response.data, isCreateTodoResponse);
    
    if (!parsedResult.success) {
      console.error('❌ 투두 생성 응답 검증 실패:', parsedResult.error);
      console.error('❌ 실제 응답 데이터:', JSON.stringify(response.data, null, 2));
      throw new Error(parsedResult.error);
    }
    
    return parsedResult.data;
  },

  // 투두 수정 (타입 가드 적용)
  updateTodo: async (id: number, todo: Partial<TodoItem>) => {
    const response = await api.patch(`/todos/${id}`, todo);
    
    console.log('🔍 투두 수정 API 전체 응답:', response.data);
    
    const parsedResult = parseApiResponse(response.data, isTodoItem);
    
    if (!parsedResult.success) {
      console.error('❌ 투두 수정 응답 검증 실패:', parsedResult.error);
      console.error('❌ 실제 응답 데이터:', JSON.stringify(response.data, null, 2));
      throw new Error(parsedResult.error);
    }
    
    return parsedResult.data;
  },

  // 투두 삭제
  deleteTodo: async (id: number) => {
    const response = await api.delete(`/todos/${id}`);
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '투두 삭제 실패');
    }
    
    return response.data.result!;
  },

  // 알림 조회 (타입 가드 적용)
  getNotifications: async () => {
    const response = await api.get<NotificationItem[]>('/todos/notifications');
    
    const parsedResult = parseApiResponse(response.data, (data: unknown): data is NotificationItem[] => {
      return Array.isArray(data) && data.every(isNotificationItem);
    });
    
    if (!parsedResult.success) {
      throw new Error(parsedResult.error);
    }
    
    return parsedResult.data;
  },
};

// 편의를 위한 통합 export
export const services = {
  auth: authService,
  user: userService,
  todo: todoService,
};

export default services;