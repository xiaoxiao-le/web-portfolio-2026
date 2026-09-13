import React, {useRef} from 'react';
import SourceCanvas from './SourceCanvas';
import productLogo from '../assets/figma/screen15-logo.png';
import codexLogo from '../assets/figma/screen15-codex.svg';
import figmaLogo from '../assets/figma/research-figma.png';
import homePage from '../assets/figma/screen15-home.png';
import featuresPage from '../assets/figma/screen15-features.png';
import './post-scheduler-screen.css';

function FeaturesContinuation(){
  return <div className="post-features-continuation" aria-hidden="true">
    <div className="post-mini-nav"><b>PostScheduler</b><span>Features</span><span>Pricing</span><span>Templates</span><button>Start Free Trial</button></div>
    <section><small>SMART PUBLISHING</small><h2>Everything you need to grow on Social</h2><p>Create, schedule and publish your content across every network from one streamlined workspace.</p><button>Start Free Trial</button></section>
    <div className="post-feature-list">{['Multi-Platform Publishing','Smart Scheduling','Team Collaboration','Actionable Analytics'].map((item,i)=><article key={item}><i>{i+1}</i><div><b>{item}</b><p>Plan, approve and publish stronger content with one connected workflow.</p></div></article>)}</div>
  </div>;
}

function DashboardPreview(){
  return <div className="post-dashboard-preview" aria-label="PostScheduler dashboard preview">
    <aside><b>PostScheduler</b>{['Overview','Calendar','Create Post','Analytics','Team'].map((item,i)=><span className={i===0?'active':''} key={item}>{item}</span>)}</aside>
    <main><header><div><small>Workspace</small><b>Good morning, Alex</b></div><button>+ Create post</button></header><div className="post-dashboard-stats">{[['Scheduled','24'],['Published','128'],['Engagement','8.4%']].map(x=><article key={x[0]}><span>{x[0]}</span><b>{x[1]}</b></article>)}</div><section><div className="post-dashboard-chart"><b>Content performance</b><i/><i/><i/><i/><i/><i/></div><div className="post-dashboard-schedule"><b>Upcoming posts</b>{['Instagram','LinkedIn','TikTok'].map((x,i)=><p key={x}><em>{x.slice(0,1)}</em><span>{x}<small>Today · {10+i*2}:30</small></span><strong>Ready</strong></p>)}</div></section></main>
  </div>;
}

export default function PostSchedulerScreen(){
  const gallery=useRef(null);
  const onWheel=e=>{
    e.stopPropagation();
    e.preventDefault();
    gallery.current.scrollLeft+=e.deltaX+e.deltaY;
  };
  return <SourceCanvas label="PostScheduler 跨平台发布社媒">
    <p className="post-browse-hint">横向浏览完整界面 →</p>
    <article className="post-project-intro">
      <img className="post-product-logo" src={productLogo} alt="PostScheduler"/>
      <h1>PostScheduler</h1>
      <h2>跨平台发布社媒</h2>
      <a href="https://postscheduler.ai/" target="_blank" rel="noreferrer">https://postscheduler.ai/</a>
      <p>PostScheduler 是一款面向品牌、营销团队与内容创作者的社交媒体管理工具，帮助用户在一个工作台中完成内容创建、团队协作、定时发布、内容日历、数据分析与多平台分发。</p>
      <h3>清晰的信息架构与模块化设计</h3>
      <p>通过统一的视觉系统与真实产品场景展示，将复杂的 SaaS 功能转化为更直观、易理解且具有转化力的 Web 体验。</p>
      <div className="post-tools"><span><img src={codexLogo} alt="Codex"/></span><b>+</b><span><img src={figmaLogo} alt="Figma"/></span></div>
    </article>
    <div ref={gallery} className="post-page-gallery" onWheel={onWheel}>
      <figure className="post-page-card"><img src={homePage} alt="PostScheduler 首页完整界面"/></figure>
      <figure className="post-page-card post-features-card"><img src={featuresPage} alt="PostScheduler 功能页"/><FeaturesContinuation/></figure>
      <figure className="post-page-card"><DashboardPreview/></figure>
    </div>
  </SourceCanvas>;
}
