import React, { useState } from 'react';
import styled from 'styled-components';

const TestButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: var(--size-border-radius-sm);
  padding: var(--size-gap-xs) var(--size-gap-sm);
  font-size: var(--font-size-sm);
  cursor: pointer;
  margin: var(--size-gap-sm);
  
  &:hover {
    background-color: #cc3333;
  }
`;

// 개발 환경에서만 사용하는 에러 테스트 컴포넌트
const ErrorTestButton: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('테스트용 에러: Error Boundary 동작 확인');
  }

  // 프로덕션 환경에서는 렌더링하지 않음
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <TestButton onClick={() => setShouldThrow(true)}>
      🔥 에러 테스트
    </TestButton>
  );
};

export default ErrorTestButton;