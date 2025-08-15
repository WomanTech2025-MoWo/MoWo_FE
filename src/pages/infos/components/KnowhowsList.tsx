import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeader from '../../../components/common/SectionHeader';
import KnowhowsListItem from './KnowhowsListItem';

const InfosListWrap = styled.div``;

const KnowhowsListItemWrapper = styled.div`
  width: 100%;
  min-width: 0;
  overflow: visible;
`;

const KnowhowsList = () => {
  return (
    <InfosListWrap>
      <SectionHeader>노하우</SectionHeader>
      <KnowhowsListItemWrapper>
        <KnowhowsListItem />
      </KnowhowsListItemWrapper>
    </InfosListWrap>
  );
};

export default KnowhowsList;
