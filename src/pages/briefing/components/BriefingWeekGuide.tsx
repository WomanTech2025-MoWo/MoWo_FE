import React from 'react';
import styled from 'styled-components';
import { TitleWrapper, TestList, TestItem } from '../../guides/GuidesPage';
import { weekGuideData } from '../../../data/weekGuideData';
import SectionHeader from '../../../components/common/SectionHeader';
import ShadowBox from '../../../components/common/ShadowBox';

const WeekGuideWrap = styled.div``;

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

const BriefingWeekGuide = () => {
  const currentWeek = 24; // 현재 주차

  // 현재 주차에 맞는 주차별 가이드 정보 가져오기
  const currentWeekGuide = weekGuideData.find((item) => {
    const match = item.period.match(/(\d+)~(\d+)/);
    if (!match) return false;
    const startWeek = parseInt(match[1], 10);
    const endWeek = parseInt(match[2], 10);
    return currentWeek >= startWeek && currentWeek <= endWeek;
  });

  return (
    <WeekGuideWrap>
      <SectionHeader moreButton={true} path="/guides">
        {currentWeek}주차 가이드
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
    </WeekGuideWrap>
  );
};

export default BriefingWeekGuide;
