import React from 'react';

const LoginPage = () => {
  return (
    <>
      <label id="memberId">
        이메일(아이디)
        <input type="email" placeholder="이메일 주소" />
      </label>
      <label id="memberPw">
        비밀번호
        <input type="password" placeholder="비밀번호" />
      </label>
      <button type="submit">로그인</button>
      <a href="/signup">회원가입</a>
    </>
  );
};

export default LoginPage;
