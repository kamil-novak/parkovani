import{e as Ot}from"./deduplicate-Csqk3Wrh.js";import{H as B}from"./InterleavedLayout-Ds13fhhf.js";import{e as l}from"./VertexAttribute-BlT9lbVY.js";import{C as x}from"./enums-BlUEVwJR.js";import{t as St}from"./VertexElementDescriptor-BOD-G50G.js";import{bA as T,c9 as tt,jm as Et,gj as j,dx as rt,bw as K,jk as At,kL as Tt,bx as dt,dy as it,bz as ht,gK as Nt,aD as wt,dB as $t,jD as yt}from"./index-BkgwewGo.js";function et(t,e=0){const s=t.stride;return Array.from(t.fields.keys()).map(o=>{var a;const r=t.fields.get(o),c=r.constructor.ElementCount,d=Mt(r.constructor.ElementType),h=r.offset,g=((a=r.optional)==null?void 0:a.glNormalized)??!1;return new St(o,c,d,h,s,g,e)})}function Mt(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:x.UNSIGNED_BYTE,u16:x.UNSIGNED_SHORT,u32:x.UNSIGNED_INT,i8:x.BYTE,i16:x.SHORT,i32:x.INT,f32:x.FLOAT},Rt=B().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(),Pt=B().vec2u8(l.SIDENESS).freeze();et(Pt);const q=B().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze(),Y=B().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze();l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMALCOMPRESSED,l.NORMAL2COMPRESSED,l.SIDENESS;let xt=class{constructor(){this.position0=T(),this.position1=T(),this.faceNormal0=T(),this.faceNormal1=T(),this.componentIndex=0,this.cosAngle=0}};const W=-1;function Dt(t,e,s){const o=t.vertices.position,r=t.vertices.componentIndex,c=O.position0,d=O.position1,h=O.faceNormal0,g=O.faceNormal1,{edges:a,normals:p}=Ct(t),m=a.length/4,E=e.allocate(m);let P=0;const F=m,w=s==null?void 0:s.allocate(F);let z=0,n=0,i=0;_.length=0;for(let N=0;N<m;++N){const y=4*N;o.getVec(a.data[y],c),o.getVec(a.data[y+1],d);const V=_.pushNew();V.index=4*N,V.length=Et(c,d)}_.sort((N,y)=>y.length-N.length);const f=new Array,u=new Array;_.forAll(({length:N,index:y})=>{const V=a.data[y],It=a.data[y+1],nt=a.data[y+2],st=a.data[y+3],ot=st===W;if(o.getVec(V,c),o.getVec(It,d),ot){const A=3*nt;j(h,p.data[A],p.data[A+1],p.data[A+2]),rt(g,h),O.componentIndex=r.get(V),O.cosAngle=K(h,g)}else{let A=3*nt;if(j(h,p.data[A],p.data[A+1],p.data[A+2]),A=3*st,j(g,p.data[A],p.data[A+1],p.data[A+2]),O.componentIndex=r.get(V),O.cosAngle=K(h,g),bt(O,zt))return;O.cosAngle<-.9999&&rt(g,h)}n+=N,i++,ot||Vt(O,Ut)?(e.write(E,P++,O),f.push(N)):Lt(O,gt)&&(w&&s&&s.write(w,z++,O),u.push(N))});const S=new Float32Array(f.reverse()),$=new Float32Array(u.reverse()),M=w&&s?{instancesData:w.slice(0,z),lodInfo:{lengths:$}}:void 0;return{regular:{instancesData:E.slice(0,P),lodInfo:{lengths:S}},silhouette:M,averageEdgeLength:n/i}}function Vt(t,e){return t.cosAngle<e}function bt(t,e){return t.cosAngle>e}function Lt(t,e){const s=At(t.cosAngle);return Tt(at,t.position1,t.position0),s*(K(dt(Ft,t.faceNormal0,t.faceNormal1),at)>0?-1:1)>e}function Ct(t){const e=t.faces.length/3,s=t.faces,o=t.neighbors,r=t.vertices.position;I.length=H.length=0;for(let c=0;c<e;c++){const d=3*c,h=o[d],g=o[d+1],a=o[d+2],p=s[d],m=s[d+1],E=s[d+2];r.getVec(p,D),r.getVec(m,U),r.getVec(E,X),it(U,U,D),it(X,X,D),dt(D,U,X),ht(D,D),H.pushArray(D),(h===W||p<m)&&(I.push(p),I.push(m),I.push(c),I.push(h)),(g===W||m<E)&&(I.push(m),I.push(E),I.push(c),I.push(g)),(a===W||E<p)&&(I.push(E),I.push(p),I.push(c),I.push(a))}return{edges:I,normals:H}}class Bt{constructor(){this.index=0,this.length=0}}const _=new tt({allocator:t=>t||new Bt,deallocator:null}),I=new tt({deallocator:null}),H=new tt({deallocator:null}),O=new xt,Ft=T(),at=T(),D=T(),U=T(),X=T(),gt=Nt(4),zt=Math.cos(gt),_t=Nt(35),Ut=Math.cos(_t);function ct(t,e,s){const o=e/3,r=new Uint32Array(s+1),c=new Uint32Array(s+1),d=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<o;n++){const i=t[3*n],f=t[3*n+1],u=t[3*n+2];d(i,f),d(f,u),d(u,i)}let h=0,g=0;for(let n=0;n<s;n++){const i=r[n+1],f=c[n+1];r[n+1]=h,c[n+1]=g,h+=i,g+=f}const a=new Uint32Array(6*o),p=r[s],m=(n,i,f)=>{if(n<i){const u=r[n+1]++;a[2*u]=i,a[2*u+1]=f}else{const u=c[i+1]++;a[2*p+2*u]=n,a[2*p+2*u+1]=f}};for(let n=0;n<o;n++){const i=t[3*n],f=t[3*n+1],u=t[3*n+2];m(i,f,n),m(f,u,n),m(u,i,n)}const E=(n,i)=>{const f=2*n,u=i-n;for(let S=1;S<u;S++){const $=a[f+2*S],M=a[f+2*S+1];let N=S-1;for(;N>=0&&a[f+2*N]>$;N--)a[f+2*N+2]=a[f+2*N],a[f+2*N+3]=a[f+2*N+1];a[f+2*N+2]=$,a[f+2*N+3]=M}};for(let n=0;n<s;n++)E(r[n],r[n+1]),E(p+c[n],p+c[n+1]);const P=new Int32Array(3*o),F=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,w=(n,i)=>{const f=F(n,i);P[3*i+f]=-1},z=(n,i,f,u)=>{const S=F(n,i);P[3*i+S]=u;const $=F(f,u);P[3*u+$]=i};for(let n=0;n<s;n++){let i=r[n];const f=r[n+1];let u=c[n];const S=c[n+1];for(;i<f&&u<S;){const $=a[2*i],M=a[2*p+2*u];$===M?(z(n,a[2*i+1],M,a[2*p+2*u+1]),i++,u++):$<M?(w(n,a[2*i+1]),i++):(w(M,a[2*p+2*u+1]),u++)}for(;i<f;)w(n,a[2*i+1]),i++;for(;u<S;)w(a[2*p+2*u],a[2*p+2*u+1]),u++}return P}function J(t,e,s,o,r,c=2){const d=1/(Math.abs(s)+Math.abs(o)+Math.abs(r)),h=s*d,g=o*d,a=r<=0?(h>=0?1:-1)*(1-Math.abs(g)):h,p=r<=0?(g>=0?1:-1)*(1-Math.abs(h)):g,m=e*c;t[m]=lt(a),t[m+1]=lt(p)}function lt(t){return wt(Math.round(32767*t),-32767,32767)}const G=.7;let mt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?kt:Xt}write(e,s,o){k.seed=this._edgeHashFunction(o);const r=k.getIntRange(0,255),c=k.getIntRange(0,this.settings.variants-1),d=k.getFloat(),h=255*(.5*Wt(-(1-Math.min(d/G,1))+Math.max(0,d-G)/(1-G),1.2)+.5);e.position0.setVec(s,o.position0),e.position1.setVec(s,o.position1),e.componentIndex.set(s,o.componentIndex),e.variantOffset.set(s,r),e.variantStroke.set(s,c),e.variantExtension.set(s,h)}};const v=new Float32Array(6),R=new Uint32Array(v.buffer),C=new Uint32Array(1);function Xt(t){return v[0]=t.position0[0],v[1]=t.position0[1],v[2]=t.position0[2],v[3]=t.position1[0],v[4]=t.position1[1],v[5]=t.position1[2],C[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],C[0]}function kt(t){const e=v;e[0]=b(t.position0[0]),e[1]=b(t.position0[1]),e[2]=b(t.position0[2]),e[3]=b(t.position1[0]),e[4]=b(t.position1[1]),e[5]=b(t.position1[2]),C[0]=5381;for(let s=0;s<R.length;s++)C[0]=31*C[0]+R[s];return C[0]}const ut=1e4;function b(t){return Math.round(t*ut)/ut}function Wt(t,e){return Math.abs(t)**e*Math.sign(t)}class Q{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return q.createBuffer(e)}write(e,s,o){this._commonWriter.write(e,s,o),$t(L,o.faceNormal0,o.faceNormal1),ht(L,L);const{typedBuffer:r,typedBufferStride:c}=e.normalCompressed;J(r,s,L[0],L[1],L[2],c)}}Q.Layout=q,Q.glLayout=et(q,1);class Z{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return Y.createBuffer(e)}write(e,s,o){this._commonWriter.write(e,s,o);{const{typedBuffer:r,typedBufferStride:c}=e.normalCompressed;J(r,s,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],c)}{const{typedBuffer:r,typedBufferStride:c}=e.normal2Compressed;J(r,s,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],c)}}}Z.Layout=Y,Z.glLayout=et(Y,1);const L=T(),k=new yt;function ee(t){const e=jt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ft.updateSettings(t.writerSettings),pt.updateSettings(t.writerSettings),Dt(e,ft,pt)}function jt(t,e,s,o){if(e){const d=ct(s,o,t.count);return new Ht(s,o,d,t)}const r=Ot(t.buffer,t.stride/4,{originalIndices:s,originalIndicesLength:o}),c=ct(r.indices,o,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:Rt.createView(r.buffer)}}class Ht{constructor(e,s,o,r){this.faces=e,this.facesLength=s,this.neighbors=o,this.vertices=r}}const ft=new Q,pt=new Z,ne=B().vec3f(l.POSITION0).vec3f(l.POSITION1),se=B().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{Rt as E,ne as d,ee as f,se as m,Dt as p,jt as u};