import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconArrowRIghtDouble } from '../../../assets/common/icon-arrow-right-double.svg';

const IconArrowRIghtDouble = ({ width = '15', height = '14', viewBox = '0 0 15 14' }: IconSvgProps) => {
  return (
    <>
      <SvgIconArrowRIghtDouble width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowRIghtDouble;
