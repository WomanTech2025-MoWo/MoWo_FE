import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconCalendar } from '../../../assets/inputs/icon-calendar.svg';

const IconCalendar = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconCalendar width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconCalendar;
