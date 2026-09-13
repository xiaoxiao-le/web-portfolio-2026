import React from 'react';
import SourceCanvas from './SourceCanvas';
import overview from '../assets/untitled/screen69-overview.png';
import behavior from '../assets/untitled/screen70-dashboard.png';
import dispatch from '../assets/untitled/screen71-dashboard.png';
import control from '../assets/untitled/screen72-dashboard.png';
import poster1 from '../assets/untitled/screen73-1.png';
import poster2 from '../assets/untitled/screen73-2.png';
import poster3 from '../assets/untitled/screen73-3.png';
import poster4 from '../assets/untitled/screen73-4.png';
import poster5 from '../assets/untitled/screen73-5.png';
import phoneFrame from '../assets/untitled/screen74-phone.png';
import popup1 from '../assets/untitled/screen74-popup1.png';
import popup2 from '../assets/untitled/screen74-popup2.png';
import popup3 from '../assets/untitled/screen74-popup3.png';
import popup4 from '../assets/untitled/screen74-popup4.png';
import banner1 from '../assets/untitled/screen75-1.png';
import banner2 from '../assets/untitled/screen75-2.png';
import banner3 from '../assets/untitled/screen75-3.png';
import banner4 from '../assets/untitled/screen75-4.png';
import banner5 from '../assets/untitled/screen75-5.png';
import banner6 from '../assets/untitled/screen75-6.png';
import banner7 from '../assets/untitled/screen75-7.png';
import banner8 from '../assets/untitled/screen75-8.png';
import closingBg from '../assets/untitled/screen76-bg.png';
import qr from '../assets/untitled/screen76-qr.png';
import mailIcon from '../assets/untitled/screen76-mail.svg';
import phoneIcon from '../assets/untitled/screen76-phone.svg';
import './final-screens.css';

export function CampusOverviewScreen(){return <SourceCanvas label="轻舟校园智慧管理平台总览" tone="light"><div className="final-light-bg"/><h1 className="overview-title">轻舟校园 智慧管理平台</h1><img className="overview-ui" src={overview} alt="轻舟校园各业务后台界面总览"/><div className="overview-logo">Ⓩ<small>轻舟校园</small></div></SourceCanvas>}

const boardData={
  behavior:{title:'行为识别可视化平台',image:behavior},
  dispatch:{title:'调度中心',image:dispatch},
  control:{title:'智慧综合管控平台',image:control}
};
function DataBoard({type}){const item=boardData[type];return <SourceCanvas label={item.title}><div className="final-dark-bg"/><h1 className="board-title">{item.title}</h1><img className="board-image" src={item.image} alt={`${item.title}完整可视化大屏`}/></SourceCanvas>}
export const BehaviorBoardScreen=()=> <DataBoard type="behavior"/>;
export const DispatchBoardScreen=()=> <DataBoard type="dispatch"/>;
export const ControlBoardScreen=()=> <DataBoard type="control"/>;

export function AigcPosterScreen(){const posters=[poster1,poster2,poster3,poster4,poster5];return <SourceCanvas label="AIGC运营设计"><div className="final-dark-bg"/><h1 className="aigc-title">AIGC 运营设计</h1><div className="poster-strip">{posters.map((src,i)=><img key={src} src={src} alt={`AIGC运营海报 ${i+1}`}/>)}</div></SourceCanvas>}

function PopupPhone({image,index}){return <div className="popup-phone"><div className={`popup-art popup-${index}`}><img src={image} alt={`AIGC弹窗方案 ${index}`}/></div><img className="phone-frame" src={phoneFrame} alt=""/></div>}
export function AigcPopupScreen(){return <SourceCanvas label="AIGC弹窗设计"><div className="final-dark-bg"/><h1 className="aigc-title">AIGC 弹窗设计</h1><div className="popup-row"><PopupPhone image={popup1} index={1}/><PopupPhone image={popup2} index={2}/><PopupPhone image={popup3} index={3}/><PopupPhone image={popup4} index={4}/></div></SourceCanvas>}

export function AigcBannerScreen(){const rows=[[banner1,banner2,banner3],[banner4,banner5,banner6,banner7],[banner7,banner8,banner8],[banner1,banner8]];return <SourceCanvas label="AIGC Banner设计"><div className="final-dark-bg"/><h1 className="aigc-title">AIGC Banner设计</h1><div className="banner-wall" onWheel={event=>event.stopPropagation()}>{rows.map((row,i)=><div className={`banner-row row-${i}`} key={i}>{row.map((src,j)=><img key={`${i}-${j}`} src={src} alt={`AIGC Banner ${i*4+j+1}`}/>)}</div>)}</div><div className="banner-fade"/></SourceCanvas>}

export function ContactScreen(){return <SourceCanvas label="感谢观看与联系"><div className="final-dark-bg"/><img className="contact-bg" src={closingBg} alt=""/><section className="contact-copy"><small>LET’S CONNECT / 李凯乐</small><h1>让好想法，<br/>成为下一个好作品。</h1><p>感谢浏览我的作品。如果你正在寻找 UI/UX 设计师，欢迎和我聊聊。</p><div><a href="mailto:Banlili1020@163.com">邮件联系 ↗</a><button type="button">再看看我的作品</button></div></section><div className="contact-info"><p><img src={phoneIcon} alt=""/>16619792236</p><p><img src={mailIcon} alt=""/>Banlili1020@163.com</p></div><img className="contact-qr" src={qr} alt="微信联系二维码"/></SourceCanvas>}
