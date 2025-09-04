import { useEffect, useState } from 'react';
import { PregnancyInfo } from '../utils/pregnancyUtils';
import { userService } from '../api/services';
import { ApiError } from '../api/client';
import SecureTokenStorage from '../utils/secureStorage';

export const usePregnancyInfo = (): PregnancyInfo | null => {
  const [info, setInfo] = useState<PregnancyInfo | null>(null);

  useEffect(() => {
    const fetchPregnancyWeek = async () => {
      try {
        // 인증 확인
        if (!SecureTokenStorage.isTokenValid()) return;

        // 새로운 userService 사용
        const pregnancyData = await userService.getPregnancyInfo();
        
        setInfo({
          week: pregnancyData.pregnantWeek,
          dday: pregnancyData.ddayToBirth,
          today: new Date(),
        });
        
      } catch (err) {
        console.error('❌ 임신 정보 조회 실패:', err);
        
        if (err instanceof ApiError && err.statusCode === 401) {
          // 401 에러는 이미 인터셉터에서 처리됨
          return;
        }
        
        setInfo(null);
      }
    };

    fetchPregnancyWeek();
  }, []);

  return info;
};
