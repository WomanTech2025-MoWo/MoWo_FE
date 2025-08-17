import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconLock } from '../../../assets/inputs/icon-lock.svg';

const IconLock = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconLock width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconLock;
