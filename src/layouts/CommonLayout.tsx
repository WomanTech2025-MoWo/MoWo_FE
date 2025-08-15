import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

interface LayoutContextProps {
  setBgColor: (colorKey: string) => void;
  setHeaderPadding: (enabled: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextProps | null>(null);

const Wrap = styled.div<{ $bgColor?: string; $headerPadding?: boolean }>`
  width: 100%;
  min-width: var(--view-min-width);
  max-width: var(--view-max-width);
  min-height: var(--view-min-height);
  background-color: ${({ $bgColor }) => ($bgColor ? `var(--color-background-${$bgColor})` : `var(--color-background-white)`)}; /* 기본 배경색 흰색 */
  margin: 0 auto;
  padding-top: ${({ $headerPadding }) => ($headerPadding ? 'var(--size-header-with-back)' : '0')}; /* 헤더 있으면 여백 추가 */
  padding-bottom: var(--view-global-nav-height);
  border-left: 1px solid var(--color-border-color);
  border-right: 1px solid var(--color-border-color);
  position: relative;
`;

const CommonLayout = () => {
  const [bgColor, setBgColor] = useState('white');
  const [headerPadding, setHeaderPadding] = useState(false);

  const handleColorChange = (colorKey: string) => {
    setBgColor(colorKey);
  };

  const handleHeaderPaddingChange = (enabled: boolean) => {
    setHeaderPadding(enabled);
  };

  return (
    <LayoutContext.Provider value={{ setBgColor: handleColorChange, setHeaderPadding: handleHeaderPaddingChange }}>
      <Wrap $bgColor={bgColor} $headerPadding={headerPadding}>
        <Outlet />
      </Wrap>
    </LayoutContext.Provider>
  );
};

export default CommonLayout;
