import React, { useState } from 'react';
import styled from 'styled-components';
import OnboardingFieldset, { BaseProps } from './OnboardingFieldset';
import SelectableInput from '../../../components/inputs/SelectableInput';

export const StyledLegend = styled.legend<{ $where: 'onboarding' | 'profile' }>`
  ${(props) =>
    props.$where === 'onboarding'
      ? `
       display: flex;
       align-items: center;
       gap: var(--size-gap-xs);
       font-weight: var(--font-weight-bold);
       margin-bottom: var(--size-gap-lg);
      `
      : `
       margin-bottom: var(--size-gap-xs);
       font-weight: var(--font-weight-medium);
      `}
`;

export const NumCircle = styled.span`
  border-radius: 50%;
  background-color: var(--color-main-primary);
  color: var(--color-text-on-color);
  font-size: var(--font-size-xs);
  diaplay: block;
  width: var(--size-gap-lg);
  height: var(--size-gap-lg);
  text-align: center;
  line-height: var(--size-gap-lg);
`;

const OnboardingStep1Form = ({ className, where }: BaseProps) => {
  const [pregnantStatus, setPregnantStatus] = useState(''); // 임신 여부
  const [isMultiparous, setIsMultiparous] = useState(''); // 출산 경험

  return (
    <div className={className}>
      <OnboardingFieldset columns={3} where={where}>
        <StyledLegend $where={where}>
          {where === 'profile' ? (
            '현재 상태'
          ) : (
            <>
              <NumCircle>1</NumCircle>현재 상태를 알려주세요
            </>
          )}
        </StyledLegend>
        <SelectableInput
          label="임신 준비중"
          type="radio"
          name="pregnantstatus"
          value="준비중"
          checked={pregnantStatus === '준비중'}
          onChange={(e) => setPregnantStatus(e.target.value)}
        />
        <SelectableInput
          label="임신 중"
          type="radio"
          name="pregnantstatus"
          value="임신 중"
          checked={pregnantStatus === '임신 중'}
          onChange={(e) => setPregnantStatus(e.target.value)}
        />
        <SelectableInput
          label="예정 없음"
          type="radio"
          name="pregnantstatus"
          value="예정 없음"
          checked={pregnantStatus === '예정 없음'}
          onChange={(e) => setPregnantStatus(e.target.value)}
        />
      </OnboardingFieldset>

      {/* 온보딩 1단계에서 임신 여부 선택 시에만 표시 */}
      {(where === 'profile' || (where === 'onboarding' && pregnantStatus)) && (
        <OnboardingFieldset columns={2} where={where}>
          <StyledLegend $where={where}>
            {where === 'profile' ? (
              '출산 경험'
            ) : (
              <>
                <NumCircle>2</NumCircle>출산 경험이 있으신가요?
              </>
            )}
          </StyledLegend>
          <SelectableInput
            label="네"
            type="radio"
            name="ismultiparous"
            value="네"
            checked={isMultiparous === '네'}
            onChange={(e) => setIsMultiparous(e.target.value)}
          />
          <SelectableInput
            label="아니오"
            type="radio"
            name="ismultiparous"
            value="아니오"
            checked={isMultiparous === '아니오'}
            onChange={(e) => setIsMultiparous(e.target.value)}
          />
        </OnboardingFieldset>
      )}
    </div>
  );
};

export default OnboardingStep1Form;
