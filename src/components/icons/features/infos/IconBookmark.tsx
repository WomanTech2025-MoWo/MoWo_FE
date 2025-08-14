import React from 'react';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconBookmarkEmpty } from '../../../../assets/features/infos/icon-bookmark-empty.svg';
import { ReactComponent as IconBookmarkFill } from '../../../../assets/features/infos/icon-bookmark-fill.svg';

interface IconBookmarkProps extends IconSvgProps {
  status?: 'fill' | 'empty';
}

const IconBookmark = ({ status = 'empty', width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconBookmarkProps) => {
  if (status === 'fill') {
    return (
      <>
        <IconBookmarkFill width={width} height={height} viewBox={viewBox} />
      </>
    );
  }
  return (
    <>
      <IconBookmarkEmpty width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconBookmark;
