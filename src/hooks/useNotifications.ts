import { useEffect, useState } from 'react';
import { todoService } from '../api/services';
import { ApiError } from '../api/client';
import SecureTokenStorage from '../utils/secureStorage';

export interface AlertItem {
  content: string;
  todoCategory: 'HEALTH' | 'WORK' | 'PERSONAL';
}

export const useNotifications = () => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // 인증 확인
        if (!SecureTokenStorage.isTokenValid()) return;

        // 새로운 todoService 사용
        const notifications = await todoService.getNotifications();
        setAlerts(notifications || []);
        
      } catch (err) {
        console.error('❌ 알림 조회 실패:', err);
        
        if (err instanceof ApiError && err.statusCode === 401) {
          // 401 에러는 이미 인터셉터에서 처리됨
          return;
        }
        
        setAlerts([]);
      }
    };

    fetchNotifications();
  }, []);

  return alerts;
};
