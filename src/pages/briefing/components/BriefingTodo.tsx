import React, { JSX } from 'react';
import styled from 'styled-components';
import TodoListItem from '../../../components/features/todos/TodoListItem';

import IconCategory from '../../../components/icons/features/todos/IconCategory';
import IconArrowUpDown from '../../../components/icons/features/todos/IconArrowUpDown';

const TodoWrap = styled.div`
  background-color: var(--color-basic-white);
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  overflow: hidden;
`;

const TodoCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 var(--size-layout-padding);
`;

const CategoryTitle = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-weight: var(--font-weight-medium);
`;

const TodoTotal = styled.span`
  border-radius: 50%;
  background-color: var(--color-basic-red);
  color: var(--color-text-on-color);
  font-size: var(--font-size-xs);
  padding: 2px 4px 2px 5px;
`;

const TodoListWrapper = styled.div`
  background-color: var(--color-gray-300);
  padding: var(--size-layout-padding) 30px;
`;

const BriefingTodo = () => {
  const cateItems: { name: 'health' | 'work' | 'personal'; label: string; icon: JSX.Element }[] = [
    { name: 'health', label: '건강', icon: <IconCategory status="health" /> },
    { name: 'work', label: '업무', icon: <IconCategory status="work" /> },
    { name: 'personal', label: '개인', icon: <IconCategory status="personal" /> },
  ];

  return (
    <TodoWrap>
      <ul>
        {cateItems.map((item, id) => {
          return (
            <li key={id}>
              <TodoCategory>
                <CategoryTitle>
                  {item.icon}
                  {item.label}
                  <TodoTotal>0</TodoTotal>
                </CategoryTitle>
                <button type="button">
                  <IconArrowUpDown status="down" width="14" />
                </button>
              </TodoCategory>
              {/* <TodoListWrapper>
                <TodoListItem category={item.name} />
              </TodoListWrapper> */}
            </li>
          );
        })}
      </ul>
    </TodoWrap>
  );
};

export default BriefingTodo;
