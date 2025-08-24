import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconArrowRightCal } from '../../../assets/common/icon-arrow-right-cal.svg';

const IconArrowRightCal = ({ width = '8', height = '14', viewBox = '0 0 8 14' }: IconSvgProps) => {
  return (
    <>
      <SvgIconArrowRightCal width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowRightCal;
