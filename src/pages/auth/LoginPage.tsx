import React, { useState } from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import IdPwForm from './components/IdPwForm';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import Logo from '../../components/common/Logo';
import { NormalButton } from '../../components/buttons/NormalButton';
import ErrorMessage from '../../components/common/ErrorMessage';
import { authService } from '../../api/services';
import { ApiError } from '../../api/client';
import SecureTokenStorage from '../../utils/secureStorage';
import { isString, isNumber } from '../../utils/typeGuards';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // 입력 값 검증
      if (!isString(username) || username.trim().length === 0) {
        setError('사용자명을 입력해주세요.');
        return;
      }
      
      if (!isString(password) || password.trim().length === 0) {
        setError('비밀번호를 입력해주세요.');
        return;
      }

      // 새로운 authService 사용 (타입 가드로 검증됨)
      const loginResult = await authService.login({ username: username.trim(), password });
      
      // 응답 데이터 추가 검증
      if (!isString(loginResult.accessToken) || loginResult.accessToken.length === 0) {
        throw new Error('유효하지 않은 액세스 토큰');
      }
      
      if (!isNumber(loginResult.expiresIn) || loginResult.expiresIn <= 0) {
        throw new Error('유효하지 않은 토큰 만료 시간');
      }
      
      // 토큰 저장 (expiresIn 기반으로 만료시간 계산)
      const expiresAt = Date.now() + (loginResult.expiresIn * 1000);
      SecureTokenStorage.setTokens({
        accessToken: loginResult.accessToken,
        refreshToken: loginResult.refreshToken,
        expiresAt,
      });
      
      console.log('✅ 로그인 성공:', loginResult.userInfo?.nickName || '사용자');
      
      // 로그인 성공 후 리다이렉트
      window.location.href = '/';
    } catch (err) {
      console.error('❌ 로그인 실패:', err);
      
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
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
