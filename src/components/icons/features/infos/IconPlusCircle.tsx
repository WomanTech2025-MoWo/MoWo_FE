import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconPlusCircle } from '../../../../assets/features/infos/icon-plus-circle.svg';

const IconPlusCircle = ({ className, width = '23', height = '22', viewBox = '0 0 23 22' }: IconSvgProps) => {
  return (
    <>
      <SvgIconPlusCircle className={className} width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconPlusCircle;
