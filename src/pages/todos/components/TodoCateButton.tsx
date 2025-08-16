import React from 'react';
import styled from 'styled-components';
import { SegmentedContainer, SegmentedList, SegmentedButton } from '../../../components/buttons/ui/SegmentedControlStyle';

type CategoryList = 'all' | 'health' | 'work' | 'personal';

interface TodoCateButtonProps {
  activeCategory: CategoryList;
  onCategoryClick: (name: CategoryList) => void;
}

const TodoCateButton = ({ activeCategory, onCategoryClick }: TodoCateButtonProps) => {
  const cateItems: { name: CategoryList; label: string }[] = [
    { name: 'health', label: '건강' },
    { name: 'work', label: '업무' },
    { name: 'personal', label: '개인' },
  ];

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
