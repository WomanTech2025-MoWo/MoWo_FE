import React from 'react';
import styled from 'styled-components';
import InputField, { Wrap, InputWrapper, Label, StyledInput } from './InputField';
import InputIcon from './InputIcon';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { generateId } from '../../utils/generateId';

type InputWithButtonProps = React.ComponentProps<typeof InputField> & {
  buttonText?: string;
  onButtonClick?: () => void;
};

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-gap-xs);
`;

const CheckBtn = styled(PrimaryButton)`
  width: 95px;
  height: var(--size-height-md);
  margin: 0;
`;

const StyledInputFlex = styled(StyledInput)``;

const InputWithButton = ({ label, id, iconType, buttonText = '중복확인', onButtonClick, ...props }: InputWithButtonProps) => {
  const inputId = id ?? generateId();

  return (
    <Wrap>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputRow>
        <InputWrapper>
          <InputIcon type={iconType} />
          <StyledInputFlex id={inputId} {...props} />
        </InputWrapper>
        <CheckBtn type="button" onClick={onButtonClick}>
          {buttonText}
        </CheckBtn>
      </InputRow>
    </Wrap>
  );
};

export default InputWithButton;
