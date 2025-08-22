import React, { useState } from 'react';
import InnerLayout from '../../layouts/InnerLayout';
import HeaderWithBack from '../../layouts/HeaderWithBack';
import { SortText } from '../todos/TodoDrafts';
import { ShadowBoxStyles } from '../../components/common/ShadowBox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BookmarkButton, ItemTitle, PolicyPost } from './components/InfosListItem';
import IconBookmark from '../../components/icons/features/infos/IconBookmark';

export const dummyData: PolicyPost[] = [
  {
    id: 1,
    title: '헬스장 등록하기',
    bookmarked: true,
  },
  {
    id: 2,
    title: '헬스장 등록하기',
    bookmarked: true,
  },
  {
    id: 3,
    title: '헬스장 등록하기',
    bookmarked: true,
  },
];

const BookmarkListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const StyledBookmarkListItem = styled.li`
  ${ShadowBoxStyles}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfosBookmarks = () => {
  const [posts, setPosts] = useState<PolicyPost[]>([]);

  // 북마크 상태를 토글하는 핸들러
  const handleBookmarkToggle = (id: number) => {
    setPosts((prevPosts) => prevPosts.map((post) => (post.id === id ? { ...post, bookmarked: !post.bookmarked } : post)));
  };

  return (
    <InnerLayout bgColor="gray-light" innerPadding={false} withHeader={true} withNav={false}>
      <HeaderWithBack bgColor="gray-light">정책 북마크</HeaderWithBack>
      <InnerLayout paddingTop={false}>
        <SortText>최신순</SortText>
        <BookmarkListWrap>
          {dummyData.map((item) => (
            <StyledBookmarkListItem key={item.id}>
              <ItemTitle>
                <Link to={`/infos/policies/${item.id}`}>{item.title} </Link>
              </ItemTitle>
              <BookmarkButton onClick={() => handleBookmarkToggle(item.id)} $bookmarked={item.bookmarked}>
                {/* 북마크 상태에 따라 다른 이모지 또는 아이콘을 표시합니다 */}
                {item.bookmarked ? <IconBookmark status="fill" fillColor="secondary-primary" /> : <IconBookmark status="empty" />}
              </BookmarkButton>
            </StyledBookmarkListItem>
          ))}
        </BookmarkListWrap>
      </InnerLayout>
    </InnerLayout>
  );
};

export default InfosBookmarks;
