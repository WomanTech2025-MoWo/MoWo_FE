import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconArrowUp } from '../../../../assets/features/todos/icon-arrow-up.svg';
import { ReactComponent as IconArrowDown } from '../../../../assets/features/todos/icon-arrow-down.svg';

interface IconArrowUpDownProps extends IconSvgProps {
  status?: 'up' | 'down';
}

const IconArrowUpDown = ({ status = 'down', width = '20px', height = '11px', viewBox = '0 0 20 11' }: IconArrowUpDownProps) => {
  if (status === 'up') {
    return (
      <>
        <IconArrowUp width={width} height={height} viewBox={viewBox} />
      </>
    );
  }
  return (
    <>
      <IconArrowDown width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowUpDown;
