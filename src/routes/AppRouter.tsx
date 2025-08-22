import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// 핵심 콘텐츠 페이지
import BriefingPage from '../pages/briefing/BriefingPage';
import TodosPage from '../pages/todos/TodosPage';
import GuidesPage from '../pages/guides/GuidesPage';
import AiAnalysisPage from '../pages/aianalysis/AiAnalysisPage';
import InfosPage from '../pages/infos/InfosPage';

// 상세 페이지
import GuideDetailPage from '../pages/guides/GuideDetailPage';
import InfosDetailPage from '../pages/infos/InfosDetailPage';
import TodoDrafts from '../pages/todos/TodoDrafts';
import TodoSearch from '../pages/todos/TodoSearch';
import InfosBookmark from '../pages/infos/InfosBookmark';

// 인증 관련 페이지
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ProfilePage from '../pages/auth/ProfilePage';
import OnboardingStep1 from '../pages/auth/onboarding/OnboardingStep1';
import OnboardingStep2 from '../pages/auth/onboarding/OnboardingStep2';
import OnboardingStep3 from '../pages/auth/onboarding/OnboardingStep3';

// 에러 페이지
import NotFoundPage from '../pages/NotFoundPage';

// 레이아웃 컴포넌트
import CommonLayout from '../layouts/CommonLayout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<BriefingPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/drafts" element={<TodoDrafts />} />
          <Route path="/todos/search" element={<TodoSearch />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:period/:testname" element={<GuideDetailPage />} />
          <Route path="/aianalysis" element={<AiAnalysisPage />} />
          <Route path="/infos" element={<InfosPage />} />
          <Route path="/infos/:type/:id" element={<InfosDetailPage />} />
          <Route path="/infos/bookmark" element={<InfosBookmark />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/onboarding/step1" element={<OnboardingStep1 />} />
          <Route path="/signup/onboarding/step2" element={<OnboardingStep2 />} />
          <Route path="/signup/onboarding/step3" element={<OnboardingStep3 />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
