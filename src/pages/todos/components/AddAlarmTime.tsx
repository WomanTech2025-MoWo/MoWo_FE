import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop, { BackdropProps } from '../../../components/common/Backdrop';
import { PrimaryButton } from '../../../components/buttons/PrimaryButton';
import { WheelPicker, WheelPickerWrapper, WheelPickerOption } from '@ncdai/react-wheel-picker';
import { FixedCenter } from '../../../layouts/FixedCenterContainer';
import '@ncdai/react-wheel-picker/dist/style.css';

interface AddAlramTimeProps extends BackdropProps {
  onConfirm: (time: string) => void;
}

const AddAlramWrap = styled(FixedCenter)`
  background-color: var(--color-background-white);
  top: 50%;
  z-index: 12;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-xs);
  width: 200px;
  min-width: 200px;
  height: 200px;
  transform: translateY(-50%);
  border-radius: var(--size-border-radius-xl);
  box-shadow: var(--box-shadow-default);
  padding: var(--size-gap-md);
`;

const TimeWrapper = styled.div`
  width: 100%;

  .wheel {
    align-items: center;

    .option-item {
      color: var(--color-text-gray-100);
    }
    .highlight-wrapper {
      background-color: var(--color-background-gray-default);
    }
  }
`;

const Colon = styled.div`
  background-color: var(--color-background-gray-default);
  height: 30px;
  line-height: 30px;
`;

const AddAlramTime = ({ onClick, onConfirm }: AddAlramTimeProps) => {
  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('0');
  const [meridiem, setMeridiem] = useState('AM');

  const createArray = (length: number, add = 0): WheelPickerOption[] =>
    Array.from({ length }, (_, i) => {
      const value = i + add;
      return {
        label: value.toString().padStart(2, '0'),
        value: value.toString(),
      };
    });

  const hourOptions = createArray(12, 1);
  const minuteOptions = createArray(60);
  const meridiemOptions: WheelPickerOption[] = [
    { label: 'AM', value: 'AM' },
    { label: 'PM', value: 'PM' },
  ];

  const handleConfirm = () => {
    let h = parseInt(hour, 10) % 12;
    if (meridiem === 'PM') h += 12;

    const now = new Date();
    now.setHours(h, Number(minute), 0, 0);

    const isoString = now.toISOString();

    onConfirm(isoString);
    onClick?.(); // 닫기
  };

  return (
    <>
      <Backdrop onClick={onClick} />
      <AddAlramWrap>
        <TimeWrapper>
          <WheelPickerWrapper className="wheel">
            <WheelPicker
              classNames={{
                highlightWrapper: 'highlight-wrapper',
                highlightItem: 'highlight-item',
                optionItem: 'option-item',
              }}
              options={hourOptions}
              value={hour}
              onValueChange={setHour}
              visibleCount={10}
              infinite
            />
            <Colon>:</Colon>
            <WheelPicker
              classNames={{
                highlightWrapper: 'highlight-wrapper',
                highlightItem: 'highlight-item',
                optionItem: 'option-item',
              }}
              options={minuteOptions}
              value={minute}
              onValueChange={setMinute}
              visibleCount={10}
              infinite
            />
            <WheelPicker
              classNames={{
                highlightWrapper: 'highlight-wrapper',
                highlightItem: 'highlight-item',
                optionItem: 'option-item',
              }}
              options={meridiemOptions}
              value={meridiem}
              onValueChange={setMeridiem}
              visibleCount={10}
            />
          </WheelPickerWrapper>
        </TimeWrapper>
        <PrimaryButton onClick={handleConfirm}>확인</PrimaryButton>
      </AddAlramWrap>
    </>
  );
};

export default AddAlramTime;
