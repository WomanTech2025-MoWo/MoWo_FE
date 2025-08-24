import React, { useMemo } from 'react';
import styled from 'styled-components';
import { SegmentedContainer, SegmentedList, SegmentedButton } from '../../../components/buttons/ui/SegmentedControlStyle';
import { CategoryList } from './TodoList';

interface TodoCateButtonProps {
  activeCategory: CategoryList;
  onCategoryClick: (name: CategoryList) => void;
}

const cateItems: { name: CategoryList; label: string }[] = [
  { name: 'HEALTH', label: '건강' },
  { name: 'WORK', label: '업무' },
  { name: 'PERSONAL', label: '개인' },
];

const TodoCateButton = ({ activeCategory, onCategoryClick }: TodoCateButtonProps) => {
  return (
    <SegmentedContainer>
      <SegmentedList>
        {cateItems.map((item) => {
          return (
            <li key={item.name}>
              <SegmentedButton onClick={() => onCategoryClick(item.name)} $active={activeCategory === item.name}>
                {item.label}
              </SegmentedButton>
            </li>
          );
        })}
      </SegmentedList>
    </SegmentedContainer>
  );
};

export default TodoCateButton;
