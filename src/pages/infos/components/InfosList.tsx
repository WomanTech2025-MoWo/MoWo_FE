import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import InfosListItem from './InfosListItem';
import InfosListFilter from './InfosListFilter';
import SectionHeader from '../../../components/common/SectionHeader';

const InfosListWrap = styled.div``;

const InfosList = () => {
  const location = useLocation();
  const isInfosPage = location.pathname.startsWith('/infos');

  return (
    <InfosListWrap>
      {isInfosPage ? <SectionHeader>정책 지원</SectionHeader> : <SectionHeader moreButton={true}>정책 지원</SectionHeader>}
      {isInfosPage && <InfosListFilter />}
      <InfosListItem />
    </InfosListWrap>
  );
};

export default InfosList;
