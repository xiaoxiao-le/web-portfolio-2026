import React from 'react';
import SourceCanvas from './SourceCanvas';
import campusLogo from '../assets/untitled/screen59-logo.svg';
import campusDashboard from '../assets/untitled/screen59-dashboard.png';
import campusDiagram from '../assets/untitled/screen60-diagram.png';
import classUi from '../assets/untitled/screen61-ui.png';
import leaveUi from '../assets/untitled/screen62-ui.png';
import bullyingUi from '../assets/untitled/screen63-ui.png';
import dormUi from '../assets/untitled/screen64-ui.png';
import cardUi from '../assets/untitled/screen65-ui.png';
import examUi from '../assets/untitled/screen66-ui.png';
import faceUi from '../assets/untitled/screen67-ui.png';
import studentUi from '../assets/untitled/screen68-ui.png';
import './campus-screens.css';

export function CampusCoverScreen(){return <SourceCanvas label="轻舟校园智慧管理平台" tone="light"><div className="campus-bg"/><div className="campus-cover-copy"><img src={campusLogo} alt="轻舟校园图标"/><h1>轻舟校园<br/>智慧管理平台</h1><p>轻舟校园是一套面向学校管理场景打造的智慧校园管理平台，覆盖学生、班级、宿舍、考试、请假、一卡通、人脸识别及校园安全等核心业务。通过统一的数据管理与可视化能力，帮助学校打通多部门信息，提升日常管理效率，让校园运营更加清晰、高效、安全。</p></div><div className="campus-dashboard"><img src={campusDashboard} alt="轻舟智慧校园管理后台首页"/></div></SourceCanvas>}

export function CampusEcosystemScreen(){return <SourceCanvas label="轻舟校园角色与业务体系" tone="light"><div className="campus-bg"/><img className="campus-diagram" src={campusDiagram} alt="学生、家长、老师与轻舟校园关系图"/><div className="campus-ecosystem-copy"><h1>轻舟校园 应运而生</h1><p>围绕学生、教师与家长三类核心角色，轻舟校园构建统一的校园数字化管理体系，将学生档案、教务管理、生活服务与安全管理进行整合，让不同角色都能在同一套系统中高效协同。</p><p>从日常事务处理到数据分析与安全预警，平台将分散的校园业务连接成完整流程，降低管理成本，同时提升信息传递、业务协作与校园安全管理效率。</p><div><span>智慧校园</span><span>B端设计</span><span>B端C化</span><span>便捷开发</span></div></div></SourceCanvas>}

const campusCases={
  class:{title:'班级管理',copy:'围绕年级、班级与学生信息进行统一管理，支持查看班级人数、班主任、任课教师、出勤率及成绩趋势等关键数据。通过班级结构与学生列表的联动展示，帮助管理者快速掌握各班级运行情况，提升日常教学与学生管理效率。',image:classUi},
  leave:{title:'请假管理',copy:'对学生请假申请、审批进度与请假记录进行统一管理，支持按班级、类型、时间和状态快速筛选。通过清晰的审批流程与详情展示，让班主任、年级主任能够及时处理请假事项，并完整留存申请、审批与销假记录。',image:leaveUi,reverse:true},
  bullying:{title:'防霸凌系统',copy:'通过校园摄像头、人脸识别与异常行为识别能力，实时监测推搡、围堵、追逐等疑似霸凌行为。系统发现风险后自动保存相关视频片段，并识别涉及学生、生成预警消息同步至后台，方便管理人员快速核查、确认事件并完成后续处置与跟踪。',image:bullyingUi,reverse:true},
  dorm:{title:'宿舍管理',copy:'围绕宿舍楼、房间与学生入住信息进行统一管理，支持查看床位使用率、入住人数、空余床位及宿舍异常情况。通过宿舍可视化分布与成员信息联动，帮助管理人员快速掌握宿舍状态，并及时处理晚归、卫生、违规与报修等日常事务。',image:dormUi},
  card:{title:'校园一卡通',copy:'围绕学生校园卡的发放、充值、消费与异常状态进行统一管理，支持查看卡片数量、账户余额、今日消费及消费分类等关键数据。通过交易记录与趋势分析，帮助管理人员快速掌握校园内各类消费情况，并及时处理挂失、补卡、异常消费等业务。',image:cardUi},
  exam:{title:'考试管理',copy:'对考试计划、考场安排、监考分配与考试进度进行统一管理，支持查看考试场次、参考人数、监考教师及当前状态。通过清晰的考试流程与冲突预警，帮助管理人员高效完成考场分配、人员安排和异常处理，提升考试组织与管理效率。',image:examUi,reverse:true},
  face:{title:'人脸识别系统',copy:'通过校园出入口、教学楼、宿舍等区域的人脸识别设备，对学生与访客身份进行实时识别与记录，支持查看设备状态、识别次数、成功率及异常预警。针对陌生人闯入、体温异常、人脸遮挡等情况自动触发告警，帮助管理人员及时发现并处理校园安全风险。',image:faceUi,reverse:true},
  student:{title:'学生档案',copy:'围绕学生在校全周期信息建立统一数字档案，集中管理基础资料、学籍、家庭、考勤、请假、成绩、宿舍、校园卡、健康与荣誉等数据。通过多维信息整合与数据概览，帮助教师和管理人员快速了解学生情况，为日常管理和教学决策提供更完整的数据支持。',image:studentUi}
};

function CampusCase({type}){const item=campusCases[type];return <SourceCanvas label={item.title} tone="light"><div className="campus-bg"/><div className={`campus-feature ${item.reverse?'is-reverse':''}`}><div className="campus-feature-copy"><h1>{item.title}</h1><p>{item.copy}</p></div><img src={item.image} alt={`轻舟校园${item.title}后台界面`}/></div></SourceCanvas>}
export const CampusClassScreen=()=> <CampusCase type="class"/>;
export const CampusLeaveScreen=()=> <CampusCase type="leave"/>;
export const CampusBullyingScreen=()=> <CampusCase type="bullying"/>;
export const CampusDormScreen=()=> <CampusCase type="dorm"/>;
export const CampusCardScreen=()=> <CampusCase type="card"/>;
export const CampusExamScreen=()=> <CampusCase type="exam"/>;
export const CampusFaceScreen=()=> <CampusCase type="face"/>;
export const CampusStudentScreen=()=> <CampusCase type="student"/>;
