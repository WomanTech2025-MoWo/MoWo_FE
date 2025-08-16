import React from 'react';
import styled from 'styled-components';
import { useParams, Navigate } from 'react-router-dom';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import InnerLayout from '../../layouts/InnerLayout';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import AddTodoButton from './components/AddTodoButton';
import { weekGuideData } from '../../data/weekGuideData';
import imgGuidesDetail from '../../assets/features/infos/img-guide-detail.webp';
import CircleBadge from '../../components/common/CircleBadge';
import IconBulb from '../../components/icons/features/infos/IconBulb';

const ImageWrapper = styled.div``;

const ContentsWrapper = styled(InnerLayout)`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-xl);
  padding-bottom: calc(var(--size-add-todo) + var(--size-inner-padding));
`;

const QaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const Question = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  line-height: var(--line-height-md);
  color: var(--color-gray-700);
`;

const Answer = styled.p`
  line-height: var(--line-height-md);
`;

const NoteWrapper = styled.div`
  background-color: var(--color-background-gray-default);
  border-radius: var(--size-border-radius-md);
  padding: var(--size-gap-xl);
`;

const NoteTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: var(--size-gap-xs);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semi-bold);
  margin-bottom: var(--size-gap-md);
`;

const NoteText = styled.p`
  line-height: var(--line-height-md);
`;

const GuideDetailPage = () => {
  const { period, testname } = useParams<{ period: string; testname: string }>();
  const decodedPeriod = period ? decodeURIComponent(period) : '';
  const decodedTestName = testname ? decodeURIComponent(testname) : '';
  const weekData = weekGuideData.find((w) => w.period === decodedPeriod);
  const testData = weekData?.tests.find((t) => t.testName === decodedTestName);

  if (!testData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <InnerLayout innerPadding={false} withHeader={true}>
      <HeaderWithBack>{testData.testName}</HeaderWithBack>
      <ImageWrapper>
        <img src={`${imgGuidesDetail}`} alt={testData.testName} />
      </ImageWrapper>
      <ContentsWrapper>
        {testData.details.questions.map((qa, index) => (
          <QaWrapper key={index}>
            <Question>
              <CircleBadge value="Q" circleColor="var(--color-secondary-primary)" label={qa.question} />
            </Question>
            <Answer>{qa.answer}</Answer>
          </QaWrapper>
        ))}
        {testData.details.note && (
          <NoteWrapper>
            <NoteTitle>
              <IconBulb />
              기억하면 좋아요
            </NoteTitle>
            <NoteText>{testData.details.note}</NoteText>
          </NoteWrapper>
        )}
      </ContentsWrapper>
      <AddTodoButton />
      <GlobalNavigation />
    </InnerLayout>
  );
};

export default GuideDetailPage;
