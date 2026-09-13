import React from 'react';
import SourceCanvas from './SourceCanvas';
import art from '../assets/figma/tuning-art.png';
import chart from '../assets/figma/tuning-chart.svg';
import face from '../assets/figma/tuning-face.svg';
import press from '../assets/figma/tuning-press.svg';
import search from '../assets/figma/tuning-search.svg';
import './tuning-screen.css';

const decisions=[
  {title:'01｜结构优化',body:'调整页面层级、模块顺序与信息密度，让内容更清晰、更符合用户操作路径。',icon:chart},
  {title:'02｜视觉优化',body:'统一色彩、字体、间距、圆角与组件风格，提升整体完成度和品牌一致性。',icon:face},
  {title:'03｜交互优化',body:'补充状态、反馈与操作细节，减少 AI 初稿中“能看但不好用”的问题。',icon:press},
  {title:'04｜细节收敛',body:'通过多轮对比与修改，持续消除不合理元素，让最终效果达到真实项目交付标准。',icon:search},
];

export default function TuningScreen(){
  return <SourceCanvas label="设计调优 / 四个关键环节">
    <img className="tuning-source-art" src={art} alt="手指与发光的AI星形图案"/>
    <div className="tuning-source-body">
      <header className="tuning-source-intro">
        <h1>AI 生成后的设计调优</h1>
        <p>Codex + Figma 可以快速完成页面结构和基础视觉，但首版结果并不等于最终设计。通过多轮人工与 AI 联合调优，对信息层级、布局节奏、视觉风格、组件一致性和交互细节持续优化，最终将 AI 初稿转化为可落地的高质量 UI。</p>
      </header>
      <div className="tuning-source-cards">{decisions.map(({title,body,icon})=><article key={title}>
        <div className="tuning-source-icon"><img src={icon} alt=""/></div>
        <h2>{title}</h2><p>{body}</p>
      </article>)}</div>
      <p className="tuning-source-conclusion">从“快速出稿”到“高质量落地”，真正的价值发生在生成之后。</p>
    </div>
  </SourceCanvas>;
}
