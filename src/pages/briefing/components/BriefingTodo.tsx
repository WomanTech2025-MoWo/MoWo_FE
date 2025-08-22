import React, { JSX, useState } from 'react';
import styled from 'styled-components';
import TodoListItem from '../../../pages/todos/components/TodoListItem';
import ShadowBox from '../../../components/common/ShadowBox';
import IconCategory from '../../../components/icons/features/todos/IconCategory';
import IconArrowUpDown from '../../../components/icons/features/todos/IconArrowUpDown';
import CircleBadge from '../../../components/common/CircleBadge';

const TodoWrap = styled(ShadowBox)`
  padding: 0;
`;

const CategoryBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size-height-lg);
  padding: 0 var(--size-gap-lg);
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-gap-xs);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
`;

const TodoListWrapper = styled.div<{ $isOpen: boolean }>`
  background-color: var(--color-background-gray-default);
  padding: 0 var(--size-gap-xxl);

  /* slide down 애니메이션 */
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: var(--transition);

  /* 열려있을 때만 padding 보이게 */
  padding-top: ${({ $isOpen }) => ($isOpen ? 'var(--size-gap-sm)' : '0')};
  padding-bottom: ${({ $isOpen }) => ($isOpen ? 'var(--size-gap-sm)' : '0')};
`;

const StyledCircleBadge = styled(CircleBadge)`
  & > div {
    width: var(--size-gap-md);
    height: var(--size-gap-md);
    line-height: var(--size-gap-md);
  }
`;

const TodoListItemWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-sm);
  padding: var(--size-gap-xxs) 0;
`;

const BriefingTodo = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const cateItems: {
    length: string | number;
    name: 'health' | 'work' | 'personal';
    label: string;
    icon: JSX.Element;
  }[] = [
    { name: 'health', label: '건강', icon: <IconCategory status="health" width="24" height="24" />, length: 2 },
    { name: 'work', label: '업무', icon: <IconCategory status="work" width="24" height="24" />, length: 2 },
    { name: 'personal', label: '개인', icon: <IconCategory status="personal" width="24" height="24" />, length: 2 },
  ];

  // 카테고리별 열림/닫힘 상태 저장
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (name: string) => {
    setOpenStates((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <TodoWrap>
      <ul>
        {cateItems.map((item, id) => {
          const isOpen = openStates[item.name] || false;

          return (
            <li key={id}>
              <CategoryBtn type="button" onClick={() => toggleCategory(item.name)}>
                <CategoryTitle>
                  {item.icon}
                  {item.label}
                  <StyledCircleBadge value={item.length} circleColor="var(--color-basic-red)" />
                </CategoryTitle>
                <IconArrowUpDown status={isOpen ? 'up' : 'down'} width="14" />
              </CategoryBtn>
              <TodoListWrapper $isOpen={isOpen}>
                <TodoListItemWrap>
                  {[
                    { id: 1, text: '산책하기', category: item.name, checked: false },
                    { id: 2, text: '건강검진 예약', category: item.name, checked: true },
                  ].map((todo) => (
                    <TodoListItem
                      key={todo.id}
                      {...todo}
                      isOpen={openItemId === todo.id}
                      onOpen={() => setOpenItemId(todo.id)}
                      onClose={() => setOpenItemId(null)}
                    />
                  ))}
                </TodoListItemWrap>
              </TodoListWrapper>
            </li>
          );
        })}
      </ul>
    </TodoWrap>
  );
};

export default BriefingTodo;
