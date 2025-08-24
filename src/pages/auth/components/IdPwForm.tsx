import React from 'react';
import InputField from '../../../components/inputs/InputField';

interface IdPwFormProps {
  username: string;
  password: string;
  onChangeUsername: (value: string) => void;
  onChangePassword: (value: string) => void;
}

const IdPwForm = ({ username, password, onChangeUsername, onChangePassword }: IdPwFormProps) => {
  return (
    <>
      <InputField
        label="이메일 아이디"
        type="email"
        iconType="email"
        placeholder="이메일 아이디"
        value={username}
        onChange={(e) => onChangeUsername(e.target.value)}
        required
      />
      <InputField
        label="비밀번호"
        type="password"
        iconType="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => onChangePassword(e.target.value)}
        required
      />
    </>
  );
};

export default IdPwForm;
