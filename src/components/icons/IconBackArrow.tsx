import React from 'react';
import { ReactComponent as SvgIconBackArrow } from '../../assets/button/ico-back-arrow.svg';

type IconBackArrowProps = {
  width?: string;
  height?: string;
};

const IconBackArrow = ({ width = '20px', height = '20px' }: IconBackArrowProps) => {
  return (
    <>
      <SvgIconBackArrow width={width} height={height} />
    </>
  );
};

export default IconBackArrow;
