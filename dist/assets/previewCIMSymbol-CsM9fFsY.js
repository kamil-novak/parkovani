import{hq as z,hr as q,hs as F,dx as L,dw as G,dD as V}from"./index-CDF62Mj_.js";import{e as I,s as k,$ as A}from"./CIMSymbolHelper-C_Njwe4I.js";import{i as T}from"./CIMResourceManager-DkjOJJbX.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-C8MTGdeM.js";import"./GeometryUtils-ef9fwnQU.js";import"./Rect-CUzevAry.js";import"./BoundingBox-_cGeQXKH.js";const U=96/72;let W=class{constructor(a){this._spatialReference=a,this._imageDataCanvas=null,this._cimResourceManager=new T}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(a,h,s,r,n,t,l,y,v){if(!a)return null;const{data:g}=a;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g;t||(t=z(C));const c=await q.resolveSymbolOverrides(g,h,this._spatialReference,n,t,l,y),d=this._cimResourceManager,w=[];I.fetchResources(c,d,w),I.fetchFonts(c,d,w),w.length>0&&await Promise.all(w);const{width:i,height:o}=s,M=$(t,i,o,r),e=I.getEnvelope(c,M,d);if(!e)return null;e.x===1/0&&(e.x=i+2),e.y===1/0&&(e.y=-o/2),e.width===-1/0&&(e.width=i),e.height===-1/0&&(e.height=o);let m=1,S=0,R=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let f=1;e.width>i&&(f=i/e.width);let b=1;e.height>o&&(b=o/e.height),r==="preview"&&(e.width<i&&(f=i/e.width),e.height<o&&(b=o/e.height)),m=Math.min(f,b),S=e.x+e.width/2,R=e.y+e.height/2}break;case"CIMLineSymbol":{(v||e.height>o)&&(m=o/e.height),R=e.y+e.height/2;const f=e.x*m+i/2,b=(e.x+e.width)*m+i/2,{paths:x}=M;x[0][0][0]-=f/m,x[0][2][0]-=(b-i)/m}break;case"CIMPolygonSymbol":{S=e.x+e.width/2,R=e.y+e.height/2;const f=e.x*m+i/2,b=(e.x+e.width)*m+i/2,x=e.y*m+o/2,D=(e.y+e.height)*m+o/2,{rings:p}=M;f<0&&(p[0][0][0]-=f,p[0][3][0]-=f,p[0][4][0]-=f),x<0&&(p[0][0][1]+=x,p[0][1][1]+=x,p[0][4][1]+=x),b>i&&(p[0][1][0]-=b-i,p[0][2][0]-=b-i),D>o&&(p[0][2][1]+=D-o,p[0][3][1]+=D-o)}}const E={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(E,i,o,S,R,m,t,1,M)}rasterize(a,h,s,r,n,t,l,y=0,v=null){const{data:g}=a;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g,c=this._canvas,d=(window.devicePixelRatio||1)*U;c.width=h*d,c.height=s*d,l||(l=z(C)),v||(v=$(l,h,s,"legend")),c.width+=2*y,c.height+=2*y;const w=c.getContext("2d",{willReadFrequently:!0}),i=A.createIdentity();return i.translate(-r,-n),i.scale(t*d,-t*d),i.translate(h*d/2+y,s*d/2+y),w.clearRect(0,0,c.width,c.height),new k(w,this._cimResourceManager,i,!0).drawSymbol(C,v),w.getImageData(0,0,c.width,c.height)}};function $(u,a,h,s){const n=-a/2+1,t=a/2-1,l=h/2-1,y=-h/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[t,0]]]};default:return s==="legend"?{rings:[[[n,l],[t,0],[t,y],[n,y],[n,l]]]}:{rings:[[[n,l],[t,l],[t,y],[n,y],[n,l]]]}}}const _=new W(null),P=F(L.size),O=F(L.maxSize),j=F(L.lineWidth),B=1;async function H(u,a,h){const s=a==null?void 0:a.size;let r=s!=null&&typeof s=="object"&&"width"in s?s.width:s,n=s!=null&&typeof s=="object"&&"height"in s?s.height:s;if(r==null||n==null)if(h==="esriGeometryPolygon")r=P,n=P;else{const t=await J(u,a,h);t&&(r=t.width,n=t.height),h==="esriGeometryPolyline"&&(r=j),r=r!=null&&isFinite(r)?Math.min(r,O):P,n=n!=null&&isFinite(n)?Math.max(Math.min(n,O),B):P}return a.style==="legend"&&h==="esriGeometryPolyline"&&(r=j),{width:r,height:n}}async function J(u,a,h){const{feature:s,fieldMap:r,viewParams:n}=a.cimOptions||a,t=await q.resolveSymbolOverrides(u.data,s,null,r,h,null,n);if(!t)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:t},u.data.primitiveOverrides=void 0;const l=[];return I.fetchResources(t,_.resourceManager,l),I.fetchFonts(t,_.resourceManager,l),l.length>0&&await Promise.all(l),I.getEnvelope(t,null,_.resourceManager)}async function ie(u,a={}){var S;const{node:h,opacity:s,symbolConfig:r}=a,n=r!=null&&typeof r=="object"&&"isSquareFill"in r&&r.isSquareFill,t=a.cimOptions||a,l=t.geometryType||z((S=u==null?void 0:u.data)==null?void 0:S.symbol),y=await H(u,a,l),{feature:v,fieldMap:g}=t,C=n||l!=="esriGeometryPolygon"?"preview":"legend",c=await _.rasterizeCIMSymbolAsync(u,v,y,C,g,l,null,t.viewParams,t.allowScalingUp);if(!c)return null;const{width:d,height:w}=c,i=document.createElement("canvas");i.width=d,i.height=w,i.getContext("2d").putImageData(c,0,0);const o=G(y.width),M=G(y.height),e=new Image(o,M);e.src=i.toDataURL(),e.ariaLabel=a.ariaLabel??null,e.alt=a.ariaLabel??"",s!=null&&(e.style.opacity=`${s}`);let m=e;if(a.effectView!=null){const R={shape:{type:"image",x:0,y:0,width:o,height:M,src:e.src},fill:null,stroke:null,offset:[0,0]};m=V([[R]],[o,M],{effectView:a.effectView,ariaLabel:a.ariaLabel})}return h&&m&&h.appendChild(m),m}export{ie as previewCIMSymbol};
