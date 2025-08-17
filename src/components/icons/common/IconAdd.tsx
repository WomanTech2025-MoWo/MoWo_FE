import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconAdd } from '../../../assets/common/icon-add.svg';

const IconAdd = ({ width = '18', height = '17', viewBox = '0 0 18 17' }: IconSvgProps) => {
  return (
    <>
      <SvgIconAdd width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconAdd;
