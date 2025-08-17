import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/common/IconArrowRight';
import { WithChildren } from '../../types/common';

type SectionHeaderProps = WithChildren & {
  moreButton?: boolean;
  path?: string;
};

const SectionHeaderWrap = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--size-gap-md);
`;

const MoreButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  gap: var(--size-gap-xs);

  path {
    fill: var(--color-gray-500);
  }
`;

const SectionHeader = ({ children, moreButton = false, path }: SectionHeaderProps) => {
  return (
    <SectionHeaderWrap>
      {children}
      {moreButton && (
        <MoreButton to={path || '#'}>
          더보기
          <IconArrowRight width="6" />
        </MoreButton>
      )}
    </SectionHeaderWrap>
  );
};

export default SectionHeader;
