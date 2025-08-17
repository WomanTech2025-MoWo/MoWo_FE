import React from 'react';
import styled from 'styled-components';
import { IconSvgProps } from '../../../../types/common';
import { ReactComponent as IconBookmarkEmpty } from '../../../../assets/features/infos/icon-bookmark-empty.svg';
import { ReactComponent as IconBookmarkFill } from '../../../../assets/features/infos/icon-bookmark-fill.svg';

interface IconBookmarkProps extends IconSvgProps {
  status?: 'fill' | 'empty';
  fillColor?: string;
}

const StyledFill = styled(IconBookmarkFill)<{ $color?: string }>`
  path {
    fill: ${({ $color }) => ($color ? `var(--color-${$color})` : 'var(--color-gray-500)')};
    stroke: ${({ $color }) => ($color ? `var(--color-${$color})` : 'var(--color-gray-500)')};
  }
`;

const IconBookmark = ({ status = 'empty', fillColor, width = '20px', height = '20px', viewBox = '0 0 20 20' }: IconBookmarkProps) => {
  if (status === 'fill') {
    return <StyledFill width={width} height={height} viewBox={viewBox} $color={fillColor} />;
  }
  return (
    <>
      <IconBookmarkEmpty width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default IconBookmark;
