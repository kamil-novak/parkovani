import{dn as ie,g7 as Dt}from"./index-CgUwq-LX.js";var Wr,Or={exports:{}};function oe(){var xt;return Wr||(Wr=1,It=Or,yt=typeof document<"u"?(xt=document.currentScript)==null?void 0:xt.src:void 0,Rt=function(kr={}){var Ut,tt,c=Object.assign({},kr),Er=new Promise((t,r)=>{Ut=t,tt=r}),_t=Object.assign({},c),Ht="./this.program",M="";typeof document<"u"&&document.currentScript&&(M=document.currentScript.src),yt&&(M=yt),M=M.startsWith("blob:")?"":M.substr(0,M.replace(/[?#].*/,"").lastIndexOf("/")+1);var B,jr=c.print||console.log.bind(console),_=c.printErr||console.error.bind(console);Object.assign(c,_t),_t=null,c.thisProgram&&(Ht=c.thisProgram),c.wasmBinary&&(B=c.wasmBinary);var rt,I,A,H,V,T,y,Yt,Bt,Vt,zt,qt=!1;function Nt(){var t=rt.buffer;c.HEAP8=I=new Int8Array(t),c.HEAP16=H=new Int16Array(t),c.HEAPU8=A=new Uint8Array(t),c.HEAPU16=V=new Uint16Array(t),c.HEAP32=T=new Int32Array(t),c.HEAPU32=y=new Uint32Array(t),c.HEAPF32=Yt=new Float32Array(t),c.HEAPF64=zt=new Float64Array(t),c.HEAP64=Bt=new BigInt64Array(t),c.HEAPU64=Vt=new BigUint64Array(t)}var Lt=[],Gt=[],Jt=[];function Sr(){var t=c.preRun.shift();Lt.unshift(t)}var R=0,z=null;function Xt(t){var r;throw(r=c.onAbort)==null||r.call(c,t),_(t="Aborted("+t+")"),qt=!0,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),tt(t),t}var wt,Zt=t=>t.startsWith("data:application/octet-stream;base64,");function Kt(t){if(t==wt&&B)return new Uint8Array(B);throw"both async and sync fetching of the wasm failed"}function Fr(t){return B||typeof fetch!="function"?Promise.resolve().then(()=>Kt(t)):fetch(t,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw`failed to load wasm binary file at '${t}'`;return r.arrayBuffer()}).catch(()=>Kt(t))}function Qt(t,r,e){return Fr(t).then(a=>WebAssembly.instantiate(a,r)).then(e,a=>{_(`failed to asynchronously prepare wasm: ${a}`),Xt(a)})}function Mr(t,r){var e=wt;return B||typeof WebAssembly.instantiateStreaming!="function"||Zt(e)||typeof fetch!="function"?Qt(e,t,r):fetch(e,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,t).then(r,function(n){return _(`wasm streaming compile failed: ${n}`),_("falling back to ArrayBuffer instantiation"),Qt(e,t,r)}))}var bt=t=>{for(;0<t.length;)t.shift()(c)};class Dr{constructor(r){this.ca=r-24}}var et={},at=t=>{for(;t.length;){var r=t.pop();t.pop()(r)}};function q(t){return this.fromWireType(y[t>>2])}var N,tr,g,Y={},x={},nt={},W=(t,r,e)=>{function a(s){if((s=e(s)).length!==t.length)throw new N("Mismatched type converter count");for(var u=0;u<t.length;++u)O(t[u],s[u])}t.forEach(function(s){nt[s]=r});var n=Array(r.length),o=[],h=0;r.forEach((s,u)=>{x.hasOwnProperty(s)?n[u]=x[s]:(o.push(s),Y.hasOwnProperty(s)||(Y[s]=[]),Y[s].push(()=>{n[u]=x[s],++h===o.length&&a(n)}))}),o.length===0&&a(n)},it=t=>{if(t===null)return"null";var r=typeof t;return r==="object"||r==="array"||r==="function"?t.toString():""+t},w=t=>{for(var r="";A[t];)r+=tr[A[t++]];return r};function Ir(t,r,e={}){var a=r.name;if(!t)throw new g(`type "${a}" must have a positive integer typeid pointer`);if(x.hasOwnProperty(t)){if(e.Ma)return;throw new g(`Cannot register type '${a}' twice`)}x[t]=r,delete nt[t],Y.hasOwnProperty(t)&&(r=Y[t],delete Y[t],r.forEach(n=>n()))}function O(t,r,e={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ir(t,r,e)}var L,rr=(t,r,e)=>{switch(r){case 1:return e?a=>I[a]:a=>A[a];case 2:return e?a=>H[a>>1]:a=>V[a>>1];case 4:return e?a=>T[a>>2]:a=>y[a>>2];case 8:return e?a=>Bt[a>>3]:a=>Vt[a>>3];default:throw new TypeError(`invalid integer width (${r}): ${t}`)}},$t=t=>{throw new g(t.aa.da.ba.name+" instance already deleted")},At=!1,er=()=>{},ar=(t,r,e)=>r===e?t:e.ga===void 0||(t=ar(t,r,e.ga))===null?null:e.Fa(t),nr={},G=[],Tt=()=>{for(;G.length;){var t=G.pop();t.aa.qa=!1,t.delete()}},J={},Rr=(t,r)=>{if(r===void 0)throw new g("ptr should not be undefined");for(;t.ga;)r=t.sa(r),t=t.ga;return J[r]},ot=(t,r)=>{if(!r.da||!r.ca)throw new N("makeClassHandle requires ptr and ptrType");if(!!r.ia!=!!r.fa)throw new N("Both smartPtrType and smartPtr must be specified");return r.count={value:1},st(Object.create(t,{aa:{value:r,writable:!0}}))},st=t=>typeof FinalizationRegistry>"u"?(st=r=>r,t):(At=new FinalizationRegistry(r=>{--(r=r.aa).count.value,r.count.value===0&&(r.fa?r.ia.ja(r.fa):r.da.ba.ja(r.ca))}),er=r=>{At.unregister(r)},(st=r=>{var e=r.aa;return e.fa&&At.register(r,{aa:e},r),r})(t));function ut(){}var X=(t,r)=>Object.defineProperty(r,"name",{value:t}),Pt=(t,r,e)=>{if(t[r].ea===void 0){var a=t[r];t[r]=function(...n){if(!t[r].ea.hasOwnProperty(n.length))throw new g(`Function '${e}' called with an invalid number of arguments (${n.length}) - expects one of (${t[r].ea})!`);return t[r].ea[n.length].apply(this,n)},t[r].ea=[],t[r].ea[a.pa]=a}},Ct=(t,r,e)=>{if(c.hasOwnProperty(t)){if(e===void 0||c[t].ea!==void 0&&c[t].ea[e]!==void 0)throw new g(`Cannot register public name '${t}' twice`);if(Pt(c,t,t),c.hasOwnProperty(e))throw new g(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`);c[t].ea[e]=r}else c[t]=r,e!==void 0&&(c[t].Za=e)},xr=t=>{if(t===void 0)return"_unknown";var r=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?`_${t}`:t};function Ur(t,r,e,a,n,o,h,s){this.name=t,this.constructor=r,this.la=e,this.ja=a,this.ga=n,this.Ha=o,this.sa=h,this.Fa=s,this.Oa=[]}var ct=(t,r,e)=>{for(;r!==e;){if(!r.sa)throw new g(`Expected null or instance of ${e.name}, got an instance of ${r.name}`);t=r.sa(t),r=r.ga}return t};function _r(t,r){if(r===null){if(this.ya)throw new g(`null is not a valid ${this.name}`);return 0}if(!r.aa)throw new g(`Cannot pass "${it(r)}" as a ${this.name}`);if(!r.aa.ca)throw new g(`Cannot pass deleted object as a pointer of type ${this.name}`);return ct(r.aa.ca,r.aa.da.ba,this.ba)}function Hr(t,r){if(r===null){if(this.ya)throw new g(`null is not a valid ${this.name}`);if(this.va){var e=this.za();return t!==null&&t.push(this.ja,e),e}return 0}if(!r||!r.aa)throw new g(`Cannot pass "${it(r)}" as a ${this.name}`);if(!r.aa.ca)throw new g(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.ua&&r.aa.da.ua)throw new g(`Cannot convert argument of type ${r.aa.ia?r.aa.ia.name:r.aa.da.name} to parameter type ${this.name}`);if(e=ct(r.aa.ca,r.aa.da.ba,this.ba),this.va){if(r.aa.fa===void 0)throw new g("Passing raw pointer to smart pointer is illegal");switch(this.Ta){case 0:if(r.aa.ia!==this)throw new g(`Cannot convert argument of type ${r.aa.ia?r.aa.ia.name:r.aa.da.name} to parameter type ${this.name}`);e=r.aa.fa;break;case 1:e=r.aa.fa;break;case 2:if(r.aa.ia===this)e=r.aa.fa;else{var a=r.clone();e=this.Pa(e,E(()=>a.delete())),t!==null&&t.push(this.ja,e)}break;default:throw new g("Unsupporting sharing policy")}}return e}function Yr(t,r){if(r===null){if(this.ya)throw new g(`null is not a valid ${this.name}`);return 0}if(!r.aa)throw new g(`Cannot pass "${it(r)}" as a ${this.name}`);if(!r.aa.ca)throw new g(`Cannot pass deleted object as a pointer of type ${this.name}`);if(r.aa.da.ua)throw new g(`Cannot convert argument of type ${r.aa.da.name} to parameter type ${this.name}`);return ct(r.aa.ca,r.aa.da.ba,this.ba)}function Z(t,r,e,a,n,o,h,s,u,l,f){this.name=t,this.ba=r,this.ya=e,this.ua=a,this.va=n,this.Na=o,this.Ta=h,this.Da=s,this.za=u,this.Pa=l,this.ja=f,n||r.ga!==void 0?this.toWireType=Hr:(this.toWireType=a?_r:Yr,this.ha=null)}var ir,or,sr=(t,r,e)=>{if(!c.hasOwnProperty(t))throw new N("Replacing nonexistent public symbol");c[t].ea!==void 0&&e!==void 0?c[t].ea[e]=r:(c[t]=r,c[t].pa=e)},lt=[],$=(t,r)=>{t=w(t);var e=lt[r];if(e||(r>=lt.length&&(lt.length=r+1),lt[r]=e=ir.get(r)),typeof e!="function")throw new g(`unknown function pointer with signature ${t}: ${r}`);return e},ur=t=>{t=Tr(t);var r=w(t);return F(t),r},U=(t,r)=>{function e(o){n[o]||x[o]||(nt[o]?nt[o].forEach(e):(a.push(o),n[o]=!0))}var a=[],n={};throw r.forEach(e),new or(`${t}: `+a.map(ur).join([", "]))};function Br(t){for(var r=1;r<t.length;++r)if(t[r]!==null&&t[r].ha===void 0)return!0;return!1}function ft(t,r,e,a,n){var o=r.length;if(2>o)throw new g("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=r[1]!==null&&e!==null,s=Br(r),u=r[0].name!=="void",l=o-2,f=Array(l),d=[],m=[];return X(t,function(...i){if(i.length!==l)throw new g(`function ${t} called with ${i.length} arguments, expected ${l}`);if(m.length=0,d.length=h?2:1,d[0]=n,h){var p=r[1].toWireType(m,this);d[1]=p}for(var v=0;v<l;++v)f[v]=r[v+2].toWireType(m,i[v]),d.push(f[v]);if(i=a(...d),s)at(m);else for(v=h?1:2;v<r.length;v++){var b=v===1?p:f[v-2];r[v].ha!==null&&r[v].ha(b)}return p=u?r[0].fromWireType(i):void 0})}var Wt,ht=(t,r)=>{for(var e=[],a=0;a<t;a++)e.push(y[r+4*a>>2]);return e},Ot=t=>{const r=(t=t.trim()).indexOf("(");return r!==-1?t.substr(0,r):t},cr=(t,r,e)=>{if(!(t instanceof Object))throw new g(`${e} with invalid "this": ${t}`);if(!(t instanceof r.ba.constructor))throw new g(`${e} incompatible with "this" of type ${t.constructor.name}`);if(!t.aa.ca)throw new g(`cannot call emscripten binding method ${e} on deleted object`);return ct(t.aa.ca,t.aa.da.ba,r.ba)},kt=[],S=[],Et=t=>{9<t&&--S[t+1]==0&&(S[t]=void 0,kt.push(t))},P=t=>{if(!t)throw new g("Cannot use deleted val. handle = "+t);return S[t]},E=t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:const r=kt.pop()||S.length;return S[r]=t,S[r+1]=1,r}},lr={name:"emscripten::val",fromWireType:t=>{var r=P(t);return Et(t),r},toWireType:(t,r)=>E(r),argPackAdvance:8,readValueFromPointer:q,ha:null},Vr=(t,r,e)=>{switch(r){case 1:return e?function(a){return this.fromWireType(I[a])}:function(a){return this.fromWireType(A[a])};case 2:return e?function(a){return this.fromWireType(H[a>>1])}:function(a){return this.fromWireType(V[a>>1])};case 4:return e?function(a){return this.fromWireType(T[a>>2])}:function(a){return this.fromWireType(y[a>>2])};default:throw new TypeError(`invalid integer width (${r}): ${t}`)}},K=(t,r)=>{var e=x[t];if(e===void 0)throw t=`${r} has unknown type ${ur(t)}`,new g(t);return e},zr=(t,r)=>{switch(r){case 4:return function(e){return this.fromWireType(Yt[e>>2])};case 8:return function(e){return this.fromWireType(zt[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${t}`)}},fr=(t,r,e,a)=>{if(0<a){a=e+a-1;for(var n=0;n<t.length;++n){var o=t.charCodeAt(n);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++n)),127>=o){if(e>=a)break;r[e++]=o}else{if(2047>=o){if(e+1>=a)break;r[e++]=192|o>>6}else{if(65535>=o){if(e+2>=a)break;r[e++]=224|o>>12}else{if(e+3>=a)break;r[e++]=240|o>>18,r[e++]=128|o>>12&63}r[e++]=128|o>>6&63}r[e++]=128|63&o}}r[e]=0}},hr=t=>{for(var r=0,e=0;e<t.length;++e){var a=t.charCodeAt(e);127>=a?r++:2047>=a?r+=2:55296<=a&&57343>=a?(r+=4,++e):r+=3}return r},pr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,pt=(t,r,e)=>{var a=r+e;for(e=r;t[e]&&!(e>=a);)++e;if(16<e-r&&t.buffer&&pr)return pr.decode(t.subarray(r,e));for(a="";r<e;){var n=t[r++];if(128&n){var o=63&t[r++];if((224&n)==192)a+=String.fromCharCode((31&n)<<6|o);else{var h=63&t[r++];65536>(n=(240&n)==224?(15&n)<<12|o<<6|h:(7&n)<<18|o<<12|h<<6|63&t[r++])?a+=String.fromCharCode(n):(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n))}}else a+=String.fromCharCode(n)}return a},dr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,qr=(t,r)=>{for(var e=t>>1,a=e+r/2;!(e>=a)&&V[e];)++e;if(32<(e<<=1)-t&&dr)return dr.decode(A.subarray(t,e));for(e="",a=0;!(a>=r/2);++a){var n=H[t+2*a>>1];if(n==0)break;e+=String.fromCharCode(n)}return e},Nr=(t,r,e)=>{if(e??(e=2147483647),2>e)return 0;var a=r;e=(e-=2)<2*t.length?e/2:t.length;for(var n=0;n<e;++n)H[r>>1]=t.charCodeAt(n),r+=2;return H[r>>1]=0,r-a},Lr=t=>2*t.length,Gr=(t,r)=>{for(var e=0,a="";!(e>=r/4);){var n=T[t+4*e>>2];if(n==0)break;++e,65536<=n?(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n)):a+=String.fromCharCode(n)}return a},Jr=(t,r,e)=>{if(e??(e=2147483647),4>e)return 0;var a=r;e=a+e-4;for(var n=0;n<t.length;++n){var o=t.charCodeAt(n);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++n)),T[r>>2]=o,(r+=4)+4>e)break}return T[r>>2]=0,r-a},Xr=t=>{for(var r=0,e=0;e<t.length;++e){var a=t.charCodeAt(e);55296<=a&&57343>=a&&++e,r+=4}return r},vr=(t,r,e)=>{var a=[];return t=t.toWireType(a,e),a.length&&(y[r>>2]=E(a)),t},dt=[],Zr={},jt=t=>{var r=Zr[t];return r===void 0?w(t):r},gr=()=>{function t(r){r.$$$embind_global$$$=r;var e=typeof $$$embind_global$$$=="object"&&r.$$$embind_global$$$==r;return e||delete r.$$$embind_global$$$,e}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Dt=="object"&&t(Dt)?$$$embind_global$$$=Dt:typeof self=="object"&&t(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")},Kr=t=>{var r=dt.length;return dt.push(t),r},Qr=(t,r)=>{for(var e=Array(t),a=0;a<t;++a)e[a]=K(y[r+4*a>>2],"parameter "+a);return e},te=Reflect.construct,St={},mr=()=>{if(!Wt){var t,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Ht||"./this.program"};for(t in St)St[t]===void 0?delete r[t]:r[t]=St[t];var e=[];for(t in r)e.push(`${t}=${r[t]}`);Wt=e}return Wt},re=[null,[],[]],vt=t=>t%4==0&&(t%100!=0||t%400==0),yr=[31,29,31,30,31,30,31,31,30,31,30,31],wr=[31,28,31,30,31,30,31,31,30,31,30,31];function ee(t){var r=Array(hr(t)+1);return fr(t,r,0,r.length),r}var br,$r,Q,ae=(t,r,e,a)=>{function n(i,p,v){for(i=typeof i=="number"?i.toString():i||"";i.length<p;)i=v[0]+i;return i}function o(i,p){return n(i,p,"0")}function h(i,p){function v(k){return 0>k?-1:0<k?1:0}var b;return(b=v(i.getFullYear()-p.getFullYear()))===0&&(b=v(i.getMonth()-p.getMonth()))===0&&(b=v(i.getDate()-p.getDate())),b}function s(i){switch(i.getDay()){case 0:return new Date(i.getFullYear()-1,11,29);case 1:return i;case 2:return new Date(i.getFullYear(),0,3);case 3:return new Date(i.getFullYear(),0,2);case 4:return new Date(i.getFullYear(),0,1);case 5:return new Date(i.getFullYear()-1,11,31);case 6:return new Date(i.getFullYear()-1,11,30)}}function u(i){var p=i.na;for(i=new Date(new Date(i.oa+1900,0,1).getTime());0<p;){var v=i.getMonth(),b=(vt(i.getFullYear())?yr:wr)[v];if(!(p>b-i.getDate())){i.setDate(i.getDate()+p);break}p-=b-i.getDate()+1,i.setDate(1),11>v?i.setMonth(v+1):(i.setMonth(0),i.setFullYear(i.getFullYear()+1))}return v=new Date(i.getFullYear()+1,0,4),p=s(new Date(i.getFullYear(),0,4)),v=s(v),0>=h(p,i)?0>=h(v,i)?i.getFullYear()+1:i.getFullYear():i.getFullYear()-1}var l=y[a+40>>2];for(var f in a={Wa:T[a>>2],Va:T[a+4>>2],wa:T[a+8>>2],Aa:T[a+12>>2],xa:T[a+16>>2],oa:T[a+20>>2],ka:T[a+24>>2],na:T[a+28>>2],$a:T[a+32>>2],Ua:T[a+36>>2],Xa:l&&l?pt(A,l):""},e=e?pt(A,e):"",l={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})e=e.replace(new RegExp(f,"g"),l[f]);var d="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),m="January February March April May June July August September October November December".split(" ");for(f in l={"%a":i=>d[i.ka].substring(0,3),"%A":i=>d[i.ka],"%b":i=>m[i.xa].substring(0,3),"%B":i=>m[i.xa],"%C":i=>o((i.oa+1900)/100|0,2),"%d":i=>o(i.Aa,2),"%e":i=>n(i.Aa,2," "),"%g":i=>u(i).toString().substring(2),"%G":u,"%H":i=>o(i.wa,2),"%I":i=>((i=i.wa)==0?i=12:12<i&&(i-=12),o(i,2)),"%j":i=>{for(var p=0,v=0;v<=i.xa-1;p+=(vt(i.oa+1900)?yr:wr)[v++]);return o(i.Aa+p,3)},"%m":i=>o(i.xa+1,2),"%M":i=>o(i.Va,2),"%n":()=>`
`,"%p":i=>0<=i.wa&&12>i.wa?"AM":"PM","%S":i=>o(i.Wa,2),"%t":()=>"	","%u":i=>i.ka||7,"%U":i=>o(Math.floor((i.na+7-i.ka)/7),2),"%V":i=>{var p=Math.floor((i.na+7-(i.ka+6)%7)/7);if(2>=(i.ka+371-i.na-2)%7&&p++,p)p==53&&((v=(i.ka+371-i.na)%7)==4||v==3&&vt(i.oa)||(p=1));else{p=52;var v=(i.ka+7-i.na-1)%7;(v==4||v==5&&vt(i.oa%400-1))&&p++}return o(p,2)},"%w":i=>i.ka,"%W":i=>o(Math.floor((i.na+7-(i.ka+6)%7)/7),2),"%y":i=>(i.oa+1900).toString().substring(2),"%Y":i=>i.oa+1900,"%z":i=>{var p=0<=(i=i.Ua);return i=Math.abs(i)/60,(p?"+":"-")+("0000"+(i/60*100+i%60)).slice(-4)},"%Z":i=>i.Xa,"%%":()=>"%"},e=e.replace(/%%/g,"\0\0"),l)e.includes(f)&&(e=e.replace(new RegExp(f,"g"),l[f](a)));return(f=ee(e=e.replace(/\0\0/g,"%"))).length>r?0:(I.set(f,t),f.length-1)};N=c.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError"}};for(var Ar=Array(256),gt=0;256>gt;++gt)Ar[gt]=String.fromCharCode(gt);tr=Ar,g=c.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}},Object.assign(ut.prototype,{isAliasOf:function(t){if(!(this instanceof ut&&t instanceof ut))return!1;var r=this.aa.da.ba,e=this.aa.ca;t.aa=t.aa;var a=t.aa.da.ba;for(t=t.aa.ca;r.ga;)e=r.sa(e),r=r.ga;for(;a.ga;)t=a.sa(t),a=a.ga;return r===a&&e===t},clone:function(){if(this.aa.ca||$t(this),this.aa.ra)return this.aa.count.value+=1,this;var t=st,r=Object,e=r.create,a=Object.getPrototypeOf(this),n=this.aa;return(t=t(e.call(r,a,{aa:{value:{count:n.count,qa:n.qa,ra:n.ra,ca:n.ca,da:n.da,fa:n.fa,ia:n.ia}}}))).aa.count.value+=1,t.aa.qa=!1,t},delete(){if(this.aa.ca||$t(this),this.aa.qa&&!this.aa.ra)throw new g("Object already scheduled for deletion");er(this);var t=this.aa;--t.count.value,t.count.value===0&&(t.fa?t.ia.ja(t.fa):t.da.ba.ja(t.ca)),this.aa.ra||(this.aa.fa=void 0,this.aa.ca=void 0)},isDeleted:function(){return!this.aa.ca},deleteLater:function(){if(this.aa.ca||$t(this),this.aa.qa&&!this.aa.ra)throw new g("Object already scheduled for deletion");return G.push(this),G.length===1&&L&&L(Tt),this.aa.qa=!0,this}}),c.getInheritedInstanceCount=()=>Object.keys(J).length,c.getLiveInheritedInstances=()=>{var t,r=[];for(t in J)J.hasOwnProperty(t)&&r.push(J[t]);return r},c.flushPendingDeletes=Tt,c.setDelayFunction=t=>{L=t,G.length&&L&&L(Tt)},Object.assign(Z.prototype,{Ia(t){return this.Da&&(t=this.Da(t)),t},Ba(t){var r;(r=this.ja)==null||r.call(this,t)},argPackAdvance:8,readValueFromPointer:q,fromWireType:function(t){function r(){return this.va?ot(this.ba.la,{da:this.Na,ca:e,ia:this,fa:t}):ot(this.ba.la,{da:this,ca:t})}var e=this.Ia(t);if(!e)return this.Ba(t),null;var a=Rr(this.ba,e);if(a!==void 0)return a.aa.count.value===0?(a.aa.ca=e,a.aa.fa=t,a.clone()):(a=a.clone(),this.Ba(t),a);if(a=this.ba.Ha(e),!(a=nr[a]))return r.call(this);a=this.ua?a.Ea:a.pointerType;var n=ar(e,this.ba,a.ba);return n===null?r.call(this):this.va?ot(a.ba.la,{da:a,ca:n,ia:this,fa:t}):ot(a.ba.la,{da:a,ca:n})}}),or=c.UnboundTypeError=(br=Error,(Q=X($r="UnboundTypeError",function(t){this.name=$r,this.message=t,(t=Error(t).stack)!==void 0&&(this.stack=this.toString()+`
`+t.replace(/^Error(:[^\n]*)?\n/,""))})).prototype=Object.create(br.prototype),Q.prototype.constructor=Q,Q.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},Q),S.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=()=>S.length/2-5-kt.length;var mt,ne={m:(t,r,e)=>{var a=new Dr(t);throw y[a.ca+16>>2]=0,y[a.ca+4>>2]=r,y[a.ca+8>>2]=e,t},M:()=>{Xt("")},r:t=>{var r=et[t];delete et[t];var e=r.za,a=r.ja,n=r.Ca,o=n.map(h=>h.La).concat(n.map(h=>h.Ra));W([t],o,h=>{var s={};return n.forEach((u,l)=>{var f=h[l],d=u.Ja,m=u.Ka,i=h[l+n.length],p=u.Qa,v=u.Sa;s[u.Ga]={read:b=>f.fromWireType(d(m,b)),write:(b,k)=>{var j=[];p(v,b,i.toWireType(j,k)),at(j)}}}),[{name:r.name,fromWireType:u=>{var l,f={};for(l in s)f[l]=s[l].read(u);return a(u),f},toWireType:(u,l)=>{for(var f in s)if(!(f in l))throw new TypeError(`Missing field: "${f}"`);var d=e();for(f in s)s[f].write(d,l[f]);return u!==null&&u.push(a,d),d},argPackAdvance:8,readValueFromPointer:q,ha:a}]})},E:(t,r,e)=>{O(t,{name:r=w(r),fromWireType:a=>a,toWireType:function(a,n){if(typeof n!="bigint"&&typeof n!="number")throw new TypeError(`Cannot convert "${it(n)}" to ${this.name}`);return typeof n=="number"&&(n=BigInt(n)),n},argPackAdvance:8,readValueFromPointer:rr(r,e,r.indexOf("u")==-1),ha:null})},S:(t,r,e,a)=>{O(t,{name:r=w(r),fromWireType:function(n){return!!n},toWireType:function(n,o){return o?e:a},argPackAdvance:8,readValueFromPointer:function(n){return this.fromWireType(A[n])},ha:null})},f:(t,r,e,a,n,o,h,s,u,l,f,d,m)=>{f=w(f),o=$(n,o),s&&(s=$(h,s)),l&&(l=$(u,l)),m=$(d,m);var i=xr(f);Ct(i,function(){U(`Cannot construct ${f} due to unbound types`,[a])}),W([t,r,e],a?[a]:[],p=>{if(p=p[0],a)var v=p.ba,b=v.la;else b=ut.prototype;p=X(f,function(...Mt){if(Object.getPrototypeOf(this)!==k)throw new g("Use 'new' to construct "+f);if(C.ma===void 0)throw new g(f+" has no accessible constructor");var Cr=C.ma[Mt.length];if(Cr===void 0)throw new g(`Tried to invoke ctor of ${f} with invalid number of parameters (${Mt.length}) - expected (${Object.keys(C.ma).toString()}) parameters instead!`);return Cr.apply(this,Mt)});var k=Object.create(b,{constructor:{value:p}});p.prototype=k;var j,C=new Ur(f,p,k,m,v,o,s,l);return C.ga&&((j=C.ga).ta??(j.ta=[]),C.ga.ta.push(C)),v=new Z(f,C,!0,!1,!1),j=new Z(f+"*",C,!1,!1,!1),b=new Z(f+" const*",C,!1,!0,!1),nr[t]={pointerType:j,Ea:b},sr(i,p),[v,j,b]})},v:(t,r,e,a,n,o,h)=>{var s=ht(e,a);r=w(r),r=Ot(r),o=$(n,o),W([],[t],u=>{function l(){U(`Cannot call ${f} due to unbound types`,s)}var f=`${(u=u[0]).name}.${r}`;r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var d=u.ba.constructor;return d[r]===void 0?(l.pa=e-1,d[r]=l):(Pt(d,r,f),d[r].ea[e-1]=l),W([],s,m=>{if(m=ft(f,[m[0],null].concat(m.slice(1)),null,o,h),d[r].ea===void 0?(m.pa=e-1,d[r]=m):d[r].ea[e-1]=m,u.ba.ta)for(const i of u.ba.ta)i.constructor.hasOwnProperty(r)||(i.constructor[r]=m);return[]}),[]})},g:(t,r,e,a,n,o)=>{var h=ht(r,e);n=$(a,n),W([],[t],s=>{var u=`constructor ${(s=s[0]).name}`;if(s.ba.ma===void 0&&(s.ba.ma=[]),s.ba.ma[r-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${r-1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return s.ba.ma[r-1]=()=>{U(`Cannot construct ${s.name} due to unbound types`,h)},W([],h,l=>(l.splice(1,0,null),s.ba.ma[r-1]=ft(u,l,null,n,o),[])),[]})},a:(t,r,e,a,n,o,h,s)=>{var u=ht(e,a);r=w(r),r=Ot(r),o=$(n,o),W([],[t],l=>{function f(){U(`Cannot call ${d} due to unbound types`,u)}var d=`${(l=l[0]).name}.${r}`;r.startsWith("@@")&&(r=Symbol[r.substring(2)]),s&&l.ba.Oa.push(r);var m=l.ba.la,i=m[r];return i===void 0||i.ea===void 0&&i.className!==l.name&&i.pa===e-2?(f.pa=e-2,f.className=l.name,m[r]=f):(Pt(m,r,d),m[r].ea[e-2]=f),W([],u,p=>(p=ft(d,p,l,o,h),m[r].ea===void 0?(p.pa=e-2,m[r]=p):m[r].ea[e-2]=p,[])),[]})},c:(t,r,e,a,n,o,h,s,u,l)=>{r=w(r),n=$(a,n),W([],[t],f=>{var d=`${(f=f[0]).name}.${r}`,m={get(){U(`Cannot access ${d} due to unbound types`,[e,h])},enumerable:!0,configurable:!0};return m.set=u?()=>U(`Cannot access ${d} due to unbound types`,[e,h]):()=>{throw new g(d+" is a read-only property")},Object.defineProperty(f.ba.la,r,m),W([],u?[e,h]:[e],i=>{var p=i[0],v={get(){var k=cr(this,f,d+" getter");return p.fromWireType(n(o,k))},enumerable:!0};if(u){u=$(s,u);var b=i[1];v.set=function(k){var j=cr(this,f,d+" setter"),C=[];u(l,j,b.toWireType(C,k)),at(C)}}return Object.defineProperty(f.ba.la,r,v),[]}),[]})},R:t=>O(t,lr),n:(t,r,e,a)=>{function n(){}r=w(r),n.values={},O(t,{name:r,constructor:n,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,h)=>h.value,argPackAdvance:8,readValueFromPointer:Vr(r,e,a),ha:null}),Ct(r,n)},e:(t,r,e)=>{var a=K(t,"enum");r=w(r),t=a.constructor,a=Object.create(a.constructor.prototype,{value:{value:e},constructor:{value:X(`${a.name}_${r}`,function(){})}}),t.values[e]=a,t[r]=a},D:(t,r,e)=>{O(t,{name:r=w(r),fromWireType:a=>a,toWireType:(a,n)=>n,argPackAdvance:8,readValueFromPointer:zr(r,e),ha:null})},U:(t,r,e,a,n,o)=>{var h=ht(r,e);t=w(t),t=Ot(t),n=$(a,n),Ct(t,function(){U(`Cannot call ${t} due to unbound types`,h)},r-1),W([],h,s=>(sr(t,ft(t,[s[0],null].concat(s.slice(1)),null,n,o),r-1),[]))},w:(t,r,e,a,n)=>{if(r=w(r),n===-1&&(n=4294967295),n=s=>s,a===0){var o=32-8*e;n=s=>s<<o>>>o}var h=r.includes("unsigned")?function(s,u){return u>>>0}:function(s,u){return u};O(t,{name:r,fromWireType:n,toWireType:h,argPackAdvance:8,readValueFromPointer:rr(r,e,a!==0),ha:null})},o:(t,r,e)=>{function a(o){return new n(I.buffer,y[o+4>>2],y[o>>2])}var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][r];O(t,{name:e=w(e),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{Ma:!0})},t:t=>{O(t,lr)},i:(t,r,e,a,n,o,h,s,u,l,f,d)=>{e=w(e),o=$(n,o),s=$(h,s),l=$(u,l),d=$(f,d),W([t],[r],m=>(m=m[0],[new Z(e,m.ba,!1,!1,!0,m,a,o,s,l,d)]))},F:(t,r)=>{var e=(r=w(r))==="std::string";O(t,{name:r,fromWireType:function(a){var n=y[a>>2],o=a+4;if(e)for(var h=o,s=0;s<=n;++s){var u=o+s;if(s==n||A[u]==0){if(h=h?pt(A,h,u-h):"",l===void 0)var l=h;else l+="\0",l+=h;h=u+1}}else{for(l=Array(n),s=0;s<n;++s)l[s]=String.fromCharCode(A[o+s]);l=l.join("")}return F(a),l},toWireType:function(a,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var o=typeof n=="string";if(!(o||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array))throw new g("Cannot pass non-string to std::string");var h=e&&o?hr(n):n.length,s=Ft(4+h+1),u=s+4;if(y[s>>2]=h,e&&o)fr(n,A,u,h+1);else if(o)for(o=0;o<h;++o){var l=n.charCodeAt(o);if(255<l)throw F(u),new g("String has UTF-16 code units that do not fit in 8 bits");A[u+o]=l}else for(o=0;o<h;++o)A[u+o]=n[o];return a!==null&&a.push(F,s),s},argPackAdvance:8,readValueFromPointer:q,ha(a){F(a)}})},C:(t,r,e)=>{if(e=w(e),r===2)var a=qr,n=Nr,o=Lr,h=s=>V[s>>1];else r===4&&(a=Gr,n=Jr,o=Xr,h=s=>y[s>>2]);O(t,{name:e,fromWireType:s=>{for(var u,l=y[s>>2],f=s+4,d=0;d<=l;++d){var m=s+4+d*r;d!=l&&h(m)!=0||(f=a(f,m-f),u===void 0?u=f:(u+="\0",u+=f),f=m+r)}return F(s),u},toWireType:(s,u)=>{if(typeof u!="string")throw new g(`Cannot pass non-string to C++ string type ${e}`);var l=o(u),f=Ft(4+l+r);return y[f>>2]=l/r,n(u,f+4,l+r),s!==null&&s.push(F,f),f},argPackAdvance:8,readValueFromPointer:q,ha(s){F(s)}})},s:(t,r,e,a,n,o)=>{et[t]={name:w(r),za:$(e,a),ja:$(n,o),Ca:[]}},j:(t,r,e,a,n,o,h,s,u,l)=>{et[t].Ca.push({Ga:w(r),La:e,Ja:$(a,n),Ka:o,Ra:h,Qa:$(s,u),Sa:l})},T:(t,r)=>{O(t,{Ya:!0,name:r=w(r),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})},l:(t,r,e)=>(t=P(t),r=K(r,"emval::as"),vr(r,e,t)),y:(t,r)=>(t=P(t),(r=K(r,"emval::as")).toWireType(null,t)),V:(t,r,e,a)=>(t=dt[t])(null,r=P(r),e,a),B:(t,r,e,a,n)=>(t=dt[t])(r=P(r),r[e=jt(e)],a,n),b:Et,H:t=>t===0?E(gr()):(t=jt(t),E(gr()[t])),A:(t,r,e)=>{var a=Qr(t,r),n=a.shift();t--;var o=Array(t);return r=`methodCaller<(${a.map(h=>h.name).join(", ")}) => ${n.name}>`,Kr(X(r,(h,s,u,l)=>{for(var f=0,d=0;d<t;++d)o[d]=a[d].readValueFromPointer(l+f),f+=a[d].argPackAdvance;return h=e===1?te(s,o):s.apply(h,o),vr(n,u,h)}))},q:(t,r)=>(t=P(t),r=P(r),E(t[r])),h:t=>{9<t&&(S[t+1]+=1)},I:(t,r)=>(t=P(t))instanceof(r=P(r)),u:t=>typeof(t=P(t))=="number",x:t=>typeof(t=P(t))=="string",G:()=>E([]),p:t=>E(jt(t)),k:t=>{var r=P(t);at(r),Et(t)},d:(t,r)=>(t=(t=K(t,"_emval_take_value")).readValueFromPointer(r),E(t)),z:t=>(t=P(t),E(typeof t)),N:t=>{var r=A.length;if(2147483648<(t>>>=0))return!1;for(var e=1;4>=e;e*=2){var a=r*(1+.2/e);a=Math.min(a,t+100663296);var n=Math;a=Math.max(t,a);t:{n=(n.min.call(n,2147483648,a+(65536-a%65536)%65536)-rt.buffer.byteLength+65535)/65536;try{rt.grow(n),Nt();var o=1;break t}catch{}o=void 0}if(o)return!0}return!1},K:(t,r)=>{var e=0;return mr().forEach((a,n)=>{var o=r+e;for(n=y[t+4*n>>2]=o,o=0;o<a.length;++o)I[n++]=a.charCodeAt(o);I[n]=0,e+=a.length+1}),0},L:(t,r)=>{var e=mr();y[t>>2]=e.length;var a=0;return e.forEach(n=>a+=n.length+1),y[r>>2]=a,0},Q:()=>52,P:function(){return 70},O:(t,r,e,a)=>{for(var n=0,o=0;o<e;o++){var h=y[r>>2],s=y[r+4>>2];r+=8;for(var u=0;u<s;u++){var l=A[h+u],f=re[t];l===0||l===10?((t===1?jr:_)(pt(f,0)),f.length=0):f.push(l)}n+=s}return y[a>>2]=n,0},J:(t,r,e,a)=>ae(t,r,e,a)},D=function(){var e;function t(a){var n;return D=a.exports,rt=D.W,Nt(),ir=D.$,Gt.unshift(D.X),R--,(n=c.monitorRunDependencies)==null||n.call(c,R),R==0&&z&&(a=z,z=null,a()),D}var r={a:ne};if(R++,(e=c.monitorRunDependencies)==null||e.call(c,R),c.instantiateWasm)try{return c.instantiateWasm(r,t)}catch(a){_(`Module.instantiateWasm callback failed with error: ${a}`),tt(a)}return wt||(wt=Zt("arcgis-knowledge-client-core-simd.wasm")?"arcgis-knowledge-client-core-simd.wasm":c.locateFile?c.locateFile("arcgis-knowledge-client-core-simd.wasm",M):M+"arcgis-knowledge-client-core-simd.wasm"),Mr(r,function(a){t(a.instance)}).catch(tt),{}}(),Tr=t=>(Tr=D.Y)(t),Ft=t=>(Ft=D.Z)(t),F=t=>(F=D._)(t);function Pr(){function t(){if(!mt&&(mt=!0,c.calledRun=!0,!qt)){if(bt(Gt),Ut(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),c.postRun)for(typeof c.postRun=="function"&&(c.postRun=[c.postRun]);c.postRun.length;){var r=c.postRun.shift();Jt.unshift(r)}bt(Jt)}}if(!(0<R)){if(c.preRun)for(typeof c.preRun=="function"&&(c.preRun=[c.preRun]);c.preRun.length;)Sr();bt(Lt),0<R||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),t()},1)):t())}}if(z=function t(){mt||Pr(),mt||(z=t)},c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();return Pr(),Er},It.exports=Rt),Or.exports;var It,yt,Rt}const se=ie(oe()),ce=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{ce as a};
