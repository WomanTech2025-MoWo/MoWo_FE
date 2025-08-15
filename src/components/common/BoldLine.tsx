import React from 'react';
import styled from 'styled-components';

const BoldLineBox = styled.div`
  height: 12px;
  background-color: var(--color-gray-200);
`;

const BoldLine = () => {
  return <BoldLineBox></BoldLineBox>;
};

export default BoldLine;
