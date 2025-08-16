import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import detailImage from '../../assets/features/infos/img-knowhows-detail.webp';
import InnerLayout from '../../layouts/InnerLayout';
import TodoSuggestions from './components/TodoSuggestions';

const InfosDetailWrap = styled.div``;

const InfosDetailPage = () => {
  return (
    <InfosDetailWrap>
      <HeaderWithBack>타이틀</HeaderWithBack>
      <div>
        <div>
          <img src={detailImage} alt="타이틀" />
        </div>
        <div>
          <InnerLayout>텍스트</InnerLayout>
        </div>
        <TodoSuggestions />
      </div>
      <GlobalNavigation />
    </InfosDetailWrap>
  );
};

export default InfosDetailPage;
