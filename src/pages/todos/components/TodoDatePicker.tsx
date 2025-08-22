import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop, { BackdropProps } from '../../../components/common/Backdrop';
import { BottomSheet } from '../../../components/common/BottomSheet';
import Grabber from '../../../components/common/Grabber';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import Calendar from '../../../components/common/Calendar';
import dayjs from 'dayjs';

type TodoDatePickerProps = BackdropProps & {
  onConfirm: (date?: Date) => void;
};

const TodoDateWrap = styled(BottomSheet)`
  height: 530px;
`;

const ContentsWrapper = styled.div`
  width: 100%;
`;

const DateBtn = styled.button<{ $selected?: boolean }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $selected }) => ($selected ? 'var(--color-main-primary)' : 'var(--color-border-color-dark)')};
  border-radius: var(--size-border-radius-md);
  flex: 1;
  height: var(--size-height-xxs);
  line-height: calc(var(--size-height-xxs) - 2px);
  color: ${({ $selected }) => ($selected ? 'var(--color-main-dark)' : 'var(--color-text-gray-400)')};
  background-color: ${({ $selected }) => ($selected ? 'var(--color-main-light-400)' : 'var(--color-background-white)')};
`;

const DateBtnWrapper = styled(ContentsWrapper)`
  display: flex;
  gap: var(--size-gap-xs);
`;

const TodoDatePicker = ({ onClick, onConfirm }: TodoDatePickerProps) => {
  // 오늘/내일/다음주 계산
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const [selected, setSelected] = useState<Date | undefined>(today);

  const quickSelect = (date: Date) => {
    setSelected(date);
  };

  return (
    <>
      <Backdrop onClick={onClick} />
      <TodoDateWrap>
        <Grabber />
        <DateBtnWrapper>
          <DateBtn type="button" onClick={() => quickSelect(today)} $selected={selected ? dayjs(selected).isSame(today, 'day') : false}>
            오늘({dayjs(today).format('D일')})
          </DateBtn>
          <DateBtn type="button" onClick={() => quickSelect(tomorrow)} $selected={selected ? dayjs(selected).isSame(tomorrow, 'day') : false}>
            내일({dayjs(tomorrow).format('D일')})
          </DateBtn>
          <DateBtn type="button" onClick={() => quickSelect(nextWeek)} $selected={selected ? dayjs(selected).isSame(nextWeek, 'day') : false}>
            다음주({dayjs(nextWeek).format('D일')})
          </DateBtn>
        </DateBtnWrapper>
        <ContentsWrapper>
          <Calendar selected={selected} onSelect={setSelected} fixedMonthView={true} />
        </ContentsWrapper>
        <ContentsWrapper>
          <PrimaryButton
            onClick={() => {
              onConfirm(selected);
              onClick?.();
            }}>
            확인
          </PrimaryButton>
        </ContentsWrapper>
      </TodoDateWrap>
    </>
  );
};

export default TodoDatePicker;
