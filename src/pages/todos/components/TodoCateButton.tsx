import React from 'react';
import styled from 'styled-components';

type CategoryList = 'all' | 'health' | 'work' | 'personal';

interface TodoCateButtonProps {
  activeCategory: CategoryList;
  onCategoryClick: (name: CategoryList) => void;
}

const TodoCateButtonWrap = styled.div`
  background-color: var(--color-gray-200);
  border-radius: var(--size-border-radius-md);
  padding: 4px;
  margin: 16px auto;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TodoCateButtonWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    flex: 1;
  }
`;

const CategoryButton = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? 'var(--color-basic-white)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'inherit' : 'var(--color-gray-600)')};
  text-align: center;
  border-radius: 6px;
  font-weight: var(--font-weight-medium);
  width: 100%;
  height: 36px;
  box-shadow: ${({ $active }) => ($active ? 'var(--box-shadow-default)' : 'none')};

  &:hover {
    background: var(--color-basic-white);
    color: inherit;
    box-shadow: var(--box-shadow-default);
  }
`;

const TodoCateButton = ({ activeCategory, onCategoryClick }: TodoCateButtonProps) => {
  const cateItems: { name: CategoryList; label: string }[] = [
    { name: 'health', label: '건강' },
    { name: 'work', label: '업무' },
    { name: 'personal', label: '개인' },
  ];

  return (
    <TodoCateButtonWrap>
      <TodoCateButtonWrapper>
        {cateItems.map((item) => {
          return (
            <li key={item.name}>
              <CategoryButton onClick={() => onCategoryClick(item.name)} $active={activeCategory === item.name}>
                {item.label}
              </CategoryButton>
            </li>
          );
        })}
      </TodoCateButtonWrapper>
    </TodoCateButtonWrap>
  );
};

export default TodoCateButton;
