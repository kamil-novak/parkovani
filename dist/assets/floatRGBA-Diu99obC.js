import{c0 as f}from"./index-lgQOPtME.js";function p(r,e,t=0){const o=f(r,0,a);for(let n=0;n<4;n++)e[t+n]=Math.floor(256*u(o*c[n]))}function l(r,e=0){let t=0;for(let o=0;o<4;o++)t+=r[e+o]*i[o];return t}const c=[1,256,65536,16777216],i=[1/256,1/65536,1/16777216,1/4294967296],a=l(new Uint8ClampedArray([255,255,255,255]));function u(r){return r-Math.floor(r)}export{p as o,l as r};
