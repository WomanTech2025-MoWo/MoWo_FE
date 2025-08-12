import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconCalToday } from '../../../../assets/features/todos/icon-cal-today.svg';

const IconCalToday = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconCalToday width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconCalToday;
