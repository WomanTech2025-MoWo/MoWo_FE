import React from 'react';
import styled from 'styled-components';

const AddTodoWrap = styled.button`
  width: 100%;
  height: 140px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 16px;
  background-color: var(--color-secondary-primary);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-on-color);
  border-top-left-radius: var(--size-border-radius-xl);
  border-top-right-radius: var(--size-border-radius-xl);
  box-shadow: var(--box-shadow-default);
  z-index: 9;
`;

const AddTodoButton = () => {
  return <AddTodoWrap type="button">내 투두에 추가</AddTodoWrap>;
};

export default AddTodoButton;
