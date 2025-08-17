import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconInfosDefault } from '../../../assets/layout/icon-infos.svg';

const IconInfosDefault = ({ width = '21px', height = '21px', viewBox = '0 0 21 21' }: IconSvgProps) => {
  return (
    <>
      <SvgIconInfosDefault width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconInfosDefault;
