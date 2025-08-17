import React from 'react';
import styled from 'styled-components';
import { generateId } from '../../utils/generateId';
import { Label } from './InputField';

type SelectableInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id?: string;
  type: 'radio' | 'checkbox';
  inputWidth?: string;
  selectedValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const StyledSelectLabel = styled(Label)<{ selected: boolean }>`
  height: var(--size-height-lg);
  line-height: calc(var(--size-height-lg) - 2px);
  cursor: pointer;
  border: 1px solid ${(props) => (props.selected ? 'var(--color-main-primary)' : 'var(--color-border-color)')};
  border-radius: var(--size-border-radius-md);
  font-weight: var(--font-weight-semi-bold);
  text-align: center;
  color: ${(props) => (props.selected ? 'var(--color-main-dark)' : 'var(--color-gray-600)')};
  background-color: ${(props) => (props.selected ? 'var(--color-main-light-400)' : 'var(--color-gray-100)')};
  transition: var(--transition);
  margin: 0;
`;

const StyledSelectInput = styled.input`
  display: none;
`;

const SelectableInput = ({ label, id, type, value, checked, onChange, ...props }: SelectableInputProps) => {
  const inputId = id ?? generateId();

  return (
    <>
      <StyledSelectInput id={inputId} type={type} value={value} checked={checked} onChange={onChange} {...props} />
      <StyledSelectLabel htmlFor={inputId} selected={checked ?? false}>
        {label}
      </StyledSelectLabel>
    </>
  );
};

export default SelectableInput;
