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

const InfoPageWrap = styled.div`
  background-color: var(--color-basic-bg);
  min-height: var(--view-min-height);
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoPageTitle = styled.h1`
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-lg);
`;

const GuideBanner = styled(ShadowBox)`
  height: 86px;
  background-image: url(${bannerImage});
  background-repeat: no-repeat;
  background-size: 24%;
  background-position: 80% 10px;
  display: flex;
  align-items: center;
`;

const BlockLink = styled(Link)`
  display: block;
  width: 100%;
`;

const GuideTitle = styled.p`
  font-size: var(--font-size-sl);
  font-weight: var(--font-weight-bold);
`;
const GuideSub = styled.p`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-gray-500);
  margin-top: 10px;
`;

const InfosPage = () => {
  return (
    <InfoPageWrap>
      <InnerLayout>
        <InfoHeader>
          <InfoPageTitle>정보</InfoPageTitle>
          <Link to="/infos/bookmark">
            <IconBookmark status="fill" />
          </Link>
        </InfoHeader>
      </InnerLayout>
      <InnerLayout>
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
    </InfoPageWrap>
  );
};

export default InfosPage;
