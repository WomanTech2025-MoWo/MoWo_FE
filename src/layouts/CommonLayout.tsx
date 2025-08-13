import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Wrap = styled.div`
  width: 100%;
  min-width: 350px;
  max-width: 450px;
  min-height: 100vh;
  background-color: white;
  overflow-x: hidden;
  margin: 0 auto;
`;

const CommonLayout = () => {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
};

export default CommonLayout;
