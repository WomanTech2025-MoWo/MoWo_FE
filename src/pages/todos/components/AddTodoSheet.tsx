import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop, { BackdropProps } from '../../../components/common/Backdrop';
import { BottomSheet } from '../../../components/common/BottomSheet';
import IconCalToday from '../../../components/icons/features/todos/IconCalToday';
import IconPin from '../../../components/icons/features/todos/IconPin';
import IconAlarm from '../../../components/icons/common/IconAlarm';
import IconX from '../../../components/icons/common/IconX';
import IconArrowTop from '../../../components/icons/common/IconArrowTop';
import TodoDatePicker from './TodoDatePicker';

const AddTodoWrap = styled(BottomSheet)`
  height: 250px;
  padding-top: var(--size-inner-padding);
`;

const CategoryBtnWrapper = styled.div`
  display: flex;
  gap: var(--size-gap-xxs);
`;

const CategoryButton = styled.button<{ selected?: boolean; $category: '건강' | '업무' | '개인' }>`
  width: var(--size-height-lg);
  height: var(--size-height-xxs);
  border-radius: var(--size-height-xxs);
  border: 1px solid var(--color-border-color-dark);
  color: ${({ selected }) => (selected ? 'var(--color-text-on-color)' : 'var(--color-text-gray-400)')};

  background-color: ${({ selected, $category }) =>
    selected
      ? $category === '건강'
        ? 'var(--color-category-health)'
        : $category === '업무'
        ? 'var(--color-category-work)'
        : 'var(--color-category-personal)'
      : 'var(--color-background-white)'};
`;

const StyledIconPin = styled(IconPin)<{ $pinned: boolean }>`
  path {
    fill: ${({ $pinned }) => ($pinned ? 'var(--color-main-primary)' : 'var(--color-gray-500)')};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  font-weight: var(--font-weight-medium);
  height: var(--size-height-lg);
  border: 0;
  margin-top: var(--size-gap-sm);
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--size-gap-md);
  padding-top: var(--size-gap-md);
  border-top: 1px solid var(--color-border-color);
`;

const CloseBtn = styled.button`
  position: absolute;
  right: var(--size-gap-lg);
  top: var(--size-gap-lg);
`;

const TodoInfoBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-gap-lg);
`;

const TodoInfoBtn = styled.button`
  padding: var(--size-gap-xs);
`;

const TodoSubmitBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-gap-lg);
`;

const DraftBtn = styled.button`
  color: var(--color-text-gray-300);
`;

const AddTodoBtn = styled.button`
  background-color: var(--color-main-primary);
  width: var(--size-height-sm);
  height: var(--size-height-sm);
  border-radius: 50%;
  box-shadow: var(--box-shadow-default);
`;

const AddTodoSheet = ({ onClick }: BackdropProps) => {
  const [text, setText] = useState('');
  const [memo, setMemo] = useState('');
  const [category, setCategory] = useState<'건강' | '업무' | '개인' | null>(null);
  const [dueDate, setDueDate] = useState<string>('');
  const [isPinned, setIsPinned] = useState(false);
  const [alarmTime, setAlarmTime] = useState<string>('');
  const [isDateSheetOpen, setIsDateSheetOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 등록 API 호출
    console.log('등록 데이터', { text, memo, category, dueDate, isPinned, alarmTime });
  };

  const handleSaveDraft = () => {
    // 임시보관 API 호출
    console.log('임시보관 데이터', { text, memo, category, dueDate, isPinned, alarmTime });
  };

  return (
    <>
      <Backdrop onClick={onClick} />
      <AddTodoWrap>
        <form>
          <div>
            <StyledInput type="text" placeholder="할 일" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div>
            <StyledTextarea placeholder="메모" value={memo} onChange={(e) => setMemo(e.target.value)}></StyledTextarea>
          </div>
          <CategoryBtnWrapper>
            {(['건강', '업무', '개인'] as const).map((cat) => (
              <CategoryButton key={cat} type="button" $category={cat} selected={category === cat} onClick={() => setCategory(cat)}>
                {cat}
              </CategoryButton>
            ))}
          </CategoryBtnWrapper>
          <BtnWrapper>
            <TodoInfoBtnWrapper>
              <TodoInfoBtn type="button" onClick={() => setIsDateSheetOpen(true)}>
                <IconCalToday />
              </TodoInfoBtn>
              <TodoInfoBtn type="button" onClick={() => setIsPinned((prev) => !prev)}>
                <StyledIconPin $pinned={isPinned} />
              </TodoInfoBtn>
              <TodoInfoBtn
                type="button"
                onClick={() => {
                  /* 알람 시트 열기 */
                }}>
                <IconAlarm />
              </TodoInfoBtn>
            </TodoInfoBtnWrapper>
            <TodoSubmitBtnWrapper>
              <DraftBtn type="button" onClick={handleSaveDraft}>
                임시보관
              </DraftBtn>
              <AddTodoBtn type="submit">
                <IconArrowTop />
              </AddTodoBtn>
            </TodoSubmitBtnWrapper>
          </BtnWrapper>
        </form>
        <CloseBtn type="button" onClick={onClick}>
          <IconX />
        </CloseBtn>
      </AddTodoWrap>
      {isDateSheetOpen && (
        <TodoDatePicker
          onClick={() => setIsDateSheetOpen(false)}
          onConfirm={(date) => {
            if (date) {
              setDueDate(date.toISOString());
            }
          }}
        />
      )}
    </>
  );
};

export default AddTodoSheet;
