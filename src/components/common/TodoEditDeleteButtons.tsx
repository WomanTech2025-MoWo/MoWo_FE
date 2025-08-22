import React from 'react';
import styled from 'styled-components';
import IconPen from '../icons/features/todos/IconPen';
import IconTrash from '../icons/features/todos/IconTrash';
import Backdrop, { BackdropProps } from './Backdrop';
import { NormalButton } from '../buttons/NormalButton';
import Grabber from './Grabber';
import { BottomSheet } from './BottomSheet';

interface TodoEditDeleteButtonsProps extends BackdropProps {
  id: number;
  onClose?: () => void;
}

const TodoEditDeleteWrap = styled(BottomSheet)`
  height: 240px;
`;

const ModifyBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size-gap-sm);
  width: 100%;
`;

const ModifyNormalButton = styled(NormalButton)`
  flex: 1;
  box-shadow: none;
  height: var(--size-height-xxl);
  flex-direction: column;
  gap: var(--size-gap-sm);
`;

const CancleBtnWrap = styled.div`
  width: 100%;
`;

const TodoEditDeleteButtons = ({ id, onClose }: TodoEditDeleteButtonsProps) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <TodoEditDeleteWrap id={id.toString()}>
        <Grabber />
        <ModifyBtnWrap>
          <ModifyNormalButton type="button">
            <IconPen />
            수정
          </ModifyNormalButton>
          <ModifyNormalButton type="button">
            <IconTrash />
            삭제
          </ModifyNormalButton>
        </ModifyBtnWrap>
        <CancleBtnWrap>
          <NormalButton type="button" onClick={onClose}>
            취소
          </NormalButton>
        </CancleBtnWrap>
      </TodoEditDeleteWrap>
    </>
  );
};

export default TodoEditDeleteButtons;
