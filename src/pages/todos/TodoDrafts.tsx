import React, { useState } from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import TodoListItem from './components/TodoListItem';
import { DraftTodo } from '../../types/todo';
import { ShadowBoxStyles } from '../../components/common/ShadowBox';

export const dummyDrafts: DraftTodo[] = [
  {
    id: 1,
    text: '헬스장 등록하기',
    memo: '회사 근처 PT샵 비교',
    category: 'health',
    dueDate: '2025-08-20',
  },
  {
    id: 2,
    text: '팀 회의 안건 정리',
    category: 'work',
    // dueDate, memo 없는 경우도 있음
  },
  {
    id: 3,
    text: '부모님 선물 사기',
    memo: '추석 전까지',
    category: 'personal',
    dueDate: '2025-09-05',
  },
];

export const SortText = styled.p`
  text-align: right;
  color: var(--color-text-gray-300);
  font-size: var(--font-size-sm);
  margin-bottom: var(--size-gap-md);
`;

const TodoListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const StyledTodoListItem = styled(TodoListItem)`
  ${ShadowBoxStyles}
`;

const TodoDrafts = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  return (
    <InnerLayout bgColor="gray-light" innerPadding={false} withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">임시보관함</HeaderWithBack>
      <InnerLayout paddingTop={false}>
        <SortText>최근 등록순</SortText>
        <TodoListWrap>
          {dummyDrafts.map((item) => (
            <StyledTodoListItem
              key={item.id}
              id={item.id}
              text={item.text} // 리스트에 노출되는 건 이거 하나
              isOpen={openItemId === item.id}
              onOpen={() => setOpenItemId(item.id)}
              onClose={() => setOpenItemId(null)}
              showCheckbox={false}
              disableCheck={true}
            />
          ))}
        </TodoListWrap>
      </InnerLayout>
    </InnerLayout>
  );
};

export default TodoDrafts;
