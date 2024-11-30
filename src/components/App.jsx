import React, { useRef, useEffect, useState } from "react";

// Calcite
setAssetPath('https://js.arcgis.com/calcite-components/2.13.2/assets')
import { setAssetPath } from '@esri/calcite-components/dist/components';

import "@esri/calcite-components/dist/components/calcite-shell.js";
import "@esri/calcite-components/dist/components/calcite-shell-panel.js";
import "@esri/calcite-components/dist/components/calcite-panel.js";
import "@esri/calcite-components/dist/components/calcite-action-bar.js";
import "@esri/calcite-components/dist/components/calcite-action.js";
import { 
  CalciteShell, 
  CalciteShellPanel, 
  CalcitePanel, 
  CalciteActionBar, 
  CalciteAction } from "@esri/calcite-components-react";

// CSS
import '@esri/calcite-components/dist/calcite/calcite.css';
import "./App.css";

// Components
import Header from "./Header"
import Map from "./Map"
import Themes from "./widgets/Themes"

function App() {

  // State
  const [actualTheme, setActualTheme] = useState(new URLSearchParams(window.location.search).get("theme"));
  const mobileScreen = 576
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(screenWidth > mobileScreen ? true : false)

  const [config, setConfig] = useState(null)
  const [appIsLoaded, setAppIsLoaded] = useState(false)
  const [activePanel, setActivePanel] = useState(isMobile ? "themes" : null)
  const [view, setView] = useState(null)

  // Refs
  const actionBarRef = useRef(null);

  // Callbacks
  const handleAppLoadingState = (loaded) => {
    setAppIsLoaded(loaded)
  }

  const handleView = (view) => {
    setView(view)
  }

  // Panel - toggle widgets in panel
  const handlePanel = (target) => {
    const thisAction = target.target
    if (thisAction.tagName !== "CALCITE-ACTION") {
      return;
    }
    if ( activePanel !== thisAction["data-action-id"] ) {
      setActivePanel(thisAction["data-action-id"])
    }
    else {
      setActivePanel(null)
    }
  }

  const handleClosePanel = () => {
    setActivePanel(null)
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
  const setVisibleLayers = (initView, theme) => {
    let viewFc = view
    let themeFc = theme ? getActualThemeInfo(theme) : getActualThemeInfo(actualTheme) 
    if(initView) {viewFc = initView}

    viewFc.map.layers.forEach((layer) => {
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

        <CalciteShellPanel 
          slot="panel-start"
          layout="vertical"
          display-mode="float-content"
          collapsed={!activePanel}>
          <CalciteActionBar slot="action-bar" ref={actionBarRef} onClick={handlePanel}>
            <CalciteAction 
              text="Téma" 
              icon="apps" 
              data-action-id="themes" 
              active={activePanel === "themes" ? true : null} 
              >
            </CalciteAction>
            <CalciteAction 
              text="Legenda" 
              icon="legend" 
              data-action-id="legend" 
              active={activePanel === "legend" ? true : null} 
              >
            </CalciteAction>
            <CalciteAction text="Undo" icon="undo"></CalciteAction>
            <CalciteAction text="Redo" icon="redo"></CalciteAction>
          </CalciteActionBar>

          { activePanel === "themes" && 
            <CalcitePanel 
              heading="Téma" 
              scale="s" 
              data-panel-id="themes" 
              closable onCalcitePanelClose={handleClosePanel}> 
              {<Themes 
                config={config} 
                isMobile={isMobile}
                setActualTheme={handleSetActualTheme} 
                actualThemeInfo={getActualThemeInfo(actualTheme)} 
                setVisibleLayers={setVisibleLayers}
                view={view}
                />}
            </CalcitePanel> 
          }
        </CalciteShellPanel>
       
        {config && <Map 
          config={config} 
          loaded={handleAppLoadingState} 
          setVisibleLayers={setVisibleLayers}
          view={handleView} /> }
      </CalciteShell>
    </>
  );
}

export default App;
