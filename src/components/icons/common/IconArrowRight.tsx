import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconArrowRight } from '../../../assets/common/icon-arrow-right.svg';

const IconArrowRight = ({ width = '6px', height = '10px', viewBox = '0 0 6 10' }: IconSvgProps) => {
  return (
    <>
      <SvgIconArrowRight width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowRight;
