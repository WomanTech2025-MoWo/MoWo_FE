import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconMeatball } from '../../../../assets/features/todos/icon-meatball.svg';

const IconMeatball = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconMeatball width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconMeatball;
