import { RefreshCw, Code, Coffee, Camera } from 'lucide-react';

export const categories = ['全部', '静态摄影', '动态影像', 'vibe Coding', '我的文章'];

export const works = [
  // --- 静态摄影三大板块 (相册) ---
  { 
    id: 'album-1', 
    title: '自然风光', 
    category: '静态摄影', 
    desc: '山河不改，故人常在', 
    isAlbum: true,
    images: [
      'https://picsum.photos/seed/nature1/800/800',
      'https://picsum.photos/seed/nature2/800/800',
      'https://picsum.photos/seed/nature3/800/800',
      'https://picsum.photos/seed/nature4/800/800',
      'https://picsum.photos/seed/nature5/800/800',
      'https://picsum.photos/seed/nature6/800/800',
    ]
  },
  { 
    id: 'album-2', 
    title: '人文纪实', 
    category: '静态摄影', 
    desc: '年年岁岁花相似，岁岁年年人不同', 
    isAlbum: true,
    images: [
      'https://picsum.photos/seed/human1/800/800',
      'https://picsum.photos/seed/human2/800/800',
      'https://picsum.photos/seed/human3/800/800',
      'https://picsum.photos/seed/human4/800/800',
      'https://picsum.photos/seed/human5/800/800',
      'https://picsum.photos/seed/human6/800/800',
    ]
  },
  { 
    id: 'album-3', 
    title: '微距', 
    category: '静态摄影', 
    desc: '以微小发现瞬间', 
    isAlbum: true,
    images: [
      'https://picsum.photos/seed/macro1/800/800',
      'https://picsum.photos/seed/macro2/800/800',
      'https://picsum.photos/seed/macro3/800/800',
      'https://picsum.photos/seed/macro4/800/800',
      'https://picsum.photos/seed/macro5/800/800',
      'https://picsum.photos/seed/macro6/800/800',
    ]
  },
  // ------------------------------
  
  { 
    id: 2, 
    title: '书签自动同步', 
    category: 'vibe Coding', 
    icon: RefreshCw, 
    bgColor: 'bg-blue-50', 
    color: 'text-blue-500', 
    desc: '专属浏览器的拓展插件，点击收藏网页，书签自动同步到你配置好的云盘，再也不怕书签丢失。', 
    tags: ['Browser Extension', 'Sync'], 
    link: 'https://pan.quark.cn/s/23eeb0f166dc', 
    extractionCode: 'Btvr',
    modalDetails: {
      categoryLabel: '应用开发',
      techStack: 'BROWSER EXTENSION / SYNC',
      title: '书签自动同步',
      description: '专属浏览器的拓展插件，点击收藏网页，书签自动同步到你配置好的云盘，再也不怕书签丢失。',
      role: 'vibe builder',
      roleDesc: "本插件基于 Google AntiGravity 开发，是第一个 vibe coding 作品",
      tags: ['Browser Extension', 'Sync'],
      links: [
        { label: '下载链接', url: 'https://pan.quark.cn/s/23eeb0f166dc', code: 'Btvr' }
      ]
    }
  },
  
  // --- 动态影像板块 (视频/Vlog/纪录片) ---
  {
    id: 'video-1',
    title: '光影探索 (筹备中)',
    category: '动态影像',
    image: 'https://picsum.photos/seed/docu1/800/500',
    desc: '这里是动态影像的占位板块。后续有了自己拍摄的视频作品后，可以直接替换这里的内容。',
    tags: ['纪录片', '占位符'],
    isVideo: true,
    bilibiliId: 'BV1GJ411x7h7', // 这里替换为你真实的 B站 BV 号
    modalDetails: {
      categoryLabel: '动态影像',
      subLabel: '纪录片',
      title: '光影探索 (筹备中)',
      description: '这里是动态影像的占位板块。后续有了自己拍摄的视频作品后，可以直接替换这里的内容。',
      creativeStatement: '这是一个预留的展示空间。未来这里将展示我在视频拍摄、剪辑和导演方面的作品。目前使用了一个测试视频来保持页面结构的完整，等你有了自己的作品，只需修改 B站 BV 号即可。',
      awards: '期待未来的奖项',
      role: '导演、摄影、剪辑',
      roleDesc: '未来将在这里写下我在该视频项目中的具体职责和贡献。',
      tags: ['纪录片', '占位符']
    }
  },
  {
    id: 'video-2',
    title: '生活碎片 (剪辑中)',
    category: '动态影像',
    image: 'https://picsum.photos/seed/docu2/800/500',
    desc: '这里是第二个视频作品的占位符。可以用来展示 Vlog、日常记录或短片。',
    tags: ['Vlog', '日常'],
    isVideo: true,
    bilibiliId: 'BV1GJ411x7h7', // 这里替换为你真实的 B站 BV 号
    modalDetails: {
      categoryLabel: '动态影像',
      subLabel: 'Vlog',
      title: '生活碎片 (剪辑中)',
      description: '这里是第二个视频作品的占位符。可以用来展示 Vlog、日常记录或短片。',
      creativeStatement: '生活中的精彩瞬间值得被记录。这个位置留给我未来的生活碎片和旅行记录。',
      role: '摄影、剪辑',
      roleDesc: '记录生活，剪辑回忆。',
      tags: ['Vlog', '日常']
    }
  },
  {
    id: 'video-3',
    title: '概念短片 (敬请期待)',
    category: '动态影像',
    image: 'https://picsum.photos/seed/docu3/800/500',
    desc: '这里是第三个视频作品的占位符。适合展示更具艺术性或实验性的概念短片。',
    tags: ['概念短片', '实验'],
    isVideo: true,
    bilibiliId: 'BV1GJ411x7h7', // 这里替换为你真实的 B站 BV 号
    modalDetails: {
      categoryLabel: '动态影像',
      subLabel: '概念短片',
      title: '概念短片 (敬请期待)',
      description: '这里是第三个视频作品的占位符。适合展示更具艺术性或实验性的概念短片。',
      creativeStatement: '探索视觉表达的更多可能性。这个位置预留给未来的实验性影像作品。',
      role: '导演',
      roleDesc: '探索与尝试。',
      tags: ['概念短片', '实验']
    }
  },
  // ------------------------------
  
  // --- 我的文章板块 (微信公众号) ---
  { 
    id: 'article-1', 
    title: '关于设计的思考', 
    category: '我的文章', 
    image: 'https://picsum.photos/seed/article1/800/500',
    desc: '探讨极简主义在现代网页设计中的应用与实践，以及如何通过留白传达情绪。', 
    isArticle: true,
    articlePreview: '在现代网页设计中，极简主义不仅仅是一种视觉风格，更是一种用户体验的哲学。留白（White Space）并非“空白”，而是呼吸的空间。\n\n当我们减少页面上的视觉噪音时，用户的注意力自然会集中在最核心的内容上。本文将从排版、色彩和交互三个维度，深度剖析极简主义设计的内核，并分享我在实际项目中的踩坑与经验...',
    wechatLink: 'https://mp.weixin.qq.com/'
  },
  { 
    id: 'article-2', 
    title: '独立开发指南', 
    category: '我的文章', 
    image: 'https://picsum.photos/seed/article2/800/500',
    desc: '分享我从零开始独立开发并上线一款产品的全过程与踩坑经验。', 
    isArticle: true,
    articlePreview: '从一个模糊的想法，到最终产品上线，独立开发是一场孤独但充满成就感的旅程。\n\n在这个过程中，我经历了技术选型的纠结、产品设计的推翻重来，以及无数个熬夜写代码的夜晚。这篇文章记录了我开发第一款独立产品的全过程，希望能给同样走在这条路上的你一些启发...',
    wechatLink: 'https://mp.weixin.qq.com/'
  },
  { 
    id: 'article-3', 
    title: '数字游民生活', 
    category: '我的文章', 
    image: 'https://picsum.photos/seed/article3/800/500',
    desc: '在不同城市边旅行边工作是一种怎样的体验？', 
    isArticle: true,
    articlePreview: '带着一台电脑，走过大理的苍山洱海，也穿梭在曼谷的喧嚣街头。数字游民（Digital Nomad）的生活听起来很酷，但背后也有许多不为人知的挑战。\n\n如何保持工作效率？如何克服孤独感？这篇文章将为你揭开数字游民生活的真实面貌...',
    wechatLink: 'https://mp.weixin.qq.com/'
  },
];

export const timelineEvents = [
  { id: 1, date: '2026年3月', title: '最近在开发', desc: '正在重构个人网站，尝试将手绘涂鸦风格与极简主义结合，打造一个更有温度的赛博空间。', icon: Code, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { id: 2, date: '2026年2月', title: '最近在看', desc: '《设计心理学》和一些关于独立开发者商业模式的纪录片，思考如何让产品更贴近人性。', icon: Coffee, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { id: 3, date: '2026年1月', title: '大事件：摄影展', desc: '参与了本地的一个独立摄影师联展，展出了我的“城市边缘”系列静态摄影作品。', icon: Camera, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
];
