import styled, { css } from 'styled-components';
import BaseButton from './BaseButton';

export const SecondaryButton = styled(BaseButton)`
  background-color: var(--color-main-light-100);
  color: var(--color-text-on-color);

  &:hover {
    background-color: var(--color-main-primary);
  }
`;
