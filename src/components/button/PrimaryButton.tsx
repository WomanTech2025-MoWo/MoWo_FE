import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

type CommonProps = {
  children: React.ReactNode;
};

type PrimaryButtonProps =
  | (CommonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button';
        type?: 'button' | 'submit' | 'reset';
      })
  | (CommonProps &
      LinkProps & {
        as: 'link';
      });

const baseStyles = css<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: ${({ $disabled }) => ($disabled ? 'var(--color-gray-200)' : 'var(--color-main-primary)')};
  border-radius: 8px;
  font-weight: 600;
  color: white;
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
    const { ...restProps } = props as LinkProps & CommonProps;
    return <PrimaryLink {...restProps}>{children}</PrimaryLink>;
  }

  const { type = 'button', ...restProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
  return (
    <PrimaryBtn type={type} {...restProps}>
      {children}
    </PrimaryBtn>
  );
};

export default PrimaryButton;
