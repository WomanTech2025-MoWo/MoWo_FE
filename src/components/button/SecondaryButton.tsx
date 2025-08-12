import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { WithChildren } from '../../types/common';

type SecondaryButtonProps =
  | (WithChildren &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button';
        type?: 'button' | 'submit' | 'reset';
      })
  | (WithChildren &
      LinkProps & {
        as: 'link';
      });

const baseStyles = css<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: ${({ $disabled }) => ($disabled ? 'var(--color-text-muted)' : 'var(--color-gray-200)')};
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: inherit;
  margin: 5px 0;

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        background-color: var(--color-gray-300);
      }
    `}
`;

const SecondaryBtn = styled.button<{ $disabled?: boolean }>`
  ${baseStyles}
`;

const SecondaryLink = styled(Link)<{ $disabled?: boolean }>`
  ${baseStyles}
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

const SecondaryButton = ({ as: Component = 'button', children, ...props }: SecondaryButtonProps) => {
  if (Component === 'link') {
    const { ...restProps } = props as LinkProps & WithChildren;
    return <SecondaryLink {...restProps}>{children}</SecondaryLink>;
  }

  const { type = 'button', ...restProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & WithChildren;
  return (
    <SecondaryBtn type={type} {...restProps}>
      {children}
    </SecondaryBtn>
  );
};

export default SecondaryButton;
