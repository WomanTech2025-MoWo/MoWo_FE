import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconTodosDefault } from '../../../assets/layout/icon-todos.svg';

const IconTodosDefault = ({ width = '19px', height = '19px', viewBox = '0 0 19 19' }: IconSvgProps) => {
  return (
    <>
      <SvgIconTodosDefault width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconTodosDefault;
