import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InnerLayout from '../../../layouts/InnerLayout';
import ShadowBox from '../../../components/common/ShadowBox';
import IconPlusCircle from '../../../components/icons/features/infos/IconPlusCircle';

const dummyTodos = [
  { id: 1, text: '사업 참여 의료기관 확인' },
  { id: 2, text: 'e보건소 사전신청 및 검사의뢰서 발급' },
  { id: 3, text: '의료기관에서 검사' },
  { id: 4, text: 'e보건소로 검사비 청구' },
  { id: 5, text: '임부복 구매' },
];

const SuggestionsWrap = styled(InnerLayout)``;

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const Item = styled.li``;

const ItemBox = styled(ShadowBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--size-gap-md) var(--size-gap-lg);
  font-weight: var(--font-weight-medium);
`;

const AddButton = styled.button``;

const TodoSuggestions = () => {
  const navigate = useNavigate();

  const handleAddClick = (todoText: string) => {
    // 프리라이팅 모드 페이지로 이동
    navigate('/todos', { state: { mode: 'freewriting', presetText: todoText } });
  };

  return (
    <SuggestionsWrap>
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
    </SuggestionsWrap>
  );
};

export default TodoSuggestions;
