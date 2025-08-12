import React from 'react';
import { WithChildren } from '../types/common';

const InnerLayout = ({ children }: WithChildren) => {
  return <div className="page-inner">{children}</div>;
};

export default InnerLayout;
