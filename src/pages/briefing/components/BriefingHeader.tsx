import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconMy from '../../../components/icons/common/IconMy';
import IconAlarm from '../../../components/icons/common/IconAlarm';

const DdayWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-gray-500);
`;

const StyledWeek = styled.p`
  background-color: var(--color-main-primary);
  color: var(--color-text-on-color);
  border-radius: var(--size-border-radius-xs);
  font-size: var(--font-size-sm);
  padding: 4px 6px;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-lg);
  margin: 16px 0 var(--size-layout-padding);
`;

const IconWrapper = styled.ul`
  display: flex;
  gap: 24px;
`;

const BriefingHeader = () => {
  return (
    <>
      <DdayWrapper>
        <StyledWeek>0주차</StyledWeek>
        <p>D-239</p>
      </DdayWrapper>
      <DateWrapper>
        <p>n월 n일 n요일</p>
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
