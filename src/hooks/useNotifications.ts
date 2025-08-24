import { useEffect, useState } from 'react';

export interface AlertItem {
  content: string;
  todoCategory: 'HEALTH' | 'WORK' | 'PERSONAL';
}

export const useNotifications = () => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch('/api/todos/notifications', {
          headers: { Authorization: `Bearer ${token}` },
          credentials: 'include',
        });

        if (!res.ok) throw new Error('알림 조회 실패');
        const data = await res.json();
        setAlerts(data.result || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotifications();
  }, []);

  return alerts;
};
