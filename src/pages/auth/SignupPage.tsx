import React from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import AccountForm from './components/AccountForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

const SignupPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // 회원가입 로직
  };

  return (
    <>
      <HeaderWithBack>회원가입</HeaderWithBack>
      <InnerLayout>
        <form onSubmit={handleSubmit}>
          <AccountForm />
          <PrimaryButton type="submit">회원가입</PrimaryButton>
        </form>
      </InnerLayout>
    </>
  );
};

export default SignupPage;
