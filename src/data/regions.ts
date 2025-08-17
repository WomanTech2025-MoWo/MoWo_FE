export interface Region {
  slug: string; // 영문 소문자 표기, 라우팅/쿼리 파라미터용
  code: string; // 법정동 코드 (구 단위 전체)
  label: string; // 표시할 이름
}

export const regions: Region[] = [
  { slug: 'all', code: '', label: '전체' },
  { slug: 'gangnam', code: '1168000000', label: '강남구' },
  { slug: 'gangdong', code: '1174000000', label: '강동구' },
  { slug: 'gangbuk', code: '1130500000', label: '강북구' },
  { slug: 'gangseo', code: '1150000000', label: '강서구' },
  { slug: 'gwanak', code: '1162000000', label: '관악구' },
  { slug: 'gwangjin', code: '1121500000', label: '광진구' },
  { slug: 'guro', code: '1153000000', label: '구로구' },
  { slug: 'geumcheon', code: '1154500000', label: '금천구' },
  { slug: 'nowon', code: '1135000000', label: '노원구' },
  { slug: 'dobong', code: '1132000000', label: '도봉구' },
  { slug: 'dongdaemun', code: '1123000000', label: '동대문구' },
  { slug: 'dongjak', code: '1159000000', label: '동작구' },
  { slug: 'mapo', code: '1144000000', label: '마포구' },
  { slug: 'seodaemun', code: '1141000000', label: '서대문구' },
  { slug: 'seocho', code: '1165000000', label: '서초구' },
  { slug: 'seongdong', code: '1120000000', label: '성동구' },
  { slug: 'seongbuk', code: '1129000000', label: '성북구' },
  { slug: 'songpa', code: '1171000000', label: '송파구' },
  { slug: 'yangcheon', code: '1147000000', label: '양천구' },
  { slug: 'yeongdeungpo', code: '1156000000', label: '영등포구' },
  { slug: 'yongsan', code: '1117000000', label: '용산구' },
  { slug: 'eunpyeong', code: '1138000000', label: '은평구' },
  { slug: 'jongno', code: '1111000000', label: '종로구' },
  { slug: 'jung', code: '1114000000', label: '중구' },
  { slug: 'jungnang', code: '1126000000', label: '중랑구' },
];
