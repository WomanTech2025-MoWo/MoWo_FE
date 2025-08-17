import styled, { css } from 'styled-components';
import BaseButton from './BaseButton';

export const PrimaryButton = styled(BaseButton)`
  background-color: var(--color-main-primary);
  color: var(--color-text-on-color);

  &:hover {
    background-color: var(--color-main-dark);
  }
`;
