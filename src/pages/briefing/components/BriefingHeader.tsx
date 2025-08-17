import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconMy from '../../../components/icons/common/IconMy';
import IconAlarm from '../../../components/icons/common/IconAlarm';

interface BriefingHeaderProps {
  dueDate: string; // 백엔드에서 받은 출산 예정일 (예: "2025-12-01")
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

const BriefingHeader = ({ dueDate }: BriefingHeaderProps) => {
  const { dday, week, todayText } = useMemo(() => {
    const today = new Date();
    const due = new Date(dueDate);

    // D-day 계산 (일 단위)
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // D-239

    // 임신 시작일 = 예정일 - 280일
    const conceptionDate = new Date(due);
    conceptionDate.setDate(conceptionDate.getDate() - 280);

    // 임신 몇 주차인지 계산
    const passedDays = Math.floor((today.getTime() - conceptionDate.getTime()) / (1000 * 60 * 60 * 24));
    const week = Math.floor(passedDays / 7);

    return {
      dday: diffDays,
      week,
      todayText: formatDate(today),
    };
  }, [dueDate]);

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
            <button type="button">
              <IconAlarm />
            </button>
          </li>
        </IconWrapper>
      </DateWrapper>
    </>
  );
};

export default BriefingHeader;
