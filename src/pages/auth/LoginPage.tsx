import React, { useState } from 'react';
import PrimaryButton from '../../components/button/PrimaryButton';
import SecondaryButton from '../../components/button/SecondaryButton';
import InputField from '../../components/input/InputField';

const LoginPage = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // JWT 토큰 발급을 위한 API 호출 로직 작성
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          label="이메일 (아이디)"
          type="email"
          placeholder="이메일 주소"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          required
        />
        <InputField label="비밀번호" type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <PrimaryButton as="button" type="submit">
          로그인
        </PrimaryButton>
      </form>
      <SecondaryButton as="link" to="/signup">
        회원가입
      </SecondaryButton>
    </>
  );
};

export default LoginPage;
