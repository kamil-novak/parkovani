import{bp as r,bq as s}from"./index-BAPvvJTk.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const n=s;function i(e){return"opened"in e?e.opened:e.open}function o(e){n(()=>{e.transitionEl&&r(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{o};
