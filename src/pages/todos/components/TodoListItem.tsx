import React, { useState } from 'react';
import styled from 'styled-components';
import IconCheckbox from '../../../components/icons/features/todos/IconCheckbox';
import IconMeatball from '../../../components/icons/features/todos/IconMeatball';
import TodoEditDeleteButtons from '../../../components/common/TodoEditDeleteButtons';
import { CategoryList } from './TodoList';

export type TodoListItemProps = {
  id: number;
  todoTitle: string;
  category?: CategoryList;
  checked?: boolean;
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  showCheckbox?: boolean; // 기본 true
  disableCheck?: boolean; // 기본 false
  className?: string;
  todoDate?: string;
};

const TodoRow = styled.li``;

const TodoContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-gap-sm);
`;

const TodoDate = styled.p`
  padding-left: calc(20px + var(--size-gap-sm));
  font-size: var(--font-size-sm);
  color: var(--color-text-gray-300);
  margin-top: var(--size-gap-xs);
`;

const TodoListItem = ({
  id,
  todoTitle,
  category,
  checked = false,
  isOpen,
  onOpen,
  onClose,
  showCheckbox = true,
  disableCheck = false,
  className,
  todoDate,
}: TodoListItemProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const formatTodoDate = todoDate;

  const handleCheck = () => {
    if (!disableCheck) {
      setIsChecked((prev) => !prev);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth는 0~11
    const day = date.getDate();

    return `${year}년 ${month.toString().padStart(2, '0')}월 ${day.toString().padStart(2, '0')}일`;
  };

  return (
    <TodoRow key={id} className={className}>
      <TodoContentWrapper>
        <TodoContent onClick={handleCheck}>
          {showCheckbox && <IconCheckbox category={category} status={isChecked} />}
          <span>{todoTitle}</span>
        </TodoContent>
        <button type="button" onClick={onOpen}>
          <IconMeatball width="14" />
        </button>
      </TodoContentWrapper>
      {todoDate && <TodoDate>{formatDate(todoDate)}</TodoDate>} {/* 검색페이지용 표시 */}
      {isOpen && <TodoEditDeleteButtons id={id} onClose={onClose} />}
    </TodoRow>
  );
};

// React.memo로 성능 최적화
export default React.memo(TodoListItem, (prevProps, nextProps) => {
  // props 변경 감지를 위한 커스텀 비교 함수
  return (
    prevProps.id === nextProps.id &&
    prevProps.todoTitle === nextProps.todoTitle &&
    prevProps.category === nextProps.category &&
    prevProps.checked === nextProps.checked &&
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.showCheckbox === nextProps.showCheckbox &&
    prevProps.disableCheck === nextProps.disableCheck &&
    prevProps.todoDate === nextProps.todoDate
  );
});
