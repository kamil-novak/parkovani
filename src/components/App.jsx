import React, { useRef, useEffect, useState } from "react";

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
  const [actualTheme, setActualTheme] = useState(new URLSearchParams(window.location.search).get("theme"));
  const mobileScreen = 576
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(screenWidth > mobileScreen ? true : false)

  const [config, setConfig] = useState(null)
  const [appIsLoaded, setAppIsLoaded] = useState(false)
  const [view, setView] = useState(null)

  // Callbacks
  const handleAppLoadingState = (loaded) => {
    setAppIsLoaded(loaded)
  }

  // Get app config
  const getData = async () => {
    const response = await fetch('./config.json')
    return response.json();
  }

  // Get actual theme info from config
  const getActualThemeInfo = (param) => {
    const appTheme = config?.appThemes.filter((themeItem) => {
      if (themeItem.name === param) {
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

  // Set actual theme
  const handleSetActualTheme = (actualTheme) => {
    setActualTheme(actualTheme)
  }

  // Set visible layers according to the configuration
  const setVisibleLayers = (view, theme) => {
    let themeFc = theme ? getActualThemeInfo(theme) : getActualThemeInfo(actualTheme) 

    view.map.layers.forEach((layer) => {
      layer.visible = false
        if (themeFc.visibleLayers.includes(layer.title)) {
          layer.visible = true
        }
    })
  }

  useEffect(() => {

    (async () => {

      // Load app config 
      const initConfig = await getData()
      setConfig( initConfig )
     
    })()

    // Responsive layout solution
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
   
  }, []);

  return (
    <>
      { !appIsLoaded && <calcite-loader></calcite-loader> }
      <CalciteShell content-behind >

        <div slot="header">
          <Header 
            appTitle={config ? config.appTitle : ""} 
            appLogoLink={config ? config.appLogoLink : ""} 
            actualThemeInfo={getActualThemeInfo(actualTheme)}
            />
        </div>
            
        {config && <Map 
          config={config} 
          loaded={handleAppLoadingState} 
          setVisibleLayers={setVisibleLayers}
          setActualTheme={handleSetActualTheme} 
          actualThemeInfo={getActualThemeInfo(actualTheme)} 
          /> }

      </CalciteShell>
    </>
  );
}

export default App;
