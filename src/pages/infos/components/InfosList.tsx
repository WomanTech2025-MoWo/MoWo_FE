import React, { useState } from 'react';
import styled from 'styled-components';
import InfosListItem from './InfosListItem';
import InfosListFilter from './InfosListFilter';

const InfosListWrap = styled.div``;

const InfosListTitle = styled.h2`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sl);
`;

const InfosList = () => {
  return (
    <InfosListWrap>
      <InfosListTitle>정책 지원</InfosListTitle>
      <InfosListFilter />
      <InfosListItem />
    </InfosListWrap>
  );
};

export default InfosList;
