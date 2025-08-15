import React from 'react';
import styled, { css } from 'styled-components';
import BaseButton from './BaseButton';

export const NormalButton = styled(BaseButton)`
  background-color: var(--color-gray-200);

  &:hover {
    background-color: var(--color-gray-300);
  }
`;
