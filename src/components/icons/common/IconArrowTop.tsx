import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconAdd } from '../../../assets/common/icon-arrow-top.svg';

const IconArrowTop = ({ width = '16', height = '16', viewBox = '0 0 14 16' }: IconSvgProps) => {
  return (
    <>
      <SvgIconAdd width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowTop;
