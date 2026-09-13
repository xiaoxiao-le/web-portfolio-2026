import React from 'react';
import SourceCanvas from './SourceCanvas';
import './detail-comparison-screen.css';

const plans=[
  {name:'Max Creator',credits:'100 credits / month',note:'80 credits/month, billed annually at $143.88',badge:'Best value'},
  {name:'Pro Creator',credits:'50 credits / month',note:'40 credits/month, billed annually at $95.88',badge:'Pro'},
  {name:'Max Creator',credits:'100 credits / month',note:'80 credits/month, billed annually at $143.88',badge:'Best value'},
];
const questions=['Are standard downloads free?','What are HD Credits?','Do I need a subscription to buy HD Credits?','What does the $2.99 first HD offer include?','When are invite rewards issued?','What content can I legally download?'];

function PricingDetail({refined=false}){
  return <article className={`detail-product ${refined?'refined':'first'}`}>
    <div className="detail-period"><button>Monthly</button><button>Annual <b>Save 45%</b></button></div>
    {!refined&&<small className="detail-plans-label">Subscription plans</small>}
    <div className="detail-plans">{plans.map((plan,i)=><section className={i===1?'featured':''} key={`${plan.name}-${i}`}>
      <span>{plan.badge}</span><h3>{plan.name} <strong>$19.99</strong><small>/month</small></h3><b>{plan.credits}</b>
      <ul><li>{plan.credits.replace(' /',' per')}</li><li>Priority queue for HD exports</li><li>{i===1?'Faster processing during peak hours':'Best for frequent exports'}</li></ul>
      <p>{plan.note}</p><button>Choose {i===1?'Pro':'Max'}</button>
    </section>)}</div>
    {!refined&&<p className="detail-pricing-note">Subscription pricing changes only when you switch the billing period. Subscription credits refresh monthly and are valid while your subscription is active.</p>}
    <div className="detail-faq"><h2>Frequently asked questions</h2>{questions.map(q=><div key={q}>{q}<span>⌄</span></div>)}</div>
  </article>;
}

export default function DetailComparisonScreen(){return <SourceCanvas label="Video Downloader 细节对比">
  <main className="detail-comparison-body">
    <div className="detail-comparison-head"><h1>Codex+Figma（第一版）输出结果</h1><h1>AI 生成后的设计调优</h1></div>
    <div className="detail-comparison-grid"><PricingDetail/><PricingDetail refined/></div>
  </main>
</SourceCanvas>}
