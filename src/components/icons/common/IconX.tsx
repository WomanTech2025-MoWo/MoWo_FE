import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconX } from '../../../assets/common/icon-x.svg';

const IconX = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconX width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconX;
