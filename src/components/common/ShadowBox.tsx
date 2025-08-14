import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface ShadowBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const StyledShadowBox = styled.div`
  background-color: var(--color-basic-white);
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  padding: var(--size-layout-padding);
`;

const ShadowBox = forwardRef<HTMLDivElement, ShadowBoxProps>(({ children, ...props }, ref) => {
  return (
    <StyledShadowBox ref={ref} {...props}>
      {children}
    </StyledShadowBox>
  );
});

ShadowBox.displayName = 'ShadowBox';

export default ShadowBox;
