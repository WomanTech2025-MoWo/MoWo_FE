import React from 'react';
import styled from 'styled-components';
import { TitleWrapper, TestList, TestItem } from '../../guides/GuidesPage';
import { weekGuideData } from '../../../data/weekGuideData';
import SectionHeader from '../../../components/common/SectionHeader';

const WeekGuideWrap = styled.div``;

const WeekGuideItem = styled.div`
  display: flex;
  gap: 0 14px;
  margin-top: 8px;
  padding: var(--size-layout-padding);
  background-color: var(--color-basic-white);
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
`;

const WeekGuideTestList = styled(TestList)`
  gap: 20px;

  &::before {
    top: 5px;
    background-color: var(--color-gray-200);
    height: calc(100% - 10px);
  }
`;

const WeekGuideTestItem = styled(TestItem)`
  font-size: var(--font-size-sm);

  &::before {
    background-color: var(--color-main-primary);
  }
`;

const BriefingWeekGuide = () => {
  const currentWeek = 37; // 현재 주차

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
      <SectionHeader morebutton={true} path="/guides">
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
            <WeekGuideTestList>
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
