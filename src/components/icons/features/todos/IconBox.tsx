import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconBox } from '../../../../assets/features/todos/icon-box.svg';

const IconBox = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconBox width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconBox;
