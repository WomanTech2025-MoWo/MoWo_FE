import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconMy } from '../../../assets/common/icon-my.svg';

const IconMy = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconMy width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconMy;
