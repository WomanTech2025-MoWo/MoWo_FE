import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconCheckHealth } from '../../../../assets/features/todos/icon-check-health.svg';
import { ReactComponent as IconCheckWork } from '../../../../assets/features/todos/icon-check-work.svg';
import { ReactComponent as IconCheckPersonal } from '../../../../assets/features/todos/icon-check-personal.svg';

interface IconCheckboxProps extends IconSvgProps {
  status?: 'health' | 'work' | 'personal';
}

const IconCheckbox = ({ status = 'health', width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconCheckboxProps) => {
  if (status === 'health') {
    return (
      <>
        <IconCheckHealth width={width} height={height} viewBox={viewBox} />
      </>
    );
  } else if (status === 'work') {
    return (
      <>
        <IconCheckWork width={width} height={height} viewBox={viewBox} />
      </>
    );
  }
  return (
    <>
      <IconCheckPersonal width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconCheckbox;
