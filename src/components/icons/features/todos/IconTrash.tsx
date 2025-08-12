import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconTrash } from '../../../../assets/features/todos/icon-trash.svg';

const IconTrash = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconTrash width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconTrash;
