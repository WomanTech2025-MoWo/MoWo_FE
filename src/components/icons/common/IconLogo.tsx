import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconLogo } from '../../../assets/common/icon-logo.svg';

const IconLogo = ({ width = '64', height = '64', viewBox = '0 0 64 64' }: IconSvgProps) => {
  return (
    <>
      <SvgIconLogo width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconLogo;
