// CSS
import "./Themes.css";

import React, { useEffect, useRef } from "react"

import "@esri/calcite-components/dist/components/calcite-action.js";
import "@esri/calcite-components/dist/components/calcite-action-bar.js";
import { 
  CalciteAction,
  CalciteActionBar } from "@esri/calcite-components-react";

function Themes(props) {

	// Refs
  const themesDiv = useRef(null);

  useEffect(() => {

		
  }, []);

  return (
    <CalciteActionBar className="widget-themes" expand-disabled={true} expanded={true}>
        <CalciteAction text="Oblasti parkování" scale="m"></CalciteAction>
        <CalciteAction text="Střednědobé parkování" scale="m"></CalciteAction>
    </CalciteActionBar>
  );
}

export default Themes;