import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { WithChildren } from '../../types/common';

type PrimaryButtonProps =
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
  background-color: ${({ $disabled }) => ($disabled ? 'var(--color-text-muted)' : 'var(--color-main-primary)')};
  border-radius: 8px;
  font-weight: 700;
  color: var(--color-text-on-color);
  margin: 5px 0;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        background-color: var(--color-main-dark);
      }
    `}
`;

const PrimaryBtn = styled.button<{ $disabled?: boolean }>`
  ${baseStyles}
`;

const PrimaryLink = styled(Link)<{ $disabled?: boolean }>`
  ${baseStyles}
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

const PrimaryButton = ({ as: Component = 'button', children, ...props }: PrimaryButtonProps) => {
  if (Component === 'link') {
    const { ...restProps } = props as LinkProps & WithChildren;
    return <PrimaryLink {...restProps}>{children}</PrimaryLink>;
  }

  const { type = 'button', ...restProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & WithChildren;
  return (
    <PrimaryBtn type={type} {...restProps}>
      {children}
    </PrimaryBtn>
  );
};

export default PrimaryButton;
