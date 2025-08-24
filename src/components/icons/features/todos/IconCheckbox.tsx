import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconCheckHealth } from '../../../../assets/features/todos/icon-check-health.svg';
import { ReactComponent as IconCheckWork } from '../../../../assets/features/todos/icon-check-work.svg';
import { ReactComponent as IconCheckPersonal } from '../../../../assets/features/todos/icon-check-personal.svg';
import { ReactComponent as IconCheckFalse } from '../../../../assets/features/todos/icon-check-false.svg';
import { CategoryList } from '../../../../pages/todos/components/TodoList';

interface IconCheckboxProps extends IconSvgProps {
  category?: CategoryList;
  status?: boolean;
}

const IconCheckbox = ({ category = 'HEALTH', status = false, width = '20', height = '20', viewBox = '0 0 20 20' }: IconCheckboxProps) => {
  if (status === false) {
    return (
      <>
        <IconCheckFalse width={width} height={height} viewBox={viewBox} />
      </>
    );
  } else if (category === 'HEALTH') {
    return (
      <>
        <IconCheckHealth width={width} height={height} viewBox={viewBox} />
      </>
    );
  } else if (category === 'WORK') {
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
