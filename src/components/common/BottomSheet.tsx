import styled from 'styled-components';
import { FixedCenter } from '../../layouts/FixedCenterContainer';

export const BottomSheet = styled(FixedCenter)`
  background-color: var(--color-background-white);
  bottom: 0;
  z-index: 12;
  border-top-left-radius: var(--size-border-radius-xl);
  border-top-right-radius: var(--size-border-radius-xl);
  border-left: 1px solid var(--color-border-color);
  border-right: 1px solid var(--color-border-color);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-sm);
  padding: var(--size-gap-xxs) var(--size-inner-padding) var(--size-inner-padding);
`;
