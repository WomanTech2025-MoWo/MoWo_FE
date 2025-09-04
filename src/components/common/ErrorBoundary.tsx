import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: var(--size-gap-lg);
  text-align: center;
  background-color: var(--color-background-white);
  border: 1px solid var(--color-border-color);
  border-radius: var(--size-border-radius-md);
  margin: var(--size-gap-md);
`;

const ErrorIcon = styled.div`
  font-size: 48px;
  color: var(--color-error);
  margin-bottom: var(--size-gap-md);
`;

const ErrorTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--size-gap-sm);
`;

const ErrorMessage = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text-gray-600);
  margin-bottom: var(--size-gap-lg);
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background-color: var(--color-main-primary);
  color: var(--color-text-on-color);
  border: none;
  border-radius: var(--size-border-radius-sm);
  padding: var(--size-gap-sm) var(--size-gap-lg);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-main-primary-dark);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ErrorDetails = styled.details`
  margin-top: var(--size-gap-lg);
  width: 100%;
  max-width: 600px;
  
  summary {
    cursor: pointer;
    font-weight: var(--font-weight-medium);
    color: var(--color-text-gray-500);
    margin-bottom: var(--size-gap-sm);
  }
`;

const ErrorCode = styled.pre`
  background-color: var(--color-background-gray-light);
  border: 1px solid var(--color-border-color);
  border-radius: var(--size-border-radius-sm);
  padding: var(--size-gap-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-gray-700);
  overflow-x: auto;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
`;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // 에러 리포팅 서비스로 전송 (선택사항)
    this.props.onError?.(error, errorInfo);

    // 개발 환경에서는 콘솔에 상세 로그 출력
    if (process.env.NODE_ENV === 'development') {
      console.group('🔥 Error Boundary Caught an Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // 사용자 정의 fallback이 있으면 사용
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 기본 에러 UI
      return (
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>앗! 문제가 발생했어요</ErrorTitle>
          <ErrorMessage>
            일시적인 오류가 발생했습니다. 
            <br />
            잠시 후 다시 시도해주세요.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            다시 시도
          </RetryButton>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <ErrorDetails>
              <summary>개발자 정보 (개발 모드에서만 표시)</summary>
              <ErrorCode>
                <strong>Error:</strong> {this.state.error.message}
                {this.state.errorInfo && (
                  <>
                    <br /><br />
                    <strong>Component Stack:</strong>
                    {this.state.errorInfo.componentStack}
                  </>
                )}
              </ErrorCode>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;