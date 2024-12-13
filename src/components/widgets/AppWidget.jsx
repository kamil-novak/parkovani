// CSS
import "./AppWidget.css";

// ArcGIS Modules
import Graphic from "@arcgis/core/Graphic"

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
import iconPolygonActive from "./../../images/icon-polygon-active.svg"

function AppWidget(props) {
  // State
  const [zonesElementHeight, setZonesElementHeight] = useState(null)
  const [selectedZoneOid, setSelectedZoneOid]  = useState(null)

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

  // Show zone in the map
  const showZone = (e) => {
    // This zone
    const featureOid = e.target.getAttribute('data-key')

    // Remove selected zone
    props.view.graphics.removeAll()

    // Disable selected feature
    if (featureOid == selectedZoneOid) {
      setSelectedZoneOid(null)
      return
    }

    // Set selected feature to state
    setSelectedZoneOid(featureOid)

    // Select feature in the map
    props.zonesLayer.queryFeatures({
      where: `${props.config.appZones.oidAttr} = ${featureOid}`,
      returnGeometry: true,
      outFields: ["*"]
    })
    .then((results) => {
      const feature = results.features[0]
      const graphic = new Graphic ({
        attributes: feature.attributes,
        geometry: feature.geometry,
        symbol: { 
          type: "simple-fill",
          color: [202,21,23,0.6],
          outline: { 
            color: [202,21,23,1],  
            width: 4 
          } 
        }
      })

      props.view.graphics.add(graphic);
      props.view.goTo(graphic.geometry.extent.expand(2)) 
      console.log("Graphic added to view: ", props.view.graphics)
    })
    .catch((error) => {
      console.error("Query failed: ", error)
    })
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
        <div className="zones section flex-list">
          <div className="section-title">{props.config.appLabels.appWidgetZonesTitle}:</div>
          <CalciteFilter 
            scale="m" 
            placeholder='př. "centrum", "32"' 
            onCalciteFilterChange={filterZones}>
          </CalciteFilter>
          <div className="section-content" ref={zonesRef}>
            {props.zoneFeatures ?
              props.zoneFeatures.map((feature) => {
                return (
                  <div 
                    key={feature.attributes[props.config.appZones.oidAttr]}
                    data-key={feature.attributes[props.config.appZones.oidAttr]}
                    className={`flex-item zones-item ${selectedZoneOid == feature.attributes[props.config.appZones.oidAttr] ? 'active-zone' : ''}`}
                    onClick={showZone}>
                    <img src={selectedZoneOid == feature.attributes[props.config.appZones.oidAttr] ?iconPolygonActive : iconPolygon} alt="zóna" />
                    {feature.attributes[props.config.appZones.zoneNameAttr]}
                  </div>)
              }) : <div>Načítám oblasti...</div>
            } 
          </div>
        </div>
      </div>
  )
}

export default AppWidget;