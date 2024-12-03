import{E as h}from"./BufferObject-DtDoOsh0.js";import{r as c}from"./Program-CdhMMBD0.js";import{x as g,s as y}from"./Program-CdhMMBD0.js";import{d4 as F}from"./index-ZNyjz3YK.js";import{t as p}from"./NestedMap-GuqgquCN.js";import{e as O,a as P}from"./ProgramTemplate-BsvK1Sfh.js";import{o as A}from"./VertexArrayObject-BWLL62RD.js";class d{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function l(f){const{options:e,value:t}=f;return typeof e[t]=="number"}function x(f){let e="";for(const t in f){const o=f[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(l(o)){const{value:n,options:r,namespace:s}=o,i=s?`${s}_`:"";for(const a in r)e+=`#define ${i}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${i}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{h as BufferObject,g as FramebufferObject,c as Program,d as ProgramCache,y as Renderbuffer,O as ShaderCompiler,F as Texture,A as VertexArrayObject,P as createProgram,x as glslifyDefineMap};
