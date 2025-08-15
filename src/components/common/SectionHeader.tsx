import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconArrowRight from '../icons/common/IconArrowRight';
import { WithChildren } from '../../types/common';

type SectionHeaderProps = WithChildren & {
  morebutton?: boolean;
  path?: string;
};

const SectionHeaderWrap = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sl);
  font-weight: var(--font-weight-semi-bold);
  margin: 12px 0 16px;
`;

const MoreButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  gap: 8px;

  path {
    fill: var(--color-gray-500);
  }
`;

const SectionHeader = ({ children, morebutton = false, path }: SectionHeaderProps) => {
  return (
    <SectionHeaderWrap>
      {children}
      {morebutton && (
        <MoreButton to={path || '#'}>
          더보기
          <IconArrowRight width="6" />
        </MoreButton>
      )}
    </SectionHeaderWrap>
  );
};

export default SectionHeader;
