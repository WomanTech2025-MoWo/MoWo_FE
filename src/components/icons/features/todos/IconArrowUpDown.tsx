import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconArrowUp } from '../../../../assets/features/todos/icon-arrow-up.svg';
import { ReactComponent as IconArrowDown } from '../../../../assets/features/todos/icon-arrow-down.svg';

interface IconArrowUpDownProps extends IconSvgProps {
  status?: 'up' | 'down';
}

const IconArrowUpDown = ({ className, status = 'down', width = '20px', height = '11px', viewBox = '0 0 20 11' }: IconArrowUpDownProps) => {
  if (status === 'up') {
    return (
      <>
        <IconArrowUp className={className} width={width} height={height} viewBox={viewBox} />
      </>
    );
  }
  return (
    <>
      <IconArrowDown className={className} width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconArrowUpDown;
