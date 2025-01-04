import React, { useEffect, useState } from "react";

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

function App() {

  // State
  const [actualTheme, setActualTheme] = useState(new URLSearchParams(window.location.search).get("theme"))
  const [switchLayerHandlers, setSwitchLayerHandlers] = useState()
  const [config, setConfig] = useState(null)
  const [appIsLoaded, setAppIsLoaded] = useState(false)
  const [zonesLayer, setZonesLayer] = useState(null)
  const [zonesFeatures, setZonesFeatures] = useState(null)

  // Mobile resolution settings
  const mobileScreen = 544

  // Zones popup content
  const setZonesPopupContent = (feature) => {
    const correspondingZones = feature.graphic.attributes[config?.appZones.correspondingZonesAttr].split(", ")
    const correspondingZonesNones = correspondingZones.map((zone) => {
      return(`<span style="color: ${config?.appZones.correspondingZonesColor};background-color: rgba(from ${config?.appZones.correspondingZonesColor} r g b / 10%); padding: 0px 5px; border: 1px solid ${config?.appZones.correspondingZonesColor}; display: flex; justify-content: center; align-items: center; width: 30px; height: 30px;">
        ${zone}
      </span>`)
    })

    const node = document.createElement("div")
    node.innerHTML = `
      ${config?.appLabels.zonesPopupThisZone}: 
      <span style="color: ${config?.appZones.activeZoneColor};background-color: rgba(from ${config?.appZones.activeZoneColor} r g b / 10%); padding: 0px 5px; border: 1px solid ${config?.appZones.activeZoneColor}">
        ${feature.graphic.attributes[config?.appZones.zoneCodeAttr]} - ${feature.graphic.attributes[config?.appZones.zoneNameAttr]}
      </span>

      <br><br>

      ${config?.appLabels.zonesPopupCorrespondingZones}:
      <div style="margin-top: 3px; display: flex; flex-wrap: wrap; justify-content: start; gap: 3px;">
        ${correspondingZonesNones.join("")}
      </div>
    `
    return node;
  }

  // Zones popup template
  const zonesPopupTemplate = {
    title: "Oblast parkování",
    content: setZonesPopupContent
  }

  // Check mobile resolution
  const isMobile = () => {
    if (window.innerWidth < mobileScreen) {
      return true
    }
    else {
      return false
    }
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
  const getZonesLayer = (view) => {
    view.map.layers.forEach((layer) => {
      // If zones are congigured
      if (config.appZones.fromLayer) {
        // If zones in layer
        if (layer.title === config.appZones.fromLayer) {
          layer.popupEnabled = true
          layer.popupTemplate = zonesPopupTemplate
          layer.outFields = ["*"]
          setZonesLayer(layer)
          getZoneFeatures(layer)

          view.whenLayerView(layer).then((layerView) => {
            layerView.highlightOptions = {
              color: [0,0,0,0],
              haloOpacity: 1,
              fillOpacity: 1
            }
          })
        }
        // If zones in sublayer
        if (layer.allSublayers) {
          layer.when(() => {
            layer.allSublayers.forEach((subLayer) => {
              if (subLayer.title === config.appZones.fromLayer ) {
                subLayer.popupEnabled = true
                subLayer.popupTemplate = zonesPopupTemplate
                subLayer.outFields = ["*"]
                setZonesLayer(subLayer)
                getZoneFeatures(subLayer)

                view.whenLayerView(subLayer).then((subLayerView) => {
                  subLayerView.highlightOptions = {
                    color: [0,0,0,0],
                    haloOpacity: 1,
                    fillOpacity: 1
                  }
                })
              }
            })
          })
        }
      }
    })
  }

  // Zone features
  const getZoneFeatures = (zonesLayer) => {
    const zones = []
    zonesLayer.queryFeatures({
      where: !config.appZones.whereCondition ? "1=1" : config.appZones.whereCondition, 
      outFields: [config.appZones.zoneCodeAttr, config.appZones.zoneNameAttr, config.appZones.oidAttr], 
      returnGeometry: false,
      orderByFields: [`${config.appZones.zoneCodeAttr} ASC`]
    })
    .then((results) => {
      results.features.forEach((feature) => {zones.push(feature)})
      setZonesFeatures(zones)
    }) 
  }

  useEffect(() => {

    (async () => {

      // Load app config 
      const initConfig = await getData()
      setConfig( initConfig )
     
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
          getZoneFeatures={getZoneFeatures}
          zonesLayer={zonesLayer}
          zoneFeatures={zonesFeatures}
          /> }

      </CalciteShell>
    </>
  );
}

export default App;
