import React from 'react';
import styled from 'styled-components';
import { GuideWrap } from './GuidesPage';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import InnerLayout from '../../layouts/InnerLayout';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import AddTodoButton from './components/AddTodoButton';

const GuideDetailPage = () => {
  return (
    <GuideWrap>
      <HeaderWithBack>초음파 검사</HeaderWithBack>
      <div>
        <InnerLayout>내용</InnerLayout>
      </div>
      <AddTodoButton />
      <GlobalNavigation />
    </GuideWrap>
  );
};

export default GuideDetailPage;
