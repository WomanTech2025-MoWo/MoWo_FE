import React from 'react';
import styled from 'styled-components';

const GrabberLine = styled.div`
  width: 40px;
  height: 3px;
  background-color: var(--color-border-color-dark);
  margin-bottom: var(--size-gap-md);
`;

const Grabber = () => {
  return <GrabberLine></GrabberLine>;
};

export default Grabber;
