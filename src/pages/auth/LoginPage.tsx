import React from 'react';
import PrimaryButton from '../../components/button/PrimaryButton';
import SecondaryButton from '../../components/button/SecondaryButton';

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    // JWT 토큰 발급을 위한 API 호출 로직 작성
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* 입력 폼 컴포넌트들 */}
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
