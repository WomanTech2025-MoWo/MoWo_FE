import React from 'react';
import styled from 'styled-components';

type BaseFieldsetProps = React.HTMLAttributes<HTMLDivElement> & {
  columns?: number;
};

const BaseFieldset = styled.div<{ $columns: number }>`
  fieldset {
    display: grid;
    grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
    gap: 12px 8px;
    margin-bottom: 16px;

    legend {
      margin-bottom: 8px;
    }
  }
`;

const OnboardingFieldset = ({ children, columns = 1, ...props }: BaseFieldsetProps) => {
  return (
    <BaseFieldset $columns={columns} {...props}>
      <fieldset>{children}</fieldset>
    </BaseFieldset>
  );
};

export default OnboardingFieldset;
