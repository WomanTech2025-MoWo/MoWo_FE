import React, { useState } from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import IdPwForm from './components/IdPwForm';
import AccountForm from './components/AccountForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Logo from '../../components/common/Logo';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState('');

  const handleCheckNickname = async () => {
    if (!nickname.trim()) return;

    try {
      const res = await fetch(`/api/members/auth/check-nickname?nickname=${nickname}`);
      const data = await res.json();
      if (data.isAvailable) {
        alert('사용 가능한 닉네임입니다!');
      } else {
        alert('이미 사용 중인 닉네임입니다.');
      }
    } catch (err) {
      console.error(err);
      alert('닉네임 확인 중 오류가 발생했습니다.');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // 회원가입 로직
  };

  return (
    <InnerLayout bgColor="gray-light" innerPadding={false} withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">회원가입</HeaderWithBack>
      <Logo />
      <InnerLayout paddingTop={false}>
        <form onSubmit={handleSubmit}>
          <IdPwForm username={username} password={password} onChangeUsername={setUsername} onChangePassword={setPassword} />
          <AccountForm
            passwordCheck={passwordCheck}
            onChangePasswordCheck={setPasswordCheck}
            nickname={nickname}
            onChangeNickname={setNickname}
            onCheckNickname={handleCheckNickname}
            birthdate={birthdate}
            onChangeBirthdate={setBirthdate}
          />
          {/* <PrimaryButton type="submit">시작하기</PrimaryButton> */}
          <PrimaryButton to="/signup/onboarding/step1">회원가입시작</PrimaryButton>
        </form>
      </InnerLayout>
    </InnerLayout>
  );
};

export default SignupPage;
