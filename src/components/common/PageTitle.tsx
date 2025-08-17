import React from 'react';
import styled from 'styled-components';
import IconLogo from '../icons/common/IconLogo';
import { WithChildren } from '../../types/common';

const TitleWrapper = styled.h1`
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-xxl);
`;

const PageTitle = ({ children }: WithChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default PageTitle;
