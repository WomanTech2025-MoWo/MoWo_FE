import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgIconEmail } from '../../../assets/inputs/icon-email.svg';

const IconEmail = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconEmail width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconEmail;
