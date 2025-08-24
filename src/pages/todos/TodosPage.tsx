import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { FixedCenter } from '../../layouts/FixedCenterContainer';
import IconAdd from '../../components/icons/common/IconAdd';
import Calendar from '../../components/common/Calendar';
import AddTodoSheet from './components/AddTodoSheet';
import { useLocation } from 'react-router-dom';
import { TodoListItemProps } from './components/TodoListItem';

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
  position: relative;
`;

const TodosPage = () => {
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [prefillText, setPrefillText] = useState('');
  const [todos, setTodos] = useState<TodoListItemProps[]>([]);

  const location = useLocation();

  // 쿼리 파라미터에서 prefill 값 가져오기
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prefill = params.get('prefill');
    if (prefill) {
      setPrefillText(prefill);
      setIsAddSheetOpen(true); // 바로 시트 열기
    }
  }, [location.search]);

  return (
    <TodoWrap bgColor="gray-light">
      <TodoHeader />
      <CalendarWrapper>
        <Calendar selected={selectedDate} onSelect={setSelectedDate} viewMode={viewMode} />
      </CalendarWrapper>
      <div>
        <TodoList selectedDate={selectedDate} todos={todos} />
      </div>
      <AddTodoBtnWrapper>
        <AddTodoBtn type="button" onClick={() => setIsAddSheetOpen(true)}>
          <IconAdd />
        </AddTodoBtn>
      </AddTodoBtnWrapper>
      {isAddSheetOpen && (
        <AddTodoSheet
          selectedDate={selectedDate}
          onClick={() => setIsAddSheetOpen(false)}
          initialText={prefillText}
          onTodoAdded={(newTodo) => setTodos((prev) => [...prev, newTodo])}
        />
      )}
      <GlobalNavigation />
    </TodoWrap>
  );
};

export default TodosPage;
