import React from 'react';
import styled from 'styled-components';
import AiCharacterDefault from '../../../components/icons/ai/AiCharacterDefault';

const IntroWrap = styled.div`
  text-align: center;
  padding: 16px 0 40px;
`;

const IntroTitle = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-gray-800);
  line-height: var(--line-height-lg);
  margin: 25px 0 20px;
`;

const IntroSubText = styled.p`
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  color: var(--color-gray-500);
`;

const OnboardingIntro = () => {
  return (
    <IntroWrap>
      <AiCharacterDefault />
      <IntroTitle>
        반가워요!
        <br />
        당신의 여정을 돕고 싶어요
      </IntroTitle>
      <IntroSubText>
        답변은 맞춤형 경험을 제공하는 데만 사용되며,
        <br />
        언제든 수정할 수 있어요
      </IntroSubText>
    </IntroWrap>
  );
};

export default OnboardingIntro;
