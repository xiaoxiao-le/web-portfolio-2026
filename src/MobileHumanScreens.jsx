import React from 'react';
import SourceCanvas from './SourceCanvas';
import humanIcon from '../assets/untitled/screen53-icon.png';
import humanLeft from '../assets/untitled/screen53-a.png';
import humanRight from '../assets/untitled/screen53-b.png';
import humanCenter from '../assets/untitled/screen53-c.png';
import featurePhone from '../assets/untitled/screen54-phone.png';
import featureCardA from '../assets/untitled/screen54-card-a.png';
import featureCardB from '../assets/untitled/screen54-card-b.png';
import videoA from '../assets/untitled/screen55-a.png';
import videoB from '../assets/untitled/screen55-b.png';
import videoFrame from '../assets/untitled/screen55-frame.png';
import chatA from '../assets/untitled/screen56-a.png';
import chatB from '../assets/untitled/screen56-b.png';
import chatFrame from '../assets/untitled/screen56-frame.png';
import galleryCenter from '../assets/untitled/screen57-a.png';
import galleryRight from '../assets/untitled/screen57-b.png';
import galleryLeft from '../assets/untitled/screen57-c.png';
import galleryFarRight from '../assets/untitled/screen57-d.png';
import './mobile-human-screens.css';

function HumanPhone({screen,frame,alt}){return <div className="human-phone"><img className="human-phone-screen" src={screen} alt={alt}/><img className="human-phone-frame" src={frame} alt=""/></div>}

export function HumanCoverScreen(){return <SourceCanvas label="虚拟数字人设计" tone="light"><div className="human-cover-copy"><img src={humanIcon} alt="虚拟数字人图标"/><h1>虚拟数字人设计</h1><p>面向内容创作与个人表达场景，整合数字人形象生成、AI 口播、视频创作与智能对话能力，让用户可以快速创建属于自己的虚拟数字人。通过统一的视觉语言与功能入口，降低数字人制作门槛，形成从形象创建到内容输出的一体化体验。</p><span>查看完整界面 ↗</span></div><div className="human-cover-visual"><img className="human-left" src={humanLeft} alt="上传数字人界面"/><img className="human-right" src={humanRight} alt="DeepSeek 界面"/><img className="human-center" src={humanCenter} alt="虚拟数字人首页"/></div></SourceCanvas>}

export function HumanIntroScreen(){return <SourceCanvas label="功能介绍" tone="light"><div className="human-intro-copy"><h1>功能介绍</h1><p>围绕数字人创作核心任务，将创建数字人、AI 写口播、声音克隆、视频切片、视频搬运与 DeepSeek 对话等能力集中在首页功能区，通过清晰的卡片层级与快捷入口，帮助用户快速识别并进入对应创作流程。</p><p>同时结合顶部场景化 Banner展示“AI 数字人口播”“直播切片”等重点能力，通过更具视觉吸引力的内容推荐强化功能认知，在提升首页丰富度的同时，缩短用户从发现功能到实际使用的操作路径。</p></div><div className="human-intro-visual"><img className="human-feature-phone" src={featurePhone} alt="数字人功能首页"/><img className="human-feature-card-a" src={featureCardA} alt="AI 数字人口播 Banner"/><img className="human-feature-card-b" src={featureCardB} alt="直播切片 Banner"/></div></SourceCanvas>}

function HumanFeature({title,copy,screens,reverse=false}){return <SourceCanvas label={title} tone="light"><div className={`human-feature ${reverse?'is-reverse':''}`}><div className="human-feature-copy"><h1>{title}</h1><p>{copy}</p></div><div className="human-phone-pair"><HumanPhone screen={screens[0]} frame={screens[2]} alt={`${title}界面一`}/><HumanPhone screen={screens[1]} frame={screens[2]} alt={`${title}界面二`}/></div></div></SourceCanvas>}
export function HumanVideoScreen(){return <HumanFeature title="数字人视频制作" copy="用户可基于已创建的数字人，通过输入文案、上传音频或选择语音快速生成数字人口播视频。将人物形象、文本内容与视频生成流程集中在同一界面中，让复杂的视频制作过程更直观、更高效。" screens={[videoA,videoB,videoFrame]}/>}
export function HumanChatScreen(){return <HumanFeature reverse title="DeepSeek对话" copy="除数字人创作能力外，产品同时接入 DeepSeek 智能对话，为用户提供内容问答、灵感辅助与文案生成等能力。通过 AI 对话与数字人创作的结合，让用户可以从内容构思直接延伸到最终视频产出，形成更完整的 AI 创作链路。" screens={[chatA,chatB,chatFrame]}/>}

export function HumanGalleryScreen(){return <SourceCanvas label="虚拟数字人完整界面" tone="light"><div className="human-gallery" onWheel={event=>event.stopPropagation()}><div className="human-gallery-track"><img src={galleryLeft} alt="创建数字人"/><img src={galleryCenter} alt="生成记录"/><img src={galleryRight} alt="DeepSeek 首页"/><img src={galleryFarRight} alt="视频切片"/></div></div></SourceCanvas>}
