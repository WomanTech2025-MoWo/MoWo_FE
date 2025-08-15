import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Wrap = styled.div`
  width: 100%;
  min-width: var(--view-min-width);
  max-width: var(--view-max-width);
  min-height: var(--view-min-height);
  background-color: white;
  margin: 0 auto;
  padding-bottom: var(--view-global-nav-height);
`;

const CommonLayout = () => {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
};

export default CommonLayout;
