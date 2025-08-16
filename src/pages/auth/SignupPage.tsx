import React from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import IdPwForm from './components/IdPwForm';
import AccountForm from './components/AccountForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Logo from '../../components/common/Logo';

const SignupPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // 회원가입 로직
  };

  return (
    <InnerLayout bgColor="gray-light" innerPadding={false} withHeader={true}>
      <HeaderWithBack bgColor="gray-light">회원가입</HeaderWithBack>
      <Logo />
      <InnerLayout paddingTop={false}>
        <form onSubmit={handleSubmit}>
          <IdPwForm />
          <AccountForm />
          {/* <PrimaryButton type="submit">시작하기</PrimaryButton> */}
          <PrimaryButton to="/signup/onboarding/step1">시작하기</PrimaryButton>
        </form>
      </InnerLayout>
    </InnerLayout>
  );
};

export default SignupPage;
