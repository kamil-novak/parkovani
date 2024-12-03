import{dh as w,di as F,dj as $,dk as v}from"./index-ZNyjz3YK.js";class z{constructor(t=9,i){this._compareMinX=y,this._compareMinY=A,this._toBBox=n=>n,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&(typeof i=="function"?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),u.prune(),Y.prune(),m.prune(),X.prune()}all(t){j(this._data,t)}search(t,i){let n=this._data;const s=this._toBBox;if(M(t,n))for(u.clear();n;){for(let h=0,a=n.children.length;h<a;h++){const r=n.children[h],o=n.leaf?s(r):r;M(t,o)&&(n.leaf?i(r):E(t,o)?j(r,i):u.push(r))}n=u.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!M(t,i))return!1;for(u.clear();i;){for(let s=0,h=i.children.length;s<h;s++){const a=i.children[s],r=i.leaf?n(a):a;if(M(t,r)){if(i.leaf||E(t,r))return!0;u.push(a)}}i=u.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,s=t.length;n<s;n++)this.insert(t[n]);return this}let i=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const n=this._data;this._data=i,i=n}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(t){if(!t)return this;let i,n=this._data,s=null,h=0,a=!1;const r=this._toBBox(t);for(m.clear(),X.clear();n||m.length>0;){if(n||(n=m.pop(),s=m.data[m.length-1],h=X.pop()??0,a=!0),n.leaf&&(i=F(n.children,t,n.children.length,n.indexHint),i!==-1))return n.children.splice(i,1),m.push(n),this._condense(m),this;a||n.leaf||!E(n,r)?s?(h++,n=s.children[h],a=!1):n=null:(m.push(n),X.push(h),h=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,s){const h=n-i+1;let a=this._maxEntries;if(h<=a){const l=new B(t.slice(i,n+1));return x(l,this._toBBox),l}s||(s=Math.ceil(Math.log(h)/Math.log(a)),a=Math.ceil(h/a**(s-1)));const r=new b([]);r.height=s;const o=Math.ceil(h/a),c=o*Math.ceil(Math.sqrt(a));D(t,i,n,c,this._compareMinX);for(let l=i;l<=n;l+=c){const d=Math.min(l+c-1,n);D(t,l,d,o,this._compareMinY);for(let p=l;p<=d;p+=o){const R=Math.min(p+o-1,d);r.children.push(this._build(t,p,R,s-1))}}return x(r,this._toBBox),r}_insert(t,i,n){const s=this._toBBox,h=n?t:s(t);m.clear();const a=I(h,this._data,i,m);for(a.children.push(t),_(a,h);i>=0&&m.data[i].children.length>this._maxEntries;)this._split(m,i),i--;J(h,m,i)}_split(t,i){const n=t.data[i],s=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,s);const a=this._chooseSplitIndex(n,h,s);if(!a)return;const r=n.children.splice(a,n.children.length-a),o=n.leaf?new B(r):new b(r);o.height=n.height,x(n,this._toBBox),x(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this._data=new b([t,i]),this._data.height=t.height+1,x(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let s,h,a;s=h=1/0;for(let r=i;r<=n-i;r++){const o=f(t,0,r,this._toBBox),c=f(t,r,n,this._toBBox),l=O(o,c),d=S(o)+S(c);l<s?(s=l,a=r,h=d<h?d:h):l===s&&d<h&&(h=d,a=r)}return a}_chooseSplitAxis(t,i,n){const s=t.leaf?this._compareMinX:y,h=t.leaf?this._compareMinY:A;this._allDistMargin(t,i,n,s)<this._allDistMargin(t,i,n,h)&&t.children.sort(s)}_allDistMargin(t,i,n,s){t.children.sort(s);const h=this._toBBox,a=f(t,0,i,h),r=f(t,n-i,n,h);let o=g(a)+g(r);for(let c=i;c<n-i;c++){const l=t.children[c];_(a,t.leaf?h(l):l),o+=g(a)}for(let c=n-i-1;c>=i;c--){const l=t.children[c];_(r,t.leaf?h(l):l),o+=g(r)}return o}_condense(t){for(let i=t.length-1;i>=0;i--){const n=t.data[i];if(n.children.length===0)if(i>0){const s=t.data[i-1],h=s.children;h.splice(F(h,n,h.length,s.indexHint),1)}else this.clear();else x(n,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function I(e,t,i,n){for(;n.push(t),t.leaf!==!0&&n.length-1!==i;){let s,h=1/0,a=1/0;for(let r=0,o=t.children.length;r<o;r++){const c=t.children[r],l=S(c),d=N(e,c)-l;d<a?(a=d,h=l<h?l:h,s=c):d===a&&l<h&&(h=l,s=c)}t=s||t.children[0]}return t}function j(e,t){let i=e;for(Y.clear();i;){if(i.leaf===!0)for(const n of i.children)t(n);else Y.pushArray(i.children);i=Y.pop()??null}}function J(e,t,i){for(let n=i;n>=0;n--)_(t.data[n],e)}function x(e,t){f(e,0,e.children.length,t,e)}function f(e,t,i,n,s){s||(s=new B([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=t;a<i;a++)h=e.children[a],_(s,e.leaf?n(h):h);return s}function _(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function y(e,t){return e.minX-t.minX}function A(e,t){return e.minY-t.minY}function S(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function g(e){return e.maxX-e.minX+(e.maxY-e.minY)}function N(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function O(e,t){const i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),h=Math.min(e.maxY,t.maxY);return Math.max(0,s-i)*Math.max(0,h-n)}function E(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function M(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function D(e,t,i,n,s){const h=[t,i];for(;h.length;){const a=h.pop(),r=h.pop();if(a-r<=n)continue;const o=r+Math.ceil((a-r)/n/2)*n;$(e,o,r,a,s),h.push(r,o,o,a)}}const u=new w,Y=new w,m=new w,X=new w({deallocator:void 0});class k{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class H extends k{constructor(){super(...arguments),this.height=1,this.indexHint=new v}}class B extends H{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends H{constructor(t){super(),this.children=t,this.leaf=!1}}export{k as E,z as h};
