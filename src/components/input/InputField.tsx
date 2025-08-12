import React from 'react';
import styled from 'styled-components';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
};

const Wrap = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding: 8px 12px;
`;

const InputField = ({ label, id, ...inputProps }: InputFieldProps) => {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <Wrap>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput id={inputId} {...inputProps} />
    </Wrap>
  );
};

export default InputField;
