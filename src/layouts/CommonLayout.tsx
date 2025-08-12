import React from 'react';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
  return (
    <div id="wrap">
      <Outlet />
    </div>
  );
};

export default CommonLayout;
