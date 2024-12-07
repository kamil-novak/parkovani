import{gW as D,gX as k,gY as F,dl as L,dk as G,ds as V}from"./index-D-EuQFPo.js";import{e as I,s as q,$ as A}from"./CIMSymbolHelper-CWnH9st7.js";import{i as T}from"./CIMResourceManager-CQYaQyPk.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-D1Ro05qb.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./GeometryUtils-DBH8Ulmm.js";import"./Rect-CUzevAry.js";import"./BoundingBox-Dcu9C1UK.js";const U=96/72;let W=class{constructor(i){this._spatialReference=i,this._imageDataCanvas=null,this._cimResourceManager=new T}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(i,h,s,l,n,t,r,y,v){if(!i)return null;const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g;t||(t=D(C));const c=await k.resolveSymbolOverrides(g,h,this._spatialReference,n,t,r,y),d=this._cimResourceManager,w=[];I.fetchResources(c,d,w),I.fetchFonts(c,d,w),w.length>0&&await Promise.all(w);const{width:a,height:o}=s,M=$(t,a,o,l),e=I.getEnvelope(c,M,d);if(!e)return null;e.x===1/0&&(e.x=a+2),e.y===1/0&&(e.y=-o/2),e.width===-1/0&&(e.width=a),e.height===-1/0&&(e.height=o);let m=1,x=0,R=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let f=1;e.width>a&&(f=a/e.width);let b=1;e.height>o&&(b=o/e.height),l==="preview"&&(e.width<a&&(f=a/e.width),e.height<o&&(b=o/e.height)),m=Math.min(f,b),x=e.x+e.width/2,R=e.y+e.height/2}break;case"CIMLineSymbol":{(v||e.height>o)&&(m=o/e.height),R=e.y+e.height/2;const f=e.x*m+a/2,b=(e.x+e.width)*m+a/2,{paths:S}=M;S[0][0][0]-=f/m,S[0][2][0]-=(b-a)/m}break;case"CIMPolygonSymbol":{x=e.x+e.width/2,R=e.y+e.height/2;const f=e.x*m+a/2,b=(e.x+e.width)*m+a/2,S=e.y*m+o/2,z=(e.y+e.height)*m+o/2,{rings:p}=M;f<0&&(p[0][0][0]-=f,p[0][3][0]-=f,p[0][4][0]-=f),S<0&&(p[0][0][1]+=S,p[0][1][1]+=S,p[0][4][1]+=S),b>a&&(p[0][1][0]-=b-a,p[0][2][0]-=b-a),z>o&&(p[0][2][1]+=z-o,p[0][3][1]+=z-o)}}const E={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(E,a,o,x,R,m,t,1,M)}rasterize(i,h,s,l,n,t,r,y=0,v=null){const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g,c=this._canvas,d=(window.devicePixelRatio||1)*U;c.width=h*d,c.height=s*d,r||(r=D(C)),v||(v=$(r,h,s,"legend")),c.width+=2*y,c.height+=2*y;const w=c.getContext("2d",{willReadFrequently:!0}),a=A.createIdentity();return a.translate(-l,-n),a.scale(t*d,-t*d),a.translate(h*d/2+y,s*d/2+y),w.clearRect(0,0,c.width,c.height),new q(w,this._cimResourceManager,a,!0).drawSymbol(C,v),w.getImageData(0,0,c.width,c.height)}};function $(u,i,h,s){const n=-i/2+1,t=i/2-1,r=h/2-1,y=-h/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[t,0]]]};default:return s==="legend"?{rings:[[[n,r],[t,0],[t,y],[n,y],[n,r]]]}:{rings:[[[n,r],[t,r],[t,y],[n,y],[n,r]]]}}}const _=new W(null),P=F(L.size),O=F(L.maxSize),j=F(L.lineWidth),X=1;async function Y(u,i,h){const s=i==null?void 0:i.size;let l=s!=null&&typeof s=="object"&&"width"in s?s.width:s,n=s!=null&&typeof s=="object"&&"height"in s?s.height:s;if(l==null||n==null)if(h==="esriGeometryPolygon")l=P,n=P;else{const t=await B(u,i,h);t&&(l=t.width,n=t.height),h==="esriGeometryPolyline"&&(l=j),l=l!=null&&isFinite(l)?Math.min(l,O):P,n=n!=null&&isFinite(n)?Math.max(Math.min(n,O),X):P}return i.style==="legend"&&h==="esriGeometryPolyline"&&(l=j),{width:l,height:n}}async function B(u,i,h){const{feature:s,fieldMap:l,viewParams:n}=i.cimOptions||i,t=await k.resolveSymbolOverrides(u.data,s,null,l,h,null,n);if(!t)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:t},u.data.primitiveOverrides=void 0;const r=[];return I.fetchResources(t,_.resourceManager,r),I.fetchFonts(t,_.resourceManager,r),r.length>0&&await Promise.all(r),I.getEnvelope(t,null,_.resourceManager)}async function ne(u,i={}){var x;const{node:h,opacity:s,symbolConfig:l}=i,n=l!=null&&typeof l=="object"&&"isSquareFill"in l&&l.isSquareFill,t=i.cimOptions||i,r=t.geometryType||D((x=u==null?void 0:u.data)==null?void 0:x.symbol),y=await Y(u,i,r),{feature:v,fieldMap:g}=t,C=n||r!=="esriGeometryPolygon"?"preview":"legend",c=await _.rasterizeCIMSymbolAsync(u,v,y,C,g,r,null,t.viewParams,t.allowScalingUp);if(!c)return null;const{width:d,height:w}=c,a=document.createElement("canvas");a.width=d,a.height=w,a.getContext("2d").putImageData(c,0,0);const o=G(y.width),M=G(y.height),e=new Image(o,M);e.src=a.toDataURL(),e.ariaLabel=i.ariaLabel??null,e.alt=i.ariaLabel??"",s!=null&&(e.style.opacity=`${s}`);let m=e;if(i.effectView!=null){const R={shape:{type:"image",x:0,y:0,width:o,height:M,src:e.src},fill:null,stroke:null,offset:[0,0]};m=V([[R]],[o,M],{effectView:i.effectView,ariaLabel:i.ariaLabel})}return h&&m&&h.appendChild(m),m}export{ne as previewCIMSymbol};