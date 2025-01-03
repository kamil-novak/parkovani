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
          layer.popupEnabled = false
          setZonesLayer(layer)
          getZoneFeatures(layer)
        }
        // If zones in sublayer
        if (layer.allSublayers) {
          layer.when(() => {
            layer.allSublayers.forEach((subLayer) => {
              if (subLayer.title === config.appZones.fromLayer ) {
                subLayer.popupEnabled = false
                setZonesLayer(subLayer)
                getZoneFeatures(subLayer)
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
