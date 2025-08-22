import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { WithChildren } from '../types/common';
import IconPrevious from '../components/icons/layout/IconPrevious';
import { FixedCenter } from './FixedCenterContainer';

export interface HeaderWithBackProps extends WithChildren {
  bgColor?: string;
}

const Header = styled(FixedCenter).withConfig({
  shouldForwardProp: (prop) => prop !== '$bgColor',
})<{ $bgColor?: string }>`
  border-left: 1px solid var(--color-border-color);
  border-right: 1px solid var(--color-border-color);
  height: var(--size-header-with-back);
  line-height: var(--size-header-with-back);
  top: 0;
  background-color: ${({ $bgColor }) => ($bgColor ? `var(--color-background-${$bgColor})` : 'var(--color-background-white)')};
`;

const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: calc(var(--size-inner-padding) + var(--size-gap-xs));
  background-color: transparent;
  width: calc(var(--size-header-with-back) - var(--size-gap-xl));
  height: var(--size-header-with-back);
`;

const Title = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  width: 100%;
`;

const HeaderWithBack = ({ children, bgColor }: HeaderWithBackProps) => {
  const navigate = useNavigate();

  return (
    <Header $bgColor={bgColor}>
      <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로가기">
        <IconPrevious />
      </BackButton>
      <Title>{children}</Title>
    </Header>
  );
};

export default HeaderWithBack;
