import React, { useState } from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import IdPwForm from './components/IdPwForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Logo from '../../components/common/Logo';
import { NormalButton } from '../../components/buttons/NormalButton';

const LoginWrap = styled(InnerLayout)`
  padding-top: var(--size-padding-top);
`;

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // JWT 토큰 발급을 위한 API 호출 로직 작성
  };

  return (
    <LoginWrap bgColor="gray-light" withHeader={true}>
      <Logo />
      <form onSubmit={handleSubmit}>
        <IdPwForm />
        <PrimaryButton type="submit">로그인</PrimaryButton>
      </form>
      <NormalButton to="/signup">회원가입</NormalButton>
    </LoginWrap>
  );
};

export default LoginPage;
