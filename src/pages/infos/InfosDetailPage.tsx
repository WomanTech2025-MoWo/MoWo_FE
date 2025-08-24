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
        {isPolicy && '임산부 교통비 지원'}
        {isKnowhow && '입덧, 힘들어도 관리할 수 있어요!'}
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
            임산부의 이동 편의 증진과 경제적 부담을 덜기 위해 임신 3개월(12주차)부터 출산 후 3개월까지 임산부에게 1인당 70만원의 교통비를 지원합니다.
            포인트 형태로 지급되며, 서울시 내에서 대중교통(버스, 지하철), 택시, 자가용 유류비 등으로 사용할 수 있습니다.
          </>
        )}

        {/* 노하우 내용 */}
        {isKnowhow && (
          <>
            임신 5주차부터 시작되는 입덧은 많은 초산모들을 힘들게 합니다. 속이 울렁거리고 식욕이 없어져 고통스럽지만, 아기와 산모의 건강을 위해 소량씩
            자주 먹는 것이 중요합니다. 입덧 완화에 도움이 되는 음식이나 간단한 생활 습관을 통해 조금 더 편안하게 입덧 시기를 보내는 방법을 소개합니다.
            특히 냄새에 민감해질 수 있으므로 환기를 자주 해주는 것이 좋습니다.
          </>
        )}
      </ContentsWrapper>
      <TodoSuggestions />
      <GlobalNavigation />
    </InfosDetailWrap>
  );
};

export default InfosDetailPage;
