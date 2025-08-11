import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

type CommonProps = {
  children: React.ReactNode;
};

type SecondaryButtonProps =
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
  background-color: ${({ $disabled }) => ($disabled ? 'var(--color-gray-200)' : 'var(--color-main-light-300)')};
  border-radius: 8px;
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 5px 0;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        background-color: var(--color-main-light-100);
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
    const { ...restProps } = props as LinkProps & CommonProps;
    return <SecondaryLink {...restProps}>{children}</SecondaryLink>;
  }

  const { type = 'button', ...restProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
  return (
    <SecondaryBtn type={type} {...restProps}>
      {children}
    </SecondaryBtn>
  );
};

export default SecondaryButton;
