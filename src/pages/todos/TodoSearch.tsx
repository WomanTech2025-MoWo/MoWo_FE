import React, { useState } from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import TodoListItem, { TodoListItemProps } from './components/TodoListItem';
import { ShadowBoxStyles } from '../../components/common/ShadowBox';
import { SortText } from './TodoDrafts';

export const dummySearchs: TodoListItemProps[] = [
  {
    id: 1,
    text: '헬스장 등록하기',
    category: 'health',
    todoDate: '2025-08-20',
    checked: false,
    isOpen: false, // 더미 데이터용 기본값
    onOpen: () => {}, // 더미용
    onClose: () => {}, // 더미용
  },
  {
    id: 2,
    text: '팀 회의 준비',
    category: 'work',
    todoDate: '2025-08-21',
    checked: true,
    isOpen: false, // 더미 데이터용 기본값
    onOpen: () => {}, // 더미용
    onClose: () => {}, // 더미용
  },
  {
    id: 3,
    text: '부모님 선물 사기',
    category: 'personal',
    todoDate: '2025-09-05',
    checked: false,
    isOpen: false, // 더미 데이터용 기본값
    onOpen: () => {}, // 더미용
    onClose: () => {}, // 더미용
  },
];

const TodoListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const StyledTodoListItem = styled(TodoListItem)`
  ${ShadowBoxStyles}
`;

const StyledSearchInput = styled.input`
  background-color: var(--color-background-gray-default);
  width: calc(100% - (var(--size-inner-padding) * 2));
  border-radius: var(--size-gap-xs);
  height: var(--size-height-md);
  padding-left: 40px;
`;

const TodoSearch = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  return (
    <InnerLayout bgColor="gray-light" innerPadding={false} withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">
        <StyledSearchInput type="text" name="search" />
      </HeaderWithBack>
      <InnerLayout paddingTop={false}>
        <SortText>최신순</SortText>
        <TodoListWrap>
          {dummySearchs.map((item) => (
            <StyledTodoListItem
              key={item.id}
              {...item}
              isOpen={openItemId === item.id}
              onOpen={() => setOpenItemId(item.id)}
              onClose={() => setOpenItemId(null)}
              showCheckbox={true}
            />
          ))}
        </TodoListWrap>
      </InnerLayout>
    </InnerLayout>
  );
};

export default TodoSearch;
