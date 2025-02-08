// CSS
import "./FeedBack.css";

// Modules
import React, { useEffect, useState, useRef } from "react"

// Esri
import LocateVM from "@arcgis/core/widgets/Locate/LocateViewModel"  
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel"  

// Calcite
import "@esri/calcite-components/dist/components/calcite-text-area";
import "@esri/calcite-components/dist/components/calcite-input-message";
import "@esri/calcite-components/dist/components/calcite-input";
import { 
  CalciteTextArea, CalciteInputMessage, CalciteInput } from "@esri/calcite-components-react";

// Images
import iconPen from "./../../images/icon-pen.svg"
import iconGps from "./../../images/icon-gps.svg"
import iconCheck from "./../../images/icon-check.svg"
import iconCheckActive from "./../../images/icon-check-active.svg"
import iconInfo from "./../../images/icon-info.svg"
import iconCaution from "./../../images/icon-caution.svg"

function FeedBack(props) {
  // Ref
  // const zonesRef = useRef(null)

  // State
  const [loadingVisible, setLoadingVisible] = useState(false)

  useEffect(() => { 

  }, [])

  return (
    <div className="feedback">
      {
        loadingVisible && <div className="feedback-loading"><div className="spinner-main"><div className="spinner"><div></div></div></div></div>
      }
      {/* Locate feedback */}
      <div className="feedback-part">
        <div className="feedback-part-header">
          {props.config.appLabels.appWidgetFeedbackPlaceTitle}
        </div>
        <div className="feedback-part-body">
          <div className="feedback-buttons">
            <div 
              className="feedback-btn"
            >
              <img src={iconPen} alt="zakreslit" />
              {props.config.appLabels.appWidgetFeedbackDrawPlace}
            </div>
            <div 
              className="feedback-btn"
            >
              <img src={iconGps} alt="lokalizovat" />
              {props.config.appLabels.appWidgetFeedbackLocatePlace}
            </div>  
          </div>
        </div>
        <div className="feedback-part-footer">
          <CalciteInputMessage scale="m"><img src={iconInfo} alt="zakreslit" />Místo nevybráno.</CalciteInputMessage>
        </div>
      </div>
      {/* Describe feedback */}
      <div className="feedback-part">
        <div className="feedback-part-header">
          {props.config.appLabels.appWidgetFeedbackDescribeTitle}
        </div>
        <div className="feedback-part-body">
            <CalciteTextArea 
              className="feedback-textarea" 
              max-length="500" 
              placeholder="Popište..." 
              resize="vertical" 
              rows="4" 
              scale="s">
            </CalciteTextArea>
        </div>
        <div className="feedback-part-footer">
          <CalciteInputMessage scale="m"><img src={iconInfo} alt="zakreslit" />Popis nevložen.</CalciteInputMessage>
        </div>
      </div>
      {/* Email feedback */}
      <div className="feedback-part">
        <div className="feedback-part-header">
          {props.config.appLabels.appWidgetFeedbackEmailTitle}
        </div>
        <div className="feedback-part-body">
          <CalciteInput 
            className="beedback-input" 
            input-mode="email" 
            scale="s" 
            type="email" 
            icon="envelope">
          </CalciteInput>
        </div>
        <div className="feedback-part-footer">
          <CalciteInputMessage scale="m"><img src={iconInfo} alt="zakreslit" />e-mail nevložen.</CalciteInputMessage>
        </div>
      </div>
      {/* Send feedback */}
      <div className="feedback-part">
        <div className="feedback-part-body feedback-buttons">
          <div className="feedback-btn send-btn"><img src={iconCheck} alt="odeslat"/>Odeslat</div>
        </div>
      </div>
    </div>
  )
}

export default FeedBack;