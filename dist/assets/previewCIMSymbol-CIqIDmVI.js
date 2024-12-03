import{hG as z,hH as j,hI as D,eE as G,dF as L,eK as k}from"./index-ZNyjz3YK.js";import{e as R,s as q,$ as A}from"./CIMSymbolHelper-BJotrgZn.js";import{i as T}from"./CIMResourceManager-DIksCA7d.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-CTGEhCVW.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./GeometryUtils-BCDBfyo-.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CHdGaPl8.js";const U=96/72;let H=class{constructor(i){this._spatialReference=i,this._imageDataCanvas=null,this._cimResourceManager=new T}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(i,h,r,s,n,t,l,y,v){if(!i)return null;const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g;t||(t=z(C));const c=await j.resolveSymbolOverrides(g,h,this._spatialReference,n,t,l,y),d=this._cimResourceManager,w=[];R.fetchResources(c,d,w),R.fetchFonts(c,d,w),w.length>0&&await Promise.all(w);const{width:a,height:o}=r,M=$(t,a,o,s),e=R.getEnvelope(c,M,d);if(!e)return null;e.x===1/0&&(e.x=a+2),e.y===1/0&&(e.y=-o/2),e.width===-1/0&&(e.width=a),e.height===-1/0&&(e.height=o);let m=1,x=0,I=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let f=1;e.width>a&&(f=a/e.width);let b=1;e.height>o&&(b=o/e.height),s==="preview"&&(e.width<a&&(f=a/e.width),e.height<o&&(b=o/e.height)),m=Math.min(f,b),x=e.x+e.width/2,I=e.y+e.height/2}break;case"CIMLineSymbol":{(v||e.height>o)&&(m=o/e.height),I=e.y+e.height/2;const f=e.x*m+a/2,b=(e.x+e.width)*m+a/2,{paths:S}=M;S[0][0][0]-=f/m,S[0][2][0]-=(b-a)/m}break;case"CIMPolygonSymbol":{x=e.x+e.width/2,I=e.y+e.height/2;const f=e.x*m+a/2,b=(e.x+e.width)*m+a/2,S=e.y*m+o/2,F=(e.y+e.height)*m+o/2,{rings:p}=M;f<0&&(p[0][0][0]-=f,p[0][3][0]-=f,p[0][4][0]-=f),S<0&&(p[0][0][1]+=S,p[0][1][1]+=S,p[0][4][1]+=S),b>a&&(p[0][1][0]-=b-a,p[0][2][0]-=b-a),F>o&&(p[0][2][1]+=F-o,p[0][3][1]+=F-o)}}const V={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(V,a,o,x,I,m,t,1,M)}rasterize(i,h,r,s,n,t,l,y=0,v=null){const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g,c=this._canvas,d=(window.devicePixelRatio||1)*U;c.width=h*d,c.height=r*d,l||(l=z(C)),v||(v=$(l,h,r,"legend")),c.width+=2*y,c.height+=2*y;const w=c.getContext("2d",{willReadFrequently:!0}),a=A.createIdentity();return a.translate(-s,-n),a.scale(t*d,-t*d),a.translate(h*d/2+y,r*d/2+y),w.clearRect(0,0,c.width,c.height),new q(w,this._cimResourceManager,a,!0).drawSymbol(C,v),w.getImageData(0,0,c.width,c.height)}};function $(u,i,h,r){const n=-i/2+1,t=i/2-1,l=h/2-1,y=-h/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[t,0]]]};default:return r==="legend"?{rings:[[[n,l],[t,0],[t,y],[n,y],[n,l]]]}:{rings:[[[n,l],[t,l],[t,y],[n,y],[n,l]]]}}}const _=new H(null),P=D(G.size),E=D(G.maxSize),O=D(G.lineWidth),K=1;async function W(u,i,h){const r=i==null?void 0:i.size;let s=r!=null&&typeof r=="object"&&"width"in r?r.width:r,n=r!=null&&typeof r=="object"&&"height"in r?r.height:r;if(s==null||n==null)if(h==="esriGeometryPolygon")s=P,n=P;else{const t=await B(u,i,h);t&&(s=t.width,n=t.height),h==="esriGeometryPolyline"&&(s=O),s=s!=null&&isFinite(s)?Math.min(s,E):P,n=n!=null&&isFinite(n)?Math.max(Math.min(n,E),K):P}return i.style==="legend"&&h==="esriGeometryPolyline"&&(s=O),{width:s,height:n}}async function B(u,i,h){const{feature:r,fieldMap:s,viewParams:n}=i.cimOptions||i,t=await j.resolveSymbolOverrides(u.data,r,null,s,h,null,n);if(!t)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:t},u.data.primitiveOverrides=void 0;const l=[];return R.fetchResources(t,_.resourceManager,l),R.fetchFonts(t,_.resourceManager,l),l.length>0&&await Promise.all(l),R.getEnvelope(t,null,_.resourceManager)}async function ne(u,i={}){var x;const{node:h,opacity:r,symbolConfig:s}=i,n=s!=null&&typeof s=="object"&&"isSquareFill"in s&&s.isSquareFill,t=i.cimOptions||i,l=t.geometryType||z((x=u==null?void 0:u.data)==null?void 0:x.symbol),y=await W(u,i,l),{feature:v,fieldMap:g}=t,C=n||l!=="esriGeometryPolygon"?"preview":"legend",c=await _.rasterizeCIMSymbolAsync(u,v,y,C,g,l,null,t.viewParams,t.allowScalingUp);if(!c)return null;const{width:d,height:w}=c,a=document.createElement("canvas");a.width=d,a.height=w,a.getContext("2d").putImageData(c,0,0);const o=L(y.width),M=L(y.height),e=new Image(o,M);e.src=a.toDataURL(),e.ariaLabel=i.ariaLabel??null,e.alt=i.ariaLabel??"",r!=null&&(e.style.opacity=`${r}`);let m=e;if(i.effectView!=null){const I={shape:{type:"image",x:0,y:0,width:o,height:M,src:e.src},fill:null,stroke:null,offset:[0,0]};m=k([[I]],[o,M],{effectView:i.effectView,ariaLabel:i.ariaLabel})}return h&&m&&h.appendChild(m),m}export{ne as previewCIMSymbol};
