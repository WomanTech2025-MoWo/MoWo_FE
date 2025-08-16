import styled, { css } from 'styled-components';

interface FixedCenterProps {
  position?: 'top' | 'bottom';
  zIndex?: number;
  height?: string;
  paddingTop?: string;
}

const baseStyles = css<FixedCenterProps>`
  width: 100%;
  min-width: var(--view-min-width);
  max-width: var(--view-max-width);
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: ${(props) => props.zIndex ?? 10};
  height: ${(props) => props.height ?? 'auto'};
  padding-top: ${(props) => props.paddingTop ?? '0'};
  ${(props) => props.position && `${props.position}: 0;`}
`;

export const FixedCenter = styled.div.withConfig({
  shouldForwardProp: (prop) => !['zIndex', 'position', 'height', 'paddingTop'].includes(prop),
})<FixedCenterProps>`
  ${baseStyles}
`;
