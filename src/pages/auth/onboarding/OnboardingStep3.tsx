import React from 'react';
import styled from 'styled-components';
import { OnboardingWrap, onboardingBaseForm } from './OnboardingStep1';
import HeaderWithBack from '../../../layouts/HeaderWithBack';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep3Form from '../components/OnboardingStep3Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

const StyledOnboardingStep3Form = styled(OnboardingStep3Form)`
  ${onboardingBaseForm}
`;

const OnboardingStep3 = () => {
  return (
    <OnboardingWrap>
      <HeaderWithBack />
      <InnerLayout>
        <OnboardingIntro />
        <StyledOnboardingStep3Form />
        <PrimaryButton to="/">시작하기</PrimaryButton>
      </InnerLayout>
    </OnboardingWrap>
  );
};

export default OnboardingStep3;
