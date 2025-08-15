import React from 'react';
import styled, { css } from 'styled-components';

export interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  where: 'onboarding' | 'profile';
}

export interface BaseFieldsetProps extends BaseProps {
  columns?: number;
}

const BaseFieldset = styled.div<{ $columns: number; $where: 'onboarding' | 'profile' }>`

  fieldset {
    display: grid;
    grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
    gap: var(--size-gap-sm) var(--size-gap-xs);
    margin-bottom: var(--size-gap-md);
  }

  ${(props) =>
    props.$where === 'onboarding' &&
    css`
      /* 온보딩 전용 스타일 */
      background-color: var(--color-background-white);
      border-radius: var(--size-border-radius-lg);
      box-shadow: var(--box-shadow-default);
      margin-bottom: var(--size-gap-lg);
      padding: var(--size-gap-lg);

      fieldset {
        margin-bottom: 0;
      }
    `}
  }
`;

const OnboardingFieldset = ({ children, columns = 1, where, ...props }: BaseFieldsetProps) => {
  return (
    <BaseFieldset $columns={columns} $where={where} {...props}>
      <fieldset>{children}</fieldset>
    </BaseFieldset>
  );
};

export default OnboardingFieldset;
