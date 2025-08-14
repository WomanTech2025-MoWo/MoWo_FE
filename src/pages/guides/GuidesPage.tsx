import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import InnerLayout from '../../layouts/InnerLayout';
import IconArrowRight from '../../components/icons/common/IconArrowRight';
import { weekGuideData } from '../../data/weekGuideData';

export const GuideWrap = styled.div`
  background-color: var(--color-basic-bg);
  min-height: 100vh;
  position: relative;
`;

const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const PeriodBox = styled.div`
  display: flex;
  gap: 0 14px;
  background-color: var(--color-basic-white);
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  padding: var(--size-layout-padding);
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
  transition: var(--transition);

  &:hover {
    background-color: var(--color-secondary-300);

    ::before {
      background-color: var(--color-secondary-primary);
    }
  }

  &:first-child > ul::before {
    top: 8px;
    height: calc(100% + 20px - 8px);
  }
`;

export const TitleWrapper = styled.div`
  width: 80px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xs);
  color: var(--color-gray-600);
`;

export const TestList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 3px;
    width: 2px;
    height: calc(100% + 40px);
    background-color: var(--color-secondary-200);
    transition: var(--transition);
  }
`;

export const TestItem = styled.li`
  position: relative;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0px;
    width: 8px;
    height: 8px;
    background-color: var(--color-secondary-200);
    border-radius: 50%;
    transition: var(--transition);
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: var(--font-weight-medium);
    gap: 10px;
  }
`;

const GuidesPage = () => {
  return (
    <GuideWrap>
      <HeaderWithBack>주차별 가이드</HeaderWithBack>
      <InnerLayout>
        <GuideWrapper>
          {weekGuideData.map((week, index) => (
            <PeriodBox key={index}>
              <TitleWrapper>
                <h3>{week.period}</h3>
                <p>{week.category}</p>
              </TitleWrapper>
              <TestList>
                {week.tests.map((test, i) => (
                  <TestItem key={i}>
                    <Link to={`/guides/${encodeURIComponent(week.period)}/${encodeURIComponent(test.testName)}`}>
                      {test.testName}
                      <IconArrowRight />
                    </Link>
                  </TestItem>
                ))}
              </TestList>
            </PeriodBox>
          ))}
        </GuideWrapper>
      </InnerLayout>
    </GuideWrap>
  );
};

export default GuidesPage;
