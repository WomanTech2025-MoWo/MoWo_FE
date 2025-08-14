import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShadowBox from '../../../components/common/ShadowBox';
import IconBookmark from '../../../components/icons/features/infos/IconBookmark';

interface PolicyPost {
  id: number;
  title: string;
  bookmarked: boolean;
}

// API 호출을 시뮬레이션할 가상 데이터
const dummyPosts: PolicyPost[] = [
  { id: 1, title: '2024년 청년 지원 정책 업데이트', bookmarked: true },
  { id: 2, title: '신혼부부 전세자금 대출 기준 변경 안내', bookmarked: false },
  { id: 3, title: '미래 핵심 산업 인재 양성 지원 사업 공고', bookmarked: true },
  { id: 4, title: '새로운 소상공인 정책 지원 사업 발표', bookmarked: false },
  { id: 5, title: '경력단절 여성 재취업 지원 프로그램', bookmarked: false },
];

const InfosListItemWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfosListItemBox = styled(ShadowBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemTitle = styled.p`
  font-size: var(--font-size-sl);
  font-weight: var(--font-weight-bold);
`;

const BookmarkButton = styled.button<{ $bookmarked: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.$bookmarked ? '#ffc107' : '#e0e0e0')};
`;

const InfosListItem = () => {
  const [posts, setPosts] = useState<PolicyPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제로는 여기에 fetch 등을 사용하여 API를 호출합니다.
    // 여기서는 setTimeout으로 비동기 호출을 시뮬레이션합니다.
    const fetchPosts = () => {
      // 1초 후에 더미 데이터로 상태 업데이트
      setTimeout(() => {
        setPosts(dummyPosts);
        setLoading(false);
      }, 1000);
    };
    fetchPosts();
  }, []);

  // 북마크 상태를 토글하는 핸들러
  const handleBookmarkToggle = (id: number) => {
    setPosts((prevPosts) => prevPosts.map((post) => (post.id === id ? { ...post, bookmarked: !post.bookmarked } : post)));
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 최신 3개 게시글만 표시
  const recentPosts = posts.slice(0, 3);

  return (
    <InfosListItemWrap>
      {recentPosts.length > 0 ? (
        recentPosts.map((post) => (
          <li key={post.id}>
            <InfosListItemBox>
              <ItemTitle>{post.title}</ItemTitle>
              <BookmarkButton onClick={() => handleBookmarkToggle(post.id)} $bookmarked={post.bookmarked}>
                {/* 북마크 상태에 따라 다른 이모지 또는 아이콘을 표시합니다 */}
                {post.bookmarked ? <IconBookmark status="fill" /> : <IconBookmark status="empty" />}
              </BookmarkButton>
            </InfosListItemBox>
          </li>
        ))
      ) : (
        <InfosListItemBox>게시글이 없습니다.</InfosListItemBox>
      )}
    </InfosListItemWrap>
  );
};

export default InfosListItem;
