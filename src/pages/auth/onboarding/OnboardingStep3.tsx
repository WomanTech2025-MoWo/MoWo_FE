import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../../../layouts/HeaderWithBack';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep3Form from '../components/OnboardingStep3Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

const OnboardingStep3 = () => {
  return (
    <InnerLayout bgColor="gray-light" withHeader={true}>
      <HeaderWithBack />
      <OnboardingIntro step="step3" />
      <OnboardingStep3Form where="onboarding" />
      <PrimaryButton to="/">시작하기</PrimaryButton>
    </InnerLayout>
  );
};

export default OnboardingStep3;
