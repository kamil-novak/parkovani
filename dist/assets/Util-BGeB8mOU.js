import"./index-BsCHgHEq.js";class l{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function h(e,t="Assertion"){if(!e){const u=new Error(t).stack;throw new l(`${t} at ${u}`)}}function m(e,t,u,f){let i,o=(u[0]-e[0])/t[0],s=(f[0]-e[0])/t[0];o>s&&(i=o,o=s,s=i);let n=(u[1]-e[1])/t[1],r=(f[1]-e[1])/t[1];if(n>r&&(i=n,n=r,r=i),o>r||n>s)return!1;n>o&&(o=n),r<s&&(s=r);let a=(u[2]-e[2])/t[2],c=(f[2]-e[2])/t[2];return a>c&&(i=a,a=c,c=i),!(o>c||a>s)&&(c<s&&(s=c),!(s<0))}export{m as i,h as s};