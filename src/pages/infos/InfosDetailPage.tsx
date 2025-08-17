import React from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import GlobalNavigation from '../../layouts/GlobalNavigation';
import detailImage from '../../assets/features/infos/img-knowhows-detail.webp';
import InnerLayout from '../../layouts/InnerLayout';
import TodoSuggestions from './components/TodoSuggestions';

const InfosDetailWrap = styled(InnerLayout)``;

const ContentsWrapper = styled(InnerLayout)`
  background-color: var(--color-background-white);
  line-height: var(--line-height-md);
`;

const InfosDetailPage = () => {
  const location = useLocation();
  const { id } = useParams(); // 필요하면 게시글 id로 데이터 fetch 가능

  // path에 따라 구분 (예: /infos/knowhows/1 or /infos/policies/1)
  const isKnowhow = location.pathname.includes('/knowhows/');
  const isPolicy = location.pathname.includes('/policies/');

  return (
    <InfosDetailWrap bgColor="gray-default" innerPadding={false} withHeader={true}>
      <HeaderWithBack>
        {isPolicy && '임신 사전건강관리 지원사업'}
        {isKnowhow && '출산 완벽 준비 체크리스트'}
      </HeaderWithBack>
      {isKnowhow && (
        <div>
          <img src={detailImage} alt="타이틀" />
        </div>
      )}
      <ContentsWrapper>
        {/* 정책 내용 */}
        {isPolicy && (
          <>
            임신 사전건강관리란 임신 전 가임기 남녀에 대한 생의학적, 행동학적, 사회적 위험 요인을 파악하고 중재하는 예방적 차원의 관리로서, 산모와
            태아의 건강증진을 목적으로 임신 전부터 남녀가 함께 건강한 임신과 출산을 도모하는 포괄적 관리를 말합니다.
          </>
        )}

        {/* 노하우 내용 */}
        {isKnowhow && (
          <>
            4~6주차에는 초음파로 임신 주수에 맞는 태아의 성장이 이루어지고 있는지 확인해요. 임신이 자궁 내에 정상적으로 진행되고 있는지, 태아의 크기와
            심장 박동은 어떠한지도 알 수 있어요.
          </>
        )}
      </ContentsWrapper>
      <TodoSuggestions />
      <GlobalNavigation />
    </InfosDetailWrap>
  );
};

export default InfosDetailPage;
