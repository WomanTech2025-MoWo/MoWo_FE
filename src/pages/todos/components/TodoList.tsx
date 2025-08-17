import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoCateButton from './TodoCateButton';
import ShadowBox from '../../../components/common/ShadowBox';
import TodoListItem from './TodoListItem';
import IconCategory from '../../../components/icons/features/todos/IconCategory';

type CategoryList = 'all' | 'health' | 'work' | 'personal';

interface TodoItem {
  id: number;
  text: string;
  category: 'health' | 'work' | 'personal';
  checked: boolean;
}

interface TodoSection {
  name: CategoryList;
  label: string;
  done: number;
  total: number;
  items: TodoItem[];
}

const dummyData: TodoSection[] = [
  {
    name: 'health',
    label: '건강',
    done: 1,
    total: 3,
    items: [
      { id: 1, text: '운동하기', category: 'health', checked: true },
      { id: 2, text: '물 마시기', category: 'health', checked: false },
      { id: 3, text: '비타민 챙기기', category: 'health', checked: false },
    ],
  },
  {
    name: 'work',
    label: '업무',
    done: 2,
    total: 4,
    items: [
      { id: 4, text: '회의 준비', category: 'work', checked: true },
      { id: 5, text: '리포트 작성', category: 'work', checked: true },
      { id: 6, text: '코드 리뷰', category: 'work', checked: false },
      { id: 7, text: '배포', category: 'work', checked: false },
    ],
  },
  {
    name: 'personal',
    label: '개인',
    done: 0,
    total: 2,
    items: [
      { id: 8, text: '영화 보기', category: 'personal', checked: false },
      { id: 9, text: '책 읽기', category: 'personal', checked: false },
    ],
  },
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
  const [sections] = useState<TodoSection[]>(dummyData);
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
        const allVisible = dummyData.every((section) => {
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
        {sections.map((section) => (
          <TodoListWrapper
            key={section.name}
            ref={(el) => {
              sectionRefs.current[section.name] = el;
            }}
            data-category={section.name}>
            <SectionTitle>
              <CategoryTitle>
                <IconCategory status={section.name as any} />
                {section.label}
              </CategoryTitle>
              <CategoryTotal>
                {section.done}/{section.total}
              </CategoryTotal>
            </SectionTitle>
            <ul>
              {section.items.map((item) => (
                <TodoListItem key={item.id} {...item} />
              ))}
            </ul>
          </TodoListWrapper>
        ))}
      </TodoListWrap>
    </>
  );
};

export default TodoList;
