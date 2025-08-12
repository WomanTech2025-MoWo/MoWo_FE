import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconPen } from '../../../../assets/features/todos/icon-pen.svg';

const IconPen = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconPen width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconPen;
