const { chromium } = require('playwright');
const OUT = process.argv[2];
const BLOCK_ADS = process.argv[3] === 'block';

const PAGES = [
  ['post-1unit',  '/blog/ai-overview-optimization/'],
  ['post-2units', '/blog/abm-campaign-examples/'],
  ['post-3units', '/blog/b2b-customer-segmentation/'],
  ['blog-index',  '/blog/'],
  ['tool-a',      '/tools/campaign-name-generator/'],
  ['tool-b',      '/tools/value-proposition-canvas-generator/'],
];
const VPS = [['desktop',1440,900], ['mobile',390,844]];

(async () => {
  const b = await chromium.launch({ channel:'chrome', headless:true });
  const failures = [];
  for (const [vname, w, h] of VPS) {
    const ctx = await b.newContext({ viewport:{width:w,height:h} });
    if (BLOCK_ADS) await ctx.route(/googlesyndication|doubleclick|adtrafficquality|fundingchoices/, r => r.abort());
    for (const [pname, path] of PAGES) {
      const page = await ctx.newPage();
      try {
        await page.goto('https://swapbiswas.com'+path, { waitUntil:'load', timeout:60000 });
        await page.waitForTimeout(1500);
        const n = await page.evaluate(()=>document.querySelectorAll('.ad-slot').length);
        for (let i=0;i<n;i++){
          // centre the slot with real wheel input (smooth scroll makes scrollIntoView async)
          for (let t=0;t<70;t++){
            const d = await page.evaluate(j=>{const r=document.querySelectorAll('.ad-slot')[j].getBoundingClientRect();
              return Math.round((r.top+r.height/2)-innerHeight/2);}, i);
            if (Math.abs(d)<30) break;
            await page.mouse.wheel(0, Math.max(-500,Math.min(500,d)));
            await page.waitForTimeout(90);
          }
          await page.waitForTimeout(700);
          const r = await page.evaluate(j=>{
            const s=document.querySelectorAll('.ad-slot')[j];
            const ins=s.querySelector('ins.adsbygoogle');
            const cs=getComputedStyle(s), br=s.getBoundingClientRect(), ir=ins.getBoundingClientRect();
            // clipped by any ancestor?
            let clipped=null, el=s.parentElement;
            while(el && el!==document.body){ const o=getComputedStyle(el);
              if(/hidden|clip/.test(o.overflowX+o.overflowY)){ const er=el.getBoundingClientRect();
                if(br.left<er.left-1||br.right>er.right+1) clipped=(el.tagName+'.'+String(el.className).split(' ')[0]); }
              el=el.parentElement; }
            // hit test
            const pts=[]; for(const fy of [0.1,0.5,0.9]) for(const fx of [0.1,0.5,0.9]){
              const x=Math.round(ir.left+ir.width*fx), y=Math.round(ir.top+ir.height*fy);
              if(y<0||y>innerHeight||x<0||x>innerWidth){pts.push('OFFSCREEN');continue;}
              const e=document.elementFromPoint(x,y);
              pts.push(e && e.closest && e.closest('.ad-slot') ? 'ok' : (e?e.tagName+'.'+String(e.className).split(' ')[0]:'null'));
            }
            return { slot: ins.getAttribute('data-ad-slot'), variant: s.className.replace('ad-slot ',''),
              display: cs.display, visibility: cs.visibility, opacity: cs.opacity,
              boxW: Math.round(br.width), boxH: Math.round(br.height),
              insW: Math.round(ir.width), insH: Math.round(ir.height),
              label: !!s.querySelector('.ad-label'), labelText: (s.querySelector('.ad-label')||{}).textContent||'',
              labelVisible: (()=>{const L=s.querySelector('.ad-label'); return !!L && getComputedStyle(L).display!=='none';})(),
              collapsed: s.classList.contains('ad-slot--collapsed'),
              clipped, blocked: [...new Set(pts.filter(p=>p!=='ok'))],
              adStatus: ins.getAttribute('data-ad-status'), pushed: ins.hasAttribute('data-ad-pushed'),
              overflowsViewport: br.right > innerWidth+1 || br.left < -1,
            };
          }, i);
          const bad=[];
          // An unfilled unit that collapsed off-screen is the DESIGNED outcome, not a
          // failure. Only flag a hidden slot that is not in that state.
          const properlyCollapsed = r.adStatus==='unfilled' && r.collapsed;
          if (properlyCollapsed) { console.log('  ok   '+vname+' '+pname+' slot#'+i+' ('+r.slot+')  collapsed (unfilled, off-screen) - by design'); continue; }
          if (r.display==='none') bad.push('display:none');
          if (r.visibility==='hidden') bad.push('visibility:hidden');
          if (+r.opacity===0) bad.push('opacity:0');
          if (r.boxH<50) bad.push('box height '+r.boxH);
          if (r.insH<50) bad.push('ins height '+r.insH);
          if (r.insW<200) bad.push('ins width '+r.insW);
          if (r.clipped) bad.push('clipped by '+r.clipped);
          if (r.blocked.length) bad.push('covered by '+r.blocked.join(','));
          if (r.overflowsViewport) bad.push('overflows viewport');
          // The caption is hidden on purpose when a unit reports no fill.
          if (r.adStatus!=='unfilled' && (!r.label || !/advertis/i.test(r.labelText))) bad.push('missing label');
          if (r.adStatus==='unfilled' && r.labelVisible) bad.push('caption shown over an empty box');
          const tag = vname+' '+pname+' slot#'+i+' ('+r.slot+')';
          if (bad.length){ failures.push(tag+': '+bad.join('; ')); console.log('  FAIL '+tag+' -> '+bad.join('; ')); }
          else console.log('  ok   '+tag+'  '+r.variant+' '+r.insW+'x'+r.insH+' status='+r.adStatus);
          if (vname==='mobile' && pname==='post-2units' && i===0)
            await page.screenshot({ path: OUT+'/audit-'+vname+'-'+pname+'.png' });
        }
        if (n===0) console.log('  --   '+vname+' '+pname+': no ad slots');
      } catch(e){ failures.push(vname+' '+pname+': '+e.message.slice(0,90)); console.log('  ERR  '+vname+' '+pname+': '+e.message.slice(0,90)); }
      await page.close();
    }
    await ctx.close();
  }
  console.log('\n==== '+(failures.length? failures.length+' FAILURES':'ALL CHECKS PASSED')+' ====');
  failures.forEach(f=>console.log('  '+f));
  await b.close();
  process.exit(failures.length?1:0);
})();
