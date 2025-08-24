import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoCateButton from './TodoCateButton';
import ShadowBox from '../../../components/common/ShadowBox';
import TodoListItem, { TodoListItemProps } from './TodoListItem';
import IconCategory from '../../../components/icons/features/todos/IconCategory';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export type CategoryList = 'ALL' | 'HEALTH' | 'WORK' | 'PERSONAL';

interface TodoItem {
  id: number;
  todoDate: string;
  completeDate: string;
  alarmDate: string;
  title: string;
  memo: string;
  isFixed: boolean;
  category: 'WORK' | 'HEALTH' | 'PERSONAL';
  isDone: boolean;
  createdAt: string;
}

interface TodoSection {
  name: CategoryList;
  label: string;
  todos: TodoItem[];
  totalCount: number;
  completedCount: number;
}

interface TodosApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    WORK: TodoSection;
    HEALTH: TodoSection;
    PERSONAL: TodoSection;
  };
}

interface TodoListProps {
  selectedDate: Date;
  todos?: TodoListItemProps[];
}

const TodoListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-lg);
`;

const TodoListWrapper = styled(ShadowBox)`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-md);
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: var(--size-gap-xs);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
`;

const CategoryTotal = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-gray-700);
`;

const TodoItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-sm);
`;

const TodoList = ({ selectedDate, todos }: TodoListProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryList>('HEALTH');
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const [sections, setSections] = useState<TodoSection[]>([]);

  const sectionRefs = useRef<Partial<Record<CategoryList, HTMLDivElement | null>>>({}); // 카테고리별 ref 저장
  const isManualScroll = useRef(false);

  const filteredTodos = todos?.filter((todo) => todo.todoDate === dayjs(selectedDate).format('YYYY-MM-DD')) ?? [];

  // API 연동
  const fetchTodos = async (): Promise<TodoSection[]> => {
    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
    const res = await fetch(`/api/todos?date=${formattedDate}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const data = await res.json();

    const mapCategory = (key: string) => {
      switch (key.toUpperCase()) {
        case 'WORK':
          return 'WORK';
        case 'HEALTH':
          return 'HEALTH';
        case 'PERSONAL':
          return 'PERSONAL';
        default:
          return 'ALL';
      }
    };

    // sections 배열 생성
    const sectionsArr: TodoSection[] = (Object.entries(data.result) as [string, TodoSection][]).map(([key, section]) => ({
      name: mapCategory(key),
      label: key.toLowerCase() === 'work' ? '업무' : key.toLowerCase() === 'health' ? '건강' : '개인',
      completedCount: section.completedCount,
      totalCount: section.totalCount,
      todos: section.todos.map((todo) => ({
        ...todo,
        category: mapCategory(key) as 'HEALTH' | 'WORK' | 'PERSONAL',
      })),
    }));

    // 순서 변경: HEALTH -> WORK -> PERSONAL
    const order: CategoryList[] = ['HEALTH', 'WORK', 'PERSONAL'];
    const sortedSections = sectionsArr.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

    return sortedSections;
  };

  // API 호출
  useEffect(() => {
    fetchTodos().then((data) => {
      setSections(data);
    });
  }, [selectedDate]);

  // 스크롤
  const scrollToSection = (name: CategoryList) => {
    isManualScroll.current = true;
    setActiveCategory(name);

    const ref = sectionRefs.current[name];
    if (ref) {
      const topOffset = 60; // sticky 카테고리 높이 + 갭
      const top = ref.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    // 일정 시간 뒤에 observer 다시 허용
    setTimeout(() => {
      isManualScroll.current = false;
    }, 800); // smooth scroll duration 정도로
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return; // 수동 스크롤 중일 땐 무시

        // 화면에 보이는 항목들만 필터
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) return;

        // 화면에 모든 섹션이 다 들어오는 경우 첫 번째 섹션 active
        const allVisible = sections.every((section) => {
          const ref = sectionRefs.current[section.name];
          return ref && ref.getBoundingClientRect().top >= 0 && ref.getBoundingClientRect().bottom <= window.innerHeight;
        });

        if (allVisible) {
          setActiveCategory('HEALTH');
          return;
        }

        // 가장 위에 있는 항목 기준으로 active 설정
        const topEntry = visibleEntries.reduce((prev, curr) =>
          Math.abs(prev.boundingClientRect.top) < Math.abs(curr.boundingClientRect.top) ? prev : curr
        );

        setActiveCategory(topEntry.target.getAttribute('data-category') as CategoryList);
      },
      { threshold: 0 }
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
        {sections.map((section, id) => (
          <TodoListWrapper
            key={id}
            ref={(el) => {
              sectionRefs.current[section.name] = el;
            }}
            data-category={section.name}>
            <SectionTitle>
              <CategoryTitle>
                <IconCategory status={section.name as any} width="24" height="24" />
                {section.label}
              </CategoryTitle>
              <CategoryTotal>
                {section.completedCount}/{section.totalCount}
              </CategoryTotal>
            </SectionTitle>
            {section.todos.length > 0 && (
              <TodoItemWrapper>
                {section.todos.map((todo) => (
                  <TodoListItem
                    todoTitle={todo.title}
                    key={todo.id}
                    {...todo}
                    isOpen={openItemId === todo.id}
                    onOpen={() => setOpenItemId(todo.id)}
                    onClose={() => setOpenItemId(null)}
                  />
                ))}
                {filteredTodos.map((todo) => (
                  <TodoListItem key={todo.id} {...todo} />
                ))}
              </TodoItemWrapper>
            )}
          </TodoListWrapper>
        ))}
      </TodoListWrap>
    </>
  );
};

export default TodoList;
