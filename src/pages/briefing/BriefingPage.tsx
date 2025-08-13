import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import BriefingHeader from './components/BriefingHeader';
import BriefingTodo from './components/BriefingTodo';
import BriefingWeekGuide from './components/BriefingWeekGuide';

const BriefingWrap = styled.div`
  background-color: var(--color-basic-bg);
  min-height: 100vh;
`;

const AiBanner = styled.div`
  height: 114px;
  background-color: var(--color-secondary-200);
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  overflow: hidden;
  margin-top: 16px;
`;

const BoldHr = styled.div`
  height: 11px;
  background-color: var(--color-gray-200);
`;

const WeekGuideWrap = styled(InnerLayout)``;

const AiIconWrapper = styled.aside`
  width: 100%;
  min-width: var(--view-min-width);
  max-width: var(--view-max-width);
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9;
`;

const AiIcon = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--color-secondary-primary);
  position: absolute;
  right: var(--size-layout-padding);
  bottom: var(--size-layout-padding);
  text-align: center;
`;

const BriefingPage = () => {
  return (
    <BriefingWrap>
      <InnerLayout>
        <BriefingHeader />
        <BriefingTodo />
        <AiBanner>
          <Link to="/aianalysis">AI 배너</Link>
        </AiBanner>
      </InnerLayout>
      <BoldHr />
      <WeekGuideWrap>
        <BriefingWeekGuide />
      </WeekGuideWrap>
      <AiIconWrapper>
        <Link to="aianalysis">
          <AiIcon>AI</AiIcon>
        </Link>
      </AiIconWrapper>
      <GlobalNavigation />
    </BriefingWrap>
  );
};

export default BriefingPage;
