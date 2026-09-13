import React from 'react';
import SourceCanvas from './SourceCanvas';
import glow from '../assets/figma/screen20-glow.png';
import layerTop from '../assets/figma/screen21-layer-top.svg';
import layerMiddle from '../assets/figma/screen21-layer-middle.svg';
import layerBottom from '../assets/figma/screen21-layer-bottom.svg';
import handleA from '../assets/figma/screen22-handle-a.svg';
import handleB from '../assets/figma/screen22-handle-b.svg';
import './aigpts-system-screens.css';

export function AigptsNeedsScreen(){return <SourceCanvas label="洞察用户需求">
  <h1 className="needs-title">洞察用户需求</h1>
  <p className="needs-subtitle">从多模态创作需求出发，以统一工作流降低工具切换成本，打造更连续、高效的一站式 AI 创作平台。</p>
  <div className="needs-diagram">
    <img src={glow} alt="多元创作与效率驱动关系光晕"/>
    <div className="needs-copy needs-copy-left"><b>用户特征</b><h2>「多元创作」</h2><p>用户同时存在文本、图像、视频等多模态 AI 使用需求</p></div>
    <div className="needs-copy needs-copy-right"><b>使用动力</b><h2>「效率驱动」</h2><p>统一工作台降低工具切换成本，让创作流程更连续</p></div>
  </div>
  </SourceCanvas>}

const architecture=[
  ['1.探索与项目管理架构','通过 Explore 与 Projects 承载能力发现、内容探索和项目管理，帮助用户快速进入创作流程并沉淀作品。'],
  ['2.AI 创作架构','以 AI Chat、AI Image、AI Video、AI Music 为核心，覆盖文本、图像、视频、音频等多模态生成能力，支持从灵感到内容生产的完整链路。'],
  ['3.效率工具架构','集成 AI Headshot、二维码生成、图片编辑、PDF、TTS/STT 等高频工具，为用户提供更丰富的日常创作与效率场景支持。'],
];
export function AigptsArchitectureScreen(){return <SourceCanvas label="信息架构分析">
  <h1 className="architecture-title">信息架构分析</h1>
  <div className="architecture-body">
    <div className="architecture-copy">{architecture.map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}</div>
    <div className="architecture-layers">
      <div className="arch-layer arch-top"><img src={layerTop} alt="探索层"/><b>探索</b></div>
      <div className="arch-layer arch-middle"><img src={layerMiddle} alt="AI创作层"/><b>AI创作</b></div>
      <div className="arch-layer arch-bottom"><img src={layerBottom} alt="效率工具层"/><b>效率工具</b></div>
    </div>
  </div>
  </SourceCanvas>}

const swatches=[
  {name:'主题色',colors:'#9DFFBF、#30FF9C、#10F0FF、#8BF8FF',className:'theme',wide:true},
  {name:'辅助色',colors:'#9DFFBF、#30FF9C、#10F0FF、#8BF8FF',className:'accent',wide:true},
  {name:'单色',colors:'#45FFC3',className:'solid'},
  {name:'背景色',colors:'#0E0E0E',className:'background'},
  {name:'线条色',colors:'#F8FF52、#FF8B37、#7042FF',className:'line'},
  {name:'字体色',colors:'#FFFFFF',className:'type'},
];
const typeScale=[['12PX','最小字号','字重-中等'],['14PX','标准正文','字重-标准'],['20PX','三级标题','字重-中等'],['24PX','二级标题','字重-中等'],['40PX','一级标题','字重-加粗']];
export function AigptsStyleScreen(){return <SourceCanvas label="色彩与字体规范">
  <h1 className="style-title">色彩规范定义</h1>
  <div className="style-swatches">{swatches.map((s,i)=><section className={`${s.wide?'wide ':''}${s.className}`} key={s.name}><header><b>{s.name}</b><span>{s.colors}</span></header><div><img src={i<2?handleA:handleB} alt=""/><i/><img src={handleB} alt=""/></div></section>)}</div>
  <h2 className="type-title">字体规范定义</h2>
  <div className="type-family">Aa<br/>Montserrat</div>
  <div className="type-scale">{typeScale.map(([size,label,weight])=><article key={size}><b>{size}</b><span>{label}</span><small>{weight}</small></article>)}</div>
  </SourceCanvas>}
