import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../../../layouts/HeaderWithBack';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep2Form from '../components/OnboardingStep2Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

const OnboardingStep2 = () => {
  return (
    <InnerLayout bgColor="gray-light" withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light" />
      <OnboardingIntro step="step2" />
      <OnboardingStep2Form where="onboarding" />
      <PrimaryButton to="/signup/onboarding/step3">다음</PrimaryButton>
    </InnerLayout>
  );
};

export default OnboardingStep2;
