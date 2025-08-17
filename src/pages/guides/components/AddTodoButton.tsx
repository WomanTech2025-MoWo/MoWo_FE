import React from 'react';
import styled from 'styled-components';
import IconPlusCircleFill from '../../../components/icons/features/infos/IconPlusCircleFill';
import { FixedCenter } from '../../../layouts/FixedCenterContainer';

const AddTodoWrap = styled(FixedCenter).attrs({ position: 'bottom', zIndex: 9 })`
  height: var(--size-add-todo);
  gap: var(--size-gap-xxs);
  background-color: var(--color-secondary-primary);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-text-on-color);
  border-top-left-radius: var(--size-border-radius-xl);
  border-top-right-radius: var(--size-border-radius-xl);
  box-shadow: var(--box-shadow-default);
  align-items: start;
`;

const AddTodoBtn = styled.button`
  display: flex;
  gap: var(--size-gap-xxs);
  width: 100%;
  justify-content: center;
  padding: calc((var(--size-add-todo) - var(--size-g-nav-height) - var(--font-size-md)) / 2) 0;
`;

const AddTodoButton = () => {
  return (
    <AddTodoWrap>
      <AddTodoBtn type="button">
        <IconPlusCircleFill />내 투두에 추가
      </AddTodoBtn>
    </AddTodoWrap>
  );
};

export default AddTodoButton;
