import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconLetter } from '../../../../assets/features/ai/icon-letter.svg';

const IconLetter = ({ width = '25', height = '17', viewBox = '0 0 25 17' }: IconSvgProps) => {
  return (
    <>
      <SvgIconLetter width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconLetter;
