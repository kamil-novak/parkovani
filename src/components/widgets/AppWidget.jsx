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
  // Ref
  const zones2Ref = useRef(null)
  const zonesRef = useRef(null)
  const layerListRef = useRef(null)

  // State
  const [selectedZoneOid, setSelectedZoneOid]  = useState(null)
  const [themesExpanded, setThemesExpanded] = useState(true)
  const [zonesExpanded, setZonesExpanded] = useState(true)
  const [zones2Expanded, setZones2Expanded] = useState(false)
  const [layersExpanded, setLayersExpanded] = useState(false)

  // Auxiliary functions
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Theme
  const handleChangeTheme = (name) => {
    props.setActualTheme(name)
    props.checkVisibleLayers(props.view, name)
   
    window.history.replaceState(null, null, `?theme=${name}`);
  }

  // Filter zones
  const filterZones = (e) => {
    // Query
    const filterQuery = deburr(e.target.value.toLowerCase().replace(/\s/g,''))

    // Search
    for (const zone of zones2Ref.current.children) {
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
          color: {
            r: hexToRgb(props.config.appZones.activeZoneColor).r,
            g: hexToRgb(props.config.appZones.activeZoneColor).g,
            b: hexToRgb(props.config.appZones.activeZoneColor).b,
            a: 0.4
          },
          outline: { 
            color: {
              r: hexToRgb(props.config.appZones.activeZoneColor).r,
              g: hexToRgb(props.config.appZones.activeZoneColor).g,
              b: hexToRgb(props.config.appZones.activeZoneColor).b,
              a: 1
            },  
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
    if (props.layerList?.id) {
      props.layerList.container = layerListRef.current
    }
  }, [props.layerListCreated]);

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
        {/* Zones - alt. 1 */}
        {props.zonesLayer && props.zonesLayer.visible && <div className="zones section">
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
            {props.zoneFeatures ?
              props.zoneFeatures.map((feature) => {
                return (
                  <div 
                    key={feature.attributes[props.config.appZones.oidAttr]}
                    data-key={feature.attributes[props.config.appZones.oidAttr]}
                    className="flex-item zones-item"
                    title={feature.attributes[props.config.appZones.zoneNameAttr].slice(2)}
                    onClick={showZone}
                    style={selectedZoneOid == feature.attributes[props.config.appZones.oidAttr] 
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
        {/* Zones - alt. 2 */}
        {props.zonesLayer && props.zonesLayer.visible && <div className="zones2 section">
          <div 
            className="section-title" 
            onClick={() => setZones2Expanded(!zones2Expanded)}
          >
          <h2>{props.config.appLabels.appWidgetZonesTitle}:</h2>
          <span>
            {
              zones2Expanded
              ? <CalciteIcon icon="chevron-up" scale="s" text-label="Sbalit"></CalciteIcon>
              : <CalciteIcon icon="chevron-down" scale="s" text-label="Rozbalit"></CalciteIcon>
            }
          </span>
          </div>
          <div className={`section-content ${zones2Expanded ? "" : "closed"}`}>
            <CalciteFilter 
              scale="m" 
              placeholder='př. "centrum", "32"' 
              onCalciteFilterChange={filterZones}>
            </CalciteFilter>
            <div className="flex-list-column" ref={zones2Ref}>
              {props.zoneFeatures ?
                props.zoneFeatures.map((feature) => {
                  return (
                    <div 
                      key={feature.attributes[props.config.appZones.oidAttr]}
                      data-key={feature.attributes[props.config.appZones.oidAttr]}
                      className="flex-item zones-item"
                      style={selectedZoneOid == feature.attributes[props.config.appZones.oidAttr] 
                        ? {
                          color: props.config.appZones.activeZoneColor,
                          backgroundColor: `rgb(from ${props.config.appZones.activeZoneColor} r g b / 10%)`,
                          border: `1px solid ${props.config.appZones.activeZoneColor}`
                        } 
                        : {}}
                      onClick={showZone}>
                      <img src={selectedZoneOid == feature.attributes[props.config.appZones.oidAttr] ?iconPolygonActive : iconPolygon} alt="zóna" />
                      {feature.attributes[props.config.appZones.zoneCodeAttr]} {feature.attributes[props.config.appZones.zoneNameAttr].slice(2)} {/* Remove slice after cleaning values in data */}
                    </div>)
                }) : <div>Načítám oblasti...</div>
              } 
            </div>
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
      </div>
  )
}

export default AppWidget;