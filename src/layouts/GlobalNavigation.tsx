import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

/* 네비게이션 아이콘 */
import IconBriefing from '../components/icons/layout/IconBriefing';
import IconTodos from '../components/icons/layout/IconTodos';
import IconInfos from '../components/icons/layout/IconInfos';

const NavWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: var(--view-min-width);
  max-width: var(--view-max-width);
  height: var(--size-g-nav-height);
  margin: 0 auto;
  z-index: 10;
  border-top-left-radius: var(--size-border-radius-xl);
  border-top-right-radius: var(--size-border-radius-xl);
  background-color: var(--color-background-white);
  box-shadow: var(--box-shadow-default);
  border: 1px solid var(--color-border-color);
  padding: 0 var(--size-inner-padding);
`;

const NavWrapper = styled.ul`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const NavItem = styled.li`
  height: inherit;
  flex: 1;
  text-align: center;
`;

const NavItemLink = styled(Link)<{ $active: boolean }>`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--size-gap-sm);
  color: ${(props) => (props.$active ? 'var(--color-main-primary)' : 'var(--color-gray-500)')};
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semi-bold);

  &.path path {
    fill: ${(props) => (props.$active ? 'var(--color-main-primary)' : 'var(--color-gray-500)')};
  }

  &.rect rect {
    fill: ${(props) => (props.$active ? 'var(--color-main-primary)' : 'var(--color-gray-500)')};
  }

  &:hover {
    color: var(--color-main-primary);

    &.path path,
    &.rect rect {
      fill: var(--color-main-primary);
    }
  }
`;

const GlobalNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '브리핑', icon: <IconBriefing />, iconType: 'path' },
    { path: '/todos', label: '투두', icon: <IconTodos />, iconType: 'rect' },
    { path: '/infos', label: '정보', icon: <IconInfos />, iconType: 'path' },
  ];

  const isActive = (itemPath: string) => {
    if (itemPath === '/') return location.pathname === '/';
    if (itemPath === '/todos') return location.pathname.startsWith('/todos');
    if (itemPath === '/infos')
      return location.pathname.startsWith('/infos') || location.pathname.startsWith('/guides') || location.pathname.startsWith('/aianalysis');
    return false;
  };

  return (
    <NavWrap>
      <NavWrapper>
        {navItems.map((item, id) => {
          const active = isActive(item.path);
          return (
            <NavItem key={id}>
              <NavItemLink to={item.path} className={item.iconType} $active={active}>
                {item.icon}
                {item.label}
              </NavItemLink>
            </NavItem>
          );
        })}
      </NavWrapper>
    </NavWrap>
  );
};

export default GlobalNavigation;
