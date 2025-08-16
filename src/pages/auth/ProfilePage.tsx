import React from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import IdPwForm from './components/IdPwForm';
import AccountForm from './components/AccountForm';
import OnboardingStep1Form from './components/OnboardingStep1Form';
import OnboardingStep2Form from './components/OnboardingStep2Form';
import OnboardingStep3Form from './components/OnboardingStep3Form';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

const ProfileWrap = styled(InnerLayout)``;

const ProfilePage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // 회원정보수정 로직
  };

  return (
    <ProfileWrap bgColor="gray-light" innerPadding={false} withHeader={true}>
      <HeaderWithBack>회원정보수정</HeaderWithBack>
      <InnerLayout>
        <form onSubmit={handleSubmit}>
          <IdPwForm />
          <AccountForm />
          <OnboardingStep1Form where="profile" />
          <OnboardingStep2Form where="profile" />
          <OnboardingStep3Form where="profile" />
          <PrimaryButton type="submit">수정하기</PrimaryButton>
        </form>
      </InnerLayout>
    </ProfileWrap>
  );
};

export default ProfilePage;
