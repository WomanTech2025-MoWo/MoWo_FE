import React from 'react';
import styled, { css } from 'styled-components';
import InnerLayout from '../../../layouts/InnerLayout';
import OnboardingIntro from '../components/OnboardingIntro';
import OnboardingStep1Form from '../components/OnboardingStep1Form';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';

export const OnboardingWrap = styled.div`
  min-height: 100vh;
  background-color: var(--color-main-light-400);
`;

export const onboardingBaseForm = css`
  & > div {
    background-color: var(--color-basic-white);
    border-radius: var(--size-border-radius-lg);
    margin-bottom: 20px;
    box-shadow: var(--box-shadow-default);
    padding: var(--size-layout-padding);

    fieldset {
      margin-bottom: 0;

      legend {
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-md);
        margin-bottom: var(--size-layout-padding);
      }

      label {
        background-color: var(--color-gray-100);
        color: var(--color-gray-800);
      }

      input[type='radio']:checked + label,
      input[type='checkbox']:checked + label {
        background-color: var(--color-main-light-400);
        color: var(--color-main-dark);
        font-weight: var(--font-weight-bold);
        border-color: var(--color-main-primary);
      }
    }
  }
`;

const StyledOnboardingStep1Form = styled(OnboardingStep1Form)`
  ${onboardingBaseForm}

  & > div:first-child {
    fieldset {
      grid-template-columns: 1fr;
    }
  }
`;

const OnboardingStep1 = () => {
  return (
    <OnboardingWrap>
      <InnerLayout>
        <OnboardingIntro />
        <StyledOnboardingStep1Form />
        <PrimaryButton to="/signup/onboarding/step2">다음</PrimaryButton>
      </InnerLayout>
    </OnboardingWrap>
  );
};

export default OnboardingStep1;
