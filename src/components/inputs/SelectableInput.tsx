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
  height: 48px;
  line-height: 46px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.selected ? 'var(--color-gray-400)' : 'var(--color-gray-200)')};
  border-radius: 8px;
  text-align: center;
  color: ${(props) => (props.selected ? 'var(--color-gray-900)' : 'var(--color-gray-400)')};
  background-color: ${(props) => (props.selected ? 'var(--color-gray-200)' : 'transparent')};
  transition: all 0.2s ease;
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
