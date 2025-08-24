import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InnerLayout from '../../../layouts/InnerLayout';
import ShadowBox from '../../../components/common/ShadowBox';
import IconPlusCircle from '../../../components/icons/features/infos/IconPlusCircle';

const dummyTodos = [
  { id: 1, text: '임신확인서(산부인과 발급) 준비' },
  { id: 2, text: '주민등록초본 또는 등본 준비' },
  { id: 3, text: '신한/삼성/KB국민/우리/하나/BC 카드 중 본인 명의 카드 준비' },
  { id: 4, text: '온라인(서울맘케어) 또는 동주민센터 방문 신청' },
  { id: 5, text: '지원금(70만원) 바우처 수령' },
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
  line-height: var(--line-height-xs);
`;

const AddButton = styled.button``;

const TodoSuggestions = () => {
  const navigate = useNavigate();

  const handleAddClick = (todoText: string) => {
    // 프리라이팅 모드 페이지로 이동
    navigate(`/todos?prefill=${encodeURIComponent(todoText)}`);
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
