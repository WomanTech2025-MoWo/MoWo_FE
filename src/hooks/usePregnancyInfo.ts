import { useMemo } from 'react';
import { getPregnancyInfo, PregnancyInfo } from '../utils/pregnancyUtils';

export const usePregnancyInfo = (dueDate: string): PregnancyInfo => {
  return useMemo(() => getPregnancyInfo(dueDate), [dueDate]);
};
