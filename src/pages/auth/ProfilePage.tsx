import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import IdPwForm from './components/IdPwForm';
import AccountForm from './components/AccountForm';
import OnboardingStep1Form from './components/OnboardingStep1Form';
import OnboardingStep2Form from './components/OnboardingStep2Form';
import OnboardingStep3Form from './components/OnboardingStep3Form';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { userService } from '../../api/services';
import SecureTokenStorage from '../../utils/secureStorage';
import { ApiError } from '../../api/client';
import { SegmentedContainer, SegmentedList, SegmentedButton } from '../../components/buttons/ui/SegmentedControlStyle';
import ErrorMessage from '../../components/common/ErrorMessage';

const ProfileWrap = styled(InnerLayout)``;

const ProfilePage = () => {
  // form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [pregnantStatus, setPregnantStatus] = useState('');
  const [isMultiparous, setIsMultiparous] = useState('');
  const [duedate, setDuedate] = useState('');
  const [hasTwins, setHasTwins] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);

  const [activeTab, setActiveTab] = useState<'account' | 'health'>('account');
  const [error, setError] = useState('');
  const [nicknameCheckMessage, setNicknameCheckMessage] = useState('');

  // 🔹 마운트 시 사용자 정보 조회
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!SecureTokenStorage.isTokenValid()) {
          throw new Error('로그인이 필요합니다.');
        }

        const result = await userService.getProfile();

        // API 응답 구조에 맞춰 값 세팅
        setUsername(result.userName || '');
        setNickname(result.nickName || '');
        setBirthdate(result.birthday || '');
        setPregnantStatus(result.pregnantStatus || '');
        setIsMultiparous(result.hasTwins ? '네' : '아니오'); // API boolean → UI string
        setDuedate(result.dueDate || '');
        setHasTwins(result.hasTwins ? '네' : '아니오');
        setSymptoms([
          ...(result.frequentUrination ? ['이뇨감'] : []),
          ...(result.jointPain ? ['관절 통증'] : []),
          ...(result.heartburn ? ['속쓰림'] : []),
          ...(result.abdominalTightness ? ['배 뭉침'] : []),
          ...(result.drowsiness ? ['졸림'] : []),
          ...(result.morningSickness ? ['입덧'] : []),
          ...(result.constipationOrHemorrhoids ? ['변비치질'] : []),
          ...(result.swelling ? ['부종'] : []),
          ...(result.dizziness ? ['어지럼증'] : []),
          ...(result.insomniaOrSleepDisorder ? ['불면수면장애'] : []),
        ]);
      } catch (err) {
        console.error('❌ 프로필 조회 실패:', err);
        
        if (err instanceof ApiError && err.statusCode === 401) {
          // 401 에러는 이미 인터셉터에서 처리됨
          return;
        }
        
        setError(err instanceof Error ? err.message : '프로필 정보를 가져올 수 없습니다.');
      }
    };
    fetchProfile();
  }, []);

  // 🔹 닉네임 중복 확인
  const handleCheckNickname = async () => {
    if (!nickname) return;
    try {
      const res = await fetch(`/api/members/auth/check-nickname?nickname=${encodeURIComponent(nickname)}`);
      const data = await res.json();
      if (data.isSuccess) {
        setNicknameCheckMessage('사용 가능한 닉네임입니다.');
      } else {
        setNicknameCheckMessage('이미 사용 중인 닉네임입니다.');
      }
    } catch {
      setNicknameCheckMessage('닉네임 확인 중 오류가 발생했습니다.');
    }
  };

  // 🔹 프로필 수정 (PATCH)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setNicknameCheckMessage('');

    if (password && password !== passwordCheck) {
      setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    let payload: any = {};

    if (activeTab === 'account') {
      if (username) payload.userName = username;
      if (nickname) payload.nickName = nickname;
      if (birthdate) payload.birthday = birthdate;
      if (password && passwordCheck) {
        payload.password1 = password;
        payload.password2 = passwordCheck;
      }
    } else if (activeTab === 'health') {
      // 건강정보 탭
      payload = {
        pregnantStatus,
        hasTwins: hasTwins === '네',
        dueDate: duedate,
        frequentUrination: symptoms.includes('이뇨감'),
        jointPain: symptoms.includes('관절 통증'),
        heartburn: symptoms.includes('속쓰림'),
        abdominalTightness: symptoms.includes('배 뭉침'),
        drowsiness: symptoms.includes('졸림'),
        morningSickness: symptoms.includes('입덧'),
        constipationOrHemorrhoids: symptoms.includes('변비치질'),
        swelling: symptoms.includes('부종'),
        dizziness: symptoms.includes('어지럼증'),
        insomniaOrSleepDisorder: symptoms.includes('불면수면장애'),
      };
    }

    try {
      if (!SecureTokenStorage.isTokenValid()) {
        throw new Error('로그인이 필요합니다.');
      }

      await userService.updateProfile(payload);
      alert('회원정보가 성공적으로 수정되었습니다.');
    } catch (err) {
      console.error('❌ 프로필 수정 실패:', err);
      
      if (err instanceof ApiError && err.statusCode === 401) {
        // 401 에러는 이미 인터셉터에서 처리됨
        return;
      }
      
      setError(err instanceof Error ? err.message : '회원정보를 수정할 수 없습니다.');
    }
  };

  return (
    <ProfileWrap bgColor="gray-light" innerPadding={true} withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">회원정보수정</HeaderWithBack>
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

      {/* 회원정보 섹션 */}
      {activeTab === 'account' && (
        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {nicknameCheckMessage && <ErrorMessage>{nicknameCheckMessage}</ErrorMessage>}

          <section>
            <IdPwForm username={username} password={password} onChangeUsername={setUsername} onChangePassword={setPassword} />
            <AccountForm
              passwordCheck={passwordCheck}
              onChangePasswordCheck={setPasswordCheck}
              nickname={nickname}
              onChangeNickname={setNickname}
              onCheckNickname={handleCheckNickname}
              birthdate={birthdate}
              onChangeBirthdate={setBirthdate}
            />
          </section>

          <PrimaryButton type="submit">수정하기</PrimaryButton>
        </form>
      )}

      {/* 건강정보 섹션 */}
      {activeTab === 'health' && (
        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {nicknameCheckMessage && <ErrorMessage>{nicknameCheckMessage}</ErrorMessage>}

          <section>
            <OnboardingStep1Form
              where="profile"
              pregnantStatus={pregnantStatus}
              onChangePregnantStatus={setPregnantStatus}
              isMultiparous={isMultiparous}
              onChangeIsMultiparous={setIsMultiparous}
            />
            <OnboardingStep2Form where="profile" duedate={duedate} onChangeDuedate={setDuedate} hasTwins={hasTwins} onChangeHasTwins={setHasTwins} />
            <OnboardingStep3Form where="profile" symptoms={symptoms} onChangeSymptoms={setSymptoms} />
          </section>

          <PrimaryButton type="submit">수정하기</PrimaryButton>
        </form>
      )}
    </ProfileWrap>
  );
};

export default ProfilePage;
