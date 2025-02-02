import React, { useEffect, useRef, useState } from "react"

import MapView from "@arcgis/core/views/MapView"
import Popup from "@arcgis/core/widgets/Popup"
import WebMap from "@arcgis/core/WebMap"
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
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine"
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils"

import AppWidget from "./widgets/AppWidget"

// CSS
import "./Map.css";

function Map(props) {

  // State
  const [view, setView] = useState(null)
  const [layerListWidget, setLayerListWidget] = useState(null)
  const [layerListCreated, setLayerListCreated] = useState(false)
  const [legendExpand, setLegendExpand] = useState(null)
  const [aboutWidgetExpand, setAboutWidgetExpand] = useState(null)
  const [appWidgetOpened, setAppWidgetOpened] = useState(props.isMobile && props.config.appWidget.openOnStartIfDesktop ? false : true)
  const [selectedZone, setSelectedZone] = useState(null)
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
  const searchWidgetRef = useRef(null)

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
  const removeZoneFromMap = () => {
    highlightZonesLayer.removeAll()
  }

  // Show zone in the map
  const showZone = (e) => {
    // This zone
    const featureOid = e.target.getAttribute('data-oid')
    const featureLayerId = e.target.getAttribute('data-layer')
    const featureOidAndLayer = featureOid + "--" + featureLayerId

    // Close popup
    view.popup.close()
    
    // Disable selected feature
    if (featureOidAndLayer == selectedZone) {
      setSelectedZone(() => null)
      return
    }

    // Set selected feature to state
    setSelectedZone(() => featureOidAndLayer)

    // Highlight feature in the map
    highlightZoneFeatures(featureOid, featureLayerId)
  }

  // Highlight zone features in the map
  const highlightZoneFeatures = (featureOid, featureLayerId, zoom=true) => {
    // Selected feature
    const zoneFeature = props.zoneFeatures.filter((fc) => {
      return fc.attributes[props.config.appZones.oidAttr] == featureOid && fc.layer.id == featureLayerId
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
                a: props.config.appZones.correspondingZonesMapOpacity
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
          a: props.config.appZones.correspondingZonesMapOpacity
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
      const goToGeometry = geometryEngine.union([higlightFeature.clone().geometry.extent.expand(2), ...correspondingFeatures.map((feature) => feature.clone().geometry.extent.expand(2))])
      view.popup.open({features: [higlightFeature.clone()]})
      view.goTo(goToGeometry)
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
          viewModel: {
            includeDefaultActions: false
          },
          dockEnabled: true,
          dockOptions: {
            breakpoint: false,
            position: props.isMobile ? "bottom-center" : "bottom-left"
          }
        })
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

      // Layer List
      const layerListWidgetInit = new LayerList({view: viewInit})
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
            searchFields: props.config.search.searchFields,
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
      searchWidgetRef.current = searchWidget
      
      // Add widgets
      viewInit.ui.add(searchWidget, "top-left")
      viewInit.ui.move([ "zoom" ], "top-left")
      viewInit.ui.add(locateWidget, "top-left")
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
      // Search widget expanding
      if (!view) {return}

      // Close button
      const closeBtnOld = document.body.querySelector("search-close-btn")
      if (closeBtnOld) {
        closeBtnOld.remove()
      }
      const closeBtn = document.createElement("div")
      closeBtn.innerHTML = '<span class="esri-icon-left"></span>'
      closeBtn.classList.add("search-close-btn")
      searchWidgetRef.current.domNode?.firstChild?.firstChild.prepend(closeBtn)
  
      // Expand widget after click
      searchWidgetRef.current.domNode.querySelector(".esri-search__submit-button")?.addEventListener("click", () => {
        if (!searchWidgetRef.current.domNode.classList.contains("search-expanded")) {
          searchWidgetRef.current.domNode.classList.add("search-expanded")
          searchWidgetRef.current.focus()
        }
      });

      // Collapse widget after click
      closeBtn.addEventListener("click", () => {
        if (searchWidgetRef.current.domNode.classList.contains("search-expanded")) {
          searchWidgetRef.current.domNode.classList.remove("search-expanded")
          searchWidgetRef.current.clear()
        }
      })
  }, [view])

  useEffect(() => {
    // Reactive Utils
    // Track zone selected feature
    if (!view || !props.zonesLayers || !props.zoneFeatures) {return}

    // Remove graphic if click to map
    // It solve a problem with duplicate popup when it is clicked to the existing graphic
    view.on("click", () => {
      highlightZonesLayer.removeAll()
    })

    props.zonesLayers.forEach((zonesLayer) => {
      zonesLayer.when((zonesLayerView) => {
        reactiveUtils.watch(
          () => [view?.popup.selectedFeature, view?.popup.visible, view.navigating, zonesLayerView.updating],
          ([selectedFeature, popupVisible, viewNavigating, layerUpdating]) => {
            if (selectedFeature && selectedFeature.layer?.id === zonesLayer.id && popupVisible) {
              // Set selected feature to state
              setSelectedZone(selectedFeature.attributes[props.config.appZones.oidAttr] + "--" + selectedFeature.layer.id)
              // Highlight feature in the map
              highlightZoneFeatures(selectedFeature.attributes[props.config.appZones.oidAttr], selectedFeature.layer.id, false)
            }
            if (!popupVisible && !viewNavigating && !layerUpdating) {
              setSelectedZone(null)
              removeZoneFromMap()
            }
        })
      })
    })

  }, [view, props.zonesLayers, props.zoneFeatures])

  useEffect(() => {
    // Reactive Utils
    // Track view width for popup dock changing
    if (!view) { return }

    reactiveUtils.watch(
      () => view.width,
      () => {
        view.popup.dockOptions.position = props.isMobile ? "bottom-center" : "bottom-left";
      }
    );
  }, [view, props.isMobile])

  useEffect(() => {
    if (trackWidgetExpandedHandler) {trackWidgetExpandedHandler.remove()}
    if (trackPopupOpenHandler) {trackPopupOpenHandler.remove()}

    // Reactive Utils
    // Hide App Widget, if other widget is expanded on mobile
    const expandedHandler = reactiveUtils.watch(
      () => [legendExpand?.expanded, aboutWidgetExpand?.expanded],
      (expanded) => {
        if (expanded.includes(true) && props.isMobile && appWidgetOpened) {
          setAppWidgetOpened(false)
        }
    });
    setTrackWidgetExpandedHandler(expandedHandler)

    // Reactive Utils
    // Hide App Widget, if popup is opened
    const popupOpenHandler = reactiveUtils.watch(
      () => view?.popup.selectedFeature,
      (selectedFeature) => {
        if (selectedFeature && appWidgetOpened && props.isMobile) {
          setAppWidgetOpened(false)
        }
    })
    setTrackPopupOpenHandler(popupOpenHandler)

    return () => {
      if (expandedHandler) { expandedHandler.remove() }
      if (popupOpenHandler) { popupOpenHandler.remove() }
    }  
  }, [appWidgetOpened, props.isMobile])

  return (
    <div className="map-div" ref={mapDiv}>
      <div ref={appWidgetEl}
        title={props.config.appLabels.appWidgetTitle}
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
        zonesLayers={props.zonesLayers}
        zonesLayerViews={props.zonesLayerViews}
        zoneFeatures={props.zoneFeatures}
        isMobile={props.isMobile}
        layerList={layerListWidget}
        layerListCreated={layerListCreated}
        setSelectedZoneOid={setSelectedZone}
        selectedZone={selectedZone}
        showZone={showZone}
        removeZoneFromMap={removeZoneFromMap} 
      />
    </div>
  );
}

export default Map;