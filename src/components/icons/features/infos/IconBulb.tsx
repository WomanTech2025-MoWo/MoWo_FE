import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconBulb } from '../../../../assets/features/infos/icon-bulb.svg';

const IconBulb = ({ className, width = '15', height = '21', viewBox = '0 0 15 21' }: IconSvgProps) => {
  return (
    <>
      <SvgIconBulb className={className} width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconBulb;
