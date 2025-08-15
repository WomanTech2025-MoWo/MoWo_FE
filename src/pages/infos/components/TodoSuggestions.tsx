import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InnerLayout from '../../../layouts/InnerLayout';
import ShadowBox from '../../../components/common/ShadowBox';
import IconPlusCircle from '../../../components/icons/features/infos/IconPlusCircle';

const dummyTodos = [
  { id: 1, text: '청년 지원금 신청하기' },
  { id: 2, text: '정책 관련 자료 읽기' },
  { id: 3, text: '필요 서류 준비하기' },
];

const TodoSuggestionsWrap = styled.div``;

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Item = styled.li``;

const ItemBox = styled(ShadowBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddButton = styled.button``;

const TodoSuggestions = () => {
  const navigate = useNavigate();

  const handleAddClick = (todoText: string) => {
    // 프리라이팅 모드 페이지로 이동
    navigate('/todos', { state: { mode: 'freewriting', presetText: todoText } });
  };

  return (
    <TodoSuggestionsWrap>
      <InnerLayout>
        <ItemWrapper>
          {dummyTodos.map((todo) => (
            <Item key={todo.id}>
              <ItemBox>
                {todo.text}
                <AddButton onClick={() => handleAddClick(todo.text)}>
                  <IconPlusCircle />
                </AddButton>
              </ItemBox>
            </Item>
          ))}
        </ItemWrapper>
      </InnerLayout>
    </TodoSuggestionsWrap>
  );
};

export default TodoSuggestions;
