import{bt as t}from"./index-dSHJTskp.js";import{t as p}from"./VertexElementDescriptor-BOD-G50G.js";function a(r,o=0){const f=r.stride;return Array.from(r.fields.keys()).map(e=>{var i;const n=r.fields.get(e),u=n.constructor.ElementCount,s=N(n.constructor.ElementType),c=n.offset,m=((i=n.optional)==null?void 0:i.glNormalized)??!1;return new p(e,u,s,c,f,m,o)})}function N(r){const o=T[r];if(o)return o;throw new Error("BufferType not supported in WebGL")}const T={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{a as t};