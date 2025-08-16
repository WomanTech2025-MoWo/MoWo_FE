import React, { useState } from 'react';
import OnboardingFieldset, { BaseProps } from './OnboardingFieldset';
import SelectableInput from '../../../components/inputs/SelectableInput';
import { StyledLegend, NumCircle } from './OnboardingStep1Form';

const OnboardingStep3Form = ({ className, where }: BaseProps) => {
  const [symptoms, setSymptoms] = useState<string[]>([]); // 증상

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSymptoms((prev) => [...prev, value]);
    } else {
      setSymptoms((prev) => prev.filter((v) => v !== value));
    }
  };

  return (
    <div className={className}>
      <OnboardingFieldset columns={2} where={where}>
        <StyledLegend $where={where}>
          {where === 'profile' ? (
            '증상'
          ) : (
            <>
              <NumCircle>5</NumCircle>최근 느낀 몸의 변화를 선택해 주세요
            </>
          )}
        </StyledLegend>
        <SelectableInput
          label="이뇨감"
          type="checkbox"
          name="symptoms"
          value="이뇨감"
          checked={symptoms.includes('이뇨감')}
          onChange={handleChange}
        />
        <SelectableInput
          label="관절 통증"
          type="checkbox"
          name="symptoms"
          value="관절 통증"
          checked={symptoms.includes('관절 통증')}
          onChange={handleChange}
        />
        <SelectableInput
          label="속쓰림"
          type="checkbox"
          name="symptoms"
          value="속쓰림"
          checked={symptoms.includes('속쓰림')}
          onChange={handleChange}
        />
        <SelectableInput
          label="배 뭉침"
          type="checkbox"
          name="symptoms"
          value="배 뭉침"
          checked={symptoms.includes('배 뭉침')}
          onChange={handleChange}
        />
        <SelectableInput label="졸림" type="checkbox" name="symptoms" value="졸림" checked={symptoms.includes('졸림')} onChange={handleChange} />
        <SelectableInput label="입덧" type="checkbox" name="symptoms" value="입덧" checked={symptoms.includes('입덧')} onChange={handleChange} />
        <SelectableInput
          label="변비치질"
          type="checkbox"
          name="symptoms"
          value="변비치질"
          checked={symptoms.includes('변비치질')}
          onChange={handleChange}
        />
        <SelectableInput label="부종" type="checkbox" name="symptoms" value="부종" checked={symptoms.includes('부종')} onChange={handleChange} />
        <SelectableInput
          label="어지럼증"
          type="checkbox"
          name="symptoms"
          value="어지럼증"
          checked={symptoms.includes('어지럼증')}
          onChange={handleChange}
        />
        <SelectableInput
          label="불면수면장애"
          type="checkbox"
          name="symptoms"
          value="불면수면장애"
          checked={symptoms.includes('불면수면장애')}
          onChange={handleChange}
        />
      </OnboardingFieldset>
    </div>
  );
};

export default OnboardingStep3Form;
