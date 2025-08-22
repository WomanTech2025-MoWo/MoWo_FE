import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../../../layouts/HeaderWithBack';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep2Form from '../components/OnboardingStep2Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

export const StepDotWrap = styled.div`
  display: flex;
  gap: var(--size-gap-xs);
  justify-content: center;
  align-items: center;
`;

export const StepDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--color-gray-300);
  border-radius: 50%;
  display: block;

  &.selected {
    background-color: var(--color-gray-700);
  }
`;

const OnboardingStep2 = () => {
  return (
    <InnerLayout bgColor="gray-light" withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">
        <StepDotWrap>
          <StepDot className="selected"></StepDot>
          <StepDot></StepDot>
        </StepDotWrap>
      </HeaderWithBack>
      <OnboardingIntro step="step2" />
      <OnboardingStep2Form where="onboarding" />
      <PrimaryButton to="/signup/onboarding/step3">다음</PrimaryButton>
    </InnerLayout>
  );
};

export default OnboardingStep2;
