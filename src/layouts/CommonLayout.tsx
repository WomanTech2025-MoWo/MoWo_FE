import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

interface BgColorContextProps {
  setBgColor: (colorKey: string) => void;
}

const BgColorContext = createContext<BgColorContextProps | null>(null);

const Wrap = styled.div<{ bgColor?: string }>`
  width: 100%;
  min-width: var(--view-min-width);
  max-width: var(--view-max-width);
  min-height: var(--view-min-height);
  background-color: ${({ bgColor }) => (bgColor ? `var(--color-background-${bgColor})` : `var(--color-background-white)`)};
  margin: 0 auto;
  padding-bottom: var(--view-global-nav-height);
  border-left: 1px solid var(--color-border-color-light);
  border-right: 1px solid var(--color-border-color-light);
`;

const CommonLayout = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleColorChange = (colorKey: string) => {
    setBgColor(colorKey);
  };

  return (
    <BgColorContext.Provider value={{ setBgColor: handleColorChange }}>
      <Wrap bgColor={bgColor}>
        <Outlet />
      </Wrap>
    </BgColorContext.Provider>
  );
};

export default CommonLayout;
