import React, { useRef, useEffect, useState } from "react";

// Calcite
setAssetPath('https://js.arcgis.com/calcite-components/2.13.2/assets')
import { setAssetPath } from '@esri/calcite-components/dist/components';

import "@esri/calcite-components/dist/components/calcite-shell.js";
import "@esri/calcite-components/dist/components/calcite-shell-panel.js";
import "@esri/calcite-components/dist/components/calcite-panel.js";
import "@esri/calcite-components/dist/components/calcite-action-bar.js";
import "@esri/calcite-components/dist/components/calcite-action.js";
import "@esri/calcite-components/dist/components/calcite-action-pad.js";
import { 
  CalciteShell, 
  CalciteShellPanel, 
  CalcitePanel, 
  CalciteActionBar, 
  CalciteAction,
  CalciteActionPad } from "@esri/calcite-components-react";

// CSS
import '@esri/calcite-components/dist/calcite/calcite.css';
import "./App.css";

// Components
import Header from "./Header"
import Map from "./Map"
import Legend from "./Legend"

function App() {

  // State
  const [urlParams, setUrlParams] = useState(new URLSearchParams(window.location.search));

  const [config, setConfig] = useState(null)
  const [appIsLoaded, setAppIsLoaded] = useState(false)
  const [activePanel, setActivePanel] = useState(null)
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

  // Action Bar
  const handleActionBar = (target) => {
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
    const response = await fetch('/config.json')
    return response.json();
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
          <Header appTitle={config ? config.appTitle : ""} appLogoLink={config ? config.appLogoLink : ""} />
        </div>

        <CalciteShellPanel slot="panel-start" display-mode="overlay" collapsed={!activePanel}>
          <CalciteActionBar slot="action-bar" ref={actionBarRef} onClick={handleActionBar}>
            <CalciteAction text="Legenda" icon="legend" data-action-id="legend" arctive={activePanel === "legend"}></CalciteAction>
            <CalciteAction text="Téma" icon="apps" data-action-id="theme"></CalciteAction>
            <CalciteAction text="Undo" icon="undo" data-action-id="undo"></CalciteAction>
            <CalciteAction text="Redo" icon="redo" data-action-id="redo"></CalciteAction>
          </CalciteActionBar>

          { activePanel === "legend" && 
            <CalcitePanel heading="Legenda" height-scale="l" data-panel-id="legend" closable onCalcitePanelClose={handleClosePanel}> 
              {view && <Legend view={view} />}
            </CalcitePanel> 
          }
        </CalciteShellPanel>
       
        {config && <Map config={config} urlParams={urlParams} loaded={handleAppLoadingState} view={handleView} /> }
      </CalciteShell>
    </>
  );
}

export default App;
