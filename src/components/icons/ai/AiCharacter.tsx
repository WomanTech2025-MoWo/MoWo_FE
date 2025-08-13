import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgAiCharacterDefault } from '../../../assets/ai/ai-character-default.svg';
import { ReactComponent as SvgAiCharacterGood } from '../../../assets/ai/ai-character-good.svg';
import { ReactComponent as SvgAiCharacterSad } from '../../../assets/ai/ai-character-sad.svg';

interface AiCharacterProps extends IconSvgProps {
  status?: 'default' | 'good' | 'sad';
}

const AiCharacter = ({ status = 'default', width = '98px', height = '94px', viewBox = '0 0 98 94' }: AiCharacterProps) => {
  if (status === 'good') {
    return (
      <>
        <SvgAiCharacterGood width={width} height={height} viewBox={viewBox} />
      </>
    );
  } else if (status === 'sad') {
    return (
      <>
        <SvgAiCharacterSad width={width} height={height} viewBox={viewBox} />
      </>
    );
  }
  return (
    <>
      <SvgAiCharacterDefault width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default AiCharacter;
