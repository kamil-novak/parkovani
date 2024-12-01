// CSS
import "./Themes.css";

import React, { useEffect, useRef, useState } from "react"

import Legend from "./Legend";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-block-section";
import "@esri/calcite-components/dist/components/calcite-radio-button-group";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-radio-button";
import { 
  CalciteBlock,
  CalciteBlockSection, 
  CalciteRadioButtonGroup,
  CalciteLabel, 
  CalciteRadioButton } from "@esri/calcite-components-react";

function Themes(props) {
  // State
  const [init, setInit] = useState(false)

  const handleChangeTheme = (e) => {
    props.setActualTheme(e.target.value)
    props.setVisibleLayers(props.view, e.target.value)
    setInit(true)
  }

  useEffect(() => {

  }, []);

  return (
        <CalciteBlock
          collapsible
          open={true}
          heading={props.actualThemeInfo?.label} >
          <CalciteBlockSection open text="Zvolit jiné téma">
            <CalciteRadioButtonGroup
              name="Options" 
              layout="vertical" 
              scale="s"
              >
              { 
                props.config && props.config.appThemes.map((theme) => { 
                  return(
                    <CalciteLabel layout="inline" key={theme.name}>
                      <CalciteRadioButton 
                        value={theme.name} 
                        onCalciteRadioButtonChange={handleChangeTheme}
                        checked={theme.name === props.actualThemeInfo.name ? true : null}
                        >
                      </CalciteRadioButton>
                      {theme.label}
                    </CalciteLabel> 
                  )
                })
              }
            </CalciteRadioButtonGroup>
          </CalciteBlockSection>
        </CalciteBlock> 
  );
}

export default Themes;