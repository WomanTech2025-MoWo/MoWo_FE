import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { WithChildren } from '../types/common';
import IconPrevious from '../components/icons/layout/IconPrevious';

const baseStyles = css`
  height: var(--size-header-with-back);
  line-height: var(--size-header-with-back);
  padding: 0 var(--size-inner-padding);
`;

const Header = styled.header`
  ${baseStyles}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  width: 100%;
`;

const BackButton = styled.button`
  ${baseStyles}
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
`;

const HeaderWithBack = ({ children }: WithChildren) => {
  const navigate = useNavigate();

  return (
    <Header>
      <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로가기">
        <IconPrevious />
      </BackButton>
      <Title>{children}</Title>
    </Header>
  );
};

export default HeaderWithBack;
