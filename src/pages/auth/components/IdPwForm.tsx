import React, { useState } from 'react';
import InputField from '../../../components/inputs/InputField';

const IdPwForm = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

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
    </>
  );
};

export default IdPwForm;
