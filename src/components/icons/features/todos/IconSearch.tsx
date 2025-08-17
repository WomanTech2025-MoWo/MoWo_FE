import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as SvgIconSearch } from '../../../../assets/features/todos/icon-search.svg';

const IconSearch = ({ width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconSvgProps) => {
  return (
    <>
      <SvgIconSearch width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconSearch;
