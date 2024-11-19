// CSS
import "./Themes.css";

import React, { useEffect, useRef, useState } from "react"

import "@esri/calcite-components/dist/components/calcite-accordion";
import "@esri/calcite-components/dist/components/calcite-accordion-item";
import "@esri/calcite-components/dist/components/calcite-radio-button-group";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-radio-button";
import { 
  CalciteAccordion,
  CalciteAccordionItem, 
  CalciteRadioButtonGroup,
  CalciteLabel, 
  CalciteRadioButton } from "@esri/calcite-components-react";

function Themes(props) {
  // State
  const [actualTheme, setActualTheme] = useState(null)

	// Refs
  const themesDiv = useRef(null);

  const handleChangeTheme = (e) => {
    setActualTheme(e.target.value)
  }

  useEffect(() => {
    if (props.urlParamTheme) {
      setActualTheme(props.urlParamTheme.paramValue)
    }
  }, [props.urlParamTheme]);

  return (
    <CalciteAccordion className="widget-themes" icon-position="start" scale="m">
        <CalciteAccordionItem 
          heading={props.config && props.config.appThemes.map((theme) => {
            if (theme.paramValue === actualTheme) {
              return (theme.label)
            }
          })} 
          description="Aktuálně zvolené téma">
          <CalciteRadioButtonGroup 
            name="Options" 
            layout="vertical" 
            scale="s"
            >
            { 
              props.config && props.config.appThemes.map((theme) => { 
                return(
                  <CalciteLabel layout="inline" key={theme.paramValue}>
                    <CalciteRadioButton 
                      value={theme.paramValue} 
                      onCalciteRadioButtonChange={handleChangeTheme}
                      checked={theme.paramValue === actualTheme ? true : null}
                      >
                    </CalciteRadioButton>
                    {theme.label}
                  </CalciteLabel> 
                )
              })
            }
          </CalciteRadioButtonGroup>
        </CalciteAccordionItem> 
    </CalciteAccordion>
  );
}

export default Themes;