import React from 'react';
import styled from 'styled-components';
import IconCheckbox from '../../../components/icons/features/todos/IconCheckbox';
import IconMeatball from '../../icons/features/todos/IconMeatball';

type TodoListItemProps = {
  category?: 'health' | 'work' | 'personal';
  checked?: boolean;
};

const TodoListItemWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CustomCheckbox = styled.span``;

const TodoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--font-size-sm);
`;

const TodoListItem = ({ category, checked = false }: TodoListItemProps) => {
  return (
    <TodoListItemWrap>
      <li>
        <TodoLabel>
          <input type="checkbox" hidden defaultChecked={checked} />
          <TodoContent>
            <CustomCheckbox>
              <IconCheckbox status={category} width="18" />
            </CustomCheckbox>
            투두 내용
          </TodoContent>
          <button type="button">
            <IconMeatball width="14" />
          </button>
        </TodoLabel>
      </li>
    </TodoListItemWrap>
  );
};

export default TodoListItem;
