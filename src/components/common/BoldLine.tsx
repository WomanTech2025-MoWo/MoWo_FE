import React from 'react';
import styled from 'styled-components';

const BoldLineBox = styled.div`
  height: var(--size-gap-sm);
  background-color: var(--color-gray-200);
  margin: var(--size-gap-sm) auto;
`;

const BoldLine = () => {
  return <BoldLineBox></BoldLineBox>;
};

export default BoldLine;
