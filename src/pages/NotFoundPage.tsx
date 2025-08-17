import React from 'react';
import styled from 'styled-components';
import HeaderWithBack from '../layouts/HeaderWithBack';
import InnerLayout from '../layouts/InnerLayout';
import AiCharacter from '../components/icons/ai/AiCharacter';

const NotFoundWrap = styled(InnerLayout)`
  text-align: center;
`;

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--size-gap-lg) 0 var(--size-gap-xxl);
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--size-gap-md);
  color: var(--color-main-dark);
`;

const SubText = styled.p`
  color: var(--color-gray-500);
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrap bgColor="gray-light" withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light" />
      <CharacterWrapper>
        <AiCharacter status="sad" />
      </CharacterWrapper>
      <Title>404</Title>
      <SubText>페이지를 찾을 수 없습니다.</SubText>
    </NotFoundWrap>
  );
};

export default NotFoundPage;
