import { api } from './client';

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

// 사용자 정보
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
  // 로그인
  login: async (credentials: LoginRequest) => {
    const response = await api.post<LoginResponse>('/members/auth/login', credentials);
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '로그인 실패');
    }
    
    return response.data.result!;
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
  // 사용자 정보 조회
  getProfile: async () => {
    const response = await api.get<UserInfo>('/members');
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '사용자 정보 조회 실패');
    }
    
    return response.data.result!;
  },

  // 사용자 정보 수정
  updateProfile: async (data: Partial<UserInfo>) => {
    const response = await api.patch<UserInfo>('/members', data);
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '사용자 정보 수정 실패');
    }
    
    return response.data.result!;
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
  // 투두 목록 조회 (날짜별)
  getTodos: async (date?: string) => {
    const params = date ? { date } : {};
    const response = await api.get<TodosResponse>('/todos', { params });
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '투두 목록 조회 실패');
    }
    
    return response.data.result!;
  },

  // 투두 생성
  createTodo: async (todo: CreateTodoRequest) => {
    const response = await api.post<TodoItem>('/todos', todo);
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '투두 생성 실패');
    }
    
    return response.data.result!;
  },

  // 투두 수정
  updateTodo: async (id: number, todo: Partial<TodoItem>) => {
    const response = await api.patch<TodoItem>(`/todos/${id}`, todo);
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '투두 수정 실패');
    }
    
    return response.data.result!;
  },

  // 투두 삭제
  deleteTodo: async (id: number) => {
    const response = await api.delete(`/todos/${id}`);
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '투두 삭제 실패');
    }
    
    return response.data.result!;
  },

  // 알림 조회
  getNotifications: async () => {
    const response = await api.get<NotificationItem[]>('/todos/notifications');
    
    if (!response.data.isSuccess) {
      throw new Error(response.data.message || '알림 조회 실패');
    }
    
    return response.data.result!;
  },
};

// 편의를 위한 통합 export
export const services = {
  auth: authService,
  user: userService,
  todo: todoService,
};

export default services;