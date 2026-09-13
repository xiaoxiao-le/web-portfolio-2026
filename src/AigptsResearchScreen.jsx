import React from 'react';
import SourceCanvas from './SourceCanvas';
import brand from '../assets/figma/screen19-logo.png';
import chart from '../assets/figma/screen19-chart.svg';
import press from '../assets/figma/screen19-press.svg';
import face from '../assets/figma/screen19-face.svg';
import './aigpts-research-screen.css';

const phases=[
  {title:'01｜创建需求',icon:chart,tags:[['立项'],['竞品分析'],['业务模块分析'],['功能结构图',1],['流程图',1],['明确用户角色'],['确定核心痛点']]},
  {title:'02｜交互设计',icon:press,tags:[['功能分析'],['低保真原型图'],['用户体验交互体验设计',1],['高保真',1],['交互逻辑'],['功能层级分析']]},
  {title:'03｜界面视觉',icon:face,tags:[['品牌设计'],['LOGO'],['风格定义'],['界面设计',1],['AIGC',1],['感官体验增强'],['图标设计']]},
];

export default function AigptsResearchScreen(){return <SourceCanvas label="AI GPTs 产品调研与设计分析">
  <h1 className="aigpts-research-title">AI GPTs</h1>
  <p className="aigpts-research-desc">面向创作者与效率用户的一站式 AI 原生创作平台，通过统一的工作台整合文本、图像、视频、音频与生产力工具，降低不同 AI 模型与工具之间的使用门槛，让用户可以从创意构思、内容生成到编辑与项目管理，在同一套体验中完成。</p>
  <img className="aigpts-research-brand" src={brand} alt="AI GPTs"/>
  <div className="aigpts-research-phases">{phases.map(phase=><article key={phase.title}>
    <span className="aigpts-phase-icon"><img src={phase.icon} alt=""/></span>
    <h2>{phase.title}</h2>
    <div>{phase.tags.map(([tag,active])=><span className={active?'active':''} key={tag}>{tag}</span>)}</div>
  </article>)}</div>
  </SourceCanvas>}
