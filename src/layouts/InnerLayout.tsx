import React from 'react';
import styled from 'styled-components';
import { WithChildren } from '../types/common';

const PageInner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: var(--size-layout-padding);
`;

const InnerLayout = ({ children, className }: WithChildren) => {
  return <PageInner className={className}>{children}</PageInner>;
};

export default InnerLayout;
