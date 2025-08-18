import React, { useState } from 'react';
import styled from 'styled-components';
import IconCheckbox from '../../../components/icons/features/todos/IconCheckbox';
import IconMeatball from '../../../components/icons/features/todos/IconMeatball';

type TodoListItemProps = {
  id: number;
  text: string;
  category?: 'health' | 'work' | 'personal';
  checked?: boolean;
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

const TodoListItem = ({ id, text, category, checked = false }: TodoListItemProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <TodoRow key={id}>
      <TodoContent onClick={() => setIsChecked((prev) => !prev)}>
        <IconCheckbox category={category} status={isChecked} />
        <span>{text}</span>
      </TodoContent>
      <button type="button">
        <IconMeatball width="14" />
      </button>
    </TodoRow>
  );
};

export default TodoListItem;
