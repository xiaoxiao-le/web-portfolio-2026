import React,{useRef} from 'react';
import SourceCanvas from './SourceCanvas';
import chatMark from '../assets/figma/screen16-chat.svg';
import codexLogo from '../assets/figma/screen16-codex.svg';
import figmaLogo from '../assets/figma/research-figma.png';
import homePage from '../assets/figma/screen16-home.png';
import featuresPage from '../assets/figma/screen16-features.png';
import './orbit-lead-screen.css';

function FeatureContinuation(){return <div className="orbit-feature-continuation" aria-hidden="true">
  <nav><b>OrbitLead</b><span>Features</span><span>Resources</span><span>Pricing</span><button>Start free trial</button></nav>
  <header><small>WHATSAPP CRM FEATURES</small><h2>Everything your team needs to turn WhatsApp into revenue.</h2><p>Qualify every inquiry, reply with confidence, keep deals moving, and re-engage opted-in customers from one shared AI sales workspace.</p><div><button>Start free trial</button><button>Watch product tour</button></div></header>
  <section><h3>One workspace. Every revenue-critical conversation.</h3><div>{['Shared team inbox','AI sales assistant','Lead qualification','Follow-up automation'].map((x,i)=><article key={x}><small>0{i+1}</small><b>{x}</b><p>Keep customer context clear and move every opportunity forward.</p></article>)}</div></section>
  <section><h3>From first inquiry to repeat revenue.</h3><div>{['Capture','Understand','Respond','Convert'].map((x,i)=><article key={x}><small>0{i+1}</small><b>{x}</b></article>)}</div></section>
  </div>}

export default function OrbitLeadScreen(){
  const gallery=useRef(null);
  const onWheel=e=>{e.stopPropagation();e.preventDefault();gallery.current.scrollLeft+=e.deltaX+e.deltaY};
  return <SourceCanvas label="OrbitLead WhatsApp协作平台">
    <p className="orbit-browse-hint">横向浏览完整界面 →</p>
    <article className="orbit-project-intro">
      <span className="orbit-product-logo"><img src={chatMark} alt="OrbitLead"/></span>
      <h1>OrbitLead</h1>
      <h2>WhatsApp协作平台</h2>
      <a href="https://inboxmates.co" target="_blank" rel="noreferrer">https://inboxmates.co</a>
      <p>OrbitLead 是一款围绕客户沟通、线索管理、自动回复与销售转化，打造统一、高效的业务协作体验。</p>
      <h3>清晰的信息架构与高转化表达</h3>
      <p>围绕客户沟通、线索管理、自动回复与销售转化等核心能力，通过模块化设计与真实界面展示，让产品价值传达更清晰、更高效。</p>
      <small>开发中</small>
      <div className="orbit-tools"><span><img src={codexLogo} alt="Codex"/></span><b>+</b><span><img src={figmaLogo} alt="Figma"/></span></div>
    </article>
    <div ref={gallery} className="orbit-page-gallery" onWheel={onWheel}>
      <figure><img src={homePage} alt="OrbitLead 首页完整界面"/></figure>
      <figure className="orbit-features-card"><img src={featuresPage} alt="OrbitLead 功能页"/><FeatureContinuation/></figure>
    </div>
  </SourceCanvas>
}
