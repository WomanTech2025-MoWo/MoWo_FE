import React from 'react';
import styled from 'styled-components';
import { generateId } from '../../utils/generateId';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
  inputWidth?: string;
};

export const Wrap = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: var(--font-weight-medium);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding: 8px 12px;
`;

const InputField = ({ label, id, ...props }: InputFieldProps) => {
  const inputId = id ?? generateId();

  return (
    <Wrap>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput id={inputId} {...props} />
    </Wrap>
  );
};

export default InputField;
