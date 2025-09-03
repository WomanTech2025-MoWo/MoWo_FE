// 런타임 타입 검증을 위한 Type Guard 유틸리티

/**
 * 값이 문자열인지 확인하는 타입 가드
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

/**
 * 값이 숫자인지 확인하는 타입 가드
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

/**
 * 값이 불린인지 확인하는 타입 가드
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

/**
 * 값이 객체인지 확인하는 타입 가드 (null 제외)
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/**
 * 값이 배열인지 확인하는 타입 가드
 */
export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};

/**
 * 값이 null 또는 undefined가 아닌지 확인하는 타입 가드
 */
export const isNotNull = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

/**
 * API 응답 기본 구조 검증
 */
export const isApiResponse = (value: unknown): value is { isSuccess: boolean; code: string; message: string; result?: unknown } => {
  if (!isObject(value)) return false;
  
  return (
    isBoolean(value.isSuccess) &&
    isString(value.code) &&
    isString(value.message)
  );
};

/**
 * 투두 아이템 타입 가드
 */
export interface TodoItem {
  id: number;
  title: string;
  category: 'HEALTH' | 'WORK' | 'PERSONAL';
  todoDate: string;
  memo?: string;
  isDone: boolean;
  completeDate?: string | null;
  alarmDate?: string | null;
  isFixed: boolean;
  createdAt: string;
}

export const isTodoItem = (value: unknown): value is TodoItem => {
  if (!isObject(value)) return false;

  return (
    isNumber(value.id) &&
    isString(value.title) &&
    isString(value.category) &&
    ['HEALTH', 'WORK', 'PERSONAL'].includes(value.category as string) &&
    isString(value.todoDate) &&
    isBoolean(value.isDone) &&
    isBoolean(value.isFixed) &&
    isString(value.createdAt) &&
    (value.memo === undefined || isString(value.memo)) &&
    (value.completeDate === undefined || value.completeDate === null || isString(value.completeDate)) &&
    (value.alarmDate === undefined || value.alarmDate === null || isString(value.alarmDate))
  );
};

/**
 * 투두 섹션 데이터 타입 가드
 */
export interface TodoSection {
  completedCount: number;
  totalCount: number;
  todos: TodoItem[];
}

export const isTodoSection = (value: unknown): value is TodoSection => {
  if (!isObject(value)) return false;

  return (
    isNumber(value.completedCount) &&
    isNumber(value.totalCount) &&
    isArray(value.todos) &&
    value.todos.every(isTodoItem)
  );
};

/**
 * 투두 응답 데이터 타입 가드
 */
export interface TodosResponse {
  health: TodoSection;
  work: TodoSection;
  personal: TodoSection;
}

export const isTodosResponse = (value: unknown): value is TodosResponse => {
  if (!isObject(value)) return false;

  return (
    isObject(value.health) && isTodoSection(value.health) &&
    isObject(value.work) && isTodoSection(value.work) &&
    isObject(value.personal) && isTodoSection(value.personal)
  );
};

/**
 * 투두 생성 응답 타입 가드
 */
export interface CreateTodoResponse {
  todoId: number;
}

export const isCreateTodoResponse = (value: unknown): value is CreateTodoResponse => {
  if (!isObject(value)) return false;

  return isNumber(value.todoId);
};

/**
 * 로그인 응답 타입 가드
 */
export interface LoginResponse {
  accessToken: string;
  userId: number;
}

export const isLoginResponse = (value: unknown): value is LoginResponse => {
  if (!isObject(value)) return false;

  return (
    isString(value.accessToken) &&
    isNumber(value.userId)
  );
};

/**
 * 사용자 정보 타입 가드
 */
export interface UserInfo {
  userId: number;
  nickName: string;
  userName: string;
  birthday?: string | null;
  pregnantStatus: string;
  hasTwins: boolean;
  dueDate?: string | null;
  frequentUrination: boolean;
  jointPain: boolean;
  heartburn: boolean;
  abdominalTightness: boolean;
  drowsiness: boolean;
  morningSickness: boolean;
  constipationOrHemorrhoids: boolean;
  swelling: boolean;
  dizziness: boolean;
  insomniaOrSleepDisorder: boolean;
}

export const isUserInfo = (value: unknown): value is UserInfo => {
  if (!isObject(value)) return false;

  return (
    isNumber(value.userId) &&
    isString(value.nickName) &&
    isString(value.userName) &&
    isString(value.pregnantStatus) &&
    isBoolean(value.hasTwins) &&
    isBoolean(value.frequentUrination) &&
    isBoolean(value.jointPain) &&
    isBoolean(value.heartburn) &&
    isBoolean(value.abdominalTightness) &&
    isBoolean(value.drowsiness) &&
    isBoolean(value.morningSickness) &&
    isBoolean(value.constipationOrHemorrhoids) &&
    isBoolean(value.swelling) &&
    isBoolean(value.dizziness) &&
    isBoolean(value.insomniaOrSleepDisorder) &&
    (value.birthday === undefined || value.birthday === null || isString(value.birthday)) &&
    (value.dueDate === undefined || value.dueDate === null || isString(value.dueDate))
  );
};

/**
 * 알림 아이템 타입 가드
 */
export interface NotificationItem {
  content: string;
  todoCategory: 'HEALTH' | 'WORK' | 'PERSONAL';
}

export const isNotificationItem = (value: unknown): value is NotificationItem => {
  if (!isObject(value)) return false;

  return (
    isString(value.content) &&
    isString(value.todoCategory) &&
    ['HEALTH', 'WORK', 'PERSONAL'].includes(value.todoCategory as string)
  );
};

/**
 * 안전한 API 응답 파서
 */
export const parseApiResponse = <T>(
  response: unknown,
  validator: (data: unknown) => data is T
): { success: true; data: T } | { success: false; error: string } => {
  try {
    // API 응답 기본 구조 검증
    if (!isApiResponse(response)) {
      return { success: false, error: 'Invalid API response format' };
    }

    // 비즈니스 로직 성공 여부 확인
    if (!response.isSuccess) {
      return { success: false, error: response.message || 'API request failed' };
    }

    // 결과 데이터 검증
    if (!validator(response.result)) {
      return { success: false, error: 'Invalid response data format' };
    }

    return { success: true, data: response.result };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown parsing error' 
    };
  }
};

/**
 * 배열 데이터를 안전하게 필터링하는 헬퍼
 */
export const safeFilter = <T>(
  array: unknown[],
  validator: (item: unknown) => item is T
): T[] => {
  return array.filter(validator);
};

/**
 * 객체의 특정 키 값을 안전하게 추출하는 헬퍼
 */
export const safeGet = <T>(
  obj: Record<string, unknown>,
  key: string,
  validator: (value: unknown) => value is T
): T | null => {
  const value = obj[key];
  return validator(value) ? value : null;
};