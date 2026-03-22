/**
 * 实验室成员数据 - 成员页与个人详情页共用
 */

export const professor = {
  id: 'professor',
  nameEn: 'Professor Name',
  nameKo: '교수님',
  email: 'professor@lab.edu',
  interests: 'Research area / topics',
  avatar: '',
  bio: '',
  role: 'Professor',
  education: [
    { period: '2015-2019', school: 'Hangzhou Dianzi University', degree: 'Bachelor of Engineering' },
    { period: '2021-2023', school: 'The University of Sydney', degree: 'Master of Interaction Design and Electronic Arts' },
    { period: '2025-', school: 'Hanyang University', degree: '' }
  ],
  researchWork: [
    { date: '2018.10', title: 'Zhejiang New Talent Plan Research Project', desc: 'Developed an algorithm education application towarded to primary school students and received research fundings.' },
    { date: '2023.12', title: 'Publication', desc: "Empowering autistic children's emotional development through AI-based Image Generation System' (2023) Frontiers in Art Research." }
  ],
  projects: [
    { id: 'professor-proj1', title: 'Project 1' },
    { id: 'professor-proj2', title: 'Project 2' },
    { id: 'professor-proj3', title: 'Project 3' }
  ]
}

export const students = [
  {
    id: 'yu-xinnuo',
    nameEn: 'YU XINNUO',
    nameKo: '유신녹｜박사',
    email: 'yuxinnuomay@gmail.com',
    interests: 'HCI / Creative Computing / data visualization',
    avatar: '/avatars/yuxinnuo.jpg',
    bio: '',
    role: 'Ph.D.',
    education: [
      { period: '2015-2019', school: 'Hangzhou Dianzi University', degree: 'Bachelor of Engineering' },
      { period: '2021-2023', school: 'The University of Sydney', degree: 'Master of Interaction Design and Electronic Arts' },
      { period: '2025-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2018.10', title: 'Zhejiang New Talent Plan Research Project |', desc: 'Developed an algorithm education application towarded to primary school students and received research fundings.' },
      { date: '2023.12', title: 'Publication |', desc: "Empowering autistic children's emotional development through AI-based Image Generation System' (2023) Frontiers in Art Research." }
    ],
    projects: [
      { id: 'yu-xinnuo-proj1', title: 'Project 1' },
      { id: 'yu-xinnuo-proj2', title: 'Project 2' },
      { id: 'yu-xinnuo-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'sun-xiaohu',
    nameEn: 'SUN XIAOHU',
    nameKo: '손소호｜석박통학',
    email: 'xh2024162898@hanyang.ac.kr',
    interests: 'Game Design / Interactive Storytelling / 3D Animation',
    avatar: '/avatars/sunxiaohu.jpg',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.–Ph.D. Candidate',
    education: [
      { period: '2019-2024', school: 'Hanyang University', degree: 'Bachelor of Interactive Video Design' },
      { period: '2024-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [],
    projects: [
      { id: 'sun-xiaohu-proj1', title: 'Project 1' },
      { id: 'sun-xiaohu-proj2', title: 'Project 2' },
      { id: 'sun-xiaohu-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'wang-wenhao',
    nameEn: 'WANG WENHAO',
    nameKo: '왕문호｜석박통학',
    email: 'w1293968742@gmail.com',
    interests: '3D Animation / AIGC',
    avatar: '',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'Ph.D. Candidate',
    education: [
      { period: '2015-2019', school: 'Communication University of Shanxi', degree: 'Bachelor of Arts' },
      { period: '2021-', school: 'The University of Hanyang' },
    ],
    researchWork: [
      { date: '2024.06', title: 'Publication |', desc: '왕문호, 노승관.(2024).메타버스 환경에서 광고에 나타난 가상 캐릭터 활용과 영향의 분석.한국디자인문화학회지,30(2),241-255.' },
      { date: '2025.06', title: 'Publication |', desc: "왕문호, 노승관.(2025).혁신 확산 이론에 기반한 생성형 AI의 3D 애니메이션 제작 과정에서 활용 분석.한국디자인문화학회지,31(2),419-433." },
      { date: '2025.12', title: 'Publication |', desc: "왕문호, 노승관.(2025).매체 생태학 관점에서 생성형 AI의 3D 애니메이션에 대한 구조적 재구성 분석.한국디자인문화학회지,31(4),505-519." }
    ],
    projects: [
      { id: 'wang-wenhao-proj1', title: 'Project 1' },
      { id: 'wang-wenhao-proj2', title: 'Project 2' },
      { id: 'wang-wenhao-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'li-siying',
    nameEn: 'LI SIYING',
    nameKo: '이사영｜석사',
    email: 'siyingli999@gmail.com',
    interests: 'AI 영상 미학, 애니메이션 디자인',
    avatar: '',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.',
    education: [
      { period: '2019-2024', school: 'Hanyang University', degree: 'Bachelor of Interactive Video Design' },
      { period: '2024-2026', school: 'Hanyang University', degree: 'Master of Interactive Video Design' },
    ],
    researchWork: [
      { date: '2025.10', title: 'Publication |', desc: '' },
      { date: '2026. 05', title: 'Publication |', desc: "" }
    ],
    projects: [
      { id: 'li-siying-proj1', title: 'Project 1' },
      { id: 'li-siying-proj2', title: 'Project 2' },
      { id: 'li-siying-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'fu-yulong',
    nameEn: 'FU YULONG',
    nameKo: '박위롱｜석사',
    email: 'f1013014336@gmail.com',
    interests: '영화의 캐릭터 형성 및 서사 전략 연구',
    avatar: '',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.',
    education: [
      { period: '2019-2024', school: 'Hanyang University', degree: 'Bachelor of Interactive Video Design' },
      { period: '2024-2026', school: 'Hanyang University', degree: 'Master of Interactive Video Design' },
    ],
    researchWork: [
      { date: '2025. 06', title: 'Publication |', desc: 'A Comparative Study on the Cinematic Adaptation Strategies of "Flawed" Traditional Mythological Characters Taking the Film Series Thor, Ne Zha, and Hercules (2014) as Examples' },
    ],
    projects: [
      { id: 'fu-yulong-proj1', title: 'Project 1' },
      { id: 'fu-yulong-proj2', title: 'Project 2' },
      { id: 'fu-yulong-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'zhan-shunian',
    nameEn: 'ZHAN SHUNIAN',
    nameKo: '잔수연｜석박통학',
    email: 'shunianzhan@gmail.com',
    interests: 'AI생성, 애니메이션의 캐릭터 디자인',
    avatar: '',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'Ph.D. Candidate',
    education: [
      { period: '2018-2022', school: 'Sichuan Fine Arts Institute', degree: 'Bachelor of Arts in Arts and Crafts' },
      { period: '2024-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2025.09', title: 'Publication |', desc: 'From 2D to 3D: A Study on Emotional Expression in the Transition of Animation Styles' },

    ],
    projects: [
      { id: 'zhan-shunian-proj1', title: 'Project 1' },
      { id: 'zhan-shunian-proj2', title: 'Project 2' },
      { id: 'zhan-shunian-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'li-jintong',
    nameEn: 'LI JINTONG',
    nameKo: '이근동｜박사',
    email: 'lijintong@hanyang.ac.kr',
    interests: '애니메이션 디자인, 게임 디자인, AI 생성 애니메이션',
    avatar: '',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'Ph.D.',
    education: [
      { period: '2019-2023', school: 'Hubei Institute of Fine Arts', degree: 'Bachelor of Fine Arts' },
      { period: '2023-2024', school: 'Hanseo University', degree: 'Master of Animation' },
      { period: '2025-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2024.06', title: 'Publication', desc: " An Analysis of the Ideographic Function of Color Language in 2D Animation: A Case Study of The Pool" }
    ],
    projects: [
      { id: 'li-jintong-proj1', title: 'Project 1' },
      { id: 'li-jintong-proj2', title: 'Project 2' },
      { id: 'li-jintong-proj3', title: 'Project 3' }
    ]
  },
  {
    id: 'ji-wanting',
    nameEn: 'JI WANTING',
    nameKo: '지완정｜석사',
    email: '',
    interests: 'HCI / Animation Design / 3D Modeling',
    avatar: '',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.',
    education: [
      { period: '2018-2022', school: 'Zhongnan University of Economics and Law', degree: 'Bachelor of Arts & Bachelor of Digital Content' },
      { period: '2024-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2021.09', title: 'Publication |', desc: 'Won the Excellent Award in the Animation Category of Hubei Province at the 13th National Advertising Art Design Competition for College Students.' },
      { date: '2022.06', title: 'undergraduate graduation project', desc: 'Undergraduate graduation project was awarded the Best Creative Award by the faculty.' }
    ],
    projects: [
      { id: 'ji-wanting-proj1', title: 'Project 1' },
      { id: 'ji-wanting-proj2', title: 'Project 2' },
      { id: 'ji-wanting-proj3', title: 'Project 3' }
    ]
  }
]

/** 毕业学生 */
export const graduatedStudents = [
  {
    id: 'zhang-qiusheng',
    nameEn: 'ZHANG QIUSHENG',
    nameKo: '장추승｜박사',
    email: 'laoooozx@gmail.com',
    interests: 'Generative AI / AI-assisted creative design / Artificial Intelligence Design',
    avatar: '',
    bio: '',
    role: 'Ph.D.',
    education: [
      { period: '2018-2022', school: 'Youngsan University', degree: 'Bachelor of Arts' },
      { period: '2022-2026', school: 'Hanyang University', degree: 'PhD in Design' }
    ],
    researchWork: [
      { date: '2023', title: 'A Study on The Influencing Factors of TikTok (DouYin) User Satisfaction and Revisit Intention Based on The TAM Model and Media Richness Theory', desc: '' },
      { date: '2024', title: 'A Study on Machine Learning Teaching Methods for Interactive Design: Focusing on the Use of Generative Model Tools', desc: '' },
      { date: '2025', title: 'A Study on the Influence of Stylized Image Generation Capabilities of AI on Image Generation Appropriateness for Creative Design', desc: '' },
      { date: '2026', title: 'A Study on Enhancing User Satisfaction with Image-Generating AI Design', desc: '' }
    ],
    projects: []
  }
]

/** 根据 id 获取成员 */
export function getMemberById(id) {
  if (professor.id === id) return professor
  const student = students.find(m => m.id === id)
  if (student) return student
  return graduatedStudents.find(m => m.id === id)
}

/** 所有成员列表（用于路由验证） */
export const allMembers = [professor, ...students, ...graduatedStudents]
