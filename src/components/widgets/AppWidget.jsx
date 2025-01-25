// CSS
import "./AppWidget.css";

// ArcGIS Modules

// Modules
import React, { useEffect, useState, useRef } from "react"

// Calcite
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-filter";
import { 
  CalciteIcon } from "@esri/calcite-components-react";

// Images
import iconTag from "./../../images/icon-tag.svg"
import iconTagActive from "./../../images/icon-tag-active.svg"

function AppWidget(props) {
  // Ref
  const zonesRef = useRef(null)
  const layerListRef = useRef(null)
  const legendRef = useRef(null)

  // State
  const [themesExpanded, setThemesExpanded] = useState(true)
  const [zonesExpanded, setZonesExpanded] = useState(true)
  const [layersExpanded, setLayersExpanded] = useState(false)
  const [legendExpanded, setLegendExpanded] = useState(false)
  const [aboutExpanded, setAboutExpanded] = useState(false)

  // Theme
  const handleChangeTheme = (name) => {
    props.setActualTheme(name)
    props.checkVisibleLayers(props.view, name)
    props.setSelectedZoneOid(null)
    props.removeZoneFromMap()
   
    window.history.replaceState(null, null, `?theme=${name}`);
  }

  useEffect(() => {
    if (props.layerList?.id) {
      props.layerList.container = layerListRef.current
    }
  }, [props.layerListCreated]);

  useEffect(() => {
    if (props.legend?.id) {
      props.legend.container = legendRef.current
    }
  }, [props.legendCreated]);

  return (
      <div className={`app-widget ${props.opened ? "opened" : "closed"}`}>
        {/* Header */}
        <div className="header">
          <h1>{props.config.appLabels.appWidgetTitle}</h1>
          <CalciteIcon icon="x" scale="s" text-label="Zavřít" onClick={props.toggleAppWidget}></CalciteIcon>
        </div>
        {/* Themes */}
        <div className="themes section">
          <div 
            className="section-title" 
            onClick={() => {setThemesExpanded(!themesExpanded)}}
            >
            <h2>{props.config.appLabels.appWidgetThemesTitle}:</h2>
            <span>
            {
              themesExpanded
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
            </span>
          </div>
          <div className={`section-content flex-list-column ${themesExpanded ? "" : "closed"}`}>
            { 
              props.config && props.config.appThemes.map((theme) => { 
                return(
                  <div 
                    key={theme.name}
                    className={`flex-item theme-item ${theme.name === props.actualThemeInfo?.name ? 'active-theme' : ''}`}
                    onClick={() => {handleChangeTheme(theme.name)}}
                  >
                    <img src={theme.name === props.actualThemeInfo?.name ? iconTagActive : iconTag} alt="téma" />
                    {theme.label}
                  </div> 
                )
              })
            }
          </div>
        </div>
        {/* Zones */}
        {props.zonesLayers && props.zonesLayers.some((layer) => layer.visible) && <div className="zones section">
          <div 
            className="section-title" 
            onClick={() => setZonesExpanded(!zonesExpanded)}
          >
          <h2>{props.config.appLabels.appWidgetZonesTitle}:</h2>
          <span>
            {
              zonesExpanded
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content flex-list-grid ${zonesExpanded ? "" : "closed"}`} ref={zonesRef}>
            {props.zoneFeatures && props.zonesLayerViews ?
              props.zoneFeatures.sort((a, b) => a.attributes[props.config.appZones.zoneCodeAttr] - b.attributes[props.config.appZones.zoneCodeAttr]).map((feature) => {
                return (
                  props.zonesLayers.filter((layer) => layer.id === feature.layer.id)[0].visible &&
                  <div 
                    key={feature.attributes[props.config.appZones.oidAttr] + "-" + feature.layer.id}
                    data-oid={feature.attributes[props.config.appZones.oidAttr]}
                    data-layer={feature.layer.id}
                    className={`flex-item zones-item ${feature.attributes[props.config.appZones.zoneDraftAttr] === props.config.appZones.zoneDraftValue ? "zones-draft" : ""}`}
                    title={feature.attributes[props.config.appZones.zoneNameAttr]}
                    onClick={props.showZone}
                    style={props.selectedZone === feature.attributes[props.config.appZones.oidAttr] + "--" + feature.layer.id
                      ? {
                        color: props.config.appZones.activeZoneColor,
                        backgroundColor: `rgb(from ${props.config.appZones.activeZoneColor} r g b / 10%)`,
                        border: `1px ${feature.attributes[props.config.appZones.zoneDraftAttr] === props.config.appZones.zoneDraftValue ? "dashed" : "solid"} ${props.config.appZones.activeZoneColor}`
                      } 
                      : {}}
                    >
                    {feature.attributes[props.config.appZones.zoneCodeAttr]}
                  </div>)
              }) : <div>Načítám oblasti...</div>
            } 
          </div>
        </div>}
        {/* Layer List*/}
        <div 
          className="layers section"
          style={!props.actualThemeInfo || (props.actualThemeInfo && props.actualThemeInfo.showLayerList) ? {} : {display: "none"}}  
        >
          <div 
            className="section-title" 
            onClick={() => setLayersExpanded(!layersExpanded)}
          >
          <h2>{props.config.appLabels.appWidgetLayersTitle}:</h2>
          <span>
            {
              layersExpanded
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${layersExpanded ? "" : "closed"}`}>
            <div ref={layerListRef}></div>
          </div>
        </div>
        {/* Legend */}
        <div 
          className="legend section"
        >
          <div 
            className="section-title" 
            onClick={() => setLegendExpanded(!legendExpanded)}
          >
          <h2>{props.config.appLabels.appWidgetLegendTitle}:</h2>
          <span>
            {
              legendExpanded
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${legendExpanded ? "" : "closed"}`}>
            <div ref={legendRef}></div>
          </div>
        </div>
        {/* About */}
        <div 
          className="about section"
        >
          <div 
            className="section-title" 
            onClick={() => setAboutExpanded(!aboutExpanded)}
          >
          <h2>{props.config.appLabels.appWidgetAboutTitle}:</h2>
          <span>
            {
              aboutExpanded
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${aboutExpanded ? "" : "closed"}`}>
            <div dangerouslySetInnerHTML={{ __html: props.config.appLabels.aboutWidget }} />
          </div>
        </div>
      </div>
  )
}

export default AppWidget;