import React, { useState } from 'react';
import styled from 'styled-components';
import OnboardingFieldset, { BaseProps } from './OnboardingFieldset';
import SelectableInput from '../../../components/inputs/SelectableInput';
import CircleBadge from '../../../components/common/CircleBadge';

interface OnboardingStep1FormProps extends BaseProps {
  pregnantStatus: string; // 임신 여부
  onChangePregnantStatus: (value: string) => void;
  isMultiparous: string; // 출산 경험 여부
  onChangeIsMultiparous: (value: string) => void;
}

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

const OnboardingStep1Form = ({
  className,
  where,
  pregnantStatus,
  onChangePregnantStatus,
  isMultiparous,
  onChangeIsMultiparous,
}: OnboardingStep1FormProps) => {
  return (
    <div className={className}>
      <OnboardingFieldset columns={3} where={where}>
        <StyledLegend $where={where}>
          {where === 'profile' ? (
            '현재 상태'
          ) : (
            <>
              <CircleBadge value={1} label="현재 상태를 알려주세요" />
            </>
          )}
        </StyledLegend>
        <SelectableInput
          label="임신 준비중"
          type="radio"
          name="pregnantstatus"
          value="PREPARING_FOR_PREGNANCY"
          checked={pregnantStatus === 'PREPARING_FOR_PREGNANCY'}
          onChange={(e) => onChangePregnantStatus(e.target.value)}
        />
        <SelectableInput
          label="임신 중"
          type="radio"
          name="pregnantstatus"
          value="PREGNANT"
          checked={pregnantStatus === 'PREGNANT'}
          onChange={(e) => onChangePregnantStatus(e.target.value)}
        />
        <SelectableInput
          label="예정 없음"
          type="radio"
          name="pregnantstatus"
          value="NOT_PREGNANT"
          checked={pregnantStatus === 'NOT_PREGNANT'}
          onChange={(e) => onChangePregnantStatus(e.target.value)}
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
                <CircleBadge value={2} label="출산 경험이 있으신가요?" />
              </>
            )}
          </StyledLegend>
          <SelectableInput
            label="네"
            type="radio"
            name="ismultiparous"
            value="네"
            checked={isMultiparous === '네'}
            onChange={(e) => onChangeIsMultiparous(e.target.value)}
          />
          <SelectableInput
            label="아니오"
            type="radio"
            name="ismultiparous"
            value="아니오"
            checked={isMultiparous === '아니오'}
            onChange={(e) => onChangeIsMultiparous(e.target.value)}
          />
        </OnboardingFieldset>
      )}
    </div>
  );
};

export default OnboardingStep1Form;
