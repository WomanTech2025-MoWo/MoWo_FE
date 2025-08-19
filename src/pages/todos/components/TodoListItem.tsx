import React, { useState } from 'react';
import styled from 'styled-components';
import IconCheckbox from '../../../components/icons/features/todos/IconCheckbox';
import IconMeatball from '../../../components/icons/features/todos/IconMeatball';
import TodoEditDeleteButtons from '../../../components/common/TodoEditDeleteButtons';

type TodoListItemProps = {
  id: number;
  text: string;
  category?: 'health' | 'work' | 'personal' | undefined;
  checked?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  showCheckbox?: boolean; // 기본 true
  disableCheck?: boolean; // 기본 false
  className?: string;
};

const TodoRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-gap-sm);
`;

const TodoListItem = ({
  id,
  text,
  category,
  checked = false,
  isOpen,
  onOpen,
  onClose,
  showCheckbox = true,
  disableCheck = false,
  className,
}: TodoListItemProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    if (!disableCheck) {
      setIsChecked((prev) => !prev);
    }
  };

  return (
    <TodoRow key={id} className={className}>
      <TodoContent onClick={handleCheck}>
        {showCheckbox && <IconCheckbox category={category} status={isChecked} />}
        <span>{text}</span>
      </TodoContent>
      <button type="button" onClick={onOpen}>
        <IconMeatball width="14" />
      </button>
      {isOpen && <TodoEditDeleteButtons id={id} onClose={onClose} />}
    </TodoRow>
  );
};

export default TodoListItem;
