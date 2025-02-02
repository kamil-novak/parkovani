import{p as g,m as E,H as v,b as x,g as b,t as I,gQ as M,r as B,v as A,x as C,bh as w,e as s,gR as y}from"./index-Bf1OihDl.js";import{d as O}from"./action-DO68eeXT.js";import{d as D}from"./loader-D-811Ziy.js";import{d as P}from"./popover-CeIr-5RF.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function d(l,e){return(l+e)%e}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const r={menu:"menu",defaultTrigger:"default-trigger"},u={tooltip:"tooltip",trigger:"trigger"},S={menu:"ellipsis"},k="data-active",H=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}",T=H,L=["ArrowUp","ArrowDown","End","Home"],R=g(class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=x(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${b()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:n,open:t,label:o}=this,i=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==i&&(this.disconnectMenuButtonEl(),this.menuButtonEl=i,this.setTooltipReferenceElement(),i&&(i.active=t,i.setAttribute("aria-controls",n),i.setAttribute("aria-expanded",I(t)),i.setAttribute("aria-haspopup","true"),i.id||(i.id=e),i.label||(i.label=o),i.text||(i.text=o),i.addEventListener("click",this.menuButtonClick),i.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const n=e.target.assignedElements({flatten:!0}).filter(t=>t==null?void 0:t.matches("calcite-action"));this.slottedMenuButtonEl=n[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{const n=e.target.assignedElements({flatten:!0}).filter(t=>t==null?void 0:t.matches("calcite-tooltip"));this.tooltipEl=n[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:n,menuButtonEl:t,open:o}=this;e&&(e.referenceElement=!n&&!o?t:null)},this.updateAction=(e,n)=>{const{guid:t,activeMenuItemIndex:o}=this,i=`${t}-action-${n}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=i),e.toggleAttribute(k,n===o)},this.updateActions=e=>{e==null||e.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const n=e.target.assignedElements({flatten:!0}).reduce((t,o)=>o!=null&&o.matches("calcite-action")?(t.push(o),t):o!=null&&o.matches("calcite-action-group")?t.concat(Array.from(o.querySelectorAll("calcite-action"))):t,[]);this.actionElements=n.filter(t=>!t.disabled&&!t.hidden)},this.menuButtonKeyDown=e=>{const{key:n}=e,{actionElements:t,activeMenuItemIndex:o,open:i}=this;if(t.length){if(M(n)){if(e.preventDefault(),!i){this.toggleOpen();return}const a=t[o];a?a.click():this.toggleOpen(!1)}if(n==="Tab"){this.open=!1;return}if(n==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,n,t)}},this.handleActionNavigation=(e,n,t)=>{if(!this.isValidKey(n,L))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(n==="Home"||n==="ArrowDown")&&(this.activeMenuItemIndex=0),(n==="End"||n==="ArrowUp")&&(this.activeMenuItemIndex=t.length-1);return}n==="Home"&&(this.activeMenuItemIndex=0),n==="End"&&(this.activeMenuItemIndex=t.length-1);const o=this.activeMenuItemIndex;n==="ArrowUp"&&(this.activeMenuItemIndex=d(Math.max(o-1,-1),t.length)),n==="ArrowDown"&&(this.activeMenuItemIndex=d(o+1,t.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=e},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){B(this)}componentDidLoad(){A(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await C(this),w(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:n,scale:t,expanded:o}=this;return s("slot",{name:u.trigger,onSlotchange:this.setMenuButtonEl},s("calcite-action",{appearance:e,class:r.defaultTrigger,icon:S.menu,ref:this.setDefaultMenuButtonEl,scale:t,text:n,textEnabled:o}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:n,open:t,menuId:o,menuButtonEl:i,label:a,placement:h,overlayPositioning:p,flipPlacements:m}=this,c=e[n],f=(c==null?void 0:c.id)||null;return s("calcite-popover",{autoClose:!0,flipPlacements:m,focusTrapDisabled:!0,label:a,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:t,overlayPositioning:p,placement:h,pointerDisabled:!0,referenceElement:i},s("div",{"aria-activedescendant":f,"aria-labelledby":i==null?void 0:i.id,class:r.menu,id:o,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},s("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return s(y,{key:"d13aa4f3d43fb5651c0487ccfa456813f69955d2"},this.renderMenuButton(),this.renderMenuItems(),s("slot",{key:"b63d187516c766db6a1b1db3df34050fdec9e6ce",name:u.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,n){return!!n.find(t=>t===e)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return T}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function $(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,R);break;case"calcite-action":customElements.get(e)||O();break;case"calcite-icon":customElements.get(e)||E();break;case"calcite-loader":customElements.get(e)||D();break;case"calcite-popover":customElements.get(e)||P();break}})}$();export{R as A,u as S,$ as d};
