// CSS
import "./AppWidget.css";

// Google Analytics
import ReactGA from "react-ga4";

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
  const appWidgetRef = useRef(false);

  // State
  const [sectionExpanded, setSectionExpanded] = useState("")

  // Theme
  const handleChangeTheme = (name) => {
    props.setActualTheme(name)
    props.checkVisibleLayers(props.view, name)
    props.setSelectedZoneOid(null)
    props.removeZoneFromMap()
   
    window.history.replaceState(null, null, `?theme=${name}`);

    // GA listener
    ReactGA.event({category: "click", action: `prepnuti_tematu--${name}`, label: `Přepnutí tématu - ${name}`})
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

  useEffect(() => { 
    !appWidgetRef.current && setSectionExpanded("")
    
    if(props.zonesLayers && !appWidgetRef.current) {
      setSectionExpanded(props.zonesLayers.some((layer) => layer.visible) ? "zones" : "themes")
      appWidgetRef.current = true
    }
  }, [props.zonesLayers])

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
            onClick={() => {
              sectionExpanded === "themes" ? setSectionExpanded(null) : setSectionExpanded("themes")
              // GA listener
              ReactGA.event({category: "click", action: "sekce--temata", label: "Rozbalení/Sbalení sekce - Témata"})
            }}
            >
            <h2>{props.config.appLabels.appWidgetThemesTitle}:</h2>
            <span>
            {
              sectionExpanded === "themes"
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
            </span>
          </div>
          <div className={`section-content flex-list-column ${sectionExpanded === "themes" ? "" : "closed"}`}>
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
            onClick={() => {
              sectionExpanded === "zones" ? setSectionExpanded(null) : setSectionExpanded("zones")
              // GA listener
              ReactGA.event({category: "click", action: "sekce--oblasti", label: "Rozbalení/Sbalení sekce - Oblasti parkování"})
            }}
          >
          <h2>{props.config.appLabels.appWidgetZonesTitle}:</h2>
          <span>
            {
              sectionExpanded === "zones"
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content flex-list-grid ${sectionExpanded === "zones" ? "" : "closed"}`} ref={zonesRef}>
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
                    onClick={(e) => {
                      props.showZone(e)
                      // GA listener
                      ReactGA.event({category: "click", action: `vyber_oblati_widget--${feature.attributes[props.config.appZones.zoneCodeAttr]}`, label: `Výběr oblasti z widgetu - ${feature.attributes[props.config.appZones.zoneCodeAttr]}`})
                    }}
                    style={props.selectedZone === feature.attributes[props.config.appZones.oidAttr] + "--" + feature.layer.id
                      ? {
                        color: props.config.appZones.activeZoneColor,
                        backgroundColor: `rgb(from ${props.config.appZones.activeZoneColor} r g b / 10%)`,
                        border: `1px solid ${props.config.appZones.activeZoneColor}`
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
            onClick={() => {
              sectionExpanded === "layers" ? setSectionExpanded(null) : setSectionExpanded("layers")
              // GA listener
              ReactGA.event({category: "click", action: "sekce--vrstvy", label: "Rozbalení/Sbalení sekce - Vrstvy"})
            }}
          >
          <h2>{props.config.appLabels.appWidgetLayersTitle}:</h2>
          <span>
            {
              sectionExpanded === "layers"
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${sectionExpanded === "layers" ? "" : "closed"}`}>
            <div ref={layerListRef}></div>
          </div>
        </div>
        {/* Legend */}
        <div 
          className="legend section"
        >
          <div 
            className="section-title" 
            onClick={() => {
              sectionExpanded === "legend" ? setSectionExpanded(null) : setSectionExpanded("legend")
              // GA listener
              ReactGA.event({category: "click", action: "sekce--legenda", label: "Rozbalení/Sbalení sekce - Legenda"})
            }}
          >
          <h2>{props.config.appLabels.appWidgetLegendTitle}:</h2>
          <span>
            {
              sectionExpanded === "legend"
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${sectionExpanded === "legend" ? "" : "closed"}`}>
            <div ref={legendRef}></div>
          </div>
        </div>
        {/* About */}
        <div 
          className="about section"
        >
          <div 
            className="section-title" 
            onClick={() => {
              sectionExpanded === "about" ? setSectionExpanded(null) : setSectionExpanded("about")
              // GA listener
              ReactGA.event({category: "click", action: "sekce--o_aplikaci", label: "Rozbalení/Sbalení sekce - O aplikaci"})            
            }}
          >
          <h2>{props.config.appLabels.appWidgetAboutTitle}:</h2>
          <span>
            {
              sectionExpanded === "about"
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${sectionExpanded === "about" ? "" : "closed"}`}>
            <div dangerouslySetInnerHTML={{ __html: props.config.appLabels.aboutWidget }} />
          </div>
        </div>
      </div>
  )
}

export default AppWidget;