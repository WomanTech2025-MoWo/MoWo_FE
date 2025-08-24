import React, { useState } from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import TodoListItem, { TodoListItemProps } from './components/TodoListItem';
import { ShadowBoxStyles } from '../../components/common/ShadowBox';
import { SortText } from './TodoDrafts';
import IconDeleteCircle from '../../components/icons/inputs/IconDeleteCircle';

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

const DeleteBtn = styled.button`
  position: absolute;
  right: var(--size-inner-padding);
  top: 50%;
  transform: translateY(-50%);
  width: var(--size-height-md);
  height: var(--size-height-md);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoSearch = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState('');

  return (
    <InnerLayout bgColor="gray-light" innerPadding={false} withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">
        <StyledSearchInput type="text" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        {searchText && (
          <DeleteBtn type="button" onClick={() => setSearchText('')}>
            <IconDeleteCircle />
          </DeleteBtn>
        )}
      </HeaderWithBack>
      <InnerLayout paddingTop={false}>
        <SortText>최신순</SortText>
        <TodoListWrap>
          {/* {dummySearchs.map((item) => (
            <StyledTodoListItem
              key={item.id}
              {...item}
              isOpen={openItemId === item.id}
              onOpen={() => setOpenItemId(item.id)}
              onClose={() => setOpenItemId(null)}
              showCheckbox={true}
            />
          ))} */}
        </TodoListWrap>
      </InnerLayout>
    </InnerLayout>
  );
};

export default TodoSearch;
