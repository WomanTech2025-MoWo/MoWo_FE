import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconArrowLeftCal } from '../../../assets/common/icon-arrow-left-cal.svg';

const IconArrowLeftCal = ({ width = '8', height = '14', viewBox = '0 0 8 14' }: IconSvgProps) => {
  return (
    <>
      <SvgIconArrowLeftCal width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowLeftCal;
