import React from 'react';
import styled from 'styled-components';
import { WithChildren } from '../types/common';

const PageInner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--size-layout-padding);
`;

const InnerLayout = ({ children }: WithChildren) => {
  return <PageInner>{children}</PageInner>;
};

export default InnerLayout;
