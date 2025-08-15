import React, { useState } from 'react';
import styled from 'styled-components';
import InfosListItem from './InfosListItem';
import InfosListFilter from './InfosListFilter';
import SectionHeader from '../../../components/common/SectionHeader';

const InfosListWrap = styled.div``;

const InfosList = () => {
  return (
    <InfosListWrap>
      <SectionHeader>정책 지원</SectionHeader>
      <InfosListFilter />
      <InfosListItem />
    </InfosListWrap>
  );
};

export default InfosList;
