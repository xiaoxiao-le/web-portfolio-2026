import React from 'react';
import SourceCanvas from './SourceCanvas';
import appIcon from '../assets/untitled/screen38-icon.png';
import homeScreen from '../assets/untitled/screen38-phone.png';
import phoneFrame from '../assets/untitled/iphone-frame.png';
import bannerA from '../assets/untitled/screen39-a.png';
import bannerB from '../assets/untitled/screen39-b.png';
import bannerC from '../assets/untitled/screen39-c.png';
import dialectA from '../assets/untitled/screen40-a.png';
import dialectB from '../assets/untitled/screen40-b.png';
import liveA from '../assets/untitled/screen41-a.png';
import liveB from '../assets/untitled/screen41-b.png';
import galleryA from '../assets/untitled/screen42-a.png';
import galleryB from '../assets/untitled/screen42-b.png';
import galleryC from '../assets/untitled/screen42-c.png';
import galleryD from '../assets/untitled/screen42-d.png';
import './mobile-translator-screens.css';

function Phone({screen,alt}){return <div className="translator-phone"><img className="phone-screen" src={screen} alt={alt}/><img className="phone-frame" src={phoneFrame} alt=""/></div>}

export function TranslatorCoverScreen(){return <SourceCanvas label="随身翻译助手" tone="light"><div className="translator-cover-copy"><div className="translator-title"><img src={appIcon} alt="随身翻译助手图标"/><h1>随身翻译助手</h1></div><p>随身翻译助手是一款面向日常沟通、出行与学习场景的智能翻译工具，支持方言翻译、实时对话翻译、拍照翻译、文本翻译与图片翻译等多种方式。通过清晰的功能入口和场景化设计，帮助用户快速理解不同语言与方言内容，降低沟通门槛，让跨语言交流更直接、更高效。</p></div><div className="translator-hero"><i/><b className="hero-home">Home</b><b className="hero-page">Page</b><Phone screen={homeScreen} alt="随身翻译助手首页"/></div></SourceCanvas>}

export function TranslatorBannerScreen(){return <SourceCanvas label="多场景 Banner 视觉设计" tone="light"><div className="banner-art"><img className="banner-a" src={bannerA} alt="方言翻译 Banner"/><img className="banner-b" src={bannerB} alt="拍照翻译 Banner"/><img className="banner-c" src={bannerC} alt="实时对话 Banner"/></div><div className="translator-side-copy"><h1>多场景banner视觉设计</h1><p>围绕方言翻译、拍照翻译、实时对话等不同使用场景，构建统一但具差异化的 Banner 视觉体系。通过色彩、插画与场景文案的组合，让用户快速识别核心功能，同时提升首页内容的丰富度与产品氛围。</p></div></SourceCanvas>}

function TranslatorFeature({title,copy,screens,reverse=false}){return <SourceCanvas label={title} tone="light"><div className={`translator-feature ${reverse?'is-reverse':''}`}><div className="translator-feature-copy"><h1>{title}</h1><p>{copy}</p></div><div className="translator-phone-pair"><Phone screen={screens[0]} alt={`${title}界面一`}/><Phone screen={screens[1]} alt={`${title}界面二`}/></div></div></SourceCanvas>}

export function DialectScreen(){return <TranslatorFeature title="方言翻译" copy="围绕方言理解与转换场景，提供普通话与方言之间的双向翻译能力。通过语言选择、文本输入、AI 生成与结果播报等功能，让用户可以快速完成方言内容的理解、转换与复用。" screens={[dialectA,dialectB]}/>}
export function LiveTranslateScreen(){return <TranslatorFeature title="实时对话翻译" copy="面向跨语言沟通场景，支持双语实时识别、即时翻译与语音播放，让双方在自然对话过程中快速理解彼此内容。通过清晰的双向语言切换与卡片式结果反馈，降低交流中断感，让跨语言沟通更顺畅、更高效。" screens={[liveA,liveB]} reverse/>}

export function TranslatorGalleryScreen(){return <SourceCanvas label="随身翻译助手完整界面" tone="light"><div className="translator-gallery" onWheel={event=>event.stopPropagation()}><div className="translator-gallery-track"><img src={galleryC} alt="随身翻译助手界面三"/><img src={galleryA} alt="随身翻译助手界面一"/><img src={galleryB} alt="随身翻译助手界面二"/><img src={galleryD} alt="随身翻译助手界面四"/></div></div></SourceCanvas>}
