import React from 'react';
import styled from 'styled-components';
import { TitleWrapper, TestList, TestItem } from '../../guides/GuidesPage';
import { weekGuideData } from '../../../data/weekGuideData';
import SectionHeader from '../../../components/common/SectionHeader';
import ShadowBox from '../../../components/common/ShadowBox';

interface BriefingWeekGuideProps {
  week: number;
}

const WeekGuideItem = styled(ShadowBox)`
  display: flex;
  gap: 0 var(--size-gap-sm);
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
`;

const WeekGuideTestList = styled(TestList)<{ $single?: boolean }>`
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    top: 5px;
    background-color: ${({ $single }) => ($single ? 'transparent' : 'var(--color-gray-200)')};
    height: calc(100% - 10px);
  }
`;

const WeekGuideTestItem = styled(TestItem)`
  &::before {
    background-color: var(--color-main-primary);
  }
`;

const BriefingWeekGuide = ({ week }: BriefingWeekGuideProps) => {
  // 현재 주차에 맞는 주차별 가이드 정보 가져오기
  const currentWeekGuide = weekGuideData.find((item) => {
    const match = item.period.match(/(\d+)~(\d+)/);
    if (!match) return false;
    const startWeek = parseInt(match[1], 10);
    const endWeek = parseInt(match[2], 10);
    return week >= startWeek && week <= endWeek;
  });

  return (
    <>
      <SectionHeader moreButton={true} path="/guides">
        {week}주차 가이드
      </SectionHeader>
      <WeekGuideItem>
        {/* 주차별 가이드 정보 */}
        {currentWeekGuide ? (
          <>
            <TitleWrapper>
              <h3>{currentWeekGuide.period}</h3>
              <p>{currentWeekGuide.category}</p>
            </TitleWrapper>
            <WeekGuideTestList $single={currentWeekGuide.tests.length === 1}>
              {currentWeekGuide.tests.map((test, i) => (
                <WeekGuideTestItem key={i}>{test.testName}</WeekGuideTestItem>
              ))}
            </WeekGuideTestList>
          </>
        ) : (
          <p>해당 주차 가이드 정보가 없습니다.</p>
        )}
      </WeekGuideItem>
    </>
  );
};

export default BriefingWeekGuide;
