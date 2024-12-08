// CSS
import "./AppWidget.css";

// Modules
import React, { useEffect, useState, useRef } from "react"
import deburr from 'lodash/deburr'

// Calcite
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-filter";
import { 
  CalciteIcon, CalciteFilter } from "@esri/calcite-components-react";

// Images
import iconTag from "./../../images/icon-tag.svg"
import iconTagActive from "./../../images/icon-tag-active.svg"
import iconPolygon from "./../../images/icon-polygon.svg"

function AppWidget(props) {
  // State
  const [zonesElementHeight, setZonesElementHeight] = useState(null)

  // Ref
  const zonesRef = useRef(null)

  // Theme
  const handleChangeTheme = (name) => {
    props.setActualTheme(name)
    props.checkVisibleLayers(props.view, name)
   
    window.history.replaceState(null, null, `?theme=${name}`);
  }

  // Filter zones
  const filterZones = (e) => {
    // Default height
    if (!zonesElementHeight) {
      setZonesElementHeight(zonesRef.current.offsetHeight)
      zonesRef.current.style.height = zonesRef.current.offsetHeight + "px"
    }
    
    // Query
    const filterQuery = deburr(e.target.value.toLowerCase().replace(/\s/g,''))

    // Search
    for (const zone of zonesRef.current.children) {
      const zoneText = deburr(zone.innerText.toLowerCase().replace(/\s/g,''))
      if (!zoneText.includes(filterQuery)) {
        zone.style.display = "none"
      }
      else {
        zone.style.display = "flex"
      }
    }
  }

  useEffect(() => {

  }, []);

  return (
      <div className={`app-widget ${props.opened ? "opened" : "closed"}`}>
        {/* Themes */}
        <div className="header section">
          <div>{props.config.appLabels.appWidgetTitle}</div>
          <CalciteIcon icon="x" scale="m" text-label="Zavřít" onClick={props.toggleAppWidget}></CalciteIcon>
        </div>
        <div className="themes section flex-list">
          <div className="section-title">{props.config.appLabels.appWidgetThemesTitle}:</div>
          <div className="section-content">
            { 
              props.config && props.config.appThemes.map((theme) => { 
                return(
                  <div 
                    key={theme.name}
                    className={`flex-item theme-item ${theme.name === props.actualThemeInfo?.name ? 'active' : ''}`}
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
        <div className="zones section flex-list">
          <div className="section-title">{props.config.appLabels.appWidgetZonesTitle}:</div>
          <CalciteFilter 
            scale="s" 
            placeholder='př. "centrum" nebo "32"' 
            onCalciteFilterChange={filterZones}>
          </CalciteFilter>
          <div className="section-content" ref={zonesRef}>
            {props.zoneFeatures ?
              props.zoneFeatures.map((feature) => {
                return (
                  <div 
                    key={`${feature.attributes[props.config.appZones.codeAttr]}-${Math.floor(Math.random() * 1000)}`}
                    className="flex-item zones-item">
                    <img src={iconPolygon} alt="téma" />
                    {feature.attributes[props.config.appZones.zoneNameAttr]}
                  </div>)
              }) : <div>Načítám oblasti...</div>
            } 
          </div>
        </div>
      </div>
  );
}

export default AppWidget;