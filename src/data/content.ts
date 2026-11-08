// ============================================================
// 个人网站内容数据 - 占位信息，方便后续替换为真实内容
// ============================================================

/** 个人基本信息 - 替换为你的真实信息 */
export const personalInfo = {
  name: 'RUIXUAN ZHANG',
  nameZh: '张睿轩',
  title: 'IMAGINATION, PERSEVERANCE, GROW',
  tagline: '用代码构建创意，用设计传递温度',
  email: 'zhang2015ab@163.com',
  location: '江苏 无锡',
  avatar: '/avatar-placeholder.svg',
  socialLinks: {
    github: 'https://github.com/ruixuanzhang',
    twitter: 'https://twitter.com/ruixuanzhang',
    linkedin: 'https://linkedin.com/in/ruixuanzhang',
    dribbble: 'https://dribbble.com/ruixuanzhang',
  },
};

/** 自我介绍 - 替换为你的真实简介 */
export const aboutMe = {
  intro: `我是一名拥有 6 年经验的创意设计师与全栈开发者，专注于将大胆的设计理念与扎实的技术能力相结合。我相信好的设计不仅要好看，更要能解决问题、创造价值。`,
  description: `从品牌视觉到交互界面，从前端开发到全栈架构，我享受在设计与工程的交叉地带探索。每一个项目都是一次新的冒险，我乐于接受挑战，追求极致的用户体验。`,
  stats: [
    { label: '年从业经验', value: '6+' },
    { label: '完成项目', value: '50+' },
    { label: '合作客户', value: '30+' },
    { label: '获得奖项', value: '8' },
  ],
  skills: [
    { name: 'UI/UX 设计', level: 95, category: 'design' },
    { name: '品牌视觉', level: 90, category: 'design' },
    { name: 'React / Next.js', level: 92, category: 'dev' },
    { name: 'TypeScript', level: 88, category: 'dev' },
    { name: 'Node.js', level: 85, category: 'dev' },
    { name: 'Figma', level: 93, category: 'design' },
    { name: '动效设计', level: 80, category: 'design' },
    { name: 'Python', level: 75, category: 'dev' },
  ],
};

/** 经历数据 - 替换为你的真实经历 */
export const experiences = {
  work: [
    {
      id: 'w1',
      company: '无锡连元街小学蘅芳分校',
      role: '在读学生',
      period: '2024 - 至今',
      description: '在连元街小学蘅芳分校继续学习，积极参与各类学科竞赛和课外活动，全面发展。',
      highlights: ['学科竞赛', '课外活动', '全面发展'],
    },
    {
      id: 'w2',
      company: '无锡天一第二实验小学',
      role: '学生',
      period: '2021 - 2023',
      description: '在天一第二实验小学度过了充实的学习时光，打下了扎实的基础学科功底。',
      highlights: ['基础学科', '校园活动', '团队协作'],
    },
    {
      id: 'w3',
      company: '编程社团',
      role: '社团成员',
      period: '2026 - 至今',
      description: '参加学校编程社团，学习编程基础知识，培养逻辑思维能力，探索代码世界的乐趣。',
      highlights: ['编程学习', '逻辑思维', '创意实践'],
    },
  ],
  education: [
    {
      id: 'e1',
      school: '无锡天一第二实验小学',
      degree: '小学',
      period: '2021 - 2023',
      description: '在天一第二实验小学学习，培养了良好的学习习惯和基础知识。',
    },
    {
      id: 'e2',
      school: '无锡连元街小学蘅芳分校',
      degree: '小学',
      period: '2024 - 至今',
      description: '就读于连元街小学蘅芳分校，积极参与各类学科与课外活动。',
    },
  ],
};

/** 作品集数据 - 替换为你的真实作品 */
export const portfolioItems = [
  {
    id: 'p1',
    title: 'Nova 品牌重塑',
    category: '品牌设计',
    year: '2024',
    description: '为科技初创公司 Nova 进行全方位品牌升级，包括 Logo 设计、VI 系统、官网设计与开发。',
    tags: ['品牌', 'VI', '网站'],
    color: '#FFE500',
    image: '/placeholder-1.svg',
  },
  {
    id: 'p2',
    title: 'FlowBoard 仪表盘',
    category: '产品设计',
    year: '2024',
    description: '一款面向项目经理的数据可视化工具，融合了直觉式交互与清晰的信息架构。',
    tags: ['UI/UX', '数据可视化', 'SaaS'],
    color: '#FF2D6F',
    image: '/placeholder-2.svg',
  },
  {
    id: 'p3',
    title: 'EcoTrack 移动端',
    category: '移动应用',
    year: '2023',
    description: '帮助用户追踪碳足迹的移动端应用，通过游戏化设计鼓励环保行为。',
    tags: ['移动端', '游戏化', 'React Native'],
    color: '#00F5A0',
    image: '/placeholder-3.svg',
  },
  {
    id: 'p4',
    title: 'ArtSpace 电商平台',
    category: '全栈开发',
    year: '2023',
    description: '为独立艺术家打造的线上画廊与交易平台，支持 3D 预览与 NFT 铸造。',
    tags: ['Next.js', '3D', 'Web3'],
    color: '#2D4BFF',
    image: '/placeholder-4.svg',
  },
  {
    id: 'p5',
    title: 'MindFlow 设计系统',
    category: '设计系统',
    year: '2023',
    description: '为中型 SaaS 公司构建的完整设计系统，包含 200+ 组件、完整文档与 Figma 组件库。',
    tags: ['设计系统', '组件库', '文档'],
    color: '#FFE500',
    image: '/placeholder-5.svg',
  },
  {
    id: 'p6',
    title: 'Pulse 音乐可视化',
    category: '创意实验',
    year: '2022',
    description: '一个实验性的 Web Audio 可视化项目，将音乐转化为动态的几何图形与粒子效果。',
    tags: ['WebGL', '音频', '创意编程'],
    color: '#FF2D6F',
    image: '/placeholder-6.svg',
  },
];

/** 联系信息 */
export const contactInfo = {
  heading: '让我们一起创造些了不起的东西',
  subheading: '无论是项目合作、自由职业还是闲聊，都欢迎联系我',
  methods: [
    { type: 'email', label: '邮箱', value: 'zhang2015ab@163.com', icon: 'Mail' },
    { type: 'phone', label: '电话', value: '+86 15161522175', icon: 'Phone' },
    { type: 'location', label: '位置', value: '江苏 无锡', icon: 'MapPin' },
    { type: 'wechat', label: '微信', value: '', icon: 'MessageCircle' },
  ],
};
