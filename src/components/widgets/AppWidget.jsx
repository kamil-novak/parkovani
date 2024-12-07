// CSS
import "./AppWidget.css";

// Modules
import React, { useEffect, useState } from "react"

// Calcite
import "@esri/calcite-components/dist/components/calcite-icon";
import { 
  CalciteIcon } from "@esri/calcite-components-react";

// Images
import iconTag from "./../../images/icon-tag.svg"
import iconTagActive from "./../../images/icon-tag-active.svg"
import iconPolygon from "./../../images/icon-polygon.svg"

function AppWidget(props) {
  // State

  const handleChangeTheme = (name) => {
    props.setActualTheme(name)
    props.checkVisibleLayers(props.view, name)
   
    window.history.replaceState(null, null, `?theme=${name}`);
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
          <div className="section-content">
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