import React, { useRef, useEffect, useState, useCallback, useMemo, startTransition } from 'react';
import styled from 'styled-components';
import TodoCateButton from './TodoCateButton';
import ShadowBox from '../../../components/common/ShadowBox';
import TodoListItem, { TodoListItemProps } from './TodoListItem';
import IconCategory from '../../../components/icons/features/todos/IconCategory';
import dayjs from 'dayjs';
import { todoService } from '../../../api/services';
import { ApiError } from '../../../api/client';
import SecureTokenStorage from '../../../utils/secureStorage';
import { isTodosResponse, safeGet, isObject } from '../../../utils/typeGuards';

// dayjs 플러그인은 필요한 경우에만 import하여 번들 크기 최적화

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

// 성능 최적화: 큰 리스트를 위한 가상화 임계값
const VIRTUALIZATION_THRESHOLD = 50;

const TodoList = ({ selectedDate, todos }: TodoListProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryList>('HEALTH');
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const [sections, setSections] = useState<TodoSection[]>([]);

  const sectionRefs = useRef<Partial<Record<CategoryList, HTMLDivElement | null>>>({}); // 카테고리별 ref 저장
  const isManualScroll = useRef(false);

  // useMemo로 필터링 결과 캐싱
  const filteredTodos = useMemo(() => {
    if (!todos) return [];
    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
    return todos.filter((todo) => todo.todoDate === formattedDate);
  }, [todos, selectedDate]);

  // API 연동
  const fetchTodos = useCallback(async (): Promise<TodoSection[]> => {
    try {
      // 인증 확인
      if (!SecureTokenStorage.isTokenValid()) return [];

      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
      
      // 새로운 todoService 사용 (타입 가드로 검증됨)
      const todosData = await todoService.getTodos(formattedDate);
      

    const mapCategory = (key: string): CategoryList => {
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

    // sections 배열 생성 (타입 가드로 안전하게 처리)
    const sectionsArr: TodoSection[] = [];
    
    if (isObject(todosData)) {
      Object.entries(todosData).forEach(([key, categoryData]: [string, any]) => {
        const category = mapCategory(key);
        if (!category || category === 'ALL') return;

        // categoryData 안전성 검증
        if (!isObject(categoryData)) {
          console.warn(`카테고리 ${key} 데이터가 유효하지 않음:`, categoryData);
          return;
        }

        const todos = Array.isArray(categoryData.todos) ? categoryData.todos : [];
        const completedCount = typeof categoryData.completedCount === 'number' ? categoryData.completedCount : 0;
        const totalCount = typeof categoryData.totalCount === 'number' ? categoryData.totalCount : 0;
        

        sectionsArr.push({
          name: category,
          label: key.toLowerCase() === 'work' ? '업무' : key.toLowerCase() === 'health' ? '건강' : '개인',
          completedCount,
          totalCount,
          todos: todos.map((todo: any) => ({
            id: typeof todo.id === 'number' ? todo.id : 0,
            title: typeof todo.title === 'string' ? todo.title : '',
            todoCategory: todo.todoCategory || category,
            todoDate: typeof todo.todoDate === 'string' ? todo.todoDate : '',
            memo: typeof todo.memo === 'string' ? todo.memo : '',
            isCompleted: typeof todo.isCompleted === 'boolean' ? todo.isCompleted : false,
            category: category as 'HEALTH' | 'WORK' | 'PERSONAL',
            completeDate: typeof todo.completeDate === 'string' ? todo.completeDate : '',
            alarmDate: typeof todo.alarmDate === 'string' ? todo.alarmDate : '',
            isFixed: typeof todo.isFixed === 'boolean' ? todo.isFixed : false,
            isDone: typeof todo.isCompleted === 'boolean' ? todo.isCompleted : false,
            createdAt: typeof todo.createdAt === 'string' ? todo.createdAt : '',
          })),
        });
      });
    } else {
    }

    // 순서 변경: HEALTH -> WORK -> PERSONAL
    const order: CategoryList[] = ['HEALTH', 'WORK', 'PERSONAL'];
    const sortedSections = sectionsArr.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

    return sortedSections;
    } catch (err) {
      console.error('❌ 투두 목록 조회 실패:', err);
      
      if (err instanceof ApiError && err.statusCode === 401) {
        // 401 에러는 이미 인터셉터에서 처리됨
        return [];
      }
      
      return [];
    }
  }, [selectedDate]);

  // API 호출 (React 18 startTransition으로 성능 개선)
  useEffect(() => {
    fetchTodos().then((data) => {
      startTransition(() => {
        setSections(data);
      });
    });
  }, [selectedDate, fetchTodos]);

  // useCallback으로 스크롤 함수 최적화
  const scrollToSection = useCallback((name: CategoryList) => {
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
  }, []);

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

  // 성능 최적화: 이벤트 핸들러들을 useCallback으로 최적화
  const handleTodoOpen = useCallback((id: number) => {
    setOpenItemId(id);
  }, []);

  const handleTodoClose = useCallback(() => {
    setOpenItemId(null);
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
                    onOpen={() => handleTodoOpen(todo.id)}
                    onClose={handleTodoClose}
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
