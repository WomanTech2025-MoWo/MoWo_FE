import React, { useState } from 'react';
import HeaderWithBack from '../../../layouts/HeaderWithBack';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep3Form from '../components/OnboardingStep3Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import { StepDot, StepDotWrap } from './OnboardingStep2';

const OnboardingStep3 = () => {
  const [symptoms, setSymptoms] = useState<string[]>([]);

  return (
    <InnerLayout bgColor="gray-light" withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">
        <StepDotWrap>
          <StepDot></StepDot>
          <StepDot className="selected"></StepDot>
        </StepDotWrap>
      </HeaderWithBack>
      <OnboardingIntro step="step3" />
      <OnboardingStep3Form where="onboarding" symptoms={symptoms} onChangeSymptoms={setSymptoms} />
      <PrimaryButton to="/">회원가입완료</PrimaryButton>
    </InnerLayout>
  );
};

export default OnboardingStep3;
