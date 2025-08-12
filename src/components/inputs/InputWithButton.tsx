import React from 'react';
import styled from 'styled-components';
import InputField, { Wrap, Label, StyledInput } from './InputField';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { generateId } from '../../utils/generateId';

type InputWithButtonProps = React.ComponentProps<typeof InputField> & {
  buttonText?: string;
  onButtonClick?: () => void;
};

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBtn = styled(PrimaryButton)`
  width: 86px;
  height: 45px;
`;

const StyledInputFlex = styled(StyledInput)`
  width: auto;
  flex-grow: 1;
`;

const InputWithButton = ({ label, id, buttonText = '중복확인', onButtonClick, ...props }: InputWithButtonProps) => {
  const inputId = id ?? generateId();

  return (
    <Wrap>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputRow>
        <StyledInputFlex id={inputId} {...props} />
        <CheckBtn type="button" onClick={onButtonClick}>
          {buttonText}
        </CheckBtn>
      </InputRow>
    </Wrap>
  );
};

export default InputWithButton;
