import React, { useState } from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import IdPwForm from './components/IdPwForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { SecondaryButton } from '../../components/buttons/SecondaryButton';

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // JWT 토큰 발급을 위한 API 호출 로직 작성
  };

  return (
    <InnerLayout>
      <form onSubmit={handleSubmit}>
        <IdPwForm />
        <PrimaryButton type="submit">로그인</PrimaryButton>
      </form>
      <SecondaryButton to="/signup">회원가입</SecondaryButton>
    </InnerLayout>
  );
};

export default LoginPage;
