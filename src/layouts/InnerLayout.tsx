import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WithChildren } from '../types/common';
import { BgColorContext } from './CommonLayout';

interface InnerLayoutProps extends WithChildren {
  bgColor?: string;
}

const PageInner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: var(--size-inner-padding);
`;

const InnerLayout = ({ bgColor, children, className }: InnerLayoutProps) => {
  const context = useContext(BgColorContext);

  useEffect(() => {
    if (bgColor && context?.setBgColor) {
      context.setBgColor(bgColor);
    }
  }, [bgColor, context]);

  return <PageInner className={className}>{children}</PageInner>;
};

export default InnerLayout;
