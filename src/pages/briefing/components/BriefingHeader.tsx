import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconMy from '../../../components/icons/common/IconMy';
import IconAlarm from '../../../components/icons/common/IconAlarm';
import AlertPopup from './AlertPopup';
import { AlertItem } from '../../../hooks/useNotifications';

interface BriefingHeaderProps {
  dday: number;
  week: number;
  today: Date;
  alerts: AlertItem[];
}

const DdayWrapper = styled.div`
  display: flex;
  gap: var(--size-gap-xs);
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-gray-500);
  margin-bottom: var(--size-gap-sm);
`;

const StyledWeek = styled.p`
  background-color: var(--color-main-primary);
  color: var(--color-text-on-color);
  border-radius: var(--size-border-radius-sm);
  font-size: var(--font-size-xs);
  padding: var(--size-gap-xxs);
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-xxl);
  margin-bottom: var(--size-gap-xl);
`;

const IconWrapper = styled.ul`
  display: flex;
  gap: var(--size-gap-xl);
`;

// 날짜를 한국어 포맷으로 변환
const formatDate = (date: Date) =>
  date.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

const BriefingHeader = ({ dday, week, today, alerts }: BriefingHeaderProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const todayText = today.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const handleAlarmClick = () => {
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  return (
    <>
      <DdayWrapper>
        <StyledWeek>{week}주차</StyledWeek>
        <p>D-{dday}</p>
      </DdayWrapper>
      <DateWrapper>
        <p>{todayText}</p>
        <IconWrapper>
          <li>
            <Link to="/profile">
              <IconMy />
            </Link>
          </li>
          <li>
            <button type="button" onClick={handleAlarmClick}>
              <IconAlarm />
            </button>
          </li>
        </IconWrapper>
      </DateWrapper>
      {isAlertOpen && <AlertPopup onClose={() => setIsAlertOpen(false)} alerts={alerts} />}
    </>
  );
};

export default BriefingHeader;
