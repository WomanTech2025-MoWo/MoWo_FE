import styled, { css } from 'styled-components';
import BaseButton from './BaseButton';

export const PrimaryButton = styled(BaseButton)<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? 'var(--color-text-muted)' : 'var(--color-main-primary)')};
  color: var(--color-text-on-color);

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        background-color: var(--color-main-light-200);
      }
    `}
`;
