import React, { useState, useRef, useEffect } from 'react';
import { Smile, Twitter, Github, Layers, RefreshCw, CheckCircle2, Bell, Tag, BarChart3, PieChart, Coffee, Send, Calendar, Code, Camera, Video, FileText, X, User, Zap, Briefcase, ExternalLink } from 'lucide-react';
import avatarImg from './avatar.png';

const DoodleSquiggle1 = ({ className }: { className?: string }) => (
  <svg className={className} width="300" height="300" viewBox="0 0 300 300" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M -20 250 C 50 150, 150 50, 250 -20" />
    <path d="M 180 20 C 220 100, 150 180, 80 150 C 20 120, 50 20, 150 50" />
  </svg>
);

const DoodleCloud = ({ className }: { className?: string }) => (
  <svg className={className} width="250" height="350" viewBox="0 0 250 350" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 280 50 C 180 20, 100 60, 80 120 C 50 180, 120 220, 180 190 C 220 170, 200 100, 120 130 C 50 160, 20 250, 80 320 C 140 380, 250 350, 280 300" />
  </svg>
);

const DoodleLines = ({ className }: { className?: string }) => (
  <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round">
    <path d="M 20 80 L 40 20" />
    <path d="M 50 90 L 65 30" />
    <path d="M 80 95 L 90 40" />
  </svg>
);

const DoodleStar = ({ className }: { className?: string }) => (
  <svg className={className} width="150" height="150" viewBox="0 0 150 150" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 75 10 L 95 55 L 140 60 L 105 95 L 115 140 L 75 115 L 35 140 L 45 95 L 10 60 L 55 55 Z" />
  </svg>
);

const DoodleSpiral = ({ className }: { className?: string }) => (
  <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 50 50 C 50 50, 55 45, 60 50 C 65 55, 60 65, 50 65 C 35 65, 30 50, 35 35 C 40 20, 60 15, 75 25 C 95 40, 90 70, 70 85 C 45 100, 10 85, 15 55" />
  </svg>
);

const DoodleArrow = ({ className }: { className?: string }) => (
  <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 20 80 C 30 60, 50 30, 80 20" />
    <path d="M 50 20 L 80 20 L 70 50" />
  </svg>
);

const DoodleLoop2 = ({ className }: { className?: string }) => (
  <svg className={className} width="150" height="250" viewBox="0 0 150 250" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 150 C 50 50, 150 50, 100 150 C 50 250, -20 150, 50 50" />
  </svg>
);

import { categories, works, timelineEvents } from './data';

const HorizontalScrollContainer = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // 检查容器是否真的溢出（加 10px 缓冲处理浏览器小数像素计算误差）
      const isScrollable = el.scrollWidth > el.clientWidth + 10;
      
      if (!isScrollable) {
        return; // 如果内容不够多（没有溢出），直接返回，让页面正常上下滚动
      }

      // Only hijack vertical scrolling
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const isAtLeft = el.scrollLeft <= 0 && e.deltaY < 0;
        const isAtRight = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 1 && e.deltaY > 0;
        
        // If we are not at the boundaries, translate vertical scroll to horizontal
        if (!isAtLeft && !isAtRight) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    // Use passive: false to allow preventDefault()
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div 
      ref={scrollRef} 
      className="flex overflow-x-auto gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {children}
    </div>
  );
};

const WorkCard = ({ work, className = "", onClick }: { key?: React.Key, work: any, className?: string, onClick?: () => void }) => {
  // 随机选择一张图片作为封面（针对相册类型）
  const displayImage = React.useMemo(() => {
    if (work.isAlbum && work.images && work.images.length > 0) {
      return work.images[Math.floor(Math.random() * work.images.length)];
    }
    return work.image;
  }, [work]);

  return (
    <div 
      onClick={onClick}
      className={`group border-2 border-gray-100 rounded-[2rem] hover:border-gray-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 bg-white relative overflow-hidden text-left flex flex-col h-[480px] cursor-pointer ${className}`}
    >
      {displayImage ? (
        <div className="w-full h-48 shrink-0 overflow-hidden bg-gray-50 relative">
          <img src={displayImage} alt={work.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          {/* 如果是相册或视频，显示图标提示 */}
          {work.isAlbum && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>图集</span>
            </div>
          )}
          {work.isVideo && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1a1a1a] px-3 py-1.5 rounded-md text-xs font-bold tracking-wider">
              动态影像
            </div>
          )}
        </div>
      ) : (
        <div className={`w-full h-48 shrink-0 flex items-center justify-center ${work.bgColor || 'bg-gray-50'}`}>
          {work.icon ? <work.icon className={`w-16 h-16 ${work.color || 'text-gray-400'}`} strokeWidth={1.5} /> : <FileText className="w-16 h-16 text-gray-400" strokeWidth={1.5} />}
        </div>
      )}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-bold mb-3 text-[#1a1a1a] font-serif-sc text-2xl tracking-widest">{work.title}</h3>
        <div className="flex-grow flex flex-col mb-6">
          <p className="leading-relaxed font-serif-sc text-gray-600 text-base tracking-wide">
            {work.desc}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex gap-2 flex-wrap">
            {work.tags ? work.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full font-mono text-xs font-medium">
                {tag}
              </span>
            )) : work.date ? (
              <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full font-mono text-xs font-medium">
                {work.date}
              </span>
            ) : null}
          </div>
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#b4b4ff] group-hover:text-white transition-colors shrink-0">
            <span className="transform -rotate-45 group-hover:rotate-0 transition-transform font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkModal = ({ work, onClose }: { work: any, onClose: () => void }) => {
  if (!work) return null;

  // 文章弹窗
  if (work.isArticle) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200 p-8 sm:p-12 relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-800 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8 mt-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#07C160] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider flex items-center gap-1">
                  微信公众号
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-6 tracking-widest font-serif-sc leading-tight">{work.title}</h2>
            </div>

            <div className="prose prose-lg max-w-none font-serif-sc text-gray-600 tracking-wide leading-loose mb-12 whitespace-pre-line">
              {work.articlePreview}
              <div className="mt-4 text-gray-400 italic">......</div>
            </div>

            <div className="flex justify-center mt-auto pt-8 border-t border-gray-100">
              <a 
                href={work.wechatLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#07C160] hover:bg-[#06ad56] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg shadow-[#07C160]/30 hover:shadow-[#07C160]/50"
              >
                阅读完整文章 <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 视频/动态影像弹窗
  if (work.isVideo) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* 视频播放器区域 */}
            <div className="relative w-full bg-black aspect-video flex-shrink-0">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              {work.bilibiliId ? (
                <iframe 
                  src={`//player.bilibili.com/player.html?bvid=${work.bilibiliId}&page=1&high_quality=1&danmaku=0`}
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  className="w-full h-full border-0"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50">视频链接未配置</div>
              )}
            </div>

            {/* 内容描述区域 */}
            <div className="p-8 sm:p-12 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider">
                  {work.modalDetails?.categoryLabel || work.category}
                </span>
                <span className="text-gray-400 font-mono text-xs tracking-widest uppercase">
                  {work.modalDetails?.subLabel}
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-6 tracking-tight">
                {work.modalDetails?.title || work.title}
              </h2>
              
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl">
                {work.modalDetails?.description || work.desc}
              </p>
              
              <div className="h-px bg-gray-100 w-full mb-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* 左侧：设计意图 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-6 bg-[#1a1a1a]"></div>
                    <h3 className="text-xl font-bold text-[#1a1a1a]">设计意图 / 创意陈述</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {work.modalDetails?.creativeStatement}
                  </p>
                </div>
                
                {/* 右侧：获奖、分工、标签 */}
                <div className="flex flex-col gap-10">
                  {work.modalDetails?.awards && (
                    <div>
                      <h4 className="text-gray-400 font-bold text-sm mb-3">获奖情况</h4>
                      <div className="flex items-start gap-2 text-[#1a1a1a] font-bold">
                        <span className="text-yellow-500 text-lg leading-none">★</span>
                        <span>{work.modalDetails.awards}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-gray-400 font-bold text-sm mb-3">分工与职责</h4>
                      <div className="font-bold text-[#1a1a1a] text-lg mb-2">{work.modalDetails?.role}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{work.modalDetails?.roleDesc}</div>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-400 font-bold text-sm mb-3">TAGS</h4>
                      <div className="flex flex-wrap gap-2">
                        {work.modalDetails?.tags?.map((tag: string) => (
                          <span key={tag} className="px-3 py-1 border border-gray-200 text-gray-600 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 如果是相册类型，展示图片聚合网格
  if (work.isAlbum) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12">
          <div 
            className="bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200 p-8 sm:p-12 relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-800 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-10 mt-4">
              <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-4 tracking-widest font-serif-sc">{work.title}</h2>
              <p className="text-gray-500 text-lg font-serif-sc tracking-wide">{work.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {work.images?.map((img: string, idx: number) => (
                <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative group">
                  <img 
                    src={img} 
                    alt={`${work.title} ${idx + 1}`} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const details = work.modalDetails || {
    categoryLabel: work.category,
    techStack: work.tags?.join(' / ') || '',
    title: work.title,
    description: work.desc,
    role: 'Creator',
    roleDesc: 'Designed and developed the project.',
    tags: work.tags || [],
    links: work.link ? [{ label: '下载链接', url: work.link, code: work.extractionCode }] : []
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12">
        <div 
          className="bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
          onClick={e => e.stopPropagation()}
        >
          {/* Top Dark Section */}
        <div className="relative bg-[#0f0f13] w-full h-64 sm:h-80 md:h-96 flex-shrink-0 flex items-center justify-center overflow-hidden">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-md transition-colors text-sm font-medium"
          >
            <X className="w-4 h-4" />
            关闭
          </button>
          
          {/* Demo Animation / Image Placeholder */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Grid background pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Animated Demo Element */}
            <div className="relative z-10 bg-[#1a1a24] border border-white/10 rounded-2xl shadow-2xl p-6 w-3/4 max-w-md transform transition-transform hover:scale-105 duration-500">
               <div className="flex items-center gap-3 mb-6">
                 {work.icon ? <work.icon className="w-8 h-8 text-blue-400" /> : <Layers className="w-8 h-8 text-blue-400" />}
                 <div className="font-bold text-white text-lg">{work.title}</div>
               </div>
               <div className="space-y-3">
                 <div className="h-2 bg-white/10 rounded-full w-3/4 animate-pulse"></div>
                 <div className="h-2 bg-white/10 rounded-full w-1/2 animate-pulse delay-75"></div>
                 <div className="h-2 bg-white/10 rounded-full w-5/6 animate-pulse delay-150"></div>
               </div>
               <div className="mt-8 flex justify-between items-center">
                 <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">Syncing...</div>
                 <RefreshCw className="w-5 h-5 text-blue-400 animate-spin" />
               </div>
            </div>
          </div>
        </div>

        {/* Bottom White Section */}
        <div className="p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider">
              {details.categoryLabel}
            </span>
            <span className="text-gray-400 font-mono text-xs tracking-widest uppercase">
              {details.techStack}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-6 tracking-widest font-serif-sc">
            {details.title}
          </h2>
          
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl font-serif-sc tracking-wide">
            {details.description}
          </p>
          
          <div className="h-px bg-gray-100 w-full mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1: Role */}
            <div>
              <h4 className="text-gray-400 font-bold text-sm mb-4">分工与职责</h4>
              <div className="font-bold text-[#1a1a1a] text-lg mb-2">{details.role}</div>
              <div className="text-gray-500 text-sm">{details.roleDesc}</div>
            </div>
            
            {/* Column 2: Tags */}
            <div>
              <h4 className="text-gray-400 font-bold text-sm mb-4">TAGS</h4>
              <div className="flex flex-wrap gap-2">
                {details.tags.map((tag: string) => (
                  <span key={tag} className="px-4 py-1.5 border border-gray-200 text-gray-600 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Column 3: Links */}
            <div>
              <h4 className="text-gray-400 font-bold text-sm mb-4">相关链接</h4>
              <div className="flex flex-col gap-3">
                {details.links.map((link: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-[#1a1a1a] font-bold hover:text-blue-500 transition-colors underline underline-offset-4 decoration-2 decoration-gray-300 hover:decoration-blue-500"
                    >
                      <Send className="w-4 h-4" />
                      {link.label}
                    </a>
                    {link.code && (
                      <span className="text-xs text-gray-500 font-mono mt-1">提取码: <span className="font-bold text-gray-700">{link.code}</span></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// timelineEvents imported from data.ts

export default function App() {
  const [activeTab, setActiveTab] = useState('全部');
  const [isPlayerPanelOpen, setIsPlayerPanelOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const filteredWorks = activeTab === '全部' ? works : works.filter(w => w.category === activeTab);

  useEffect(() => {
    if (isPlayerPanelOpen || selectedWork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPlayerPanelOpen, selectedWork]);

  return (
    <div className="min-h-screen font-sans selection:bg-[#c4c4ff] selection:text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <Smile className="w-8 h-8" strokeWidth={2.5} />
          <span>橙子</span>
        </div>
        <div className="hidden md:flex items-center gap-10 font-bold text-sm">
          <a href="#home" className="hover:text-gray-600 transition-colors">首页</a>
          <a href="#portfolio" className="hover:text-gray-600 transition-colors">作品集</a>
          <a href="#timeline" className="hover:text-gray-600 transition-colors">时间轴</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">联系我</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-20 pb-40 px-8 max-w-7xl mx-auto text-center">
        <DoodleSquiggle1 className="absolute top-0 -left-10 -z-10 opacity-90" />
        <DoodleCloud className="absolute top-20 -right-10 -z-10 opacity-90" />
        <DoodleLines className="absolute bottom-10 left-32 -z-10 opacity-90" />
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight leading-[1.15] mb-12 text-[#1a1a1a] w-full px-4">
          Driven by curiosity <br /> 
          fueled by <span className="relative inline-block pr-2">
            coffee
            <div className="absolute -top-2 -right-4 md:-right-6 w-8 h-8 md:w-10 md:h-10 bg-yellow-300 rounded-full flex items-center justify-center border-[3px] md:border-4 border-[#1a1a1a] transform rotate-12">
              <Coffee className="w-4 h-4 md:w-5 md:h-5 text-[#1a1a1a]" strokeWidth={3} />
            </div>
          </span>
        </h1>
        <p className="font-mono text-gray-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-12">
          嗨，欢迎来到一位地球online玩家的赛博仓库
        </p>
        <button 
          onClick={() => setIsPlayerPanelOpen(true)}
          className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b4b4ff] hover:text-[#1a1a1a] transition-all shadow-sm flex items-center gap-3 mx-auto group"
        >
          <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
          查看玩家面板
        </button>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative py-32 px-8 max-w-6xl mx-auto">
        <DoodleStar className="absolute -top-10 -right-20 -z-10 opacity-90" />
        <DoodleLoop2 className="absolute top-40 -left-40 -z-10 opacity-90 transform -rotate-45" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#1a1a1a]">
            作品展示
          </h2>
          <p className="font-mono text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            这里是我在不同领域的探索与创作，包括摄影、代码和文字。
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeTab === cat 
                  ? 'bg-[#1a1a1a] text-white shadow-md' 
                  : 'bg-white border-2 border-gray-100 text-gray-500 hover:border-gray-300 hover:text-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid / Rows */}
        {activeTab === '全部' ? (
          <div className="flex flex-col gap-16">
            {categories.filter(c => c !== '全部').map(cat => {
              const catWorks = works.filter(w => w.category === cat);
              if (catWorks.length === 0) return null;
              return (
                <div key={cat} className="flex flex-col">
                  <div className="flex items-center justify-between mb-6 px-2">
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">{cat}</h3>
                    <button onClick={() => setActiveTab(cat)} className="text-sm font-bold text-gray-400 hover:text-[#b4b4ff] transition-colors">查看全部 →</button>
                  </div>
                  <HorizontalScrollContainer>
                    {catWorks.map(work => (
                      <WorkCard key={work.id} work={work} className="w-[280px] md:w-[320px] shrink-0" onClick={() => setSelectedWork(work)} />
                    ))}
                  </HorizontalScrollContainer>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map(work => (
              <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
            ))}
          </div>
        )}
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative py-32 px-8 max-w-4xl mx-auto">
        <DoodleSpiral className="absolute top-40 -left-20 -z-10 opacity-90" />
        <DoodleLoop2 className="absolute bottom-0 -right-40 -z-10 opacity-90 transform rotate-90 scale-75" />
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#1a1a1a]">
            最近动态
          </h2>
          <p className="font-mono text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            记录生活中的大事件与小灵感。
          </p>
        </div>

        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-12">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="mb-16 relative pl-10 md:pl-16">
              {/* Timeline Dot */}
              <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center ${event.bgColor}`}>
                <event.icon className={`w-4 h-4 ${event.color}`} strokeWidth={2.5} />
              </div>
              
              {/* Content */}
              <div className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="font-mono text-sm font-bold text-[#b4b4ff] mb-2">{event.date}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">{event.title}</h3>
                <p className="font-mono text-gray-500 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-8 max-w-3xl mx-auto text-center relative">
        <h2 className="text-5xl md:text-[64px] font-black tracking-tight mb-8 text-[#1a1a1a]">联系我</h2>
        <p className="font-mono text-gray-500 mb-12 text-sm">有什么有趣的想法？随时发邮件给我。</p>
        
        <div className="relative max-w-lg mx-auto">
          <form className="flex flex-col gap-4 text-left bg-white p-8 rounded-[2rem] border-2 border-gray-100 shadow-sm relative z-10">
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm text-[#1a1a1a] px-2">姓名</label>
              <input 
                type="text" 
                placeholder="你的名字" 
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 outline-none bg-gray-50 focus:bg-white focus:border-[#b4b4ff] font-mono text-sm transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm text-[#1a1a1a] px-2">邮箱</label>
              <input 
                type="email" 
                placeholder="你的邮箱地址" 
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 outline-none bg-gray-50 focus:bg-white focus:border-[#b4b4ff] font-mono text-sm transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm text-[#1a1a1a] px-2">内容</label>
              <textarea 
                placeholder="想对我说些什么？" 
                rows={4}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 outline-none bg-gray-50 focus:bg-white focus:border-[#b4b4ff] font-mono text-sm transition-colors resize-none"
              ></textarea>
            </div>
            <button type="button" className="mt-4 bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#b4b4ff] transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              发送邮件
            </button>
          </form>
          <DoodleArrow className="absolute -bottom-16 -left-16 opacity-90 -z-10 transform -scale-x-100 rotate-45" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-8 max-w-7xl mx-auto w-full mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-6">
              <Smile className="w-8 h-8" strokeWidth={2.5} />
              <span>橙子</span>
            </div>
            <p className="font-mono text-gray-500 text-[13px] leading-[1.8]">
              Making it easier to understand and manage your digital life in one place.
            </p>
          </div>
          
          <div className="flex gap-24 font-bold text-[15px] text-[#1a1a1a]">
            <div className="flex flex-col gap-5">
              <span className="mb-1">Site</span>
              <a href="#home" className="font-mono text-gray-400 font-normal hover:text-gray-800 text-[13px]">首页</a>
              <a href="#portfolio" className="font-mono text-gray-400 font-normal hover:text-gray-800 text-[13px]">作品集</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="mb-1">Content</span>
              <a href="#timeline" className="font-mono text-gray-400 font-normal hover:text-gray-800 text-[13px]">时间轴</a>
              <a href="#contact" className="font-mono text-gray-400 font-normal hover:text-gray-800 text-[13px]">联系我</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="mb-1">Social</span>
              <a href="#" className="font-mono text-gray-400 font-normal hover:text-gray-800 text-[13px]">Twitter</a>
              <a href="#" className="font-mono text-gray-400 font-normal hover:text-gray-800 text-[13px]">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-gray-400">
          <div className="flex gap-4">
            <span>© 2026 橙子</span>
            <span>Made with ❤️</span>
          </div>
          <div className="flex gap-6">
            <Twitter className="w-5 h-5 hover:text-gray-800 cursor-pointer transition-colors" fill="currentColor" stroke="none" />
            <Github className="w-5 h-5 hover:text-gray-800 cursor-pointer transition-colors" fill="currentColor" stroke="none" />
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* Work Modal */}
      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />

      {/* Player Panel Modal */}
      {isPlayerPanelOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm" onClick={() => setIsPlayerPanelOpen(false)}>
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-[2rem] p-8 max-w-md w-full relative shadow-2xl border-2 border-[#1a1a1a]" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setIsPlayerPanelOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#1a1a1a] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-[#1a1a1a] overflow-hidden shrink-0">
                <img src={avatarImg} alt="Player Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1a1a1a]">橙子</h3>
                <p className="font-mono text-sm text-gray-500">Lv.99 地球Online玩家</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3 text-[#1a1a1a] font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>当前职业 (斜杠青年)</span>
                </div>
                <div className="flex gap-2 font-mono text-xs flex-wrap">
                  <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-[#b4b4ff] hover:text-white hover:border-[#b4b4ff] transition-colors cursor-default">重度 AI FOMO 患者</span>
                  <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-orange-300 hover:text-white hover:border-orange-300 transition-colors cursor-default">三分钟热度体验家</span>
                  <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-emerald-300 hover:text-white hover:border-emerald-300 transition-colors cursor-default">赛博风水师 (玄学)</span>
                  <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-blue-300 hover:text-white hover:border-blue-300 transition-colors cursor-default">硅基硬件抚摸党 (数码)</span>
                  <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-pink-300 hover:text-white hover:border-pink-300 transition-colors cursor-default">薛定谔的创作者</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-[#1a1a1a] font-bold">
                  <Zap className="w-4 h-4" />
                  <span>技能树 (Skill Tree)</span>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-gray-800 font-bold">Vibe Coding (赛博咒语吟唱)</span>
                      <span className="font-bold text-[#b4b4ff]">85%</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1.5 font-mono">靠直觉写代码，Bug全靠AI修</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#b4b4ff] w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-gray-800 font-bold">AI 工具收藏 (FOMO驱动)</span>
                      <span className="font-bold text-emerald-400">99%</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1.5 font-mono">收藏了等于学会了，绝不落后于时代</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-300 w-[99%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-gray-800 font-bold">三分钟热度 (从入门到放弃)</span>
                      <span className="font-bold text-orange-400">MAX</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1.5 font-mono">精通各种技能的“Hello World”</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-300 w-[100%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-gray-800 font-bold">光影捕捉 (后期抢救学)</span>
                      <span className="font-bold text-pink-400">70%</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1.5 font-mono">拍照一分钟，修图两小时</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-300 w-[70%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-gray-800 font-bold">数码产品开箱 (冲动消费)</span>
                      <span className="font-bold text-blue-400">95%</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1.5 font-mono">买前生产力，买后爱奇艺</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-300 w-[95%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-gray-800 font-bold">赛博风水学 (玄学)</span>
                      <span className="font-bold text-purple-400">60%</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mb-1.5 font-mono">遇事不决量子力学，代码报错先拜赛博菩萨</div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-300 w-[60%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
