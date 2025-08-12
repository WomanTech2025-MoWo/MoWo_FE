import React from 'react';
import styled from 'styled-components';

type BaseFieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  columns?: number;
};

const BaseFieldset = styled.fieldset<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 12px 8px;
  margin-bottom: 16px;

  legend {
    margin-bottom: 8px;
  }
`;

const OnboardingFieldset = ({ children, columns = 1, ...props }: BaseFieldsetProps) => {
  return (
    <BaseFieldset $columns={columns} {...props}>
      {children}
    </BaseFieldset>
  );
};

export default OnboardingFieldset;
