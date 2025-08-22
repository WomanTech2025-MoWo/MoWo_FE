import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconDeleteCircle } from '../../../assets/inputs/icon-delete-circle.svg';

const IconDeleteCircle = ({ width = '18', height = '18', viewBox = '0 0 18 18' }: IconSvgProps) => {
  return (
    <>
      <SvgIconDeleteCircle width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconDeleteCircle;
