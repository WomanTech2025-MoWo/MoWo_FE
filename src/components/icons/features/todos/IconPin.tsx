import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconPin } from '../../../../assets/features/todos/icon-pin.svg';

const IconPin = ({ width = '20px', height = '20px', viewBox = '0 0 20 20', className }: IconSvgProps) => {
  return (
    <>
      <SvgIconPin className={className} width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconPin;
