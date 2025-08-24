import React, { useState } from 'react';
import styled from 'styled-components';
import OnboardingFieldset, { BaseProps } from './OnboardingFieldset';
import InputField from '../../../components/inputs/InputField';
import SelectableInput from '../../../components/inputs/SelectableInput';
import { StyledLegend } from './OnboardingStep1Form';
import CircleBadge from '../../../components/common/CircleBadge';
import Calendar from '../../../components/common/Calendar';
import dayjs from 'dayjs';

interface OnboardingStep2FormProps extends BaseProps {
  duedate: string; // 출산 예정일
  onChangeDuedate: (value: string) => void;
  hasTwins: string; // 쌍둥이 여부
  onChangeHasTwins: (value: string) => void;
}

const CalendarWrapper = styled.div`
  grid-column: span 2;
  width: 100%;
  min-width: 0;
  display: flex;
  justify-content: center;
`;

const OnboardingStep2Form = ({ className, where, duedate, onChangeDuedate, hasTwins, onChangeHasTwins }: OnboardingStep2FormProps) => {
  return (
    <div className={className}>
      {where === 'onboarding' ? (
        <OnboardingFieldset columns={2} where={where}>
          <StyledLegend $where={where}>
            <CircleBadge value={3} label="출산예정일을 선택해주세요" />
          </StyledLegend>
          <CalendarWrapper>
            <Calendar
              fixedMonthView={true}
              selected={duedate ? new Date(duedate) : undefined}
              onSelect={(date) => onChangeDuedate(dayjs(date).format('YYYY-MM-DD'))}
            />
          </CalendarWrapper>
        </OnboardingFieldset>
      ) : (
        <InputField label="출산예정일" type="date" iconType="date" value={duedate} onChange={(e) => onChangeDuedate(e.target.value)} />
      )}
      <OnboardingFieldset columns={2} where={where}>
        <StyledLegend $where={where}>
          {where === 'profile' ? (
            '쌍둥이 여부'
          ) : (
            <>
              <CircleBadge value={4} label="쌍둥이 여부를 알려주세요" />
            </>
          )}
        </StyledLegend>
        <SelectableInput
          label="네"
          type="radio"
          name="ismultiparous"
          value="네"
          checked={hasTwins === '네'}
          onChange={(e) => onChangeHasTwins(e.target.value)}
        />
        <SelectableInput
          label="아니오"
          type="radio"
          name="ismultiparous"
          value="아니오"
          checked={hasTwins === '아니오'}
          onChange={(e) => onChangeHasTwins(e.target.value)}
        />
      </OnboardingFieldset>
    </div>
  );
};

export default OnboardingStep2Form;
