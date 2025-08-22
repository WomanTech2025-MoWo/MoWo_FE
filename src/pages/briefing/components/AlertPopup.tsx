import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../components/common/Backdrop';
import { FixedCenter } from '../../../layouts/FixedCenterContainer';
import IconCategory from '../../../components/icons/features/todos/IconCategory';

interface AlertItem {
  id: number;
  status: 'health' | 'work' | 'personal';
  content: string;
}

interface AlertPopupProps {
  onClose: () => void;
  alerts: AlertItem[];
}

const AlertPopupWrap = styled(FixedCenter)`
  background-color: var(--color-background-white);
  z-index: 12;
  width: 300px;
  border-radius: var(--size-border-radius-md);
  border: 1px solid var(--color-border-color);
  display: flex;
  flex-direction: column;
`;

const AlertTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  padding: var(--size-gap-lg) 0;
`;

const AlertListWrapper = styled.ul`
  padding: 0 var(--size-gap-lg);
  width: 100%;
`;

const AlertList = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: var(--size-gap-sm);
  padding: var(--size-gap-md) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  border-top: 1px solid var(--color-border-color);

  &:first-child {
    border-top: 0;
  }
`;

const AlertPopup = ({ onClose, alerts }: AlertPopupProps) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <AlertPopupWrap>
        <AlertTitle>알림</AlertTitle>
        <AlertListWrapper>
          {alerts.map((alert) => (
            <AlertList key={alert.id}>
              <IconCategory status={alert.status} />
              <p>{alert.content}</p>
            </AlertList>
          ))}
        </AlertListWrapper>
      </AlertPopupWrap>
    </>
  );
};

export default AlertPopup;
