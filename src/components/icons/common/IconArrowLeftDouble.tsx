import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconArrowLeftDouble } from '../../../assets/common/icon-arrow-left-double.svg';

const IconArrowLeftDouble = ({ width = '15', height = '14', viewBox = '0 0 15 14' }: IconSvgProps) => {
  return (
    <>
      <SvgIconArrowLeftDouble width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowLeftDouble;
