import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconBriefingDefault } from '../../../assets/layout/icon-briefing.svg';

const IconBriefingDefault = ({ width = '18px', height = '20px', viewBox = '0 0 18 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconBriefingDefault width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconBriefingDefault;
