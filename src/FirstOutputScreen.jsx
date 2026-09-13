import React from 'react';
import SourceCanvas from './SourceCanvas';
import homeA from '../assets/figma/screen11-home-a.png';
import homeB from '../assets/figma/screen11-home-b.png';
import pricing from '../assets/figma/screen11-pricing.png';
import downloadB from '../assets/figma/screen11-download-b.png';
import success from '../assets/figma/screen11-success.png';
import cancel from '../assets/figma/screen11-cancel.png';
import inviteClose from '../assets/figma/screen11-invite-close.png';
import invited from '../assets/figma/screen11-invited.png';
import feedback from '../assets/figma/screen11-feedback.png';
import register from '../assets/figma/screen11-register.png';
import './first-output-screen.css';

const panels=[
  {src:homeB,alt:'GreatClips 首页第一版',x:0,y:0,w:259.2,h:1473.12},
  {src:register,alt:'五秒注册引导弹窗',x:295.2,y:167.76,w:259.2,h:158.4},
  {src:homeA,alt:'GreatClips 首页第二版',x:295.2,y:362.16,w:259.2,h:1261.98},
  {src:pricing,alt:'GreatClips 定价页面',x:590.4,y:0,w:259.2,h:649.08},
  {src:downloadB,alt:'下载弹窗',x:590.4,y:685.17,w:259.2,h:158.4},
  {src:feedback,alt:'GreatClips 用户反馈页面',x:885.6,y:99.36,w:259.2,h:226.8},
  {src:invited,alt:'邀请与奖励页面',x:885.6,y:357.84,w:259.2,h:568.8},
  {src:success,alt:'支付成功弹窗',x:1180.8,y:167.85,w:259.2,h:158.4},
  {src:cancel,alt:'支付取消弹窗',x:1180.8,y:362.25,w:259.2,h:158.4},
  {src:inviteClose,alt:'关闭下载后的邀请弹窗',x:1180.8,y:556.65,w:259.2,h:158.4},
];

function SmallModal({x,y,title,body,action,tone='red',height=158.4}){
  return <article className={`output-mini-modal ${tone}`} style={{left:x,top:y,height}}>
    <div className="output-mini-card"><span className="output-mini-mark">G</span><small>GreatClips</small><h3>{title}</h3><p>{body}</p><button>{action}</button><i>Only download content you own or have permission to use.</i></div>
  </article>;
}

export default function FirstOutputScreen(){
  return <SourceCanvas label="Codex+Figma 第一版输出结果">
    <main className="first-output-body">
      <h1>Codex+Figma（第一版）输出结果</h1>
      <div className="first-output-scroll" tabIndex={0} onWheel={e=>e.stopPropagation()}>
        <div className="first-output-stage">
          {panels.map(panel=><img key={panel.alt} src={panel.src} alt={panel.alt} style={{left:panel.x,top:panel.y,width:panel.w,height:panel.h}}/>)}
          <SmallModal x={590.4} y={879.57} title="Your download is ready" body="Choose a format and save the result." action="Download video"/>
          <SmallModal x={590.4} y={1073.97} title="Download rules" body="Use public content only when you own it or have permission." action="I understand" tone="purple"/>
          <SmallModal x={885.6} y={962.64} height={334.08} title="Your result is ready" body="Review the processed video and choose the quality you need." action="Export result" tone="purple"/>
          <SmallModal x={1180.8} y={751.05} title="You're about to export in HD" body="Unlock HD export with one credit or continue in standard quality." action="Unlock HD export"/>
        </div>
      </div>
    </main>
  </SourceCanvas>;
}
