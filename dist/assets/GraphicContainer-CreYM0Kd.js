import{bB as s,bC as h,bD as t}from"./index-Bf1OihDl.js";import{i}from"./AGraphicContainer-KrBvbIKd.js";class l extends i{renderChildren(e){for(const r of this.children)r.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some(r=>r.hasData)){switch(e.drawPhase){case s.MAP:this._renderChildren(e,h.All);break;case s.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){t(e,!1,r=>{this._renderChildren(r,h.Highlight)})}}export{l as t};
