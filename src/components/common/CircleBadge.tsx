import styled from 'styled-components';
import { WithChildren } from '../../types/common';

interface CircleBadgeProps extends WithChildren {
  value: string | number;
  label?: string;
  circleColor?: string;
  labelWeight?: string;
}

const BadgeWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--size-gap-xs);
`;

const Circle = styled.div<{ $circleColor?: string }>`
  border-radius: 50%;
  background-color: ${({ $circleColor }) => $circleColor};
  color: var(--color-text-on-color);
  font-size: var(--font-size-xs);
  diaplay: block;
  width: var(--size-gap-lg);
  height: var(--size-gap-lg);
  text-align: center;
  line-height: var(--size-gap-lg);
`;

const Label = styled.span<{ $labelWeight?: string }>`
  font-weight: ${({ $labelWeight }) => $labelWeight || 'inherit'};
`;

const CircleBadge = ({ value, label, circleColor = 'var(--color-main-primary)', labelWeight = 'inherit' }: CircleBadgeProps) => {
  return (
    <BadgeWrapper>
      <Circle $circleColor={circleColor}>{value}</Circle>
      {label && <Label $labelWeight={labelWeight}>{label}</Label>}
    </BadgeWrapper>
  );
};

export default CircleBadge;
