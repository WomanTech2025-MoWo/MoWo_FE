import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import AiCharacter from '../../components/icons/ai/AiCharacter';
import IconLetter from '../../components/icons/features/ai/IconLetter';
import { aiAnalysisData, AnalysisLevel } from './data/aiAnalysisResult';
import ShadowBox from '../../components/common/ShadowBox';

const AiResultWrap = styled(InnerLayout)``;

const AiProfileWrapper = styled.div`
  display: flex;
  gap: var(--size-gap-lg);
  align-items: center;
  border-bottom: 1px solid var(--color-border-color);
  padding-bottom: var(--size-gap-lg);
  margin-bottom: var(--size-gap-lg);
`;

const AiCharacterCircle = styled.div`
  width: var(--size-height-xl);
  height: var(--size-height-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: var(--color-gradient-bg), var(--color-gradient-sub);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
`;

const DateTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-xs);
`;

const TextToday = styled.p`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
`;

const TextStep = styled.p`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-gray-500);
`;

const ResultSummary = styled.p`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-lg);
`;

const ResultBox = styled(ShadowBox)`
  background-color: var(--color-secondary-500);
  margin: var(--size-gap-xxl) 0;
  padding: var(--size-gap-xxl) var(--size-gap-xl);
`;

const ResultBoxTitle = styled.h3`
  display: flex;
  align-items: cneter;
  justify-content: center;
  gap: var(--size-gap-xs);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--size-gap-xl);
`;

const ResultText = styled.p`
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-lg);
`;

const AiAnalysisPage = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const dataLevel: AnalysisLevel = 'normal'; // <- 나중에 API 값으로 대체
  const { label, summary, detail } = aiAnalysisData[dataLevel];

  return (
    <AiResultWrap withHeader={true}>
      <HeaderWithBack>모우의 주간 편지</HeaderWithBack>
      <AiProfileWrapper>
        <AiCharacterCircle>
          <AiCharacter width="40" />
        </AiCharacterCircle>
        <DateTextWrapper>
          <TextToday>{formattedDate}</TextToday>
          <TextStep>{label}</TextStep>
        </DateTextWrapper>
      </AiProfileWrapper>
      <ResultSummary>{summary}</ResultSummary>
      <ResultBox>
        <ResultBoxTitle>
          <IconLetter />
          이번주 편지
        </ResultBoxTitle>
        <ResultText>{detail}</ResultText>
      </ResultBox>
      <GlobalNavigation />
    </AiResultWrap>
  );
};

export default AiAnalysisPage;
