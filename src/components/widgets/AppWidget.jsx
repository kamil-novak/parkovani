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

function AppWidget(props) {
  // State

  const handleChangeTheme = (name) => {
    props.setActualTheme(name)
    props.setVisibleLayers(props.view, name)
   
    window.history.replaceState(null, null, `?theme=${name}`);
  }

  useEffect(() => {

  }, []);

  return (
      <div className={`app-widget ${props.opened ? "opened" : "closed"}`}>
        {/* Themes */}
        <div className="header section">
          <div>Témata a oblasti parkování</div>
          <CalciteIcon icon="x" scale="m" text-label="Zavřít" onClick={props.toggleAppWidget}></CalciteIcon>
        </div>
        <div className="themes section">
          <div className="section-title">Zvolte téma mapy:</div>
          <div className="section-content">
            { 
              props.config && props.config.appThemes.map((theme) => { 
                return(
                  <div 
                    key={theme.name}
                    className={`theme-item ${theme.name === props.actualThemeInfo.name ? 'active' : ''}`}
                    onClick={() => {handleChangeTheme(theme.name)}}
                  >
                    <img src={theme.name === props.actualThemeInfo.name ? iconTagActive : iconTag} alt="téma" />
                    {theme.label}
                  </div> 
                )
              })
            }
          </div>
        </div>
        {/* Zones */}
        <div className="zones section">
          <div className="section-title">Vyberte oblast, která se zvýrazní v mapě:</div>
          <div className="section-content"></div>
        </div>
      </div>
  );
}

export default AppWidget;