import t from"lodash.debounce";import n,{useRef as e,useState as o,useEffect as r}from"react";import{select as i}from"d3-selection";import a from"resize-observer-polyfill";import"d3-transition";import{range as s,min as l,max as c,descending as f}from"d3-array";import u from"d3-cloud";import d from"lodash.clonedeep";import h from"seedrandom";import m from"tippy.js";import{dispatch as y}from"d3-dispatch";import{scaleOrdinal as p,scaleLinear as x,scaleSqrt as g,scaleLog as b}from"d3-scale";import{schemeCategory10 as v}from"d3-scale-chromatic";function w(){return w=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},w.apply(this,arguments)}const M=Math.PI/180,z=64,k=2048;function W(){let t=[256,256],n=S,e=O,o=j,r=T,i=T,a=$,s=A,l=C,c=[],f=Infinity,u=y("word","end"),d=Math.random,h={},m=D,p=!1;function x(n,e,o){let r,i,a,s=e.x,c=e.y,f=Math.sqrt(t[0]*t[0]+t[1]*t[1]),u=l(t),h=d()<.5?1:-1,m=-h;for(;(r=u(m+=h))&&(i=~~r[0],a=~~r[1],!(Math.min(Math.abs(i),Math.abs(a))>=f));)if(e.x=s+i,e.y=c+a,!(e.x+e.x0<0||e.y+e.y0<0||e.x+e.x1>t[0]||e.y+e.y1>t[1]||o&&I(e,n,t[0])||o&&!((k=e).x+k.x1>(W=o)[0].x&&k.x+k.x0<W[1].x&&k.y+k.y1>W[0].y&&k.y+k.y0<W[1].y))){var y,p=e.sprite,x=e.width>>5,g=t[0]>>5,b=e.x-(x<<4),v=127&b,w=32-v,M=e.y1-e.y0,z=(e.y+e.y0)*g+(b>>5);for(let t=0;t<M;t++){y=0;for(let e=0;e<=x;e++)n[z+e]|=y<<w|(e<x?(y=p[t*x+e])>>>v:0);z+=g}return delete e.sprite,!0}var k,W;return!1}return h.canvas=function(t){return arguments.length?(m=F(t),h):m},h.start=function(){let l=function(t){t.width=t.height=1;const n=Math.sqrt(t.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,1,1).data.length>>2);t.width=(z<<5)/n,t.height=k/n;const e=t.getContext("2d");return e.fillStyle=e.strokeStyle="red",e.textAlign="center",{context:e,ratio:n}}(m()),f=new Uint32Array((t[0]>>5)*t[1]),y=null,g=[],b=c.map(function(t,l){return t.text=n.call(this,t,l),t.font=e.call(this,t,l),t.style=r.call(this,t,l),t.weight=i.call(this,t,l),t.rotate=a.call(this,t,l),t.size=~~o.call(this,t,l),t.padding=s.call(this,t,l),t}).sort(function(t,n){return n.size-t.size});function v(n){const e=50*n,o=Math.min(50*(n+1),c.length);!function(n,e){for(let o=n;o<e;o+=1){const n=b[o];n.x=t[0]*(d()+.5)>>1,n.y=t[1]*(d()+.5)>>1,q(l,n,b,o),n.hasText&&x(f,n,y)&&(g.push(n),u.call("word",h,n),y?E(y,n):y=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=t[0]>>1,n.y-=t[1]>>1)}}(e,o),p||(o<c.length?setTimeout(()=>v(n+1),0):(h.stop(),u.call("end",h,g,y)))}return setTimeout(()=>v(0),0),h},h.revive=()=>(p=!1,h),h.stop=function(){return p=!0,h},h.timeInterval=function(t){return arguments.length?(f=null==t?Infinity:t,h):f},h.words=function(t){return arguments.length?(c=t,h):c},h.size=function(n){return arguments.length?(t=[+n[0],+n[1]],h):t},h.font=function(t){return arguments.length?(e=F(t),h):e},h.fontStyle=function(t){return arguments.length?(r=F(t),h):r},h.fontWeight=function(t){return arguments.length?(i=F(t),h):i},h.rotate=function(t){return arguments.length?(a=F(t),h):a},h.text=function(t){return arguments.length?(n=F(t),h):n},h.spiral=function(t){return arguments.length?(l=P[t]||t,h):l},h.fontSize=function(t){return arguments.length?(o=F(t),h):o},h.padding=function(t){return arguments.length?(s=F(t),h):s},h.random=function(t){return arguments.length?(d=t,h):d},h.on=function(){const t=u.on.apply(u,arguments);return t===u?h:t},h}function S(t){return t.text}function O(){return"serif"}function T(){return"normal"}function j(t){return Math.sqrt(t.value)}function $(){return 30*(~~(6*Math.random())-3)}function A(){return 1}function q(t,n,e,o){if(n.sprite)return;const r=t.context,i=t.ratio;r.clearRect(0,0,(z<<5)/i,k/i);let a=0,s=0,l=0,c=e.length;for(--o;++o<c;){n=e[o],r.save(),r.font=n.style+" "+n.weight+" "+~~((n.size+1)/i)+"px "+n.font;var f=r.measureText(n.text+"m").width*i,u=n.size<<1;if(n.rotate){const t=Math.sin(n.rotate*M),e=Math.cos(n.rotate*M),o=f*e,r=f*t,i=u*e,a=u*t;f=Math.max(Math.abs(o+a),Math.abs(o-a))+31>>5<<5,u=~~Math.max(Math.abs(r+i),Math.abs(r-i))}else f=f+31>>5<<5;if(u>l&&(l=u),a+f>=z<<5&&(a=0,s+=l,l=0),s+u>=k)break;r.translate((a+(f>>1))/i,(s+(u>>1))/i),n.rotate&&r.rotate(n.rotate*M),r.fillText(n.text,0,0),n.padding&&(r.lineWidth=2*n.padding,r.strokeText(n.text,0,0)),r.restore(),n.width=f,n.height=u,n.xoff=a,n.yoff=s,n.x1=f>>1,n.y1=u>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,a+=f}const d=r.getImageData(0,0,(z<<5)/i,k/i).data,h=[];for(;--o>=0;){if(!(n=e[o]).hasText)continue;for(var m=(f=n.width)>>5,y=(u=n.y1-n.y0,0);y<u*m;y++)h[y]=0;if(a=n.xoff,null==a)return;s=n.yoff;let t=0,r=-1;for(let e=0;e<u;e++){for(y=0;y<f;y++){const n=d[(s+e)*(z<<5)+(a+y)<<2]?1<<31-y%32:0;h[m*e+(y>>5)]|=n,t|=n}t?r=e:(n.y0++,u--,e--,s++)}n.y1=n.y0+r,n.sprite=h.slice(0,(n.y1-n.y0)*m)}}function I(t,n,e){let o,r=t.sprite,i=t.width>>5,a=t.x-(i<<4),s=127&a,l=32-s,c=t.y1-t.y0,f=(t.y+t.y0)*(e>>=5)+(a>>5);for(let t=0;t<c;t++){o=0;for(let e=0;e<=i;e++)if((o<<l|(e<i?(o=r[t*i+e])>>>s:0))&n[f+e])return!0;f+=e}return!1}function E(t,n){const e=t[0],o=t[1];n.x+n.x0<e.x&&(e.x=n.x+n.x0),n.y+n.y0<e.y&&(e.y=n.y+n.y0),n.x+n.x1>o.x&&(o.x=n.x+n.x1),n.y+n.y1>o.y&&(o.y=n.y+n.y1)}function C(t){const n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function D(){return document.createElement("canvas")}function F(t){return"function"==typeof t?t:function(){return t}}var P={archimedean:C,rectangular:function(t){let n=4*t[0]/t[1],e=0,o=0;return function(t){const r=t<0?-1:1;switch(Math.sqrt(1+4*r*t)-r&3){case 0:e+=n;break;case 1:o+=4;break;case 2:e-=n;break;default:o-=4}return[e,o]}}};function R(t,n){return t[Math.floor(n()*t.length)]}function H(t){return`${t.size}px`}function L(t){return t.text}function N(t){return`translate(${t.x}, ${t.y})`+("number"==typeof t.rotate?`rotate(${t.rotate})`:"")}function U({callbacks:t,maxWords:n,options:e,selection:o,size:r,words:i}){const{deterministic:a,enableOptimizations:s,fontFamily:y,fontStyle:p,fontSizes:v,fontWeight:M,padding:z,randomSeed:k,rotations:S,rotationAngles:O,spiral:T,scale:j}=e,$=i.concat().sort((t,n)=>f(t.value,n.value)).slice(0,n),A=h(a?k||"deterministic":null);let q;q=s?W():u(),q.size(r).padding(z).words(d($)).rotate(()=>void 0===S?30*(~~(6*A())-3):function(t,n,e){if(t<1)return 0;let o=[];if(1===t)o=[n[0]];else{o=[...n];const e=(n[1]-n[0])/(t-1);let r=n[0]+e;for(;r<n[1];)o.push(r),r+=e}return R(o,e)}(S,O,A)).spiral(T).random(A).text(L).font(y).fontStyle(p).fontWeight(M),function n(r,i=1){s&&q.revive(),q.fontSize(t=>{const n=function(t,n,e){const o=l(t,t=>Number(t.value)),r=c(t,t=>Number(t.value));let i;switch(e){case"log":i=b;break;case"sqrt":i=g;break;default:i=x}return i().domain([o,r]).range(n)}($,r,j);return n(t.value)}).on("end",a=>{if($.length!==a.length&&i<=10){10===i&&console.warn(`Unable to layout ${$.length-a.length} word(s) after ${i} attempts.  Consider: (1) Increasing the container/component size. (2) Lowering the max font size. (3) Limiting the rotation angles.`);const t=Math.max(.95*r[0],1);n([t,Math.max(.95*r[1],t)],i+1)}else!function({callbacks:t,options:n,random:e,selection:o,words:r}){const{getWordColor:i,getWordTooltip:a,onWordClick:s,onWordMouseOver:l,onWordMouseOut:c}=t,{colors:f,enableTooltip:u,fontStyle:d,fontWeight:h,textAttributes:y,tooltipOptions:p}=n,{fontFamily:x,transitionDuration:g}=n;function b(t){return i?i(t):R(f,e)}let v;o.selectAll("text").data(r).join(t=>{let n=t.append("text").on("click",(t,n)=>{s&&s(n,t)}).on("mouseover",(t,n)=>{!u||v&&!v.isDestroyed||(v=m(t.target,w({animation:"scale",arrow:!0,content:()=>a(n),onHidden:t=>{t.destroy(),v=null}},p))),l&&l(n,t)}).on("mouseout",(t,n)=>{v&&!v.state.isVisible&&v.destroy(),c&&c(n,t)}).attr("cursor",s?"pointer":"default").attr("fill",b).attr("font-family",x).attr("font-style",d).attr("font-weight",h).attr("text-anchor","middle").attr("transform","translate(0, 0) rotate(0)");"object"==typeof y&&Object.keys(y).forEach(t=>{n=n.attr(t,y[t])}),n=n.call(t=>t.transition().duration(g).attr("font-size",H).attr("transform",N).text(L))},t=>{t.transition().duration(g).attr("fill",b).attr("font-family",x).attr("font-size",H).attr("transform",N).text(L)},t=>{t.transition().duration(g).attr("fill-opacity",0).remove()})}({callbacks:t,options:e,random:A,selection:o,words:a})}).start()}(v)}const V=["callbacks","maxWords","minSize","options","size","words"],B={getWordTooltip:({text:t,value:n})=>`${t} (${n})`},G={colors:s(20).map(t=>t.toString()).map(p(v)),deterministic:!1,enableOptimizations:!1,enableTooltip:!0,fontFamily:"times new roman",fontSizes:[4,32],fontStyle:"normal",fontWeight:"normal",padding:1,rotationAngles:[-90,90],scale:"sqrt",spiral:"rectangular",tooltipOptions:{},transitionDuration:600};function J(s){let{callbacks:l,maxWords:c=100,minSize:f,options:u,size:d,words:h}=s,m=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n.indexOf(e=i[o])>=0||(r[e]=t[e]);return r}(s,V);const[y,p,x]=function(t,n,s){const l=e(),[c,f]=o(n),[u,d]=o(null);return r(()=>{const e=l.current;let o=i(e).append("svg").style("display","block");"object"==typeof s&&Object.keys(s).forEach(t=>{o=o.attr(t,s[t])});const r=o.append("g");function c(t,n){o.attr("height",n).attr("width",t),r.attr("transform",`translate(${t/2}, ${n/2})`),f([t,n])}d(r);let u=0,h=0;void 0===n?(u=e.parentElement.offsetWidth,h=e.parentElement.offsetHeight):[u,h]=n,u=Math.max(u,t[0]),h=Math.max(h,t[1]),c(u,h);const m=new a(t=>{if(t&&0!==t.length&&void 0===n){const{width:n,height:e}=t[0].contentRect;c(n,e)}});return m.observe(e),()=>{m.unobserve(e),i(e).selectAll("*").remove()}},[n,t,s]),[l,u,c]}(f,d,u.svgAttributes),g=e(t(U,100));return r(()=>{if(p){const t=w({},B,l),n=w({},G,u);g.current({callbacks:t,maxWords:c,options:n,selection:p,size:x,words:h})}},[c,l,u,p,x,h]),/*#__PURE__*/n.createElement("div",w({ref:y,style:{height:"100%",width:"100%"}},m))}J.defaultProps={callbacks:B,maxWords:100,minSize:[300,300],options:G};export{J as ReactWordCloud,B as defaultCallbacks,G as defaultOptions};
//# sourceMappingURL=index.modern.js.map
