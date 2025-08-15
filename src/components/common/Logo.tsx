import React from 'react';
import styled from 'styled-components';
import IconLogo from '../icons/common/IconLogo';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: var(--size-inner-padding-3x) 0;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <IconLogo />
    </LogoWrapper>
  );
};

export default Logo;
