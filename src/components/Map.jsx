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
import LayerList from "@arcgis/core/widgets/LayerList"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Graphic from "@arcgis/core/Graphic"
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils"

import AppWidget from "./widgets/AppWidget"

// CSS
import "./Map.css";

function Map(props) {

  // State
  const [view, setView] = useState(null)
  const [legendExpand, setLegendExpand] = useState(null)
  const [aboutWidgetExpand, setAboutWidgetExpand] = useState(null)
  const [layerListExpand, setLayerListExpand] = useState(null)
  const [layerListWidget, setLayerListWidget] = useState(null)
  const [layerListCreated, setLayerListCreated] = useState(false)
  const [appWidgetOpened, setAppWidgetOpened] = useState(props.isMobile() && props.config.appWidget.openOnStartIfDesktop ? false : true)
  const [selectedZoneOid, setSelectedZoneOid] = useState(null)
  const [trackWidgetExpandedHandler, setTrackWidgetExpandedHandler] = useState(null)
  const [trackPopupOpenHandler, setTrackPopupOpenHandler] = useState(null)
  const [] = useState(null)
  const [highlightZonesLayer, setHighlightZonesLayer] = useState(new GraphicsLayer({
    listMode: "hide",
    id: "selected-zone-system-layer",
  }))
  
	// Refs
  const mapDiv = useRef(null)
  const appWidgetEl = useRef(null)

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
  
  // Toggle App Widget
  const toggleAppWidget = () => {
    appWidgetOpened ? setAppWidgetOpened(false) : setAppWidgetOpened(true)
  }

  // Remove zone from map
  const removeZoneFromMap = async () => {
    highlightZonesLayer.removeAll()
  }

  // Show zone in the map
  const showZone = (e) => {
    // This zone
    const featureOid = e.target.getAttribute('data-key')

    // Close popup
    view.popup.close()
    
    // Disable selected feature
    if (featureOid == selectedZoneOid) {
      setSelectedZoneOid(() => null)
      return
    }

    // Set selected feature to state
    setSelectedZoneOid(() => featureOid)

    // Highlight feature in the map
    highlightZoneFeatures(featureOid)
  }

  // Highlight zone features in the map
  const highlightZoneFeatures = (featureOid, zoom=true) => {
    // Selected feature
    const zoneFeature = props.zoneFeatures.filter((fc) => {
      return fc.attributes[props.config.appZones.oidAttr] == featureOid 
    })[0]

    // Coreesponding features
    const correspondingFeaturesOids = zoneFeature.attributes[props.config.appZones.correspondingZonesAttr]
    let correspondingFeatures = []

    if (correspondingFeaturesOids) {
      const correspondingFeaturesOidsArr =  correspondingFeaturesOids.split(",")
      const correspondingFeaturesOidsArrF = correspondingFeaturesOidsArr.map(oid => oid.trim())
      const correspondingFeaturesOrig = props.zoneFeatures.filter((fc) => {
        return correspondingFeaturesOidsArrF.includes(fc.attributes[props.config.appZones.zoneCodeAttr]) 
      })
      correspondingFeatures = correspondingFeaturesOrig.map((fc) => {
        return(
          new Graphic ({
            geometry: fc.geometry,
            symbol: { 
              type: "simple-fill",
              color: {
                r: hexToRgb(props.config.appZones.correspondingZonesColor).r,
                g: hexToRgb(props.config.appZones.correspondingZonesColor).g,
                b: hexToRgb(props.config.appZones.correspondingZonesColor).b,
                a: 0.4
              },
              outline: { 
                color: {
                  r: hexToRgb(props.config.appZones.correspondingZonesColor).r,
                  g: hexToRgb(props.config.appZones.correspondingZonesColor).g,
                  b: hexToRgb(props.config.appZones.correspondingZonesColor).b,
                  a: 1
                },  
                width: 3 
              }
            }
          })
        )
      })
    }

    const higlightFeature = new Graphic ({
      attributes: zoneFeature.attributes,
      geometry: zoneFeature.geometry,
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
          width: 3 
        } 
      },
      popupTemplate: {
        title: props.config.appLabels.zonesPopupTitle,
        content: props.setZonesPopup
      } 
    })

    removeZoneFromMap()
    highlightZonesLayer.addMany([...correspondingFeatures, higlightFeature.clone()])
    if (zoom) {
      view.popup.open({features: [higlightFeature.clone()]})
      view.goTo(higlightFeature.clone().geometry.extent.expand(2))
    }
  }

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
        map,
        popup: new Popup({
          dockEnabled: true,
          dockOptions: {
            breakpoint: false,
            position: props.isMobile() ? "bottom-center" : "bottom-left"
          }
        })
      })

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
        label: "Legenda",
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
        label: "Vrstvy mapy",
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

      // Widget
      // O aplikaci
      const aboutWidgetInit = document.createElement("div")
      aboutWidgetInit.style.padding = "10px"
      aboutWidgetInit.classList.add("esri-widget--panel", "esri-widget")
      aboutWidgetInit.innerHTML = "<div class='map-component-about-widget'>" + props.config.appLabels.aboutWidget + "</div>"

      const aboutWidgetExpandInit = new Expand({
        label: "O aplikaci",
        collapseIcon: "question",
        collapseTooltip: "Sbalit informace o aplikaci",
        expandIcon: "question",
        expandTooltip: "O aplikaci",
        group: "top-left",
        view: viewInit,
        content: aboutWidgetInit, 
      })
      setAboutWidgetExpand(aboutWidgetExpandInit)
      
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
      viewInit.ui.add(aboutWidgetExpandInit, "top-left")
      viewInit.ui.add(basemapContainer, "manual")
      viewInit.ui.add(appWidgetEl.current, "manual")

      viewInit.when(() => {
        // Disable loader
        props.loaded(true)
        // Handle layers visibility
        props.checkVisibleLayers(viewInit, null)
        // Zones
        props.getZonesLayer(viewInit)
        // Zone highlight layer
        viewInit.map.add(highlightZonesLayer)

        setView(viewInit)
        setLayerListCreated(true)
      });
  }, [mapDiv])

  useEffect(() => {
    // Reactive Utils
    // Track zone selected feature
    if (!view || !props.zonesLayer || !props.zoneFeatures) {return}

    props.zonesLayer.when((zonesLayerView) => {
      reactiveUtils.watch(
        () => [view?.popup.selectedFeature, view?.popup.visible, view.navigating, zonesLayerView.updating],
        ([selectedFeature, popupVisible, viewNavigating, layerUpdating]) => {
          if (selectedFeature && selectedFeature.layer?.id === props.zonesLayer.id && popupVisible) {
            // Set selected feature to state
            setSelectedZoneOid(selectedFeature.attributes[props.config.appZones.oidAttr])
            // Highlight feature in the map
            highlightZoneFeatures(selectedFeature.attributes[props.config.appZones.oidAttr], false)
          }
          if (!popupVisible && !viewNavigating && !layerUpdating) {
            setSelectedZoneOid(null)
            removeZoneFromMap()
          }
      })
    })

    // Reactive Utils
    // Track view width for popup dock changing
    reactiveUtils.watch(
      () => view.width,
      () => {
        view.popup.dockOptions.position = props.isMobile() ? "bottom-center" : "bottom-left"
      }
    )
  }, [view, props.zonesLayer, props.zoneFeatures])

  useEffect(() => {
    if (!legendExpand || !layerListExpand) {return}
    if (trackWidgetExpandedHandler) {trackWidgetExpandedHandler.remove()}
    if (trackPopupOpenHandler) {trackPopupOpenHandler.remove()}

    // Reactive Utils
    // Hide App Widget, if other widget is expanded on mobile
    const expandedHandler = reactiveUtils.watch(
      () => [legendExpand?.expanded, layerListExpand?.expanded, aboutWidgetExpand?.expanded],
      (expanded) => {
        if (expanded.includes(true) && props.isMobile() && appWidgetOpened) {
          setAppWidgetOpened(false)
        }
    });
    setTrackWidgetExpandedHandler(expandedHandler)

    // Reactive Utils
    // Hide App Widget, if popup is opened
    const popupOpenHandler = reactiveUtils.watch(
      () => view?.popup.selectedFeature,
      (selectedFeature) => {
        if (selectedFeature && appWidgetOpened && props.isMobile()) {
          setAppWidgetOpened(false)
        }
    })
    setTrackPopupOpenHandler(popupOpenHandler)
  }, [legendExpand, layerListExpand, appWidgetOpened])

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
        zonesLayerView={props.zonesLayerView}
        zoneFeatures={props.zoneFeatures}
        isMobile={props.isMobile}
        layerList={layerListWidget}
        layerListCreated={layerListCreated}
        setSelectedZoneOid={setSelectedZoneOid}
        selectedZoneOid={selectedZoneOid}
        showZone={showZone}
        removeZoneFromMap={removeZoneFromMap} 
      />
    </div>
  );
}

export default Map;