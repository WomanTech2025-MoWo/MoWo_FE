import React, { useState } from 'react';
import OnboardingFieldset from './OnboardingFieldset';
import SelectableInput from '../../../components/inputs/SelectableInput';

const OnboardingStep1Form = ({ className }: { className?: string }) => {
  const [pregnantStatus, setPregnantStatus] = useState(''); // 임신 여부
  const [isMultiparous, setIsMultiparous] = useState(''); // 출산 경험

  return (
    <div className={className}>
      <OnboardingFieldset columns={3}>
        <legend>임신 여부</legend>
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
      <OnboardingFieldset columns={2}>
        <legend>출산 경험</legend>
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
    </div>
  );
};

export default OnboardingStep1Form;
