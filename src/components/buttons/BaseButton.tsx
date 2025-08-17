import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { WithChildren } from '../../types/common';

type BaseButtonProps =
  | (WithChildren &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        to?: 'never';
        type?: 'button' | 'submit' | 'reset';
      })
  | (WithChildren &
      LinkProps & {
        to: string;
      });

const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--size-height-lg);
  border-radius: var(--size-border-radius-md);
  font-weight: var(--font-weight-semi-bold);
  margin: var(--size-gap-xxs) 0;
  box-shadow: var(--box-shadow-default);
`;

const BaseBtn = styled.button`
  ${baseButtonStyles}
`;

const BaseLink = styled(Link)`
  ${baseButtonStyles}
`;

const BaseButton = ({ to, children, ...props }: BaseButtonProps) => {
  if (to) {
    const { to: _to, ...restProps } = props as LinkProps & WithChildren;
    return (
      <BaseLink to={to} {...restProps}>
        {children}
      </BaseLink>
    );
  }

  const { type = 'button', ...restProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & WithChildren;
  return (
    <BaseBtn type={type} {...restProps}>
      {children}
    </BaseBtn>
  );
};

export default BaseButton;
