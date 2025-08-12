import styled, { css } from 'styled-components';
import BaseButton from './BaseButton';

export const SecondaryButton = styled(BaseButton)<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? 'var(--color-text-muted)' : 'var(--color-gray-200)')};

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        background-color: var(--color-gray-300);
      }
    `}
`;
