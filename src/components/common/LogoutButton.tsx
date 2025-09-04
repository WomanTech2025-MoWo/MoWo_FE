import React from 'react';
import styled from 'styled-components';
import SecureTokenStorage from '../../utils/secureStorage';

const LogoutBtn = styled.button`
  background: none;
  border: none;
  color: var(--color-text-gray-300);
  font-size: var(--font-size-sm);
  cursor: pointer;
  padding: var(--size-gap-xs) var(--size-gap-sm);
  border-radius: var(--size-border-radius-sm);
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-main-primary);
  }

  &:active {
    color: var(--color-main-primary-dark);
  }
`;

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ 
  className, 
  children = '로그아웃' 
}) => {
  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      SecureTokenStorage.clearTokens();
      window.location.href = '/login';
    }
  };

  return (
    <LogoutBtn type="button" className={className} onClick={handleLogout}>
      {children}
    </LogoutBtn>
  );
};

export default LogoutButton;