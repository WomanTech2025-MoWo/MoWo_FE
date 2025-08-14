import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconArrowRightCircle } from '../../../../assets/features/infos/icon-arrow-right-circle.svg';

const IconArrowRightCircle = ({ width = '25px', height = '25px', viewBox = '0 0 25 25' }: IconSvgProps) => {
  return (
    <>
      <SvgIconArrowRightCircle width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowRightCircle;
