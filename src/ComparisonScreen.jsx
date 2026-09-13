import React from 'react';
import SourceCanvas from './SourceCanvas';
import first from '../assets/figma/screen12-first.png';
import tuned from '../assets/figma/screen12-tuned.png';
import './comparison-screen.css';

export default function ComparisonScreen(){
  return <SourceCanvas label="Video Downloader 生成与调优对比">
    <main className="comparison-source-body">
      <div className="comparison-source-head"><h1>Codex生成第一版页面</h1><h1>AI 生成后的设计调优</h1></div>
      <div className="comparison-source-grid">
        <article tabIndex={0} onWheel={e=>e.stopPropagation()}><img src={first} alt="Codex 生成的 Video Downloader 第一版完整页面"/></article>
        <article tabIndex={0} onWheel={e=>e.stopPropagation()}><img src={tuned} alt="AI 调优后的 Video Downloader 完整页面"/></article>
      </div>
    </main>
  </SourceCanvas>;
}
