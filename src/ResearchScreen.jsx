import React, {useLayoutEffect, useRef, useState} from 'react';
import fileA from '../assets/figma/research-file-a.png';
import fileB from '../assets/figma/research-file-b.png';
import avatar from '../assets/figma/research-avatar.png';
import agent from '../assets/figma/research-agent.svg';
import figma from '../assets/figma/research-figma.png';
import './research-screen.css';

const prompt = `你现在是一名资深产品经理 + UX 研究员 + UI/UX 设计师。

我会提供：

1. 竞品名称
2. 竞品下载链接 / 官网链接
3. 竞品功能截图 / 功能图
4. 其他补充资料

你的任务不是简单复刻竞品，而是基于竞品进行完整的产品研究、用户洞察和需求提炼，最终输出可落地的产品需求文档和 Figma 原型。

请按以下流程执行：

第一步：竞品拆解

- 完整分析我提供的竞品
- 梳理产品定位、目标用户、核心使用场景
- 拆解主要功能、页面结构、操作流程、信息架构
- 分析核心卖点、差异化能力、付费点、留存机制
- 根据截图和实际产品体验总结 UI/UX 特征
- 不要只描述功能，要说明每个功能解决了什么问题

第二步：扩展同品类竞品

- 搜索并分析至少 5-10 个同品类或相邻品类产品
- 对比它们的功能、用户群体、商业模式、产品体验和差异化
- 找出该品类当前已经被普遍满足的需求- 最终产品可以借鉴竞品的产品逻辑，但不要简单复制其 UI、文案和品牌表达`;
const thinking = ['Analyzing competitor assets...','Extracting feature architecture...','Searching user feedback...','Clustering pain points...','Defining MVP scope...','Generating PRD...','Building Figma structure...','Validating final output...'];
const chinese = ['正在解析竞品资料…','正在搜索用户反馈…','正在提取高频痛点…','正在生成产品需求文档…','正在构建 Figma 原型结构…'];

const primitives = [['neutral/black','#000'],['neutral/950','#0a0a0a'],['neutral/900','#111'],['neutral/850','#121214'],['neutral/800','#1a1a1a'],['neutral/750','#1e1e1e'],['neutral/700','#292e40'],['neutral/500','#888'],['neutral/400','#9e9ea8'],['neutral/300','#b5b5b5'],['neutral/200','#c7c7d1'],['neutral/100','#f2f2f2'],['neutral/50','#fafafb'],['neutral/white','#fff'],['brand/red','#e04338'],['accent/amber','#ffb53d'],['accent/purple','#8803b9'],['status/success','#dbf2c7']];
const semantic = [['bg/canvas','#0a0a0a'],['bg/surface','#111'],['bg/elevated','#1a1a1a'],['bg/subtle','#1e1e1e'],['bg/brand','#e04338'],['bg/brand-muted','#121214'],['text/primary','#fff'],['text/secondary','#b5b5b5'],['text/muted','#888'],['text/on-brand','#fff'],['text/brand','#e04338'],['border/default','#292e40'],['border/brand','#e04338'],['icon/default','#b5b5b5'],['status/warning','#ffb53d'],['status/success','#dbf2c7']].map(([name,color])=>['color/'+name,color]);
function Swatches({items,title,wide}){return <div className="source-swatches"><h3>{title}</h3><div className={wide?'source-swatches-grid wide':'source-swatches-grid'}>{items.map(([name,color])=><div className="source-swatch" key={name}><i style={{background:color}}/><b>{name}</b><span>{`var(--ds-${name.replaceAll('/','-')})`}</span></div>)}</div></div>}
function ColorSpecification(){return <div className="source-color"><h1>Codex+Figma输出规范</h1><div className="source-color-scroll" tabIndex={0} onWheel={e=>e.stopPropagation()}><h2>Color</h2><p>Primitives store raw values. Product UI must use semantic colors so intent remains stable.</p><Swatches title="Primitive palette" items={primitives}/><Swatches title="Semantic colors" items={semantic} wide/></div></div>}

export default function ResearchScreen({specification=false}){
  const root = useRef(null);
  const [scale,setScale] = useState(1);
  useLayoutEffect(()=>{
    const observer = new ResizeObserver(([entry])=>setScale(Math.min(entry.contentRect.width/1600,entry.contentRect.height/1000)));
    observer.observe(root.current);
    return ()=>observer.disconnect();
  },[]);
  return <section ref={root} className="research-source" aria-label={specification?'Codex+Figma输出规范':'AI Agent 调研与分析'}>
    <div className="research-canvas" style={{transform:`translate(-50%, -50%) scale(${scale})`}}>
      {specification ? <ColorSpecification/> : <><article className="research-prompt" onWheel={e=>e.stopPropagation()} tabIndex={0} aria-label="完整调研指令">
        <div className="research-files"><img src={fileA} alt="竞品资料附件"/><img src={fileB} alt="竞品补充资料附件"/></div>
        <p>{prompt}</p>
      </article>
      <div className="research-avatar"><div><img src={avatar} alt="李凯乐"/></div></div>
      <div className="research-agent"><img src={agent} alt="AI Agent"/></div>
      <img className="research-figma" src={figma} alt="Figma"/>
      <article className="research-thinking" onWheel={e=>e.stopPropagation()} tabIndex={0} aria-label="正在思考">
        <h1>正在思考...</h1>
        <div>{thinking.map(line=><p key={line}>{line}</p>)}</div>
        <div>{chinese.map(line=><p key={line}>{line}</p>)}</div>
      </article></>}
    </div>
  </section>;
}
