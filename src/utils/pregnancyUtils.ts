export interface PregnancyInfo {
  dday: number;
  week: number;
  today: Date;
}

export const getPregnancyInfo = (dueDate: string): PregnancyInfo => {
  const today = new Date();
  const due = new Date(dueDate);

  // D-day 계산
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 임신 시작일 = 예정일 - 280일
  const conceptionDate = new Date(due);
  conceptionDate.setDate(conceptionDate.getDate() - 280);

  // 임신 몇 주차인지 계산
  const passedDays = Math.floor((today.getTime() - conceptionDate.getTime()) / (1000 * 60 * 60 * 24));
  const week = Math.floor(passedDays / 7);

  return { dday: diffDays, week, today };
};
