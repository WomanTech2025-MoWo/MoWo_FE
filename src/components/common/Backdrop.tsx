import React from 'react';
import styled from 'styled-components';
import { FixedCenter } from '../../layouts/FixedCenterContainer';

export interface BackdropProps {
  onClick?: () => void;
}

const BackdropWrap = styled(FixedCenter)`
  inset: 0;
  background-color: var(--color-background-back-drop);
  z-index: 11;
`;

const Backdrop = ({ onClick }: BackdropProps) => {
  return <BackdropWrap onClick={onClick}></BackdropWrap>;
};

export default Backdrop;
