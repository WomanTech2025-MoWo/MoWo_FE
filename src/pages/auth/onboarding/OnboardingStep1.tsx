import React from 'react';
import styled, { css } from 'styled-components';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep1Form from '../components/OnboardingStep1Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

export const OnboardingWrap = styled(InnerLayout)``;

const StyledOnboardingStep1Form = styled(OnboardingStep1Form)`
  & > div:first-child {
    fieldset {
      grid-template-columns: 1fr; /* 현재 상태 한 줄에 하나 정렬 */
    }
  }
`;

const OnboardingStep1 = () => {
  return (
    <OnboardingWrap bgColor="gray-light" withHeader={true}>
      <OnboardingIntro step="step1" />
      <StyledOnboardingStep1Form where="onboarding" />
      <PrimaryButton to="/signup/onboarding/step2">다음</PrimaryButton>
    </OnboardingWrap>
  );
};

export default OnboardingStep1;
