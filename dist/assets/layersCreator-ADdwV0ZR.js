import{cc as M,S as I,aw as A}from"./index-Drt46XzA.js";import{L as w,e as b}from"./portalLayers-CSS-50lm.js";import{a as L}from"./fetchService-CshBGvgm.js";import"./associatedFeatureServiceUtils-BylKsAfU.js";function v(e){return u(e,"notes")}function h(e){return u(e,"markup")}function C(e){return u(e,"route")}function u(e,a){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===a}async function F(e,a,r){if(!a)return;const t=a.map(y=>x(y,r)),i=await Promise.allSettled(t);for(const y of i)y.status==="rejected"||y.value&&e.add(y.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},G={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={...g,LinkChartLayer:"LinkChartLayer"},D={...T},U={...G};async function x(e,a){return E(await R(e,a),e,a)}async function E(e,a,r){const t=new e;return t.read(a,r.context),t.type==="group"&&(a.layerType==="GroupLayer"?await N(t,a,r):S(a)?J(t,a,r.context):m(a)&&await P(t,a,r.context)),await M(t,r.context),t}async function R(e,a){var c,o;const r=a.context,t=K(r);let i=e.layerType||e.type;!i&&(a!=null&&a.defaultLayerType)&&(i=a.defaultLayerType);const y=t[i];let n=y?L[y]:L.UnknownLayer;if(S(e)){const s=r==null?void 0:r.portal;if(e.itemId){const l=new I({id:e.itemId,portal:s});await l.load();const p=(await w(l,new b)).className||"UnknownLayer";n=L[p]}}else i==="ArcGISFeatureLayer"?v(e)||h(e)?n=L.MapNotesLayer:C(e)?n=L.RouteLayer:m(e)&&(n=L.GroupLayer):(c=e.wmtsInfo)!=null&&c.url&&e.wmtsInfo.layerIdentifier?n=L.WMTSLayer:i==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(n=L.UnsupportedLayer);return n()}function m(e){var a,r;return e.layerType!=="ArcGISFeatureLayer"||S(e)?!1:(((r=(a=e.featureCollection)==null?void 0:a.layers)==null?void 0:r.length)??0)>1}function S(e){return e.type==="Feature Collection"}function K(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=k;break;case"ground":a=O;break;case"tables":a=V;break;default:a=W}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=U;break;case"tables":a=D;break;default:a=B}break;default:switch(e.layerContainerType){case"basemap":a=G;break;case"tables":a=T;break;default:a=g}}return a}async function N(e,a,r){const t=new A,i=F(t,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,e.type==="group")return e.layers.addMany(t),e}catch(y){e.destroy();for(const n of t)n.destroy();throw y}}catch(y){throw y}}function J(e,a,r){a.itemId&&(e.portalItem=new I({id:a.itemId,portal:r==null?void 0:r.portal}),e.when(()=>{var i,y;const t=n=>{var s,l;const c=n.layerId;f(n,e,a,c,r);const o=(l=(s=a.featureCollection)==null?void 0:s.layers)==null?void 0:l[c];o&&n.read(o,r)};(i=e.layers)==null||i.forEach(t),(y=e.tables)==null||y.forEach(t)}))}async function P(e,a,r){var o;const t=L.FeatureLayer,i=await t(),y=a.featureCollection,n=y==null?void 0:y.showLegend,c=(o=y==null?void 0:y.layers)==null?void 0:o.map((s,l)=>{const p=new i;p.read(s,r);const d={...r,ignoreDefaults:!0};return f(p,e,a,l,d),n!=null&&p.read({showLegend:n},d),p});e.layers.addMany(c??[])}function f(e,a,r,t,i){var y;e.read({id:`${a.id}-sublayer-${t}`,visibility:((y=r.visibleLayers)==null?void 0:y.includes(t))??!0},i)}export{N as populateGroupLayer,F as populateOperationalLayers};