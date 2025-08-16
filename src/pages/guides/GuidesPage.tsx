import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import InnerLayout from '../../layouts/InnerLayout';
import IconArrowRight from '../../components/icons/common/IconArrowRight';
import { weekGuideData } from '../../data/weekGuideData';
import bgGuidesDone from '../../assets/features/infos/bg-guides-done.png';

export const GuideWrap = styled(InnerLayout)``;

const GuideWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const baseBoxStyle = css`
  border-radius: var(--size-border-radius-md);
  box-shadow: var(--box-shadow-default);
  padding: var(--size-gap-lg);
  display: flex;
`;

const PeriodBox = styled.li`
  ${baseBoxStyle}

  gap: 0 var(--size-gap-md);
  background-color: var(--color-background-white);
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
    top: var(--size-gap-xs);
    height: calc(100% + var(--size-gap-lg) - var(--size-gap-xs));
  }
`;

export const TitleWrapper = styled.div`
  width: var(--size-inner-padding-4x);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xs);
  color: var(--color-gray-600);
`;

export const TestList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-xxl);
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
  padding-left: var(--size-gap-xl);

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
    gap: var(--size-gap-xs);
  }
`;

const DoneBox = styled.li`
  ${baseBoxStyle}

  background-color: var(--color-secondary-300);
  background-image: url(${bgGuidesDone});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: var(--size-height-banner);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-xl);
  line-height: var(--line-height-lg);
  font-weight: var(--font-weight-semi-bold);
`;

const GuidesPage = () => {
  return (
    <InnerLayout bgColor="gray-light" withHeader={true}>
      <HeaderWithBack>주차별 가이드</HeaderWithBack>
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
        <DoneBox>
          40주의 긴 여정,
          <br />
          완주를 축하드려요!
        </DoneBox>
      </GuideWrapper>
    </InnerLayout>
  );
};

export default GuidesPage;
