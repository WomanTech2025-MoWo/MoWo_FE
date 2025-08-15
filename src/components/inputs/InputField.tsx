import React from 'react';
import styled from 'styled-components';
import InputIcon, { InputIconType } from './InputIcon';
import { generateId } from '../../utils/generateId';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
  inputWidth?: string;
  iconType?: InputIconType;
};

export const Wrap = styled.div`
  margin-bottom: var(--size-gap-md);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: var(--size-gap-xs);
  font-weight: var(--font-weight-medium);
`;

export const InputWrapper = styled.div`
  width: auto;
  height: var(--size-height-md);
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: var(--color-background-white);
  border: 1px solid var(--color-border-color);
  border-radius: var(--size-border-radius-md);
  padding-left: var(--size-gap-md);
  overflow: hidden;

  &:focus-within {
    border-color: var(--color-main-primary);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0 var(--size-gap-md) 0 var(--size-gap-sm);
`;

const InputField = ({ label, id, iconType, ...props }: InputFieldProps) => {
  const inputId = id ?? generateId();

  return (
    <Wrap>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputWrapper>
        <InputIcon type={iconType} />
        <StyledInput id={inputId} {...props} />
      </InputWrapper>
    </Wrap>
  );
};

export default InputField;
