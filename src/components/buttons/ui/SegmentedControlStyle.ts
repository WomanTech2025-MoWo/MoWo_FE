import styled from 'styled-components';

export const SegmentedContainer = styled.div`
  background-color: var(--color-gray-200);
  border-radius: var(--size-border-radius-md);
  padding: var(--size-gap-xxs);
  margin-bottom: var(--size-gap-xxl);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const SegmentedList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: var(--size-gap-xxs);

  li {
    flex: 1;
  }
`;

export const SegmentedButton = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? 'var(--color-basic-white)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'inherit' : 'var(--color-gray-600)')};
  text-align: center;
  border-radius: calc(var(--size-border-radius-md) - 2px);
  font-weight: var(--font-weight-semi-bold);
  width: 100%;
  height: var(--size-height-md);
  box-shadow: ${({ $active }) => ($active ? 'var(--box-shadow-default)' : 'none')};

  &:hover {
    background: var(--color-basic-white);
    color: inherit;
    box-shadow: var(--box-shadow-default);
  }
`;
