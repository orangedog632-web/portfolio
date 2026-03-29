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
    title: '圆方之比，天地之合',
    category: '动态影像',
    image: 'https://picsum.photos/seed/docu1/800/500',
    desc: '一部探讨中国古建筑中“神奇比例”的纪录片。获得第17届中国大学生计算机设计大赛全国一等奖。',
    tags: ['纪录片', '建筑', '文化'],
    isVideo: true,
    bilibiliId: 'BV1GJ411x7h7', // 这里替换为你真实的 B站 BV 号
    modalDetails: {
      categoryLabel: '动态影像',
      subLabel: '纪录片',
      title: '圆方之比，天地之合',
      description: '一部探讨中国古建筑中“神奇比例”的纪录片。获得第17届中国大学生计算机设计大赛全国一等奖。',
      creativeStatement: '该项目我担任的工作比较多，主要分为摄像和美术两个板块。摄像方面，我尽量选取了原木较多的场景，搭配大面积单一的光源，能很好地保证手工艺品细节的同时，让影片更具古朴自然的色彩与质感。美术方面，我参考了很多古代印章与卷轴的设计，在很多地方都加入了牛皮纸的纹理进行打底，在确保韵味的同时实现了风格的统一。',
      awards: '第17届中国大学生计算机设计大赛全国一等奖',
      role: '导演、摄影、剪辑',
      roleDesc: '负责前期策划、分镜绘制、现场拍摄调度以及后期剪辑调色。特别是对于古建筑光影的捕捉与呈现。',
      tags: ['纪录片', '建筑', '文化']
    }
  },
  {
    id: 'video-2',
    title: '制衡',
    category: '动态影像',
    image: 'https://picsum.photos/seed/docu2/800/500',
    desc: '视觉化呈现中医（TCM）哲学。重点在于布光和固定镜头的构图。',
    tags: ['中医', '摄影'],
    isVideo: true,
    bilibiliId: 'BV1xx411c7mD', // 这里替换为你真实的 B站 BV 号
    modalDetails: {
      categoryLabel: '动态影像',
      subLabel: '概念短片',
      title: '制衡',
      description: '视觉化呈现中医（TCM）哲学。重点在于布光和固定镜头的构图。',
      creativeStatement: '通过对称的构图和冷暖对比的光影，展现中医理论中阴阳调和、制衡的哲学思想。',
      role: '摄影指导',
      roleDesc: '负责全片灯光设计与镜头构图。',
      tags: ['中医', '摄影']
    }
  },
  {
    id: 'video-3',
    title: '噢，乖',
    category: '动态影像',
    image: 'https://picsum.photos/seed/docu3/800/500',
    desc: '一部关于家庭冲突和个人成长的叙事短片。使用冷色调来表达主角的内心世界。',
    tags: ['剧情', '家庭'],
    isVideo: true,
    bilibiliId: 'BV1xx411c7mD', // 这里替换为你真实的 B站 BV 号
    modalDetails: {
      categoryLabel: '动态影像',
      subLabel: '叙事短片',
      title: '噢，乖',
      description: '一部关于家庭冲突和个人成长的叙事短片。使用冷色调来表达主角的内心世界。',
      creativeStatement: '影片大量使用手持摄影和冷色调，试图将观众带入主角压抑且充满冲突的内心世界。',
      role: '导演',
      roleDesc: '负责剧本创作、现场执导及后期统筹。',
      tags: ['剧情', '家庭']
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
