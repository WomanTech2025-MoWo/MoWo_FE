import React from 'react';
import { IconSvgProps } from '../../../types/common';
import { ReactComponent as SvgAiCharacterDefault } from '../../../assets/ai/ai-character-default.svg';

const AiCharacterDefault = ({ width = '64px', height = '62px', viewBox = '0 0 64 62' }: IconSvgProps) => {
  return (
    <>
      <SvgAiCharacterDefault width={width} height={height} viewBox={viewBox} />
    </>
  );
};

export default AiCharacterDefault;
