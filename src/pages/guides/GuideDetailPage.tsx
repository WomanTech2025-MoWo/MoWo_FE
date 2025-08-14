import React from 'react';
import styled from 'styled-components';
import { useParams, Navigate } from 'react-router-dom';
import { GuideWrap } from './GuidesPage';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import InnerLayout from '../../layouts/InnerLayout';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import AddTodoButton from './components/AddTodoButton';
import { weekGuideData } from '../../data/weekGuideData';

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
    <GuideWrap>
      <HeaderWithBack>{testData.testName}</HeaderWithBack>
      <div>
        <InnerLayout>
          {testData.details.questions.map((qa, index) => (
            <div key={index}>
              <h3>Q. {qa.question}</h3>
              <p>{qa.answer}</p>
            </div>
          ))}
          {testData.details.note && (
            <div>
              <h3>기억하면 좋아요</h3>
              <p>{testData.details.note}</p>
            </div>
          )}
        </InnerLayout>
      </div>
      <AddTodoButton />
      <GlobalNavigation />
    </GuideWrap>
  );
};

export default GuideDetailPage;
