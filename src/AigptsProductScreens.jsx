import React from 'react';
import SourceCanvas from './SourceCanvas';
import productIcon from '../assets/figma/screen23-icon.png';
import productLaptop from '../assets/figma/screen23-laptop.png';
import componentLibrary from '../assets/figma/screen24-components.png';
import './aigpts-product-screens.css';

export function AigptsProductIntroScreen(){return <SourceCanvas label="AI GPTs 产品介绍">
  <div className="aigpts-product-copy">
    <header><img src={productIcon} alt="AIGPTS"/><h1>AI GPTs 产品介绍</h1></header>
    <p>AIGPTS 是一个面向内容创作者、设计师与营销人员的一站式 AI 创作平台。它将主流 AI 模型及视频、图像、音乐、语音和文本工具整合到统一工作空间中，让用户无需在多个平台之间切换，即可完成从创意生成到素材编辑的完整流程。</p>
    <p className="muted">产品支持文生视频、图生视频、视频风格转换、AI 绘图、图片编辑、音乐生成、语音转换及多模型对话等功能，同时提供图片修复、智能扩图、背景移除和 PDF 处理等实用工具。其核心价值是降低生成式 AI 的使用门槛，帮助用户以更简单、高效的方式完成内容创作。</p>
  </div>
  <img className="aigpts-product-laptop" src={productLaptop} alt="AIGPTS 产品网站笔记本展示"/>
  </SourceCanvas>}

export function AigptsComponentsScreen(){return <SourceCanvas label="核心组件与视觉语言">
  <h1 className="aigpts-components-title">核心组件与视觉语言</h1>
  <div className="aigpts-components-scroll"><img src={componentLibrary} alt="AIGPTS 核心组件与真实产品视觉集合"/></div>
  </SourceCanvas>}
