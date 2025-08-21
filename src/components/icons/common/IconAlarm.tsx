import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconAlarm } from '../../../assets/common/icon-alarm.svg';

const IconAlarm = ({ className, width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconAlarm className={className} width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconAlarm;
