import React from 'react';
import SourceCanvas from './SourceCanvas';
import homeBg from '../assets/figma/home-background.png';
import profile from '../assets/figma/profile.png';
import dock from '../assets/untitled/screen01-dock.png';
import workflowStar from '../assets/untitled/screen04-star.png';
import workflowCompare from '../assets/untitled/screen05-right.png';
import workflowHero from '../assets/figma/screen06-workflow.png';
import researchUi from '../assets/figma/screen07-a.png';
import figmaMakeUi from '../assets/figma/screen07-b.png';
import tunedUi from '../assets/figma/screen07-c.png';
import tunedUiAlt from '../assets/figma/screen07-d.png';
import transitionBg from '../assets/figma/screen08-visual.png';
import './intro-screens.css';

export function HomeScreen(){return <SourceCanvas label="李凯乐作品集首页"><div className="intro-black"/><img className="intro-home-bg" src={homeBg} alt=""/><div className="intro-home-copy"><small>LI KAILE · PORTFOLIO 2026</small><h1>你好 我是李凯乐</h1><h2>AI 原生 UI/UX 设计师</h2><p>我的作品涵盖海外 Web、移动 APP、B 端产品与 AI 工作流。从产品梳理、交互到视觉，探索想法如何成为可用的界面。</p><div><button type="button">浏览我的作品 ↗</button><button type="button">关于我</button></div></div><img className="intro-dock" src={dock} alt="AI 设计工具 Dock"/></SourceCanvas>}

const work=[
 {company:'莱特摩比网络科技有限公司',time:'2023.05–2026.08',items:['负责 Web、App 及 AI 产品的 UI/UX 设计，参与从需求分析、信息架构、交互流程、视觉设计到设计交付的完整产品设计流程；','将 Codex 融入日常 UI 设计工作流，实现从设计稿到可运行页面的快速验证，降低设计与开发之间的沟通成本。','熟练使用设计工作流，实现“需求 → AI 方案探索 → UI 精修 → 前端实现 → 设计验证”的完整闭环，提高页面设计及原型落地效率。','能够通过 Skill、设计规则、组件约束和上下文文件指导 AI 生成页面。','持续探索 AI Agent、Codex、Figma 等工具在 UI 设计中的应用，推动传统 UI 设计流程向 AI Native Design Workflow 转型。']},
 {company:'轻舟易联信息科技有限公司',time:'2022.02–2023.05',items:['负责校园管理 B 端后台及小程序的 UI/UX 设计，完成页面、图标及相关视觉元素设计。','优化页面布局与交互流程，提升产品易用性和操作效率。','持续优化产品视觉表现与设计规范，保证整体风格统一。','与产品、开发协作，跟进设计落地并完成页面走查。']},
 {company:'西安真悦网络科技有限公司',time:'2021.05–2022.01',items:['负责多个 App 外包项目的 UI 设计，根据不同客户及业务需求快速完成产品方案输出。','负责需求梳理、竞品分析、页面结构及高保真 UI 设计。','配合产品与开发推进项目落地、测试及上线，并持续跟进迭代优化。']}
];
function ExperienceCard(){return <article className="experience-card"><h2>「工作经历」</h2>{work.map(item=><section key={item.company}><header><b>{item.company}</b><time>{item.time}</time></header><ol>{item.items.map(text=><li key={text}>{text}</li>)}</ol></section>)}</article>}
export function AboutScreen(){return <SourceCanvas label="关于我与工作经历"><div className="intro-black"/><aside className="intro-profile"><div><img src={profile} alt="李凯乐头像"/></div><h1>李凯乐</h1><p>河北工程技术学院·本科</p><p>网络工程</p><p>16619792236</p><p>Banlili1020@163.com</p></aside><div className="experience-scroll" onWheel={event=>event.stopPropagation()}><ExperienceCard/></div></SourceCanvas>}

const directory=[
 {icon:'◫',title:'AI 工作流 × UI 设计',sub:'AI AGENT · UI WORKFLOW',tags:['需求分析','AI Agent','UI生成','完善UI','Vibe Coding']},
 {icon:'▣',title:'海外 Web',sub:'GLOBAL WEB · UI DESIGN',tags:['海外审美','响应式设计','高转化落地','多端适配','产品体验']},
 {icon:'♢',title:'移动 APP',sub:'MOBILE APP · UI DESIGN',tags:['产品梳理','交互设计','视觉设计','启动图标','投放商店']},
 {icon:'⌘',title:'B 端与 AIGC',sub:'B-END · AIGC · OTHER',tags:['B端产品','数据后台','可视化大屏','AIGC创作']}
];
export function DirectoryScreen(){return <SourceCanvas label="作品集目录"><div className="intro-black"/><section className="intro-directory"><h1>我的作品，从这里开始</h1><div>{directory.map((item,i)=><article className={i===0?'selected':''} key={item.title}><i>{item.icon}</i><h2>{item.title}</h2><p>{item.sub}</p><div>{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></section></SourceCanvas>}

export function WorkflowCoverScreen(){return <SourceCanvas label="AIGC时代新的工作流"><div className="intro-black"/><section className="workflow-cover-copy"><h1><em>AIGC</em>时代<br/>新的工作流</h1><p>AI 改变的不是设计效率<br/>而是 UI 设计参与产品和解决问题的方式</p></section><img className="workflow-cover-star" src={workflowStar} alt="AIGC 星形主视觉"/></SourceCanvas>}

export function WorkflowCompareScreen(){return <SourceCanvas label="从设计页面到设计系统与工作流"><div className="intro-black"/><section className="workflow-compare"><h1>从「设计页面」到「设计系统与工作流」</h1><div className="workflow-before"><h2><i/>之前 · 设计执行为主</h2><ul><li>产品输出原型后，UI 根据原型逐页完成视觉设计</li><li>大量时间投入在页面绘制、组件搭建与重复调整中</li><li>需求、设计、开发相对串行，设计更多承担中间执行角色</li><li>设计能力主要体现在最终页面质量与视觉表现</li></ul></div><div className="workflow-now"><h2><i/>现在 · 工作流驱动设计</h2><ul><li>设计更早参与需求分析、功能拆解</li><li>通过 AI 辅助理解需求、梳理结构、生成页面与交互方案</li><li>将重复工作沉淀为 Prompt、Skill、Agent 与可复用设计资产</li><li>从“逐页完成设计”，转向“搭建一套能够持续产出设计的工作流”</li><li>快速完成过去多天的初步设计工作</li><li>再持续优化视觉、交互、信息层级与体验细节</li></ul></div></section><img className="workflow-compare-art" src={workflowCompare} alt="工作流形态与 AI Agent 界面"/></SourceCanvas>}

const workflowTasks=[{title:'把数据变成可视化',tone:'green'},{title:'把截图变成产品',tone:'violet'},{title:'从想法到网站',tone:'blue'},{title:'把想法变成APP',tone:'cyan'},{title:'把PRD变成页面',tone:'orange'}];
export function WorkflowSystemScreen(){return <SourceCanvas label="AI 驱动 UI 设计工作流"><div className="intro-black"/><section className="workflow-system-copy"><h1>AI 驱动 UI 设计工作流</h1><p>从调研、竞品分析、需求拆解到 UI 生成与最终调优，将 Codex、Skill、MCP 与 Figma<br/>串联成完整设计流程。减少前期信息整理和重复绘制，把更多时间投入到产品判断、体验<br/>优化与最终视觉质量。</p></section><img className="workflow-system-hero" src={workflowHero} alt="AI 与手部主视觉"/><div className="workflow-task-grid">{workflowTasks.map(item=><article className={item.tone} key={item.title}><h2>{item.title}</h2><i/></article>)}</div></SourceCanvas>}

const workflowSteps=[['1.想法 / 需求输入','记录核心想法，明确产品目标与基础需求'],['2.调研与竞品分析','通过 Codex 调研市场，分析竞品、用户评论与真实痛点'],['3.需求拆解 / PRD','整理功能优先级，输出页面清单、流程与需求文档'],['4.AI 生成 UI','通过 Skill / MCP / Figma Make / Stitch，快速生成页面结构与高保真初稿'],['5.设计调优','人工 + AI 联合优化，调整视觉、布局、组件与交互细节'],['6.验证与交付','检查完整流程与多状态，输出最终 UI / 原型 / 开发交付稿']];
export function WorkflowStepsScreen(){return <SourceCanvas label="AI 工作流与 UI 设计"><div className="intro-black"/><section className="workflow-steps"><h1>AI 工作流 × UI 设计</h1><div className="workflow-step-copy">{workflowSteps.map(step=><article key={step[0]}><h2>{step[0]}</h2><p>{step[1]}</p></article>)}</div><div className="workflow-result-grid"><article><header><h2>产品与需求分析</h2><span>→</span></header><p>使用 Codex 对项目背景、竞品、用户需求和核心功能进行分析，将零散信息整理为产品定位、功能结构、页面清单与设计需求，形成可直接进入设计阶段的需求文档。</p><img src={researchUi} alt="Codex 产品需求分析"/></article><article><header><h2>AI 快速生成设计</h2><span>→</span></header><p>将需求文档、设计规范与参考方向输入 Codex，通过 Skill、MCP 与 Figma 协同生成 UI；也可根据项目类型直接使用 Figma Make / Stitch 快速输出高保真页面和交互原型。</p><img src={figmaMakeUi} alt="Figma Make 快速生成设计"/></article><article><header><h2>设计调优与最终交付</h2><span>✓</span></header><p>对 AI 输出结果进行设计判断与二次优化，根据实际效果选择手动优化或继续通过 AI 迭代，最终完成符合产品需求与视觉标准的高保真设计稿。</p><div className="workflow-phone-pair"><img src={tunedUi} alt="优化后的移动端首页"/><img src={tunedUiAlt} alt="优化后的移动端列表页"/></div></article></div></section></SourceCanvas>}

export function WorkflowTransitionScreen(){return <section className="workflow-transition-source" aria-label="From Workflow to Product"><img className="workflow-transition-bg" src={transitionBg} alt="蓝色科技光环背景"/><section className="workflow-transition-copy"><p>From Workflow to Product</p><h1>AI 工作流 · 产品实践</h1><p>From Research to UI Delivery</p><span>从调研、需求分析到 UI 生成与最终交付</span></section></section>}
