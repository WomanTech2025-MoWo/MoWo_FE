import React, { useState } from 'react';
import styled from 'styled-components';
import { regions } from '../../../data/regions';
import IconArrowUpDown from '../../../components/icons/features/todos/IconArrowUpDown';

type StatusFilter = 'current' | 'upcoming' | 'past';

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: 'current', label: '현재' },
  { value: 'upcoming', label: '예정' },
  { value: 'past', label: '지난' },
];

const InfosFilterWrap = styled.div`
  margin: var(--size-gap-xl) 0 var(--size-gap-lg);
  display: flex;
  gap: var(--size-gap-xs);
`;

const FilterRegionsWrap = styled.div`
  position: relative;

  path {
    fill: var(--color-gray-900);
  }
`;

const FilterStatusWrap = styled.div`
  display: flex;
  gap: var(--size-gap-xs);
`;

const StyledSelect = styled.select`
  width: var(--size-height-xxl);
  height: var(--size-height-xxs);
  border-radius: var(--size-height-xxs);
  border-color: var(--color-border-color-dark);
  padding: 0 var(--size-gap-xl) 0 var(--size-gap-sm);
  font-size: var(--font-size-sm);
  background-color: var(--color-background-white);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const StyledIconArrowUpDown = styled(IconArrowUpDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const StatusButton = styled.button<{ $active: boolean }>`
  width: var(--size-height-lg);
  height: var(--size-height-xxs);
  border-radius: var(--size-height-xxs);
  border: 1px solid ${(props) => (props.$active ? 'var(--color-secondary-primary)' : 'var(--color-border-color-dark)')};
  color: ${(props) => (props.$active ? 'var(--color-secondary-dark)' : 'var(--color-gray-600)')};
  background-color: ${(props) => (props.$active ? 'var(--color-secondary-300)' : 'var(--color-background-white)')};
  font-size: var(--font-size-sm);
`;

const InfosListFilter = () => {
  const [region, setRegion] = useState('');
  const [status, setStatus] = useState<StatusFilter>('current');

  return (
    <InfosFilterWrap>
      {/* 지역 선택 */}
      <FilterRegionsWrap>
        <StyledSelect name="region" value={region} onChange={(e) => setRegion(e.target.value)}>
          {regions.map((r) => (
            <option key={r.slug} value={r.slug}>
              {r.label}
            </option>
          ))}
        </StyledSelect>
        <StyledIconArrowUpDown width="9" />
      </FilterRegionsWrap>
      {/* 상태 필터 */}
      <FilterStatusWrap>
        {statusOptions.map((s) => {
          return (
            <StatusButton key={s.value} type="button" onClick={() => setStatus(s.value)} $active={status === s.value}>
              {s.label}
            </StatusButton>
          );
        })}
      </FilterStatusWrap>
    </InfosFilterWrap>
  );
};

export default InfosListFilter;
