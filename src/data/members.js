/**
 * 实验室成员数据 - 成员页与个人详情页共用
 */

export const professor = {
  id: 'professor',
  nameEn: 'Professor Name',
  nameKo: '교수님',
  email: 'professor@lab.edu',
  website: '',
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
    { id: 'professor-proj1', title: 'Project 1', link: '', image: '' },
    { id: 'professor-proj2', title: 'Project 2', link: '', image: '' },
    { id: 'professor-proj3', title: 'Project 3', link: '', image: '' }
  ]
}

export const students = [
  {
    id: 'yu-xinnuo',
    nameEn: 'YU XINNUO',
    nameKo: '유신녹｜박사',
    email: 'yuxinnuomay@gmail.com',
    website: '',
    interests: 'HCI / Creative Computing / Data visualization',
    avatar: './avatars/yuxinnuo.jpg',
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
      { id: 'yu-xinnuo-proj1', title: 'I.E.E', link: 'https://youtu.be/oiiYXG3IT6o?si=8LsFCHj9wu3seUcF', image: './avatars/yxn1.png' },
      { id: 'yu-xinnuo-proj2', title: 'EMOGym', link: 'https://youtu.be/rcXQpqeEiEU?si=Q69ldF2Yz03m4kY4', image: './avatars/yxn2.png' },
      { id: 'yu-xinnuo-proj3', title: 'Information juice machine', link: 'https://youtu.be/RR7CgKYgqWY?si=NJLEopKraGCzqq0y', image: './avatars/yxn3.png' }
    ]
  },
  {
    id: 'sun-xiaohu',
    nameEn: 'SUN XIAOHU',
    nameKo: '손소호｜석박통학',
    email: 'xh2024162898@hanyang.ac.kr',
    website: 'https://csdliu.github.io/mypage/',
    interests: 'Game Design / Interactive Storytelling / 3D Animation',
    avatar: './avatars/sunxiaohu.jpg',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.',
    education: [
      { period: '2019-2024', school: 'Hanyang University', degree: 'Bachelor of Interactive Video Design' },
      { period: '2024-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [],
    // projects: [
    //   { id: 'sun-xiaohu-proj1', title: 'Project 1', link: '', image: '' },
    //   { id: 'sun-xiaohu-proj2', title: 'Project 2', link: '', image: '' },
    //   { id: 'sun-xiaohu-proj3', title: 'Project 3', link: '', image: '' }
    // ]
  },
  {
    id: 'wang-wenhao',
    nameEn: 'WANG WENHAO',
    nameKo: '왕문호｜석박통학',
    email: 'w1293968742@gmail.com',
    website: '',
    interests: '3D Animation / AIGC',
    avatar: './avatars/wangwenhao.jpg',
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
    // projects: [
    //   { id: 'wang-wenhao-proj1', title: 'Project 1', link: '', image: '' },
    //   { id: 'wang-wenhao-proj2', title: 'Project 2', link: '', image: '' },
    //   { id: 'wang-wenhao-proj3', title: 'Project 3', link: '', image: '' }
    // ]
  },
  {
    id: 'li-siying',
    nameEn: 'LI SIYING',
    nameKo: '이사영｜석사',
    email: 'siyingli999@gmail.com',
    website: 'https://siyingli.framer.media/',
    interests: 'AI video aesthetics / Animation design',
    avatar: './avatars/lisiying.jpg',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.',
    education: [
      { period: '2019-2024', school: 'Hanyang University', degree: 'Bachelor of Interactive Video Design' },
      { period: '2024-2026', school: 'Hanyang University', degree: 'Master of Interactive Video Design' },
    ],
    // researchWork: [
    //   { date: '2025.10', title: 'Publication |', desc: '' },
    //   { date: '2026. 05', title: 'Publication |', desc: "" }
    // ],
    projects: [
      { id: 'li-siying-proj1', title: '동물계 핵인싸 카피바라의 하루', link: 'https://youtu.be/ZZFiTasvzT4', image: '' },
      { id: 'li-siying-proj2', title: '올리브영 비건 파티- Oliveyoung Vegan Beauty Party', link: 'https://youtu.be/U-_WlfxrdcU', image: '' },
     // { id: 'li-siying-proj3', title: 'Project 3', link: 'https://drive.google.com/drive/folders/1y-NFKIWTBiAkf2-y3FiQm3YxOSpUzvxw?usp=drive_link', image: '' }
    ]  },
  {
    id: 'fu-yulong',
    nameEn: 'FU YULONG',
    nameKo: '박위롱｜석사',
    email: 'f1013014336@gmail.com',
    website: '',
    interests: 'Character formation and narrative strategy in film',
    avatar: './avatars/yulong.jpg',
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
      { id: 'fu-yulong-proj1', title: 'I.E.E', link: 'https://youtu.be/oiiYXG3IT6o?si=8LsFCHj9wu3seUcF', image: '' },
      { id: 'fu-yulong-proj2', title: 'EMOGym', link: 'https://youtu.be/rcXQpqeEiEU?si=Q69ldF2Yz03m4kY4', image: '' },
      { id: 'fu-yulong-proj3', title: 'Information juice machine', link: 'https://youtu.be/RR7CgKYgqWY?si=NJLEopKraGCzqq0y', image: '' }
    ]  },
  {
    id: 'zhan-shunian',
    nameEn: 'ZHAN SHUNIAN',
    nameKo: '잔수연｜석박통학',
    email: 'shunianzhan@gmail.com',
    website: '',
    interests: 'AI generation / Character design in animation',
    avatar: './avatars/zhanshunian.jpg',
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
      { id: 'zhan-shunian-proj1', title: 'Portfolio', link: 'https://youtu.be/g8jr3g3AJDA?feature=shared', image: './avatars/zsn1.png' }
    ]  },
  {
    id: 'li-jintong',
    nameEn: 'LI JINTONG',
    nameKo: '이근동｜박사',
    email: 'lijintong@hanyang.ac.kr',
    website: 'https://jintong-art.github.io/portfolio/',
    interests: 'Animation design / Game design / AI-generated animation',
    avatar: './avatars/lijintong.jpg',
    bio: 'Researcher in HCI, creative computing and data visualization. Focus on algorithm education applications and AI-based systems for emotional development.',
    role: 'M.S.',
    education: [
      { period: '2019-2023', school: 'Hubei Institute of Fine Arts', degree: 'Bachelor of Fine Arts' },
      { period: '2023-2024', school: 'Hanseo University', degree: 'Master of Animation' },
      { period: '2025-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2024.06', title: 'Publication', desc: " An Analysis of the Ideographic Function of Color Language in 2D Animation: A Case Study of The Pool" }
    ],
    projects: [
      { id: 'li-jintong-proj1', title: 'THE DESERT SECRET', link: 'https://www.youtube.com/watch?v=EFMsKjfEXjg', image: '' },
      { id: 'li-jintong-proj2', title: 'THE SEA', link: 'https://www.youtube.com/watch?v=KNdo8s86aiY', image: '' },
      { id: 'li-jintong-proj3', title: 'JEEP', link: 'https://www.youtube.com/watch?v=f5S9rP8NIkg', image: '' }
    ]  },
  {
    id: 'ji-wanting',
    nameEn: 'JI WANTING',
    nameKo: '지완정｜석사',
    email: '',
    website: 'https://portfolio-sandy-zeta-roixe5lcj2.vercel.app/#works',
    interests: 'HCI / Animation Design / 3D Modeling',
    avatar: './avatars/jiwanting.jpg',
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
      { id: 'ji-wanting-proj1', title: '시간 역전의 여정', link: 'https://www.youtube.com/watch?v=BjW0hp4BoYw', image: '' },
      { id: 'ji-wanting-proj2', title: 'Bearly Home', link: 'https://www.youtube.com/watch?v=GCAjt6jnt4k', image: '' },
      { id: 'ji-wanting-proj3', title: 'Suitcase Advertising Animation', link: 'https://www.youtube.com/watch?v=SzdRPRMCwGQ', image: '' }
    ]  },
  {
    id: 'zhang-taibao',
    nameEn: 'ZHANG TAIBAO',
    nameKo: '장태보｜석박통합',
    email: 'ztb0421@gmail.com',
    website: 'https://ztb0421.wixsite.com/my-site',
    interests: 'Emotional Design / Game Experience / Generative AI',
    avatar: './avatars/zhangtaibao.jpg',
    bio: '',
    role: 'M.S.–Ph.D. Candidate',
    education: [
      { period: '2020-2022', school: 'Kongju National University', degree: 'Bachelor of Design' },
      { period: '2022-2026', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2024', title: 'A Study on the WTIF Model Based on the Without Thought Theory: Focusing on Black Myth: Wukong.', desc: '' },
      { date: '2025', title: 'A Theoretical and Empirical Analysis of Emotional Experience Design in Digital Games Based on the HAIM Model.', desc: '' },
      { date: '2025', title: 'Analysis of the Use of AI Generated Content (AIGC) in Game Narrative Design.', desc: '' }
    ],
    // projects: [
    //   { id: 'zhang-taibao-proj1', title: 'Project 1', link: '', image: '' },
    //   { id: 'zhang-taibao-proj2', title: 'Project 2', link: '', image: '' },
    //   { id: 'zhang-taibao-proj3', title: 'Project 3', link: '', image: '' }
    // ]
  },
  {
    id: 'qu-chengyuan',
    nameEn: 'CHENGYUAN QU',
    nameKo: '취청위안｜석사',
    email: 'quchengyuan86@gmail.com',
    website: 'https://quchengyuan.github.io/gerenwangye/',
    interests: 'Advertising Production / Film Production / New Media',
    avatar: './avatars/quchengyuan.jpg',
    bio: '',
    role: 'M.S.',
    education: [
      { period: '2022-2025', school: 'Chengdu College of Arts and Sciences', degree: 'B.A. in Broadcasting & TV Directing' },
      { period: '2025-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      {
        date: '2023-2025',
        title: 'Video Content & AI Imaging Research',
        desc: 'Short-form video planning, shooting, and editing; AI-assisted visual content creation; focus on new media platforms and audience behavior.'
      }
    ],
    projects: [
      { id: 'qu-chengyuan-proj1', title: 'Project 1', link: 'https://youtu.be/Vq8otb8lnk4', image: '' },
      { id: 'qu-chengyuan-proj2', title: 'Project 2', link: 'https://youtu.be/oVwTWjzcEz8', image: '' },
      { id: 'qu-chengyuan-proj3', title: 'Project 3', link: 'https://youtu.be/WVAzkkAaHyk', image: '' }
    ]  },
  {
    id: 'zhang-bin',
    nameEn: 'ZHANG BIN',
    nameKo: '장빈｜박사',
    email: 'fl7548085@gmail.com',
    website: 'https://fl7548085-spec.github.io/Personal-webpage/',
    interests: 'Animation / 3D Modeling / Generative AI',
    avatar: './avatars/zhangbin.jpg',
    bio: '',
    role: 'Ph.D. Student',
    education: [
      { period: '2013-2017', school: 'Jilin Animation Institute', degree: 'Bachelor of Arts in Animation' },
      { period: '2022-2024', school: 'Sangmyung University', degree: 'Master of Arts in Animation' },
      { period: '2025-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      {
        date: '2023.12',
        title: 'Solo Exhibition, Chenzhou Museum (Hunan, China)',
        desc: "Visual Expression of Zhuangzi's Philosophy through 3D Ink Art"
      }
    ],
    projects: [
      { id: 'zhang-bin-proj1', title: 'Project 1', link: 'https://www.youtube.com/watch?v=bo66zn3tmAg', image: '' },
      { id: 'zhang-bin-proj2', title: 'Project 2', link: 'https://www.youtube.com/watch?v=T_pZ2O1dl2c', image: '' },
      { id: 'zhang-bin-proj3', title: 'Project 3', link: 'https://www.youtube.com/watch?v=MHjiRk6Gh1E', image: '' }
    ]  },
  {
    id: 'wu-chenghao',
    nameEn: 'WU CHENGHAO',
    nameKo: '오성호｜박사',
    email: 'wchsgpg@gmail.com',
    website: 'https://wchsgpg.github.io/personal-site/',
    interests: 'Human-Computer Interaction (HCI) / Game Design / Digital Media Art Design',
    avatar: './avatars/wuchenghao.jpg',
    bio: '',
    role: 'Ph.D.',
    education: [
      { period: '2011-2015', school: 'Nanchang University', degree: 'B.A. in Animation' },
      { period: '2015-2018', school: 'Nanchang University', degree: 'M.A. in Digital Media Art' },
      { period: '2026-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2019.06', title: 'Visual Guidance Innovation of the Bada Shanren Memorial Hall Based on VR/AR Realistic Interaction Design', desc: 'Packaging Engineering' },
      { date: '2021.02', title: 'Application of Motion Capture Technology in Interactive Model Control', desc: 'Electronic Technology & Software Engineering' },
      { date: '2021.02', title: 'Application of Multimodal Virtual Combat Teaching Design in Firefighting Training', desc: 'China-Arab States Science and Technology Forum' },
      { date: '2021.04', title: 'An Analysis of the Application of Virtual Reality Technology in Practical Training Courses for Art and Design', desc: 'Fortune Time' },
      { date: '2022.07', title: 'Next-Generation Character Figure Modeling', desc: 'Horizontal Research Project' },
      { date: '2023.05', title: 'VR Training Development Project for Grassroots Depots and Stations', desc: 'Horizontal Research Project' },
      { date: '2024.03', title: 'Research on the Application of Multimodal Haptic Technology in the Interaction Design of Virtual Characters', desc: 'Vertical Research Project, Wenzhou Municipal Science and Technology Bureau' },
      { date: '2024.09', title: 'Research on the Application of Multimodal Haptic Technology in the Interaction Design of Virtual Characters', desc: 'Scientific Journal of Intelligent Systems Research' },
      { date: '2025.04', title: 'Design and Application of a Haptic Feedback System for Virtual Characters Based on Multimodal Perception', desc: 'Contemporary Education Frontiers' },
      { date: '2025.05', title: 'Research on Emergency Drills for Gas Station Accidents Based on Virtual Simulation', desc: 'Lecture Notes in Education, Arts, Management and Social Science' }
    ],
    projects: [
      { id: 'wu-chenghao-proj1', title: 'Zhang Yide Figurine Production', link: 'https://youtu.be/bUTiYjqUdKw', image: '' }
    ]  },
  {
    id: 'ji-xiaomeng',
    nameEn: 'JI XIAOMENG',
    nameKo: '기소몽｜석사',
    email: 'dddameinvvv@163.com',
    website: '',
    interests: 'Digital Media Art / Visual Design / Interactive Media',
    avatar: './avatars/jixiaomeng.jpg',
    bio: '',
    role: 'M.S.',
    education: [
      { period: '2021-2025', school: 'Wuhan Textile University', degree: 'Bachelor of Arts in Digital Media Art (Sino-British joint program, co-supervised by Birmingham City University, UK)' },
      { period: '2025-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      { date: '2022', title: 'Immortal selected for the 13th Annual Exhibition of Chinese University Students’ Artworks', desc: '' },
      { date: '2024', title: 'Team short film won Best Narrative Short Film Award at the Innovation Film Festival', desc: 'Served as cinematographer.' }
    ],
    projects: [
      { id: 'ji-xiaomeng-proj1', title: 'Project 1', link: 'https://youtu.be/3w8R9bwNqpA?feature=shared', image: '' },
      { id: 'ji-xiaomeng-proj2', title: 'Project 2', link: 'https://youtu.be/IlQ4ejDfipU?feature=shared', image: '' }
    ]  },
  {
    id: 'zhang-yurou',
    nameEn: 'ZHANG YUROU',
    nameKo: '장우유｜박사',
    email: 'rourou200210@gmail.com',
    website: 'https://rourou200210-ship-it.github.io/personal-web-sites/',
    interests: 'Animation Design / AI-generated Animation / Cross-media Practice',
    avatar: './avatars/zhangyurou.jpg',
    bio: '',
    role: 'Ph.D.',
    education: [
      { period: '2020-2025', school: 'Hubei Institute of Fine Arts', degree: 'Bachelor of Fine Arts' },
      { period: '2024-2025', school: 'Hanseo University', degree: 'Master of Animation' },
      { period: '2026-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      {
        date: '2025.06',
        title: 'A Brief Analysis of the Metaphorical Expression of Light and Shadow in the Relationship of 2D Animation Characters: Taking "Shadow" as an Example',
        desc: ''
      }
    ],
    projects: []  },
  {
    id: 'zhou-yutong',
    nameEn: 'ZHOU YUTONG',
    nameKo: '',
    email: 'm2yutongzhou@outlook.com',
    website: 'https://quchengyuan.github.io/zhouyutong/',
    interests: 'Interaction Design / 3D Modeling',
    avatar: './avatars/zhouyutong.jpg',
    bio: '',
    role: 'Master',
    education: [
      { period: '2019-2023', school: 'Jilin Animation Institute', degree: 'Bachelor of Art Design' },
      { period: '2026.03-', school: 'Hanyang University', degree: "Master's Candidate" }
    ],
    researchWork: [
      {
        date: '2022',
        title: 'Function Design of Exhibition Platform Based on Computer and Big Data Line',
        desc: 'EI-indexed Conference Paper (IC 2022, LNEE Vol. 935), 2nd Author.'
      }
    ],
    projects: []  },
  {
    id: 'wei-wenshu',
    nameEn: 'WEI WENSHU',
    nameKo: '웨문서｜박사',
    email: 'weiwenshushu@naver.com',
    website: 'https://weiwenshu1049940466-ctrl.github.io/Personal-Website/',
    interests: 'Concept Design / AI-generated',
    avatar: './avatars/weiwenshu.jpg',
    bio: '',
    role: 'Ph.D.',
    education: [
      { period: '2013-2018', school: 'Hubei Institute of Fine Arts', degree: 'Bachelor of Fine Arts' },
      { period: '2024-2026', school: 'SeoKyeong University', degree: 'Art Studies Film and Moving Image' },
      { period: '2026-', school: 'Hanyang University', degree: '' }
    ],
    researchWork: [
      {
        date: '2026.02',
        title: '생성형 AI 미디어 하에서 콘셉트 아트 창작 패러다임의 재구성 연구 - 마노비치 이론을 중심으로',
        desc: ''
      },
      {
        date: '2025.12',
        title: '影游融合视角下互动电影游戏的出现和方向',
        desc: ''
      }
    ],
    projects: []  }
]

/** 毕业学生 */
export const graduatedStudents = [
  {
    id: 'zhang-qiusheng',
    nameEn: 'ZHANG QIUSHENG',
    nameKo: '장추승｜박사',
    email: 'laoooozx@gmail.com',
    website: '',
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
    projects: []  },
  {
    id: 'xing-ying',
    nameEn: 'XING YING',
    nameKo: '형영｜석사',
    email: '397069768ying@gmail.com',
    website: '',
    interests: 'Video Editing / Special Effects Production / AI-assisted creative design',
    avatar: './avatars/xingying.jpg',
    bio: '',
    role: 'MF',
    education: [
      { period: '2015-2019', school: 'Nanjing Media University', degree: 'Bachelor of Arts' },
      { period: '2021-2024', school: 'Hanyang University', degree: 'PhD Design' }
    ],
    researchWork: [
      { date: '2022', title: 'A Study on Fan Favorability and Loyalty in Virtual Character Design in Advertising Marketing', desc: '' },
      { date: '2022', title: "Analysis of the development strategy of the virtual idol industry according to the media convergence trend — focusing on Luo Tianyi", desc: '' },
      { date: '2023', title: 'Experiential marketing analysis of digital signage advertising', desc: '' }
    ],
    projects: []  },
  {
    id: 'zhang-yumo',
    nameEn: 'ZHANG YUMO',
    nameKo: '장우목｜박사',
    email: 'pipimo123@gmail.com',
    website: '',
    interests:
      'Virtual reality animation design / Multimedia Design/ AI-assisted creative design',
    avatar: './avatars/zhangyumo.jpg',
    bio: '',
    role: 'Ph.D.',
    education: [
      { period: '2013-2017', school: 'Beijing Institute of Graphic Communication', degree: 'Bachelor of Photography' },
      { period: '2017-2019', school: 'Beijing Institute of Graphic Communication', degree: 'Master of Art Design' },
      { period: '2021-2025', school: 'Hanyang University', degree: 'PhD of Design' },
      { period: '2025-', school: 'Weihai Vocational College', degree: 'College of Culture and Tourism' }
    ],
    researchWork: [
      {
        date: '2024',
        title: 'A Study on the Interactive Method to Improve the Immersion of VR Animation Focused on <Bonfire>',
        desc: ''
      },
      {
        date: '2025',
        title: 'A Study on the Influence of Emotional Design on Audience in VR Animation Focusing on <Baba Yaga>',
        desc: ''
      },
      {
        date: '2025',
        title: 'A Study on Interactive Narrative Influencing the Immersiveness of VR Animation',
        desc: ''
      }
    ],
    projects: []  }
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

/** 根据 id 获取项目（从所有成员的 projects 中查找） */
export function getProjectById(id) {
  for (const member of allMembers) {
    const proj = member.projects?.find(p => p.id === id)
    if (proj) return proj
  }
  return null
}
