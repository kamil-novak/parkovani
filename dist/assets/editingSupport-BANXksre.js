import{aJ as $,aK as v,aL as E,aG as S,s as n,aM as R,aN as w,az as O,aO as k,aP as L,aQ as U,aR as T,aS as j,aT as G,aU as B,_ as V,aV as y,aW as z}from"./index-ZNyjz3YK.js";import{f as M}from"./infoFor3D-CxdEiWhp.js";function F(e){return(e==null?void 0:e.applyEdits)!=null}function W(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function ee(e){return e.every(W)}function D(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function te(e){return e.every(D)}async function ae(e,t,a,r={}){var o;let s;const d="gdbVersion"in e?e.gdbVersion:null,u=r.gdbVersion??d;if($(e)&&e.url)s=v(e.url,e.layerId,u,r.returnServiceEditsOption==="original-and-current-features");else{s=E(),s.promise.then(p=>{(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p)});const i={result:s.promise};e.emit("apply-edits",i)}try{const{results:i,edits:p}=await x(e,t,a,r),c=h=>h.filter(I=>!I.error).map(S),l={edits:p,addedFeatures:c(i.addFeatureResults),updatedFeatures:c(i.updateFeatureResults),deletedFeatures:c(i.deleteFeatureResults),addedAttachments:c(i.addAttachmentResults),updatedAttachments:c(i.updateAttachmentResults),deletedAttachments:c(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:r.globalIdToObjectId};return(o=i.editedFeatureResults)!=null&&o.length&&(l.editedFeatures=i.editedFeatureResults),s.resolve(l),i}catch(i){throw s.reject(i),i}}async function x(e,t,a,r){var u,o,i,p,c,l;if(await e.load(),!F(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!R(e))throw new n(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:d}=await C(e,a,r);return(u=s.addFeatures)!=null&&u.length||(o=s.updateFeatures)!=null&&o.length||(i=s.deleteFeatures)!=null&&i.length||(p=s.addAttachments)!=null&&p.length||(c=s.updateAttachments)!=null&&c.length||(l=s.deleteAttachments)!=null&&l.length?{edits:s,results:await t.applyEdits(s,d)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function C(e,t,a){const r=w(e),s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=e.infoFor3D!=null;if(Q(t,r,a,!!s,!!d,`${e.type}-layer`),!r.data.isVersioned&&(a==null?void 0:a.gdbVersion))throw new n(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const o={...a};if(o.rollbackOnFailureEnabled!=null||r.editing.supportsRollbackOnFailure||(o.rollbackOnFailureEnabled=!0),o.rollbackOnFailureEnabled||o.returnServiceEditsOption!=="original-and-current-features"||(o.rollbackOnFailureEnabled===!1&&O.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),o.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&o.returnServiceEditsInSourceSR)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(o.returnServiceEditsInSourceSR&&o.returnServiceEditsOption!=="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const i=K(t,r,`${e.type}-layer`),p=(a==null?void 0:a.globalIdUsed)||u,c=e.fields.filter(l=>l.type==="big-integer"||l.type==="oid"&&(l.length||0)>=8);if(p){const{globalIdField:l}=e;if(l==null)throw new n(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");i.addFeatures.forEach(h=>P(h,l))}return i.addFeatures.forEach(l=>q(l,e,p,c)),i.updateFeatures.forEach(l=>_(l,e,p,c)),i.deleteFeatures.forEach(l=>N(l,e,p,c)),i.addAttachments.forEach(l=>m(l,e)),i.updateAttachments.forEach(l=>m(l,e)),u&&await X(i,e),{edits:await Z(i),options:o}}function f(e,t,a,r){var s,d;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const u of r){const o=e.attributes[u.name];if(o!==void 0&&!G(u,o))throw new n(`${t.type}-layer:invalid-parameter`,`Big-integer field '${u.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new n(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((d=t.capabilities)==null?void 0:d.data.supportsM)===!1)throw new n(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function A(e,t){var a;if("geometry"in e&&((a=e.geometry)==null?void 0:a.type)==="mesh"&&t.infoFor3D!=null&&t.spatialReference!=null){const{geometry:r}=e,{spatialReference:s,vertexSpace:d}=r,u=t.spatialReference,o=d.type==="local",i=B(u),p=V(u,s),c=p||y(u)&&(y(s)||z(s));if(!(o&&i&&c||!o&&!i&&p))throw new n(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${d.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${u.wkid} is not supported.`)}}function q(e,t,a,r){f(e,t,a,r),A(e,t)}function N(e,t,a,r){f(e,t,a,r)}function _(e,t,a,r){f(e,t,a,r),A(e,t);const s=w(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new n(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){var s;const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new n(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((s=t.capabilities)!=null&&s.editing.supportsUploadWithItemId)&&r.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof r.data=="string"){const d=k(r.data);if(d&&!d.isBase64)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function P(e,t){const{attributes:a}=e;a[t]==null&&(a[t]=L())}async function Z(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map(o=>o.geometry),s=await U(r),d=t.length,u=a.length;return s.slice(0,d).forEach((o,i)=>t[i].geometry=o),s.slice(d,d+u).forEach((o,i)=>a[i].geometry=o),e}function J(e){return{addFeatures:Array.from((e==null?void 0:e.addFeatures)??[]),updateFeatures:Array.from((e==null?void 0:e.updateFeatures)??[]),deleteFeatures:e&&T.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function K(e,t,a){var s,d,u;const r=J(e);if((s=r.addFeatures)!=null&&s.length&&!t.operations.supportsAdd)throw new n(`${a}:unsupported-operation`,"Layer does not support adding features.");if((d=r.updateFeatures)!=null&&d.length&&!t.operations.supportsUpdate)throw new n(`${a}:unsupported-operation`,"Layer does not support updating features.");if((u=r.deleteFeatures)!=null&&u.length&&!t.operations.supportsDelete)throw new n(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map(g),r.updateFeatures=r.updateFeatures.map(g),r.addAssetFeatures=[],r}function Q(e,t,a,r,s,d){if(!e||!r&&!s)throw new n(`${d}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new n(`${d}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n(`${d}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&s)throw new n(`${d}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function g(e){const t=new j;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function X(e,t){const{infoFor3D:a}=t;if(a==null)return;if(!M(a))throw new n(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:r}=e;for(const s of e.addFeatures??[])b(s)&&r.push(s);for(const s of e.updateFeatures??[])b(s)&&r.push(s)}function b(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function re(e,t,a,r){if(!F(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}export{ae as applyEdits,Q as checkEditingCapabilities,te as isFeatureIdentifierArrayWithGlobalId,ee as isFeatureIdentifierArrayWithObjectId,D as isFeatureIdentifierWithGlobalId,W as isFeatureIdentifierWithObjectId,J as normalizeCollections,K as normalizeEdits,Z as normalizeGeometries,g as shallowCloneFeature,re as uploadAssets};
