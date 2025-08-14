import React, { useRef, useEffect, useState, JSX } from 'react';
import styled from 'styled-components';
import TodoCateButton from './TodoCateButton';
import ShadowBox from '../../../components/common/ShadowBox';
import TodoListItem from '../../../components/features/todos/TodoListItem';
import IconCategory from '../../../components/icons/features/todos/IconCategory';

type CategoryList = 'all' | 'health' | 'work' | 'personal';

interface SectionItem {
  name: CategoryList;
  label: string;
  done: number;
  total: number;
  icon: JSX.Element;
}

const sectionData: SectionItem[] = [
  { name: 'health', label: '건강', done: 1, total: 3, icon: <IconCategory status="health" /> },
  { name: 'work', label: '업무', done: 1, total: 3, icon: <IconCategory status="work" /> },
  { name: 'personal', label: '개인', done: 1, total: 3, icon: <IconCategory status="personal" /> },
];

const TodoListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TodoListWrapper = styled(ShadowBox)``;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CategoryTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: var(--font-weight-bold);
`;

const CategoryTotal = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-gray-700);
`;

const TodoList = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryList>('health');
  const sectionRefs = useRef<Partial<Record<CategoryList, HTMLDivElement | null>>>({}); // 카테고리별 ref 저장

  const scrollToSection = (name: CategoryList) => {
    const ref = sectionRefs.current[name];
    if (ref) {
      const topOffset = 60; // sticky 카테고리 높이 + 갭
      const top = ref.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면에 보이는 항목들만 필터
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) return;

        // 화면에 모든 섹션이 다 들어오는 경우 첫 번째 섹션 active
        const allVisible = sectionData.every((section) => {
          const ref = sectionRefs.current[section.name];
          return ref && ref.getBoundingClientRect().top >= 0 && ref.getBoundingClientRect().bottom <= window.innerHeight;
        });

        if (allVisible) {
          setActiveCategory('health');
          return;
        }

        // 가장 위에 있는 항목 기준으로 active 설정
        const topEntry = visibleEntries.reduce((prev, curr) => (prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr));

        setActiveCategory(topEntry.target.getAttribute('data-category') as CategoryList);
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TodoCateButton activeCategory={activeCategory} onCategoryClick={scrollToSection} />
      <TodoListWrap>
        {sectionData.map((section) => (
          <TodoListWrapper
            key={section.name}
            ref={(el) => {
              sectionRefs.current[section.name] = el;
            }}
            data-category={section.name}>
            <SectionTitle>
              <CategoryTitle>
                {section.icon}
                {section.label}
              </CategoryTitle>
              <CategoryTotal>
                {section.done}/{section.total}
              </CategoryTotal>
            </SectionTitle>
            <TodoListItem />
          </TodoListWrapper>
        ))}
      </TodoListWrap>
    </>
  );
};

export default TodoList;
