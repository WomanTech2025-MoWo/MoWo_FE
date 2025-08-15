import React, { useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { WithChildren } from '../types/common';
import { LayoutContext } from './CommonLayout';

interface InnerLayoutProps extends WithChildren {
  bgColor?: string;
  paddingLeft?: boolean;
  paddingRight?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  innerPadding?: boolean;
  withHeader?: boolean;
}

const PageInner = styled.div<{
  $paddingLeft: boolean;
  $paddingRight: boolean;
  $paddingTop: boolean;
  $paddingBottom: boolean;
  $innerPadding: boolean;
}>`
  width: 100%;
  margin: 0 auto;

  ${({ $innerPadding, $paddingLeft, $paddingRight, $paddingTop, $paddingBottom }) =>
    $innerPadding
      ? css`
          padding-left: ${$paddingLeft ? `var(--size-inner-padding)` : `0`};
          padding-right: ${$paddingRight ? `var(--size-inner-padding)` : `0`};
          padding-top: ${$paddingTop ? `var(--size-inner-padding)` : `0`};
          padding-bottom: ${$paddingBottom ? `var(--size-inner-padding)` : `0`};
        `
      : css`
          padding: 0;
        `}
`;

const InnerLayout = ({
  bgColor = 'white',
  children,
  className,
  paddingLeft = true,
  paddingRight = true,
  paddingTop = true,
  paddingBottom = true,
  innerPadding = true,
  withHeader = false,
}: InnerLayoutProps) => {
  const context = useContext(LayoutContext);

  useEffect(() => {
    if (bgColor && context?.setBgColor) {
      context.setBgColor(bgColor);
    }
  }, [bgColor, context]);

  useEffect(() => {
    if (withHeader && context?.setHeaderPadding) {
      context.setHeaderPadding(true);
    } else {
      context?.setHeaderPadding(false);
    }
  }, [withHeader, context]);

  return (
    <PageInner
      className={className}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $innerPadding={innerPadding}>
      {children}
    </PageInner>
  );
};

export default InnerLayout;
