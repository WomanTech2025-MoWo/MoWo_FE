import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconCateHealth } from '../../../../assets/features/todos/icon-cate-health.svg';
import { ReactComponent as IconCateWork } from '../../../../assets/features/todos/icon-cate-work.svg';
import { ReactComponent as IconCatePersonal } from '../../../../assets/features/todos/icon-cate-personal.svg';

interface IconCategoryProps extends IconSvgProps {
  status?: 'HEALTH' | 'WORK' | 'PERSONAL';
}

const IconCategory = ({ status = 'HEALTH', width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconCategoryProps) => {
  if (status === 'HEALTH') {
    return (
      <>
        <IconCateHealth width={width} height={height} viewBox={viewBox} />
      </>
    );
  } else if (status === 'WORK') {
    return (
      <>
        <IconCateWork width={width} height={height} viewBox={viewBox} />
      </>
    );
  }
  return (
    <>
      <IconCatePersonal width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconCategory;
