import React from 'react';
import styled from 'styled-components';
import { WithChildren } from '../../types/common';

const Error = styled.p`
  color: var(--color-basic-red);
  text-align: center;
  padding: var(--size-gap-xs) 0;
`;

const ErrorMessage = ({ children }: WithChildren) => {
  return <Error>{children}</Error>;
};

export default ErrorMessage;
