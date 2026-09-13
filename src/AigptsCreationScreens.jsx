import React from 'react';
import SourceCanvas from './SourceCanvas';
import workbenchBack from '../assets/untitled/screen25-back.png';
import workbenchLaptop from '../assets/untitled/screen25-laptop.png';
import workbenchHome from '../assets/untitled/screen25-home.png';
import workbenchChrome from '../assets/untitled/screen25-chrome.png';
import freePlan from '../assets/untitled/screen26-free.png';
import starterPlan from '../assets/untitled/screen26-starter.png';
import proPlan from '../assets/untitled/screen26-pro.png';
import chatLaptop from '../assets/untitled/screen27-laptop.png';
import chatPanel from '../assets/untitled/screen27-chat.png';
import multimodalLaptop from '../assets/untitled/screen28-laptop.png';
import imageUi from '../assets/untitled/screen28-image-ui.png';
import videoUi from '../assets/untitled/screen28-video-ui.png';
import musicPage from '../assets/untitled/screen29-page.png';
import musicLaptop from '../assets/untitled/screen29-laptop.png';
import musicPlayer from '../assets/untitled/screen29-player.png';
import headshotA from '../assets/untitled/screen30-a.png';
import headshotB from '../assets/untitled/screen30-b.png';
import headshotC from '../assets/untitled/screen30-c.png';
import headshotPage from '../assets/untitled/screen30-page.png';
import headshotLaptop from '../assets/untitled/screen30-laptop.png';
import editorA from '../assets/untitled/screen31-a.png';
import editorB from '../assets/untitled/screen31-b.png';
import editorPage from '../assets/untitled/screen31-page.png';
import editorLaptop from '../assets/untitled/screen31-laptop.png';
import meetingPage from '../assets/untitled/screen32-page.png';
import meetingLaptop from '../assets/untitled/screen32-laptop.png';
import meetingPanel from '../assets/untitled/screen32-panel.png';
import meetingStrip from '../assets/untitled/screen32-strip.png';
import speechVisual from '../assets/untitled/screen33-visual.png';
import pdfVisual from '../assets/untitled/screen34-visual.png';
import qrVisual from '../assets/untitled/screen35-visual.png';
import moreVisual from '../assets/untitled/screen36-visual.png';
import './aigpts-creation-screens.css';

function CaseCopy({title, children, faded = false}) {
  return <div className="aigpts-case-copy"><h1>{title}</h1><p className={faded ? 'is-faded' : ''}>{children}</p></div>;
}

export function AigptsWorkbenchScreen() {
  return <SourceCanvas label="一站式 AI 创作工作台"><CaseCopy title="一站式 AI 创作工作台" faded>围绕 AI Chat、AI Image、AI Video、AI Music 等核心能力，统一整合模型选择、创作入口、项目内容与工具服务。通过清晰的信息层级和模块化布局，让用户可以快速找到所需能力，并在同一工作台内完成从探索、生成到管理的完整创作流程。</CaseCopy><div className="workbench-art" aria-label="AIGPTS 一站式创作工作台界面"><div className="workbench-underlay"><div className="workbench-back-crop"><img src={workbenchBack} alt="" /></div><img className="workbench-laptop" src={workbenchLaptop} alt="AIGPTS 工作台笔记本展示" /></div><img className="workbench-home" src={workbenchHome} alt="AIGPTS 工作台首页" /><div className="workbench-chrome"><img src={workbenchChrome} alt="" /></div></div></SourceCanvas>;
}

export function AigptsPricingScreen() {
  return <SourceCanvas label="商业化组件设计"><h1 className="aigpts-pricing-title">商业化组件设计</h1><div className="aigpts-pricing-grid" aria-label="AIGPTS 价格方案"><img className="plan-card plan-free" src={freePlan} alt="Free Trial 免费体验方案" /><img className="plan-card plan-starter" src={starterPlan} alt="Starter 创作者方案" /><img className="plan-card plan-pro" src={proPlan} alt="Pro 专业方案" /></div></SourceCanvas>;
}

export function AigptsChatScreen() {
  return <SourceCanvas label="AI Chat"><CaseCopy title="AI Chat">通过统一的 AI Chat 入口整合多模型能力，让用户可以快速选择模型、发起对话并持续完成复杂任务。界面围绕对话过程、生成状态与上下文信息进行设计，降低多轮交互中的认知负担，让 AI 从简单问答进一步延伸到内容生成与任务协作。</CaseCopy><div className="chat-art" aria-label="AIGPTS AI Chat 产品界面"><img className="chat-laptop" src={chatLaptop} alt="AI Chat 笔记本背景界面" /><img className="chat-panel" src={chatPanel} alt="AI Chat 对话任务界面" /></div></SourceCanvas>;
}

export function AigptsMultimodalScreen() {
  return <SourceCanvas label="AI Image 与 AI Video"><p className="gallery-hint">横向浏览完整界面 →</p><div className="multimodal-gallery" onWheel={event=>event.stopPropagation()}><div className="multimodal-track"><img className="multi-laptop" src={multimodalLaptop} alt="AI 多模态创作平台" /><div className="multi-ui multi-image-ui"><img src={imageUi} alt="AI 生图完整界面" /></div><article className="multi-copy multi-image-copy"><h2><i>✦</i>AI生图</h2><p>支持文生图与图生图两种核心创作方式，用户可以通过自然语言描述快速生成视觉内容，也可以基于已有图片进行风格迁移、画面延展与细节重构，让灵感从文字或素材直接转化为可用图像。</p></article><article className="multi-copy multi-video-copy"><h2><i>✦</i>AI生视频</h2><p>覆盖文生视频、图生视频与视频生视频三种生成路径，从文字创意、静态画面到已有视频素材，都可以进一步转化为动态内容。通过统一的生成流程与参数控制，降低视频创作门槛，提升从构思到成片的效率。</p></article><div className="multi-ui multi-video-ui"><img src={videoUi} alt="AI 生视频完整界面" /></div></div></div></SourceCanvas>;
}

export function AigptsMusicScreen() {
  return <SourceCanvas label="AI Music"><CaseCopy title="AI Music">通过自然语言描述歌曲主题、风格、情绪与场景，快速生成旋律、歌词与完整音乐内容。用户无需专业编曲基础，也能从一个想法出发完成歌曲创作，并根据不同风格持续调整与迭代。</CaseCopy><div className="music-art"><div className="music-page-crop"><img src={musicPage} alt="AI Music 生成页" /></div><img className="music-laptop" src={musicLaptop} alt="AI Music 笔记本展示" /><img className="music-player" src={musicPlayer} alt="AI Music 播放与生成界面" /></div></SourceCanvas>;
}

export function AigptsHeadshotScreen() {
  return <SourceCanvas label="AI 职业形象照"><div className="headshot-copy"><h1>AI 职业形象照</h1><p>基于用户照片生成多风格职业头像，覆盖商务、社交与个人品牌等使用场景，通过标准化生成流程降低传统摄影成本，让高质量形象照获取更简单。</p><div className="headshot-cards"><img className="headshot-card-a" src={headshotA} alt="Halloween Photos" /><img className="headshot-card-b" src={headshotB} alt="Graduation Photos" /><img className="headshot-card-c" src={headshotC} alt="Christmas Photos" /></div></div><div className="headshot-art"><div className="headshot-page-crop"><img src={headshotPage} alt="AI Headshot Generator 页面" /></div><img src={headshotLaptop} alt="AI 职业形象照产品网站" /></div></SourceCanvas>;
}

export function AigptsEditorScreen() {
  return <SourceCanvas label="图片编辑"><div className="editor-copy"><h1>图片编辑</h1><p>围绕用户高频图片处理场景，将多种 AI 编辑能力集中到统一界面，通过清晰的功能入口、任务分组与结果反馈，减少复杂操作路径，让图片编辑更直观、更高效。</p><div className="editor-samples"><div className="editor-mini"><img src={editorA} alt="图片编辑选中素材" /><i/><i/><i/><i/></div><div className="editor-moon"><img src={editorB} alt="图片编辑月球素材" /><i/><i/><i/><i/></div></div></div><div className="editor-art"><div className="editor-page-crop"><img src={editorPage} alt="All-In-One Image Editor 页面" /></div><img src={editorLaptop} alt="图片编辑产品网站" /></div></SourceCanvas>;
}

export function AigptsMeetingScreen() {
  return <SourceCanvas label="AI 会议纪要" tone="light"><div className="aigpts-case-copy light-copy"><h1>AI 会议纪要</h1><p>围绕会议前、中、后的完整流程，整合实时转写、AI 总结、重点提炼与待办生成能力，让会议内容从记录到执行形成连续闭环。</p></div><div className="meeting-art"><div className="meeting-page"><img src={meetingPage} alt="AI Meeting Note Taker 页面" /></div><img className="meeting-laptop" src={meetingLaptop} alt="会议纪要产品网站" /><div className="meeting-panel"><img src={meetingPanel} alt="会议纪要工作台" /></div><img className="meeting-strip" src={meetingStrip} alt="Top Rated 2025" /></div></SourceCanvas>;
}

function LightProductScreen({title, children, visual, visualClass}) {
  return <SourceCanvas label={title} tone="light"><div className="aigpts-case-copy light-copy"><h1>{title}</h1><p>{children}</p></div><img className={`light-product-visual ${visualClass}`} src={visual} alt={`${title} 完整产品界面`} /></SourceCanvas>;
}

export function AigptsSpeechScreen() {
  return <LightProductScreen title="声音文字互转" visual={speechVisual} visualClass="speech-visual">整合文字转语音与语音转文字能力，支持自然语音生成、音频识别与实时转写。通过统一入口与简化操作流程，让用户能够快速完成配音、字幕、会议转写及内容整理等多种场景任务。</LightProductScreen>;
}

export function AigptsPdfScreen() {
  return <LightProductScreen title="PDF工具" visual={pdfVisual} visualClass="pdf-visual">整合 PDF 转换、合并、拆分、压缩、编辑、OCR、签名与水印等高频能力，通过统一入口覆盖从基础处理到智能编辑的完整流程。减少多工具切换，让复杂 PDF 任务更快速、更直观地完成。</LightProductScreen>;
}

export function AigptsQrScreen() {
  return <LightProductScreen title="二维码生成" visual={qrVisual} visualClass="qr-visual">支持 URL、图片、视频、PDF、名片、Wi-Fi 等多种二维码类型，并提供样式、颜色、Logo 与 AI 艺术二维码定制能力。通过统一生成流程，让用户快速完成从内容录入、样式设计到二维码输出的完整操作。</LightProductScreen>;
}

export function AigptsMoreScreen() {
  return <SourceCanvas label="更多功能 等你探索" tone="light"><div className="aigpts-more"><h1>更多功能 等你探索</h1><img src={moreVisual} alt="彩色 AI GPTs 品牌字样" /><a href="https://aigpts.ai/en" target="_blank" rel="noreferrer">https://aigpts.ai/en</a></div></SourceCanvas>;
}
