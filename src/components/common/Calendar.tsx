import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';
import 'react-day-picker/dist/style.css';

const CalendarWrap = styled.div`
  width: 100%;

  .rdp-months {
    width: 100%;
    max-width: none;
  }

  .rdp-month {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
  }

  .rdp-month_caption {
    justify-content: center;
  }

  .rdp-chevron {
    fill: var(--color-gray-900);
  }

  .rdp-today:not(.rdp-outside) {
    color: var(--color-text-on-color);

    button {
      background-color: var(--color-main-primary);
    }
  }

  .rdp-selected .rdp-day_button {
    border-color: var(--color-main-primary);
  }

  .rdp-day_button {
    margin: 0 auto;
  }
`;

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <CalendarWrap>
      <DayPicker
        locale={ko}
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        captionLayout="dropdown"
        hideNavigation={true}
      />
    </CalendarWrap>
  );
};

export default Calendar;
