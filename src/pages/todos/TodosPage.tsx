import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { FixedCenter } from '../../layouts/FixedCenterContainer';
import IconAdd from '../../components/icons/common/IconAdd';
import Calendar from '../../components/common/Calendar';

const TodoWrap = styled(InnerLayout)`
  padding-bottom: calc(var(--size-inner-padding-4x) + var(--size-inner-padding));
`;

const AddTodoBtnWrapper = styled(FixedCenter)`
  bottom: var(--size-g-nav-height);
  z-index: 9;
`;

const AddTodoBtn = styled.button`
  width: var(--size-height-xl);
  height: var(--size-height-xl);
  border-radius: 50%;
  background-color: var(--color-main-primary);
  position: absolute;
  right: var(--size-inner-padding);
  bottom: var(--size-inner-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow-default);
`;

const CalendarWrapper = styled.div`
  margin: var(--size-gap-xl) 0;
`;

const TodosPage = () => {
  return (
    <TodoWrap bgColor="gray-light">
      <TodoHeader />
      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>
      <div>
        <TodoList />
      </div>
      <AddTodoBtnWrapper>
        <AddTodoBtn>
          <IconAdd />
        </AddTodoBtn>
      </AddTodoBtnWrapper>
      <GlobalNavigation />
    </TodoWrap>
  );
};

export default TodosPage;
