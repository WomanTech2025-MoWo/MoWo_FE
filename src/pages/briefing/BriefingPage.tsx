import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import BriefingHeader from './components/BriefingHeader';
import BriefingTodo from './components/BriefingTodo';
import BriefingWeekGuide from './components/BriefingWeekGuide';
import BoldLine from '../../components/common/BoldLine';
import InfosList from '../infos/components/InfosList';
import { aiAnalysisData, AnalysisLevel } from '../aianalysis/data/aiAnalysisResult';
import ShadowBox from '../../components/common/ShadowBox';
import aiBanner from '../../assets/features/ai/ai-banner.webp';
import { FixedCenter } from '../../layouts/FixedCenterContainer';
import AiCharacter from '../../components/icons/ai/AiCharacter';
import { usePregnancyInfo } from '../../hooks/usePregnancyInfo';

const BriefingLayout = styled(InnerLayout)`
  padding-bottom: var(--size-inner-padding-4x);
`;

const AiBanner = styled(ShadowBox)`
  height: var(--size-height-banner);
  background-color: var(--color-secondary-400);
  background-image: url(${aiBanner});
  background-size: 28%;
  background-repeat: no-repeat;
  background-position: 80% 30px;
  margin-top: var(--size-gap-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-text-gray-300);
  display: flex;
  align-items: center;
`;

const AiSummary = styled.p`
  font-size: var(--font-size-lg);
  line-height: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-default);
  margin-bottom: var(--size-gap-xs);
`;

const AiIconWrapper = styled(FixedCenter)`
  bottom: var(--size-g-nav-height);
  z-index: 9;
`;

const AiIcon = styled.div`
  width: 150px;
  height: var(--size-height-xl);
  border-radius: var(--size-height-xl);
  background: var(--color-gradient-ai);
  position: absolute;
  right: var(--size-inner-padding);
  bottom: var(--size-inner-padding);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--size-gap-md) 0 var(--size-gap-xl);
  color: var(--color-text-on-color);
  font-size: var(--font-size-sm);
  box-shadow: var(--box-shadow-default);

  b {
    font-size: var(--font-size-md);
    padding-top: var(--size-gap-xxs);
    display: block;
    font-weight: var(--font-weight-bold);
  }
`;

const BriefingPage = () => {
  const dataLevel: AnalysisLevel = 'normal'; // <- 나중에 API 값으로 대체
  const { briefing } = aiAnalysisData[dataLevel];

  const pregnancyInfo = usePregnancyInfo() ?? { week: 0, dday: 0, today: new Date() };
  const { week, dday, today } = pregnancyInfo;

  return (
    <BriefingLayout innerPadding={false} bgColor="gray-light">
      <InnerLayout>
        <BriefingHeader dday={dday} week={week} today={today} />
        <BriefingTodo />
        <AiBanner>
          <Link to="/aianalysis">
            <AiSummary>{briefing}</AiSummary>
            <p>모우의 주간 편지가 도착했어요</p>
          </Link>
        </AiBanner>
      </InnerLayout>
      <BoldLine />
      <InnerLayout>
        <BriefingWeekGuide week={week} />
      </InnerLayout>
      <InnerLayout>
        <InfosList />
      </InnerLayout>
      <AiIconWrapper>
        <Link to="aianalysis">
          <AiIcon>
            <span>
              모우의
              <br />
              <b>주간 편지</b>
            </span>
            <AiCharacter width="40" />
          </AiIcon>
        </Link>
      </AiIconWrapper>
      <GlobalNavigation />
    </BriefingLayout>
  );
};

export default BriefingPage;
