import React from 'react';
import styled from 'styled-components';
import { OnboardingWrap, onboardingBaseForm } from './OnboardingStep1';
import HeaderWithBack from '../../../layouts/HeaderWithBack';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep2Form from '../components/OnboardingStep2Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

const StyledOnboardingStep2Form = styled(OnboardingStep2Form)`
  ${onboardingBaseForm}
`;

const OnboardingStep2 = () => {
  return (
    <OnboardingWrap>
      <HeaderWithBack />
      <InnerLayout>
        <OnboardingIntro />
        <StyledOnboardingStep2Form />
        <PrimaryButton to="/signup/onboarding/step3">다음</PrimaryButton>
      </InnerLayout>
    </OnboardingWrap>
  );
};

export default OnboardingStep2;
