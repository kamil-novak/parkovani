import{s as n,al as c}from"./index-i1xHX9d5.js";async function u(a,e,t){let r;try{r=await createImageBitmap(a)}catch(o){throw new n("request:server",`Unable to load ${e}`,{url:e,error:o})}return c(t),r}async function w(a,e,t,r,o){let l;try{l=await createImageBitmap(a)}catch(i){throw new n("request:server",`Unable to load tile ${e}/${t}/${r}`,{error:i,level:e,row:t,col:r})}return c(o),l}export{w as o,u as t};