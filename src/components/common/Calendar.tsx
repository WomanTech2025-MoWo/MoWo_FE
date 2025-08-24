import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import IconArrowLeftCal from '../icons/common/IconArrowLeftCal';
import IconArrowLeftDouble from '../icons/common/IconArrowLeftDouble';
import IconArrowRIghtDouble from '../icons/common/IconArrowRIghtDouble';
import IconArrowRightCal from '../icons/common/IconArrowRightCal';

dayjs.locale('ko');
dayjs.extend(weekOfYear);

type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date) => void;
  viewMode?: 'week' | 'month';
  fixedMonthView?: boolean;
};

const CalendarWrap = styled.div`
  width: 100%;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--size-gap-md) 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  text-align: center;
`;

const DateTileWrap = styled.div`
  text-align: center;
`;

const DateTile = styled.button<{ $isCurrentMonth?: boolean; $isSelected?: boolean }>`
  padding: var(--size-gap-sm);
  min-width: var(--size-height-sm);
  border-radius: 50%;
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--color-main-primary)' : 'transparent')};
  color: ${({ $isCurrentMonth, $isSelected }) =>
    $isSelected ? 'var(--color-text-on-color)' : $isCurrentMonth ? 'var(--color-text-default)' : 'var(--color-text-gray-200)'};
`;

const SwipeBtnWrapper = styled.div`
  background-color: var(--color-background-gray-default);
  padding: var(--size-gap-xxs);
  height: var(--size-height-xxs);
  border-radius: var(--size-height-xxs);
  display: flex;
  gap: var(--size-gap-xxs);
`;

const SwipeBtn = styled.button<{ $selected: boolean }>`
  width: 50px;
  height: calc(var(--size-height-xxs) - (var(--size-gap-xxs) * 2));
  border-radius: calc(var(--size-height-xxs) - (var(--size-gap-xxs) * 2));
  background-color: ${({ $selected }) => ($selected ? 'var(--color-background-white)' : 'transparent')};
  color: ${({ $selected }) => ($selected ? 'var(--color-text-default)' : 'var(--color-text-gray-400)')};
  box-shadow: ${({ $selected }) => ($selected ? 'var(--box-shadow-default)' : 'none')};
`;

const CalendarTitleWrap = styled.div`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: var(--size-gap-sm);
`;

const CalendarTitle = styled.h3`
  padding: 0 var(--size-gap-xxs);
`;

const DayOfWeekText = styled.p`
  color: var(--color-text-gray-300);
  font-weight: var(--font-weight-semi-bold);
  padding: var(--size-gap-sm) 0;
`;

const Calendar = ({ selected, onSelect, viewMode = 'month', fixedMonthView }: CalendarProps) => {
  const today = dayjs();
  const effectiveSelected = selected ? dayjs(selected) : today;

  const [current, setCurrent] = useState(dayjs(selected || new Date()));
  const [mode, setMode] = useState<'week' | 'month'>(viewMode);

  // 외부 selected 변화 동기화
  useEffect(() => {
    if (selected) setCurrent(dayjs(selected));
  }, [selected]);

  // 외부 viewMode 또는 fixedMonthView 적용
  useEffect(() => {
    if (viewMode) setMode(viewMode);
  }, [viewMode]);

  useEffect(() => {
    if (fixedMonthView) setMode('month');
  }, [fixedMonthView]);

  // 이동 버튼
  const handlePrev = () => {
    if (mode === 'week') setCurrent(current.subtract(1, 'week'));
    else setCurrent(current.subtract(1, 'month'));
  };
  const handleNext = () => {
    if (mode === 'week') setCurrent(current.add(1, 'week'));
    else setCurrent(current.add(1, 'month'));
  };
  const handlePrevDouble = () => {
    if (mode === 'week') setCurrent(current.subtract(1, 'month'));
    else setCurrent(current.subtract(1, 'year'));
  };
  const handleNextDouble = () => {
    if (mode === 'week') setCurrent(current.add(1, 'month'));
    else setCurrent(current.add(1, 'year'));
  };

  const handleSelect = (date: dayjs.Dayjs) => {
    setCurrent(date);
    onSelect?.(date.toDate());
  };

  // 날짜 계산
  const getDates = () => {
    if (mode === 'month' || fixedMonthView) {
      const start = current.startOf('month').startOf('week');
      const end = current.endOf('month').endOf('week');
      const dates = [];
      let d = start;
      while (d.isBefore(end) || d.isSame(end, 'day')) {
        dates.push(d);
        d = d.add(1, 'day');
      }
      return dates;
    } else {
      const start = current.startOf('week');
      const end = current.endOf('week');
      const dates = [];
      let d = start;
      while (d.isBefore(end) || d.isSame(end, 'day')) {
        dates.push(d);
        d = d.add(1, 'day');
      }
      return dates;
    }
  };

  const monthWeekNumber = (date: dayjs.Dayjs) => {
    const startOfMonth = date.startOf('month').startOf('week');
    const diffDays = date.startOf('day').diff(startOfMonth, 'day');
    return Math.floor(diffDays / 7) + 1;
  };

  const dates = getDates();
  const title =
    mode === 'month' || fixedMonthView ? current.format('YYYY년 MM월') : `${current.format('YYYY년 MM월')} ${monthWeekNumber(current)}째주`;

  return (
    <CalendarWrap>
      <CalendarHeader>
        <CalendarTitleWrap>
          <button onClick={handlePrevDouble}>
            <IconArrowLeftDouble />
          </button>
          <button onClick={handlePrev}>
            <IconArrowLeftCal />
          </button>
          <CalendarTitle>{title}</CalendarTitle>
          <button onClick={handleNext}>
            <IconArrowRightCal />
          </button>
          <button onClick={handleNextDouble}>
            <IconArrowRIghtDouble />
          </button>
        </CalendarTitleWrap>
        {!fixedMonthView && (
          <SwipeBtnWrapper>
            <SwipeBtn type="button" onClick={() => setMode('week')} $selected={mode === 'week'}>
              주간
            </SwipeBtn>
            <SwipeBtn type="button" onClick={() => setMode('month')} $selected={mode === 'month'}>
              월간
            </SwipeBtn>
          </SwipeBtnWrapper>
        )}
      </CalendarHeader>
      <CalendarGrid>
        {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
          <DayOfWeekText key={d}>{d}</DayOfWeekText>
        ))}
        {dates.map((d) => (
          <DateTileWrap key={d.toString()}>
            <DateTile
              $isCurrentMonth={d.month() === current.month()}
              $isSelected={d.isSame(effectiveSelected, 'day')}
              onClick={() => handleSelect(d)}>
              {d.date()}
            </DateTile>
          </DateTileWrap>
        ))}
      </CalendarGrid>
    </CalendarWrap>
  );
};

export default Calendar;
