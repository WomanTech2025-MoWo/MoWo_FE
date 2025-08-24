import React, { useState } from 'react';
import InputField from '../../../components/inputs/InputField';
import InputWithButton from '../../../components/inputs/InputWithButton';

interface AccountFormProps {
  passwordCheck: string;
  onChangePasswordCheck: (value: string) => void;
  nickname: string;
  onChangeNickname: (value: string) => void;
  onCheckNickname: () => void;
  birthdate: string;
  onChangeBirthdate: (value: string) => void;
}

const AccountForm = ({
  passwordCheck,
  onChangePasswordCheck,
  nickname,
  onChangeNickname,
  onCheckNickname,
  birthdate,
  onChangeBirthdate,
}: AccountFormProps) => {
  return (
    <>
      <InputField
        label="비밀번호 확인"
        type="password"
        iconType="password"
        placeholder="비밀번호 확인"
        value={passwordCheck}
        name="passwordCheck"
        onChange={(e) => onChangePasswordCheck(e.target.value)}
        required
      />
      <InputWithButton
        label="닉네임"
        type="my"
        iconType="my"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => onChangeNickname(e.target.value)}
        onButtonClick={onCheckNickname}
        required
      />
      <InputField
        label="생년월일"
        type="date"
        iconType="date"
        value={birthdate}
        name="birthdate"
        onChange={(e) => onChangeBirthdate(e.target.value)}
        required
      />
    </>
  );
};

export default AccountForm;
