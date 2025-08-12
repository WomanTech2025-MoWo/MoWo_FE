import React, { useState } from 'react';
import OnboardingFieldset from './OnboardingFieldset';
import InputField from '../../../components/inputs/InputField';
import SelectableInput from '../../../components/inputs/SelectableInput';

const OnboardingStep2Form = () => {
  const [duedate, setDuedate] = useState(''); // 출산예정일
  const [hasTwins, sethasTwins] = useState(''); // 쌍둥이

  return (
    <>
      <InputField label="출산예정일" type="date" iconType="date" value={duedate} onChange={(e) => setDuedate(e.target.value)} required />
      <OnboardingFieldset columns={2}>
        <legend>쌍둥이 여부</legend>
        <SelectableInput
          label="네"
          type="radio"
          name="ismultiparous"
          value="네"
          checked={hasTwins === '네'}
          onChange={(e) => sethasTwins(e.target.value)}
        />
        <SelectableInput
          label="아니오"
          type="radio"
          name="ismultiparous"
          value="아니오"
          checked={hasTwins === '아니오'}
          onChange={(e) => sethasTwins(e.target.value)}
        />
      </OnboardingFieldset>
    </>
  );
};

export default OnboardingStep2Form;
