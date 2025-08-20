import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop, { BackdropProps } from '../../../components/common/Backdrop';
import { BottomSheet } from '../../../components/common/BottomSheet';
import Grabber from '../../../components/common/Grabber';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import Calendar from '../../../components/common/Calendar';
import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';

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
          <DateBtn type="button" onClick={() => quickSelect(today)} $selected={selected ? isSameDay(selected, today) : false}>
            오늘({format(today, 'd일', { locale: ko })})
          </DateBtn>
          <DateBtn type="button" onClick={() => quickSelect(tomorrow)} $selected={selected ? isSameDay(selected, tomorrow) : false}>
            내일({format(tomorrow, 'd일', { locale: ko })})
          </DateBtn>
          <DateBtn type="button" onClick={() => quickSelect(nextWeek)} $selected={selected ? isSameDay(selected, nextWeek) : false}>
            다음주({format(nextWeek, 'd일', { locale: ko })})
          </DateBtn>
        </DateBtnWrapper>
        <ContentsWrapper>
          <Calendar selected={selected} onSelect={setSelected} />
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
