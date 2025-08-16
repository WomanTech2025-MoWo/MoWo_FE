import React, { useState } from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import IdPwForm from './components/IdPwForm';
import AccountForm from './components/AccountForm';
import OnboardingStep1Form from './components/OnboardingStep1Form';
import OnboardingStep2Form from './components/OnboardingStep2Form';
import OnboardingStep3Form from './components/OnboardingStep3Form';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { SegmentedContainer, SegmentedList, SegmentedButton } from '../../components/buttons/ui/SegmentedControlStyle';

const ProfileWrap = styled(InnerLayout)``;

const Section = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'account' | 'health'>('account');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 모든 인풋을 한 번에 수집(FormData는 display:none인 것도 포함)
    const formData = new FormData(e.currentTarget);

    // 중복 name도 처리되는 JSON 변환
    const payload = Array.from(formData.entries()).reduce<Record<string, any>>((acc, [k, v]) => {
      if (k in acc) {
        const cur = acc[k];
        acc[k] = Array.isArray(cur) ? [...cur, v] : [cur, v];
      } else {
        acc[k] = v;
      }
      return acc;
    }, {});

    // 하나의 API로 통합 전송(엔드포인트는 알아서 변경)
    await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // TODO: 성공/에러 처리
  };

  return (
    <ProfileWrap bgColor="gray-light" innerPadding={true} withHeader={true}>
      <HeaderWithBack>회원정보수정</HeaderWithBack>
      <SegmentedContainer>
        <SegmentedList>
          <li>
            <SegmentedButton type="button" $active={activeTab === 'account'} onClick={() => setActiveTab('account')}>
              회원정보
            </SegmentedButton>
          </li>
          <li>
            <SegmentedButton type="button" $active={activeTab === 'health'} onClick={() => setActiveTab('health')}>
              건강정보
            </SegmentedButton>
          </li>
        </SegmentedList>
      </SegmentedContainer>
      <form onSubmit={handleSubmit}>
        {/* 회원정보 섹션 */}
        <Section $visible={activeTab === 'account'} aria-hidden={activeTab !== 'account'}>
          <IdPwForm />
          <AccountForm />
        </Section>
        {/* 건강정보 섹션 */}
        <Section $visible={activeTab === 'health'} aria-hidden={activeTab !== 'health'}>
          <OnboardingStep1Form where="profile" />
          <OnboardingStep2Form where="profile" />
          <OnboardingStep3Form where="profile" />
        </Section>
        <PrimaryButton type="submit">수정하기</PrimaryButton>
      </form>
    </ProfileWrap>
  );
};

export default ProfilePage;
