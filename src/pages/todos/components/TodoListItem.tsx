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

const CustomCheckbox = styled.div``;

const TodoRow = styled.div`
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
    <li key={id}>
      <TodoRow onClick={() => setIsChecked((prev) => !prev)}>
        <TodoContent>
          <CustomCheckbox>
            <IconCheckbox category={category} status={isChecked} />
          </CustomCheckbox>
          <span>{text}</span>
        </TodoContent>
        <button type="button">
          <IconMeatball width="14" />
        </button>
      </TodoRow>
    </li>
  );
};

export default TodoListItem;
