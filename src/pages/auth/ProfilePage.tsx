import React from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import IdPwForm from './components/IdPwForm';
import AccountForm from './components/AccountForm';
import OnboardingStep1Form from './components/OnboardingStep1Form';
import OnboardingStep2Form from './components/OnboardingStep2Form';
import OnboardingStep3Form from './components/OnboardingStep3Form';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

const ProfilePage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // 회원정보수정 로직
  };

  return (
    <>
      <HeaderWithBack>회원정보수정</HeaderWithBack>
      <InnerLayout>
        <form onSubmit={handleSubmit}>
          <IdPwForm />
          <AccountForm />
          <OnboardingStep1Form />
          <OnboardingStep2Form />
          <OnboardingStep3Form />
          <PrimaryButton type="submit">회원정보수정</PrimaryButton>
        </form>
      </InnerLayout>
    </>
  );
};

export default ProfilePage;
