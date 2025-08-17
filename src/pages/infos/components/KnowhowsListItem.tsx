import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShadowBox from '../../../components/common/ShadowBox';
import IconArrowRightCircle from '../../../components/icons/features/infos/IconArrowRightCircle';

interface KnowhowsPost {
  id: number;
  title: string;
  summary: string;
}

// API 호출을 시뮬레이션할 가상 데이터
const dummyPosts: KnowhowsPost[] = [
  { id: 1, title: '2024년 청년 지원 정책 업데이트', summary: '2024년 청년 지원 정책 업데이트' },
  { id: 2, title: '신혼부부 전세자금 대출 기준 변경 안내', summary: '2024년 청년 지원 정책 업데이트' },
  { id: 3, title: '미래 핵심 산업 인재 양성 지원 사업 공고', summary: '2024년 청년 지원 정책 업데이트' },
  { id: 4, title: '새로운 소상공인 정책 지원 사업 발표', summary: '2024년 청년 지원 정책 업데이트' },
  { id: 5, title: '경력단절 여성 재취업 지원 프로그램', summary: '2024년 청년 지원 정책 업데이트' },
];

const KnowhowsListItemWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: var(--size-gap-md);
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  min-width: 0;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  overscroll-behavior-x: contain;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > li {
    flex: 0 0 240px;
    list-style: none;
    position: relative;
  }
`;

const BoxLink = styled(Link)`
  display: block;
  height: 100%;
`;

const KnowhowsListItemBox = styled(ShadowBox)`
  background-color: var(--color-secondary-400);
  width: 240px;
  padding-top: var(--size-inner-padding-3x);
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

const ItemSummary = styled.p`
  color: var(--color-gray-500);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--size-gap-xs);
`;

const ItemTitle = styled.p`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-md);
`;

const StyledIconArrowRightCircle = styled(IconArrowRightCircle)`
  position: absolute;
  right: var(--size-gap-md);
  top: var(--size-gap-md);
`;

const KnowhowsListItem = () => {
  const [posts, setPosts] = useState<KnowhowsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제로는 여기에 fetch 등을 사용하여 API를 호출합니다.
    // 여기서는 setTimeout으로 비동기 호출을 시뮬레이션합니다.
    const fetchPosts = () => {
      // 1초 후에 더미 데이터로 상태 업데이트
      setTimeout(() => {
        setPosts(dummyPosts);
        setLoading(false);
      }, 0);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 최신 3개 게시글만 표시
  const recentPosts = posts.slice(0, 5);

  return (
    <KnowhowsListItemWrap>
      {recentPosts.length > 0 ? (
        recentPosts.map((post) => (
          <li key={post.id}>
            <BoxLink to={`/infos/knowhows/${post.id}`}>
              <KnowhowsListItemBox>
                <ItemSummary>{post.summary}</ItemSummary>
                <ItemTitle>{post.title}</ItemTitle>
                <StyledIconArrowRightCircle />
              </KnowhowsListItemBox>
            </BoxLink>
          </li>
        ))
      ) : (
        <KnowhowsListItemBox>게시글이 없습니다.</KnowhowsListItemBox>
      )}
    </KnowhowsListItemWrap>
  );
};

export default KnowhowsListItem;
