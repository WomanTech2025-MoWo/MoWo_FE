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
  margin: 20px 0;
  display: flex;
  gap: 8px;
`;

const FilterRegionsWrap = styled.div`
  position: relative;

  path {
    fill: var(--color-gray-900);
  }
`;

const FilterStatusWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledSelect = styled.select`
  width: 90px;
  height: 30px;
  border-radius: 30px;
  border-color: var(--color-gray-300);
  padding: 0 var(--size-layout-padding) 0 10px;
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
  width: 53px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid ${(props) => (props.$active ? 'var(--color-secondary-primary)' : 'var(--color-gray-300)')};
  color: ${(props) => (props.$active ? 'var(--color-secondary-dark)' : 'var(--color-gray-600)')};
  background-color: ${(props) => (props.$active ? 'var(--color-secondary-300)' : 'var(--color-basic-white)')};
  font-size: var(--font-size-xs);
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
