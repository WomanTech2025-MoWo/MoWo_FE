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
  height: 48px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  margin: 5px 0;
`;

const BaseBtn = styled.button<{ $disabled?: boolean }>`
  ${baseButtonStyles}
`;

const BaseLink = styled(Link)<{ $disabled?: boolean }>`
  ${baseButtonStyles}
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
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
