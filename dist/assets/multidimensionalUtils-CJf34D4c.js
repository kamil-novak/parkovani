import{a6 as h,a7 as g,gh as v,a8 as x,cj as U,b7 as k,O as F}from"./index-BkgwewGo.js";var y;let d=y=class extends U{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new y({variableName:this.variableName,dimensionName:this.dimensionName,values:k(this.values),isSlice:this.isSlice})}};h([g({type:String,json:{write:!0}})],d.prototype,"variableName",void 0),h([g({type:String,json:{write:!0}})],d.prototype,"dimensionName",void 0),h([g({type:v.array(v.oneOf([v.native(Number),v.array(v.native(Number))])),json:{write:!0}})],d.prototype,"values",void 0),h([g({type:Boolean,json:{write:!0}})],d.prototype,"isSlice",void 0),d=y=h([x("esri.layers.support.DimensionalDefinition")],d);const p=d;function N(e,n,t){var i;const o=n.shift();if(t.length===0){const s=[];t.push({sliceId:-1,multidimensionalDefinition:s})}const a=t.length;for(let s=0;s<a;s++){const m=t.shift().multidimensionalDefinition;(i=o.values)==null||i.forEach(u=>{t.push({sliceId:-1,multidimensionalDefinition:[...m,{variableName:e,dimensionName:o.name,values:[u]}]})})}n.length&&N(e,n,t)}function j(e,n){const t=[];let o=0;return(n?e.variables.filter(a=>a.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((a,i)=>a.name>i.name?1:-1)).forEach(a=>{const i=[],s=[...a.dimensions].sort((m,u)=>m.name>u.name?-1:1);N(a.name,s,i),i.forEach(m=>{t.push({...m,sliceId:o++})})}),t}function L(e,n,t){let o=e;if(n&&(n=[...n].sort((a,i)=>a.dimensionName<i.dimensionName?-1:1)).forEach(({dimensionName:a,values:i,isSlice:s})=>{i.length&&(o=o.filter(m=>{const u=m.multidimensionalDefinition.find(l=>l.dimensionName===a);if(u==null)return!1;const r=u.values[0];return typeof r=="number"?typeof i[0]=="number"?i.includes(r):i.some(l=>l[0]<=r&&l[1]>=r):typeof i[0]=="number"?i.some(l=>r[0]<=l&&r[1]>=l):s?i.some(l=>l[0]===r[0]&&l[0]===r[1]):i.some(l=>l[0]>=r[0]&&l[0]<=r[1]||l[1]>=r[0]&&l[1]<=r[1]||l[0]<r[0]&&l[1]>r[1])}))}),o.length&&(t==null?void 0:t.start)!=null&&t.end!=null){const a=t.start.getTime(),i=t.end.getTime(),s=o[0].multidimensionalDefinition.findIndex(m=>m.dimensionName==="StdTime");s>-1&&(o=o.filter(m=>{const u=m.multidimensionalDefinition[s].values[0];return a<=u&&i>=u}))}return o.map(a=>a.sliceId)}function w(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function A(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function M(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function C(e,n,t){var s,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let o;if(t){const{variables:u}=n;if(u.length&&!u.includes(t))return null;const r=n.subsetDefinitions.find(l=>l.dimensionName===e.name&&l.variableName===t);if(!((m=r==null?void 0:r.values)!=null&&m.length))return e;o=M(r.values)}else{const u=n.dimensions.find(({name:r})=>r===e.name);o=u==null?void 0:u.extent}const a=o;if(!(a!=null&&a.length))return e;const i=e.values.filter(u=>w(u,a));return{...e,extent:[...a],values:i}}function T(e,n,t){var a;if(!((a=n==null?void 0:n.subsetDefinitions)!=null&&a.length))return!1;const{variables:o}=n;if(o.length&&e.some(({variableName:i})=>i&&!o.includes(i)))return!0;for(let i=0;i<e.length;i++){const s=e[i],m=n.subsetDefinitions.find(u=>(s.variableName===""||u.variableName===s.variableName)&&u.dimensionName===s.dimensionName);if(m!=null&&m.values.length){const u=M(m.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&t){if(!A(s.values,u))return!0}else if(s.values.some(r=>!w(r,u)))return!0}}return!1}function $(e,n){if(e==null)return{isOutside:!1};const{geometry:t,timeExtent:o,multidimensionalDefinition:a}=n;let i=null;if(o!=null&&(i=O(e,o),i==null))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&t){const m=t.type==="point"?t:t.type==="extent"?t.center:t.type==="polygon"?t.centroid:null;if(m&&!s.contains(m))return{isOutside:!0}}return a!=null&&a.length&&T(a,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:t,timeExtent:i,multidimensionalDefinition:a}}}function O(e,n){const t=e.dimensions.find(({name:s})=>s==="StdTime");if(t==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:o,end:a}=n.toJSON(),i=o===a?[o]:o!=null&&a!=null?[o,a]:[o??a];return i.length===2&&(t!=null&&t.extent.length)&&(i[0]=Math.max(i[0],t.extent[0]),i[1]=Math.min(i[1],t.extent[1]??t.extent[0]),i[1]<i[0])||T([new p({variableName:"",dimensionName:"StdTime",isSlice:i.length===1,values:i})],e,!0)?null:(n.start=new Date(i[0]),n.end=new Date(i[1]??i[0]),n)}function Y(e,n={}){var l,c;const{multidimensionalInfo:t,keyProperties:o}=e;if(t==null)return null;const{variableName:a,multidimensionalSubset:i,multidimensionalDefinition:s}=n,m=s!=null?(l=s[0])==null?void 0:l.variableName:null,u=a||m||(o==null?void 0:o.DefaultVariable);let{variables:r}=t;return(c=i==null?void 0:i.variables)!=null&&c.length&&(r=r.filter(({name:f})=>i.variables.includes(f))),u?r.find(({name:f})=>f===u)??r[0]:r[0]}function R(e,n={}){const t=Y(e,n);if(!t)return null;const o=[],{dimensions:a,name:i}=t;if(a.length===0)return[new p({variableName:i,dimensionName:"",values:[],isSlice:!0})];for(let s=0;s<a.length;s++){const m=C(a[s],n.multidimensionalSubset,i);if(!m)return null;const{values:u,extent:r}=m;let l=(u==null?void 0:u[0])??(r==null?void 0:r[0]);m.name.toLowerCase()==="stdz"&&!m.hasRanges&&r&&Math.abs(r[1])<=Math.abs(r[0])&&(l=u!=null&&u.length?u[u.length-1]:r[1]),o.push(new p({variableName:i,dimensionName:m.name,values:[l],isSlice:!n.useRangeForRangedDimensionInfo||!!m.hasRanges}))}return o}function B(e){return!!(e!=null&&e.length)&&e.some(n=>{if(n.values==null)return!0;const t=n.values.length;return t===0||t>1||!n.isSlice&&Array.isArray(n.values[0])})}function z(e,n){var o;if(n==null||e==null)return null;let t=n.variables.map(a=>({...a}));return(o=e==null?void 0:e.variables)!=null&&o.length&&(t=t.filter(({name:a})=>e.variables.includes(a)),t.forEach(a=>{a.dimensions=a.dimensions.map(i=>C(i,e,a.name)).filter(F)})),t}function I(e,n){var m;const{values:t}=n;if(t!=null&&t.length){const u=Array.isArray(t[0]),r=Array.isArray(e);return u!==r?-1:u&&r?t.findIndex(l=>l[0]===e[0]&&l[1]===e[1]):t.indexOf(e)}const{extent:o}=n;if(Array.isArray(e)||!o||e<o[0]||e>o[1])return-1;const a=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-o[0])/a);const i=o[0];let s=-1;switch(((m=n.intervalUnit)==null?void 0:m.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-i)/1e3/a);break;case"minutes":s=Math.round((e-i)/6e4/a);break;case"hours":s=Math.round((e-i)/36e5/a);break;case"days":s=Math.round((e-i)/864e5/a);break;case"months":{const u=new Date(e).getUTCFullYear()-new Date(i).getUTCFullYear(),r=new Date(i).getUTCMonth(),l=new Date(e).getUTCMonth();s=u===0?l-r:l+11-r+12*(u-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(i).getUTCFullYear())/a);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(i).getUTCFullYear())/10/a)}return s}function D(e){var s,m;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:t,unit:o}=e,a=e.interval||1,i=t?t[1]-t[0]:0;if(o!=="ISO8601")return Math.round(i/a);switch(((m=e.intervalUnit)==null?void 0:m.toLowerCase())??"seconds"){case"seconds":n=Math.round(i/1e3/a);break;case"minutes":n=Math.round(i/6e4/a);break;case"hours":n=Math.round(i/36e5/a);break;case"days":n=Math.round(i/864e5/a);break;case"months":if(t){const u=new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear(),r=new Date(t[0]).getUTCMonth(),l=new Date(t[1]).getUTCMonth();n=u===0?l-r+1:l+11-r+12*(u-1)+1}else n=0;break;case"years":n=t?Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/a):0;break;case"decades":n=t?Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/10/a):0;break;default:n=0}return n}function J(e,n){let t=0;const o=e[0].variableName,a=[...n.variables].sort((i,s)=>i.name>s.name?1:-1);for(let i=0;i<a.length;i++){const s=a[i],m=[...s.dimensions].sort((l,c)=>l.name>c.name?-1:1);if(s.name!==o){t+=m.map(l=>D(l)).reduce((l,c)=>l*c);continue}const u=m.map(l=>D(l)),r=m.length;for(let l=0;l<r;l++){const c=e.find(b=>b.dimensionName===m[l].name);if(c==null)return null;const f=I(c.values[0],m[l]);if(f===-1)return null;u.shift(),t+=l===r-1?f:f*u.reduce((b,S)=>b*S)}break}return t}export{J as D,L as a,R as d,Y as f,z as g,B as h,j as i,$ as m,T as o,p};
