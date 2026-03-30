import { createI18n } from 'vue-i18n'

const STORAGE_KEY = 'lab-locale'

function getInitialLocale() {
  if (typeof localStorage === 'undefined') return 'en'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'ko' || saved === 'en') return saved
  return 'en'
}

export const messages = {
  en: {
    nav: {
      logo: 'lab name',
      homepage: 'Homepage',
      about: 'About',
      research: 'Research',
      news: 'News',
      labMember: 'Lab Member'
    },
    lang: {
      en: 'EN',
      ko: 'KO'
    },
    members: {
      professor: 'Professor',
      researchStudents: 'Research Students',
      graduatedStudents: 'Graduated Students'
    },
    memberDetail: {
      researchArea: 'Research area:',
      personalWebsite: 'Personal website',
      education: 'Education Background:',
      researchWork: 'Research Work:',
      project: 'Project:',
      tbd: 'TBD',
      notFound: 'Member not found.',
      backToList: 'Back to members',
      scheduleBtn: 'Schedule',
      scheduleModalTitle: 'Weekly schedule',
      close: 'Close',
      scheduleEmpty: '—',
      weekDays: {
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat',
        sun: 'Sun'
      }
    },
    projectDetail: {
      back: 'Back',
      project: 'Project',
      placeholder: 'Details to be added.',
      projectId: 'Project ID:',
      viewProject: 'View project →'
    }
  },
  ko: {
    nav: {
      logo: 'lab name',
      homepage: '홈',
      about: '소개',
      research: '연구',
      news: '소식',
      labMember: '연구실 구성원'
    },
    lang: {
      en: 'EN',
      ko: 'KO'
    },
    members: {
      professor: '교수',
      researchStudents: '연구원',
      graduatedStudents: '졸업생'
    },
    memberDetail: {
      researchArea: '연구 분야:',
      personalWebsite: '개인 웹사이트',
      education: '학력:',
      researchWork: '연구 실적:',
      project: '프로젝트:',
      tbd: '추후 공개',
      notFound: '해당 구성원을 찾을 수 없습니다.',
      backToList: '구성원 목록으로',
      scheduleBtn: '일정표',
      scheduleModalTitle: '주간 일정',
      close: '닫기',
      scheduleEmpty: '—',
      weekDays: {
        mon: '월',
        tue: '화',
        wed: '수',
        thu: '목',
        fri: '금',
        sat: '토',
        sun: '일'
      }
    },
    projectDetail: {
      back: '뒤로',
      project: '프로젝트',
      placeholder: '상세 내용은 추후 공개 예정입니다.',
      projectId: '프로젝트 ID:',
      viewProject: '프로젝트 보기 →'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages
})

export function persistLocale(locale) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale === 'ko' ? 'ko' : 'en'
  }
}
