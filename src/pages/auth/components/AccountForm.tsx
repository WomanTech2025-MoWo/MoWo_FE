import React, { useState } from 'react';
import InputField from '../../../components/inputs/InputField';
import InputWithButton from '../../../components/inputs/InputWithButton';

const AccountForm = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');

  return (
    <>
      <InputField
        label="이메일 (아이디)"
        type="email"
        iconType="email"
        placeholder="이메일 주소"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        required
      />
      <InputField
        label="비밀번호"
        type="password"
        iconType="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <InputField
        label="비밀번호 확인"
        type="password"
        iconType="password"
        placeholder="비밀번호 확인"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        required
      />
      <InputWithButton
        label="닉네임"
        type="my"
        iconType="my"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
      />
      <InputField
        label="생년월일"
        type="date"
        iconType="date"
        placeholder="비밀번호"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        required
      />
    </>
  );
};

export default AccountForm;
