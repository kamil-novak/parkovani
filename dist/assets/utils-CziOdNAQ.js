import{dD as G,bY as j,ag as z,dE as D,dF as O,dG as v,dH as V,dI as Y,dJ as A,$ as L,dr as P,dK as R}from"./index-Bf1OihDl.js";import{m as T,B as U}from"./utils-DPaDow35.js";let m=null;const _=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function B(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function S(t,e,o,s){const a=G(o)?j(o):null,u=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const r=new z(i.geometry);return D(e,r,r),i.geometry=a?B(r,u??0,s[0]):r,i})}function Z(t,e=18,o,s,a){const u=new Float64Array(s*a);e=Math.round(P(e));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;const g=R(o);for(const{geometry:$,attributes:N}of t){const{x,y:c}=$,I=Math.max(0,x-e),M=Math.max(0,c-e),F=Math.min(a,c+e),b=Math.min(s,x+e),h=+g(N);for(let f=M;f<F;f++)for(let d=I;d<b;d++){const w=f*s+d,y=O(d-x,f-c,e)*h,l=u[w]+=y;i=Math.min(i,l),r=Math.max(r,l)}}return{min:i,max:r}}function H(t){const e=_.exec(t);if(!e)return null;const{hh:o,mm:s,ss:a,ms:u}=e.groups;return Number(o)*v.hours+Number(s)*v.minutes+Number(a)*v.seconds+Number(u||0)}async function k(t,e,o=!0){if(!e)return[];const{field:s,field2:a,field3:u,fieldDelimiter:i,fieldInfos:r,timeZone:g}=t,$=s&&(r==null?void 0:r.find(l=>l.name.toLowerCase()===s.toLowerCase())),N=!!$&&V($),x=!!$&&Y($),c=t.valueExpression,I=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,b=[],h=t.viewInfoParams;let f=null,d=null;if(c){if(!m){const{arcadeUtils:l}=await A();m=l}m.hasGeometryOperations(c)&&await m.enableGeometryOperations(),f=m.createFunction(c),d=h?m.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new L(h.spatialReference)}):null}const w=t.fieldInfos,y=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&w?{fields:w}:null;return e.forEach(l=>{const p=l.attributes;let n;if(c){const E=y?{...l,layer:y}:l,C=m.createExecContext(E,d,g);n=m.executeFunction(f,C)}else p&&(n=p[s],a?(n=`${T(n)}${i}${T(p[a])}`,u&&(n=`${n}${i}${T(p[u])}`)):typeof n=="string"&&o&&(x?n=n?new Date(n).getTime():null:N&&(n=n?H(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const E=p&&parseFloat(p[M]);n=U(n,I,E,F)}b.push(n)}),b}export{H as I,k as b,Z as w,S as x};
