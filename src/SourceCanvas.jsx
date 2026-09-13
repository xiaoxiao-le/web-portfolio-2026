import React, {useLayoutEffect, useRef, useState} from 'react';
import './research-screen.css';

// Keep the source composition intact; only its surrounding background fills the viewport.
export default function SourceCanvas({children,label,tone='dark'}) {
  const root=useRef(null);
  const [scale,setScale]=useState(1);
  useLayoutEffect(()=>{
    const observer=new ResizeObserver(([entry])=>setScale(Math.min(entry.contentRect.width/1600,entry.contentRect.height/1000)));
    observer.observe(root.current);
    return ()=>observer.disconnect();
  },[]);
  return <section ref={root} className={`research-source is-${tone}`} aria-label={label}>
    <div className="research-canvas" style={{transform:`translate(-50%, -50%) scale(${scale})`}}>{children}</div>
  </section>;
}
