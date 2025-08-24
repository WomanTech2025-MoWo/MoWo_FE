import { useEffect, useMemo, useState } from 'react';
import { getPregnancyInfo, PregnancyInfo } from '../utils/pregnancyUtils';

export const usePregnancyInfo = (): PregnancyInfo | null => {
  const [info, setInfo] = useState<PregnancyInfo | null>(null);

  useEffect(() => {
    const fetchPregnancyWeek = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch('/api/members/pregnancy-week', {
          headers: { Authorization: `Bearer ${token}` },
          credentials: 'include',
        });

        if (!res.ok) throw new Error('임신 주차 조회 실패');

        const data = await res.json();
        const { pregnantWeek, ddayToBirth } = data.result;

        setInfo({
          week: pregnantWeek,
          dday: ddayToBirth,
          today: new Date(),
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchPregnancyWeek();
  }, []);

  return info;
};
