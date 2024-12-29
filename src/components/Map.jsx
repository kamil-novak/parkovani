import React, { useEffect, useRef, useState } from "react"

import MapView from "@arcgis/core/views/MapView"
import Popup from "@arcgis/core/widgets/Popup"
import WebMap from "@arcgis/core/WebMap"
import Home from "@arcgis/core/widgets/Home"
import Search from "@arcgis/core/widgets/Search"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Locate from "@arcgis/core/widgets/Locate"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle"
import Basemap from "@arcgis/core/Basemap"
import Expand from "@arcgis/core/widgets/Expand"
import Legend from "@arcgis/core/widgets/Legend"
import LayerList from "@arcgis/core/widgets/LayerList.js"
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js"

import AppWidget from "./widgets/AppWidget"

// CSS
import "./Map.css";

function Map(props) {

  // State
  const [view, setView] = useState(null)
  const [legendExpand, setLegendExpand] = useState(null)
  const [layerListExpand, setLayerListExpand] = useState(null)
  const [layerListWidget, setLayerListWidget] = useState(null)
  const [layerListCreated, setLayerListCreated] = useState(false)
  const [appWidgetOpened, setAppWidgetOpened] = useState(props.isMobile() && props.config.appWidget.openOnStartIfDesktop ? false : true)
  
	// Refs
  const mapDiv = useRef(null)
  const appWidgetEl = useRef(null)
  
  // Toggle App Widget
  const toggleAppWidget = () => {
    appWidgetOpened ? setAppWidgetOpened(false) : setAppWidgetOpened(true)
  }

  // Reactive Utils
  // Hide App Widget, if other widget is expanded on mobile
  reactiveUtils.watch(
    () => [legendExpand?.expanded, layerListExpand?.expanded],
    (expanded) => {
      if (expanded.includes(true) && props.isMobile() && appWidgetOpened) {
        setAppWidgetOpened(false)
      }
  });

  // Hide App Widget, if popup is opened
  reactiveUtils.watch(
    () => view?.popup.selectedFeature,
    (selectedFeature) => {
      if (selectedFeature && appWidgetOpened && props.isMobile()) {
        setAppWidgetOpened(false)
      }
  })

  useEffect(() => {

      if (!mapDiv.current && !props.config) return
 
      // Map
      const map = new WebMap({
        portalItem: {
          id: props.config.webMapId,
          portal: {
            url: props.config.portal
          }
        }
      })

      // View
      const viewInit = new MapView({
        container: mapDiv.current,
        map
      })
      viewInit.popup = new Popup()

      // Home widget
      const homeWidget = new Home({
        view: viewInit
      })

      // Locate widget
      const locateWidget = new Locate({
        view: viewInit
      })

      // Legend
      const legendWidgetInit = new Legend({view: viewInit})
      const legendExpandInit = new Expand({
        collapseIcon: "legend",
        collapseTooltip: "Zavřít legendu",
        expandIcon: "legend",
        expandTooltip: "Legenda",
        group: "top-left",
        view: viewInit,
        content: legendWidgetInit
      })
      setLegendExpand(legendExpandInit)

      // Layer List
      const layerListWidgetInit = new LayerList({view: viewInit})
      const layerListExpandInit = new Expand({
        collapseIcon: "layers",
        collapseTooltip: "Zavřít vrstvy mapy",
        expandIcon: "layers",
        expandTooltip: "Vrstvy mapy",
        group: "top-left",
        view: viewInit,
        content: layerListWidgetInit
      })
      setLayerListExpand(layerListExpandInit)
      setLayerListWidget(layerListWidgetInit)
      
      // Basemap Toggle widget
      const basemapContainer = document.createElement("div")
      basemapContainer.classList.add("toggle-basemap-container")
      new BasemapToggle({
        view: viewInit,
        container: basemapContainer,
        nextBasemap: new Basemap({
          portalItem: {
            id: props.config.nextBasemap.portalItemId
          }
        })
      })

      // Search widget 
      const searchWidget = new Search({ 
        view: viewInit,
        includeDefaultSources: false,
        sources: [
          {
            layer: new FeatureLayer({
              url: props.config.search.layerUrl,
              outFields: ["*"],
              definitionExpression: props.config.search.layerUrl.definitionExpression
            }),
            searchFields: props.config.search.layerUrl.searchFields,
            displayField: props.config.search.layerUrl.displayField,
            exactMatch: false,
            outFields: ["*"],
            name: "Adresní místa",
            placeholder: "Hledat adresu",
            maxResults: 6,
            maxSuggestions: 6,
            suggestionsEnabled: true,
            minSuggestCharacters: 3,
            popupEnabled: false,
            resultSymbol: {
              type: "simple-marker",
              size: "12px",  
              color: [0, 0, 0, 0],
              outline: {  
                color: [217, 0, 18],
                width: 2  
              }
            }
          }
        ]
      })
      
      // Add widgets
      viewInit.ui.add(searchWidget, "manual")
      viewInit.ui.add(homeWidget, "top-left")
      viewInit.ui.move([ "zoom" ], "top-left")
      viewInit.ui.add(locateWidget, "top-left")
      viewInit.ui.add(layerListExpandInit, "top-left")
      viewInit.ui.add(legendExpandInit, "top-left")
      viewInit.ui.add(basemapContainer, "manual")
      viewInit.ui.add(appWidgetEl.current, "manual")

      viewInit.when(() => {
        // Disable loader
        props.loaded(true)
        // Handle layers visibility
        props.checkVisibleLayers(viewInit, null)
        // Zones
        props.getZonesLayer(viewInit)
        
        setView(viewInit)
        setLayerListCreated(true)
      });
  }, [mapDiv])

  return (
    <div className="map-div" ref={mapDiv}>
      <div ref={appWidgetEl}
        title="Témata a oblasti parkování" 
        className="app-button" 
        onClick={toggleAppWidget}>
        <div className="icon"></div>
        <div className="label">{props.config.appLabels.appWidgetTitle}</div>
      </div>

      <AppWidget
        opened={appWidgetOpened}
        toggleAppWidget={toggleAppWidget}
        view={view} 
        config={props.config} 
        setActualTheme={props.setActualTheme} 
        actualThemeInfo={props.actualThemeInfo} 
        checkVisibleLayers={props.checkVisibleLayers}
        zonesLayer={props.zonesLayer}
        zoneFeatures={props.zoneFeatures}
        isMobile={props.isMobile}
        layerList={layerListWidget}
        layerListCreated={layerListCreated}
      />
    </div>
  );
}

export default Map;