import React from 'react';
import SourceCanvas from './SourceCanvas';
import artyIcon from '../assets/untitled/screen48-icon.png';
import artyHeroA from '../assets/untitled/screen48-a.png';
import artyHeroB from '../assets/untitled/screen48-b.png';
import artyOverview from '../assets/untitled/screen49-visual.png';
import toolsA from '../assets/untitled/screen50-a.png';
import toolsB from '../assets/untitled/screen50-b.png';
import toolsFrame from '../assets/untitled/screen50-frame.png';
import createA from '../assets/untitled/screen51-a.png';
import createB from '../assets/untitled/screen51-b.png';
import createFrame from '../assets/untitled/screen51-frame.png';
import galleryCenter from '../assets/untitled/screen52-a.png';
import galleryRight from '../assets/untitled/screen52-b.png';
import galleryLeft from '../assets/untitled/screen52-c.png';
import galleryFarRight from '../assets/untitled/screen52-d.png';
import './mobile-arty-screens.css';

function ArtyPhone({screen,frame,alt}){return <div className="arty-phone"><img className="arty-phone-screen" src={screen} alt={alt}/><img className="arty-phone-frame" src={frame} alt=""/></div>}

export function ArtyCoverScreen(){return <SourceCanvas label="Arty me" tone="light"><div className="arty-cover-copy"><img src={artyIcon} alt="Arty me 图标"/><h1>Arty me</h1><p>Arty me 是一款面向年轻用户的 AI 视觉创作 App，集 AI 视频、AI 头像与多种图片处理工具于一体。用户可以通过简单上传与选择模板，快速完成换发型、换服装、换背景、风格化头像、AI 动效等内容生成，让日常照片轻松转化为更具个性和表现力的视觉作品。</p></div><div className="arty-cover-visual"><img src={artyHeroA} alt="Arty me AI Dance 首页"/><img src={artyHeroB} alt="Arty me AI 工具首页"/></div></SourceCanvas>}

export function ArtyOverviewScreen(){return <SourceCanvas label="Arty me 主视觉与创作能力" tone="light"><img className="arty-overview" src={artyOverview} alt="Arty me 主视觉与创作能力模块"/></SourceCanvas>}

function ArtyFeature({title,copy,screens,reverse=false}){return <SourceCanvas label={title} tone="light"><div className={`arty-feature ${reverse?'is-reverse':''}`}><div className="arty-feature-copy"><h1>{title}</h1><p>{copy}</p></div><div className="arty-phone-pair"><ArtyPhone screen={screens[0]} frame={screens[2]} alt={`${title}界面一`}/><ArtyPhone screen={screens[1]} frame={screens[2]} alt={`${title}界面二`}/></div></div></SourceCanvas>}

export function ArtyToolsScreen(){return <ArtyFeature title="AI工具箱" copy="整合换发型、换背景、贴纸创作、图片风格化等高频 AI 功能，通过场景化分类与卡片式入口，让用户快速发现并使用不同创作工具。以低门槛操作覆盖多种视觉处理需求，提升日常图片编辑与趣味创作效率。" screens={[toolsA,toolsB,toolsFrame]}/>}
export function ArtyCreationScreen(){return <ArtyFeature reverse title="AI创作" copy="围绕 AI 头像与 AI 视频两类核心内容，提供丰富模板与热门玩法，帮助用户从图片快速生成个性化视觉作品。通过分类推荐、模板预览与一键生成，缩短从灵感发现到内容产出的路径，让创作更直观、更有趣。" screens={[createA,createB,createFrame]}/>}

export function ArtyGalleryScreen(){return <SourceCanvas label="Arty me 完整界面" tone="light"><div className="arty-gallery" onWheel={event=>event.stopPropagation()}><div className="arty-gallery-track"><img src={galleryLeft} alt="Arty me 积分充值"/><img src={galleryCenter} alt="Arty me 所有模板"/><img src={galleryRight} alt="Arty me 会员中心"/><img src={galleryFarRight} alt="Arty me 我的作品"/></div></div></SourceCanvas>}
