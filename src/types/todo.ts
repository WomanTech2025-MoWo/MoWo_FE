export type DraftTodo = {
  id: number;
  text: string; // 필수 (임시보관함에서도 노출)
  memo?: string; // 선택
  category?: 'health' | 'work' | 'personal'; // 임시보관함 선택 / 등록시 필수
  dueDate?: string; // yyyy-mm-dd (임시보관함 선택 / 등록시 필수)
  isPinned?: boolean; // 브리핑 고정 (임시보관함에서는 필요 없음)
  alarmTime?: string; // HH:mm (임시보관함에서는 필요 없음)
};
