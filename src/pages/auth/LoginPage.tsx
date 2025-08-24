import React, { useState } from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import IdPwForm from './components/IdPwForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Logo from '../../components/common/Logo';
import { NormalButton } from '../../components/buttons/NormalButton';
import ErrorMessage from '../../components/common/ErrorMessage';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지

    try {
      const res = await fetch('/api/members/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || '로그인 실패');
        return;
      }

      const data = await res.json();
      const token = data.result.accessToken;
      localStorage.setItem('token', token); // JWT 저장
      // 로그인 성공 후 리다이렉트
      window.location.href = '/';
    } catch (err) {
      setError('로그인 중 오류 발생');
      console.error(err);
    }
  };

  return (
    <InnerLayout bgColor="gray-light" withHeader={true} paddingTop={false} withNav={false}>
      <Logo />
      <form onSubmit={handleSubmit}>
        <IdPwForm username={username} password={password} onChangeUsername={setUsername} onChangePassword={setPassword} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <PrimaryButton type="submit">로그인</PrimaryButton>
      </form>
      <NormalButton to="/signup">회원가입</NormalButton>
    </InnerLayout>
  );
};

export default LoginPage;
