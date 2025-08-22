import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import IconBookmark from '../../components/icons/features/infos/IconBookmark';
import InfosList from './components/InfosList';
import BoldLine from '../../components/common/BoldLine';
import KnowhowsList from './components/KnowhowsList';
import SectionHeader from '../../components/common/SectionHeader';
import bannerImage from '../../assets/features/infos/icon-guide-banner.webp';
import ShadowBox from '../../components/common/ShadowBox';
import PageTitle from '../../components/common/PageTitle';

const InfoPageWrap = styled(InnerLayout)``;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuideBanner = styled(ShadowBox)`
  height: var(--size-height-xxl);
  background-image: url(${bannerImage});
  background-repeat: no-repeat;
  background-size: 28%;
  background-position: 83% var(--size-gap-sm);
  display: flex;
  align-items: center;
`;

const BlockLink = styled(Link)`
  display: block;
  width: 100%;
`;

const GuideTitle = styled.p`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
`;
const GuideSub = styled.p`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-500);
  margin-top: var(--size-gap-sm);
`;

const InfosPage = () => {
  return (
    <InnerLayout innerPadding={false} bgColor="gray-light">
      <InnerLayout>
        <InfoHeader>
          <PageTitle>정보</PageTitle>
          <Link to="/infos/bookmarks">
            <IconBookmark status="fill" />
          </Link>
        </InfoHeader>
      </InnerLayout>
      <InnerLayout paddingTop={false}>
        <InfosList />
      </InnerLayout>
      <BoldLine />
      <InnerLayout>
        <KnowhowsList />
      </InnerLayout>
      <InnerLayout>
        <SectionHeader>가이드</SectionHeader>
        <GuideBanner>
          <BlockLink to="/guides">
            <GuideTitle>주별 검사 가이드</GuideTitle>
            <GuideSub>앞으로 받을 검사가 궁금해요</GuideSub>
          </BlockLink>
        </GuideBanner>
      </InnerLayout>
      <GlobalNavigation />
    </InnerLayout>
  );
};

export default InfosPage;
