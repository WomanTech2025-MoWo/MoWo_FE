import React, { useState } from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import { PrimaryButton } from '../../components/button/PrimaryButton';
import InputField from '../../components/input/InputField';
import InputWithButton from '../../components/input/InputWithButton';

const SignupPage = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // 회원가입 로직
  };

  return (
    <>
      <HeaderWithBack>회원가입</HeaderWithBack>
      <InnerLayout>
        <form onSubmit={handleSubmit}>
          <InputField
            label="이메일 (아이디)"
            type="email"
            placeholder="이메일 주소"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            required
          />
          <InputField
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            required
          />
          <InputWithButton label="닉네임" type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
          <InputField label="생년월일" type="date" placeholder="비밀번호" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />

          <PrimaryButton type="submit">회원가입</PrimaryButton>
        </form>
      </InnerLayout>
    </>
  );
};

export default SignupPage;
