import{dD as $,gt as z,ak as x,iR as I,li as m,aq as g,c2 as y}from"./index-lgQOPtME.js";function J(a=!1,e){if(a){const{elevationInfo:t,alignPointsInFeatures:n}=e;return new v(t,n)}return new w}let w=class{async alignCandidates(e,t,n){return e}notifyElevationSourceChange(){}};const b=1024;let v=class{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new $(b),this._cacheVersion=0}async alignCandidates(e,t,n){const s=this._elevationInfo;return s==null||s.mode!=="absolute-height"||s.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,n):(S(e,t,s),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,t,n){const s=new Map;for(const u of e)z(s,u.objectId,O).push(u);const[o,c,i]=this._prepareQuery(s,t),r=await this._alignPointsInFeatures(o,n);if(x(n),i!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,n);this._applyCacheAndResponse(o,r,c);const{drapedObjectIds:h,failedObjectIds:f}=r,d=[];for(const u of e){const{objectId:l}=u;h.has(l)&&u.type==="edge"&&(u.draped=!0),f.has(l)||d.push(u)}return d}_prepareQuery(e,t){const n=[],s=[];for(const[o,c]of e){const i=[];for(const r of c)this._addToQueriesOrCachedResult(o,r.target,i,s),r.type==="edge"&&(this._addToQueriesOrCachedResult(o,r.start,i,s),this._addToQueriesOrCachedResult(o,r.end,i,s));i.length!==0&&n.push({objectId:o,points:i})}return[{spatialReference:t.toJSON(),pointsInFeatures:n},s,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,s){const o=_(e,t),c=this._alignmentsCache.get(o);c==null?n.push(t):s.push(new j(t,c))}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:n,failedObjectIds:s},o){for(const r of o)r.apply();let c=0;const i=this._alignmentsCache;for(const{objectId:r,points:h}of e.pointsInFeatures){if(s.has(r)){c+=h.length;continue}const f=!n.has(r);for(const d of h){const u=_(r,d),l=t[c++];d.z=l,f&&i.put(u,l,1)}}}};class j{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function _(a,{x:e,y:t,z:n,spatialReference:s}){return`${a}-${e}-${t}-${n??0}}-wkid:${s==null?void 0:s.wkid}`}function S(a,e,t){const{offset:n,unit:s}=t;if(n==null)return;const o=I(e),c=n*(m(s??"meters")/o);for(const i of a)switch(i.type){case"edge":i.start.z+=c,i.end.z+=c;continue;case"vertex":i.target.z+=c;continue}}function O(){return[]}class R{filter(e,t){return t}notifyElevationSourceChange(){}}let V=class{filter(e,t){const{point:n,distance:s}=e,{z:o}=n;if(o==null||t.length===0)return t;const c=M(s),i=this._updateCandidatesTo3D(t,n,c).filter(E);return i.sort(k),i}_updateCandidatesTo3D(e,t,n){for(const s of e)switch(s.type){case"edge":Q(s,t,n);continue;case"vertex":F(s,t,n);continue}return e}};function E(a){return a.distance<=1}function G(a=!1){return a?new V:new R}function Q(a,e,{x:t,y:n,z:s}){const{start:o,end:c,target:i}=a;a.draped||T(i,e,o,c);const r=(e.x-i.x)/t,h=(e.y-i.y)/n,f=(e.z-i.z)/s;a.distance=Math.sqrt(r*r+h*h+f*f)}function T(a,e,t,n){const s=n.x-t.x,o=n.y-t.y,c=n.z-t.z,i=s*s+o*o+c*c,r=(e.x-t.x)*s+(e.y-t.y)*o+c*(e.z-t.z),h=Math.min(1,Math.max(0,r/i)),f=t.x+s*h,d=t.y+o*h,u=t.z+c*h;a.x=f,a.y=d,a.z=u}function F(a,e,{x:t,y:n,z:s}){const{target:o}=a,c=(e.x-o.x)/t,i=(e.y-o.y)/n,r=(e.z-o.z)/s,h=Math.sqrt(c*c+i*i+r*r);a.distance=h}function M(a){return typeof a=="number"?{x:a,y:a,z:a}:a}function k(a,e){return a.distance-e.distance}function H(a=!1,e){return a?new P(e):new q}class q{async fetch(){return[]}notifySymbologyChange(){}}const D=1024;class P{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new $(D),this._cacheVersion=0}async fetch(e,t){if(e.length===0)return[];const n=[],s=[],o=this._candidatesCache;for(const d of e){const u=C(d),l=o.get(u);if(l)for(const p of l)s.push(g(p));else n.push(d),o.put(u,[],1)}if(n.length===0)return s;const c=this._cacheVersion,{candidates:i,sourceCandidateIndices:r}=await this._getSymbologyCandidates(n,t);if(x(t),c!==this._cacheVersion)return this.fetch(e,t);const h=[],{length:f}=i;for(let d=0;d<f;++d){const u=i[d],l=C(n[r[d]]),p=o.get(l);p.push(u),o.put(l,p,p.length),h.push(g(u))}return s.concat(h)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function C(a){switch(a.type){case"vertex":{const{objectId:e,target:t}=a,n=`${e}-vertex-${t.x}-${t.y}-${t.z??0}`;return y(n).toString()}case"edge":{const{objectId:e,start:t,end:n}=a,s=`${e}-edge-${t.x}-${t.y}-${t.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return y(s).toString()}default:return""}}export{J as i,H as n,G as r};
