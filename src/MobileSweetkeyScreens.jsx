import React from 'react';
import SourceCanvas from './SourceCanvas';
import sweetIcon from '../assets/untitled/screen43-icon.png';
import sweetHero from '../assets/untitled/screen43-hero.png';
import sceneLeft from '../assets/untitled/screen44-left.png';
import sceneCenter from '../assets/untitled/screen44-center.png';
import sceneRight from '../assets/untitled/screen44-right.png';
import tagA from '../assets/untitled/screen45-a.png';
import tagB from '../assets/untitled/screen45-b.png';
import tagFrame from '../assets/untitled/screen45-frame.png';
import replyA from '../assets/untitled/screen46-a.png';
import replyB from '../assets/untitled/screen46-b.png';
import replyFrame from '../assets/untitled/screen46-frame.png';
import galleryA from '../assets/untitled/screen47-a.png';
import galleryB from '../assets/untitled/screen47-b.png';
import galleryC from '../assets/untitled/screen47-c.png';
import galleryD from '../assets/untitled/screen47-d.png';
import './mobile-sweetkey-screens.css';

function SweetPhone({screen,frame,small=false,alt=''}){
  return <div className={`sweet-phone ${small?'is-small':''}`}>
    <img className="sweet-phone-screen" src={screen} alt={alt}/>
    <img className="sweet-phone-frame" src={frame} alt=""/>
  </div>;
}

export function SweetkeyCoverScreen(){
  return <SourceCanvas label="Sweetkey" tone="light">
    <div className="sweet-cover-copy">
      <img src={sweetIcon} alt="Sweetkey 图标"/>
      <h1>Sweetkey<br/>让聊天更懂表达</h1>
      <p>恋爱键盘 · 移动应用</p>
      <p>面向社交与恋爱聊天场景，将标签化表达、个性化话术和快捷输入整合到智能键盘中。让用户根据关系与聊天氛围，快速找到合适的表达方式。</p>
      <span>查看功能与交互 ↗</span>
    </div>
    <div className="sweet-cover-visual"><img src={sweetHero} alt="Sweetkey 应用双手机主视觉"/></div>
  </SourceCanvas>;
}

export function SweetkeySceneScreen(){
  return <SourceCanvas label="Sweetkey 场景与表达" tone="light">
    <div className="sweet-scene-grid">
      <img src={sceneLeft} alt="标签与标签体系"/>
      <img className="scene-phone" src={sceneCenter} alt="Sweetkey 标签商店界面"/>
      <img src={sceneRight} alt="更懂恋爱语境"/>
    </div>
  </SourceCanvas>;
}

export function SweetkeyTagsScreen(){
  return <SourceCanvas label="定制专属标签" tone="light">
    <div className="sweet-feature-copy"><h1>定制专属标签</h1><p>围绕不同关系阶段、聊天对象与表达风格，提供可自由组合的标签体系。用户可以快速建立属于自己的常用话术分类，让聊天内容更贴合个人习惯，也更方便后续调用与管理。</p></div>
    <div className="sweet-tags-phones"><SweetPhone screen={tagA} frame={tagFrame} alt="标签商店界面"/><SweetPhone screen={tagB} frame={tagFrame} alt="相亲女友标签弹窗"/></div>
  </SourceCanvas>;
}

export function SweetkeyRepliesScreen(){
  return <SourceCanvas label="专属你的回复" tone="light">
    <div className="sweet-reply-phones"><SweetPhone screen={replyA} frame={replyFrame} alt="体验键盘设置"/><SweetPhone small screen={replyB} frame={replyFrame} alt="智能键盘回复建议"/></div>
    <div className="sweet-reply-copy"><h1>专属你的回复</h1><p>根据当前聊天内容与所选标签，快速生成更符合语境的回复建议。通过不同表达风格切换与快捷调用，减少反复组织语言的时间，让每一次回复都更自然、更有情绪感。</p></div>
  </SourceCanvas>;
}

export function SweetkeyGalleryScreen(){
  return <SourceCanvas label="Sweetkey 完整界面" tone="light">
    <div className="sweet-gallery" onWheel={event=>event.stopPropagation()}><div className="sweet-gallery-track">
      <img src={galleryC} alt="Sweetkey 标签选择界面"/>
      <img src={galleryA} alt="Sweetkey 标签管理界面"/>
      <img src={galleryB} alt="Sweetkey 标签定制界面"/>
      <img src={galleryD} alt="Sweetkey 性别设置界面"/>
    </div></div>
  </SourceCanvas>;
}
