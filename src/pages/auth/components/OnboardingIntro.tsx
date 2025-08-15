import React from 'react';
import styled from 'styled-components';
import AiCharacter from '../../../components/icons/ai/AiCharacter';

interface OnboardingIntroProps {
  step: 'step1' | 'step2' | 'step3';
}

const stepContents = {
  step1: {
    title: (
      <>
        반가워요!
        <br />
        당신의 여정을 돕고 싶어요
      </>
    ),
    sub: (
      <>
        답변은 맞춤형 경험을 제공하는 데만 사용되며,
        <br />
        언제든 수정할 수 있어요
      </>
    ),
  },
  step2: {
    title: (
      <>
        모우와 같이
        <br />
        하루하루를 함께해요
      </>
    ),
    sub: (
      <>
        주차별 정책 지원 정보와 가이드라인을 제공하기 위해
        <br />
        필요한 정보이며, 언제든 수정할 수 있어요
      </>
    ),
  },
  step3: {
    title: (
      <>
        매주 건강 편지를
        <br />
        전해드려요
      </>
    ),
    sub: (
      <>
        맞춤형 주차별 컨디션을 제공하는 데만
        <br />
        사용되며, 언제든 수정할 수 있어요
      </>
    ),
  },
};

const IntroWrap = styled.div`
  text-align: center;
  padding: var(--size-gap-lg) 0 var(--size-gap-xxl);
`;

const IntroTitle = styled.h1`
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-semi-bold);
  line-height: var(--line-height-lg);
  color: var(--color-gray-800);
  margin: var(--size-gap-xl) 0 var(--size-gap-md);
`;

const IntroSubText = styled.p`
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  color: var(--color-gray-500);
`;

const OnboardingIntro = ({ step }: OnboardingIntroProps) => {
  const content = stepContents[step] ?? stepContents.step1;

  return (
    <IntroWrap>
      <AiCharacter />
      <IntroTitle>{content.title}</IntroTitle>
      <IntroSubText>{content.sub}</IntroSubText>
    </IntroWrap>
  );
};

export default OnboardingIntro;
