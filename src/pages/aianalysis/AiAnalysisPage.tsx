import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import InnerLayout from '../../layouts/InnerLayout';
import AiCharacter from '../../components/icons/ai/AiCharacter';
import IconLetter from '../../components/icons/features/ai/IconLetter';

const AiResultWrap = styled.div``;

const AiResultWrapper = styled(InnerLayout)``;

const AiProfileWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: var(--size-layout-padding);
  margin-bottom: var(--size-layout-padding);
`;

const AiCharacterCircle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#f5f3ff, #f5f3ff), linear-gradient(to bottom right, var(--color-secondary-200), #9494f8);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
`;

const DateTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextToday = styled.p`
  font-weight: var(--font-weight-bold);
`;

const TextStep = styled.p`
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-500);
`;

const ResultSummary = styled.p`
  font-weight: var(--font-weight-medium);
`;

const ResultBox = styled.div`
  box-shadow: var(--box-shadow-default);
  background-color: #f5f3ff;
  border-radius: var(--size-border-radius-md);
  margin: 40px 0;
  padding: 28px var(--size-layout-padding);
`;

const ResultBoxTitle = styled.h3`
  display: flex;
  align-items: cneter;
  justify-content: center;
  gap: 10px;
  font-weight: var(--font-weight-bold);
  margin-bottom: 28px;
`;

const ResultText = styled.p`
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-md);
`;

const AiAnalysisPage = () => {
  return (
    <AiResultWrap>
      <HeaderWithBack>AI 답장</HeaderWithBack>
      <AiResultWrapper>
        <AiProfileWrapper>
          <AiCharacterCircle>
            <AiCharacter width="40" />
          </AiCharacterCircle>
          <DateTextWrapper>
            <TextToday>0월 0일 ㅇ요일</TextToday>
            <TextStep>n단계</TextStep>
          </DateTextWrapper>
        </AiProfileWrapper>
        <ResultSummary>짧은 결과 내용</ResultSummary>
        <ResultBox>
          <ResultBoxTitle>
            <IconLetter />
            오늘의 답장
          </ResultBoxTitle>
          <ResultText>
            긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴
            결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과 내용긴 결과
            내용긴 결과 내용긴 결과 내용긴 결과 내용
          </ResultText>
        </ResultBox>
      </AiResultWrapper>
      <GlobalNavigation />
    </AiResultWrap>
  );
};

export default AiAnalysisPage;
