import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface ShadowBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ShadowBoxStyles = css`
  background-color: var(--color-background-white);
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  padding: var(--size-gap-md);
`;

const StyledShadowBox = styled.div`
  ${ShadowBoxStyles}
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
