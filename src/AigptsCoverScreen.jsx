import React from 'react';
import SourceCanvas from './SourceCanvas';
import brand from '../assets/figma/screen18-logo.png';
import site from '../assets/figma/screen18-site.png';
import laptop from '../assets/figma/screen18-laptop.png';
import './aigpts-cover-screen.css';

export default function AigptsCoverScreen(){return <SourceCanvas label="AI集合站 一站式AI工具">
  <section className="aigpts-cover-copy">
    <small>海外 Web</small>
    <h1>AI集合站<br/>一站式AI工具</h1>
    <a className="aigpts-url" href="https://aigpts.ai/en" target="_blank" rel="noreferrer">https://aigpts.ai/en</a>
    <p>从产品调研与设计分析，到 AI 工具发现与创作工作台，查看这套海外 Web 体验的设计过程与界面。</p>
    <button type="button">查看设计过程 ↗</button>
    <img className="aigpts-brand" src={brand} alt="AI GPTs"/>
  </section>
  <div className="aigpts-device" aria-label="AIGPTS 网站首页设备预览">
    <div className="aigpts-device-screen"><img src={site} alt="AIGPTS 网站首页"/></div>
    <img className="aigpts-laptop" src={laptop} alt="笔记本电脑外壳"/>
  </div>
  </SourceCanvas>}
