import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconPrevious } from '../../../assets/layout/icon-previous.svg';

const IconPrevious = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconPrevious width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconPrevious;
