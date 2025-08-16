import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconPlusCircleFill } from '../../../../assets/features/infos/icon-plus-circle-fill.svg';

const IconPlusCircleFill = ({ className, width = '23', height = '22', viewBox = '0 0 23 22' }: IconSvgProps) => {
  return (
    <>
      <SvgIconPlusCircleFill className={className} width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconPlusCircleFill;
