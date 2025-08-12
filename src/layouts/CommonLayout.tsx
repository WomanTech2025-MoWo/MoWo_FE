import React from 'react';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
  return (
    <div id="wrapper">
      <Outlet />
    </div>
  );
};

export default CommonLayout;
