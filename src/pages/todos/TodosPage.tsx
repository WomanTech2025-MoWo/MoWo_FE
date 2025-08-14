import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';
import 'react-day-picker/dist/style.css';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const TodoWrap = styled(InnerLayout)`
  background-color: var(--color-basic-bg);
  min-height: 100vh;
`;

const TodosPage = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <TodoWrap>
      <TodoHeader />
      <div>
        <DayPicker locale={ko} navLayout="around" animate mode="single" selected={selected} onSelect={setSelected} showOutsideDays />
      </div>
      <div>
        <TodoList />
      </div>
      <GlobalNavigation />
    </TodoWrap>
  );
};

export default TodosPage;
