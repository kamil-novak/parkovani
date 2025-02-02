import React, { useEffect, useState, useRef } from "react";

// Google Analytics
import ReactGA from "react-ga4";

// Calcite
setAssetPath('https://js.arcgis.com/calcite-components/2.13.2/assets')
import { setAssetPath } from '@esri/calcite-components/dist/components';

import "@esri/calcite-components/dist/components/calcite-shell.js";
import { 
  CalciteShell
} from "@esri/calcite-components-react";

// CSS
import '@esri/calcite-components/dist/calcite/calcite.css';
import "./App.css";

// Components
import Header from "./Header"
import Map from "./Map"

// Global variables
const MOBILE_BREAKPOINT = 544

function App() {

  // State
  const [actualTheme, setActualTheme] = useState(new URLSearchParams(window.location.search).get("theme"))
  const [switchLayerHandlers, setSwitchLayerHandlers] = useState()
  const [config, setConfig] = useState(null)
  const [appIsLoaded, setAppIsLoaded] = useState(false)
  const [zonesLayers, setZonesLayers] = useState(null)
  const [zonesLayerViews, setZonesLayerViews] = useState(null)
  const [zonesFeatures, setZonesFeatures] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT)

  const zonesFeaturesRef = useRef(zonesFeatures);

  // Zones popup content
  const setZonesPopupContent = (feature) => {
    let correspondingZones
    let correspondingZonesNones 
    if (feature.graphic.attributes[config?.appZones.correspondingZonesAttr]) {
      correspondingZones = feature.graphic.attributes[config?.appZones.correspondingZonesAttr].split(",")
      correspondingZonesNones = correspondingZones.map((zone) => {
        return(`<span style="color: ${config?.appZones.correspondingZonesColor};background-color: rgba(from ${config?.appZones.correspondingZonesColor} r g b / 10%); padding: 0px 5px; border: 1px solid ${config?.appZones.correspondingZonesColor}; display: flex; justify-content: center; align-items: center; width: 30px; height: 30px;">
          ${zone.trim()}
        </span>`)
      })
    }

    const node = document.createElement("div")
    node.innerHTML = `
      ${config?.appLabels.zonesPopupThisZone}:<br> 

      <div style="color: ${config?.appZones.activeZoneColor}; margin-top: 3px; height: 30px; display: inline-flex; justify-content: center; align-items: center; background-color: rgba(from ${config?.appZones.activeZoneColor} r g b / 10%); padding: 0px 8px; border: 1px solid ${config?.appZones.activeZoneColor}">
        ${feature.graphic.attributes[config?.appZones.zoneCodeAttr]} ${feature.graphic.attributes[config?.appZones.zoneNameAttr]} 
      </div> 
      
      ${feature.graphic.attributes[config?.appZones.zoneDraftAttr] === config?.appZones.zoneDraftValue && config?.appLabels.zonesPopupDraftZone ? '<span style="margin-left: 5px; padding: 0px 2px 0px 1px; border-bottom: 1px dashed ' + config?.appZones.activeZoneColor + '; color: ' + config?.appZones.activeZoneColor + '">' + config?.appLabels.zonesPopupDraftZone + '</span>' : ""}

      ${correspondingZonesNones ? '<br><br>' + config?.appLabels.zonesPopupCorrespondingZones + ':': ''}

      ${correspondingZonesNones ? '<div style="margin-top: 3px; display: flex; flex-wrap: wrap; justify-content: start; gap: 3px;">' : ''}
        ${correspondingZonesNones ? correspondingZonesNones.join("") : ''}
      ${correspondingZonesNones ? '</div>' : ''}
    `
    return node;
  }

  // Zones popup template
  const zonesPopupTemplate = {
    title: config?.appLabels.zonesPopupTitle,
    content: setZonesPopupContent
  }

  // Loading
  const handleAppLoadingState = (loaded) => {
    setAppIsLoaded(loaded)
  }

  // App config
  const getData = async () => {
    const response = await fetch('./config.json')
    return response.json();
  }

  // Get actual theme info from config
  const getActualThemeInfo = (theme) => {
    if(theme !== "[no-theme]") {
      const appTheme = config?.appThemes.filter((themeItem) => {
        if (themeItem.name === theme) {
          return themeItem
        }
      })
      if (appTheme?.length > 0) {
        return appTheme[0]
      }
      else {
        return config?.appThemes[0]
      }
    }
    else {
      return null // Layer is switched outside of App Widget
    }
  }

  // Set actual theme
  const handleSetActualTheme = (actualTheme) => {
    setActualTheme(actualTheme)
  }


  // Set visible layers according to the configuration
  const checkVisibleLayers = (view, theme) => {
    let themeFc = theme ? getActualThemeInfo(theme) : getActualThemeInfo(actualTheme) 

    // Remove watching switching layers
    if (switchLayerHandlers) {
      switchLayerHandlers.forEach((handler) => {
        handler.remove()
      })
    }

    // Handle switch theme
    view.map.layers.forEach((layer) => {

      if (layer.id === "selected-zone-system-layer") {return}

      layer.visible = false
      if (themeFc?.visibleLayers.includes(layer.title)) {
        layer.visible = true
      }
  
      if (layer.allSublayers) {
      
        layer.when(() => {
          layer.allSublayers.forEach((sublayer) => {
            sublayer.visible = false
            if (themeFc?.visibleLayers.includes(sublayer.title)) {
              sublayer.visible = true
            }
          })
        })
      }
    })

    // Set watching switching layers
    let switchLayerHandlersLocal = []
    view.map.layers.forEach((layer) => {
      const switchLayerHandlerLocal = layer.watch("visible", () => {
        setActualTheme("[no-theme]")
        getZonesLayer(view)
      })

      if (layer.allSublayers) {
        
        layer.when(() => {
          layer.allSublayers.forEach((sublayer) => {
            const switchSublayerHandlerLocal = sublayer.watch("visible", () => {
              setActualTheme("[no-theme]")
              getZonesLayer(view)
            })
            switchLayerHandlersLocal.push(switchSublayerHandlerLocal)
          })
        })
      }
      switchLayerHandlersLocal.push(switchLayerHandlerLocal)
    })
    setSwitchLayerHandlers(switchLayerHandlersLocal)
  }

  // Zones layer
  const getZonesLayer = async (view) => {
    const zonesFeaturesInitAll = []
    const zonesLayersInit = []
    const zonesLayerViewsInit = []

    for (const layer of view.map.layers) {
      // If zones are congigured
      if (config.appZones.fromLayers.length > 0) {
        // If zones in layer
        if (config.appZones.fromLayers.includes(layer.title)) {
          layer.popupEnabled = true
          layer.popupTemplate = zonesPopupTemplate
          layer.outFields = ["*"]
          zonesLayersInit.push(layer)
          const zonesFeaturesInit = await getZoneFeatures(layer)
          zonesFeaturesInitAll.push(...zonesFeaturesInit)
          
          view.whenLayerView(layer).then((layerView) => {
            layerView.highlightOptions = {
              color: [0,0,0,0],
              haloOpacity: 1,
              fillOpacity: 1
            }
            zonesLayerViewsInit.push(layerView)
          })
        }
        // If zones in sublayer
        if (layer.allSublayers) {
          layer.when(async () => {
            for (const subLayer of layer.allSublayers.items) {
              if (config.appZones.fromLayers.includes(subLayer.title) ) {
                subLayer.popupEnabled = true
                subLayer.popupTemplate = zonesPopupTemplate
                subLayer.outFields = ["*"]
                zonesLayersInit.push(subLayer)
                const zonesFeaturesInit = await getZoneFeatures(subLayer)
                zonesFeaturesInitAll.push(...zonesFeaturesInit)

                view.whenLayerView(subLayer).then((subLayerView) => {
                  subLayerView.highlightOptions = {
                    color: [0,0,0,0],
                    haloOpacity: 1,
                    fillOpacity: 1
                  }
                  zonesLayerViewsInit.push(subLayerView)
                })
              }
            }
          })
        }
      }
    }
    setZonesLayers(zonesLayersInit)
    setZonesLayerViews(zonesLayerViewsInit)
    if (zonesFeaturesRef.current.length === 0) {
      setZonesFeatures(zonesFeaturesInitAll)
      zonesFeaturesRef.current = zonesFeaturesInitAll
    }
  }

  // Zone features
  const getZoneFeatures = async (zonesLayer) => {
    const results = await zonesLayer.queryFeatures({
      outFields: ["*"], 
      returnGeometry: true,
      where: zonesLayer.definitionExpression
    })
    return results.features;
  }

  // Handle resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {

    (async () => {

      // Load app config 
      const initConfig = await getData()
      setConfig( initConfig )

      // Google Analytics
      initConfig?.ga4Id && ReactGA.initialize(initConfig?.ga4Id)
     
    })()
   
  }, []);

  return (
    <>
      { !appIsLoaded && <calcite-loader></calcite-loader> }
      <CalciteShell content-behind >

        <div slot="header">
          <Header 
            appTitle={config ? config.appLabels.appTitle : ""} 
            appLogoLink={config ? config.appLogoLink : ""} 
            actualThemeInfo={getActualThemeInfo(actualTheme)}
            />
        </div>
            
        {config && <Map 
          config={config} 
          loaded={handleAppLoadingState} 
          checkVisibleLayers={checkVisibleLayers}
          setActualTheme={handleSetActualTheme} 
          actualThemeInfo={getActualThemeInfo(actualTheme)} 
          isMobile={isMobile}
          getZonesLayer={getZonesLayer}
          zonesLayers={zonesLayers}
          zonesLayerViews={zonesLayerViews}
          zoneFeatures={zonesFeatures}
          setZonesPopup={setZonesPopupContent}
          /> }

      </CalciteShell>
    </>
  );
}

export default App;
