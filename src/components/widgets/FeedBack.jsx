// CSS
import "./FeedBack.css";

// Modules
import React, { useEffect, useState, useRef } from "react"

// Esri
import LocateVM from "@arcgis/core/widgets/Locate/LocateViewModel"  
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel" 
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer" 

// Calcite
import "@esri/calcite-components/dist/components/calcite-text-area";
import "@esri/calcite-components/dist/components/calcite-input-message";
import "@esri/calcite-components/dist/components/calcite-input";
import { 
  CalciteTextArea, CalciteInputMessage, CalciteInput } from "@esri/calcite-components-react";

// Images
import iconPen from "./../../images/icon-pen.svg"
import iconPenActive from "./../../images/icon-pen-active.svg"
import iconGps from "./../../images/icon-gps.svg"
import iconCheck from "./../../images/icon-check.svg"
import iconCheckActive from "./../../images/icon-check-active.svg"
import iconCheckActiveBtn from "./../../images/icon-check-active-btn.svg"
import iconInfo from "./../../images/icon-info.svg"
import iconCaution from "./../../images/icon-caution.svg"

// Global variables
const MESSAGE_PLACE_NONE = "Místo nevybráno."
const MESSAGE_PLACE_OK = "Místo úspěšně vybráno."
const MESSAGE_DESC_NONE = "Popis nevložen."
const MESSAGE_DESC_MANY_CHAR = "Překročen povolený počet znaků."
const MESSAGE_DESC_OK = "Popis vložen."
const MESSAGE_EMAIL_NONE = "email nevložen."
const MESSAGE_EMAIL_BAD_FORMAT = "Chybný email."
const MESSAGE_EMAIL_OK = "email vložen."

const LOCAL_ST_EMAIL = "parking_feedback_form_email"
const MAX_DESC_CHARACTERS = 500

function FeedBack(props) {
  // Ref
  // const zonesRef = useRef(null)

  // State
  const [sketchViewModel, setSketchViewModel] = useState(false) 
  const [sketchLayer, setSketchLayer] = useState(false) 
  const [sketchBtnState, setSketchBtnState] = useState("disabled") 
  const [locateBtnState, setLocateBtnState] = useState("disabled") 
  const [loadingVisible, setLoadingVisible] = useState(false)
  const [formState, setFormState] = useState({
    place: {
      value: "",
      message: MESSAGE_PLACE_NONE,
      state: "OK"
    },
    description: {
      value: "",
      message: MESSAGE_DESC_NONE,
      state: "NONE"
    },
    email: {
      value: localStorage.getItem(LOCAL_ST_EMAIL) ? localStorage.getItem(LOCAL_ST_EMAIL) : "",
      message: MESSAGE_EMAIL_NONE,
      state: "NONE"
    }
  })

  // Whole form validation
  const isFormValid = () => {
    return formState.place.state === "OK" &&
           formState.description.state === "OK" &&
           formState.email.state === "OK";
  }

  // Send feedback
  const sendFeedback = () => {
    if (isFormValid()) {
      localStorage.setItem(LOCAL_ST_EMAIL, formState.email.value)

      console.log(props.config.appWidget.feedbackServiceUrl)
    }
  }


  // Email validation
  const validateEmail = (email) => {
    if (!email) return {message: MESSAGE_EMAIL_NONE, state: "NONE"}

    const validation = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

    if (validation) return {message: MESSAGE_EMAIL_OK, state: "OK"}
    else return {message: MESSAGE_EMAIL_BAD_FORMAT, state: "CAUTION" }
  }

  // Description validation
  const validateDescription = (description) => {
    if (!description) return {message: MESSAGE_DESC_NONE, state: "NONE"}

    const validation = description.length > MAX_DESC_CHARACTERS ? false : true

    if (validation) return {message: MESSAGE_DESC_OK, state: "OK"}
    else return {message: MESSAGE_DESC_MANY_CHAR, state: "CAUTION" }
  }

  // Handle description
  const handleDescription = (e) => {
    const value = e.target.value
    const validation = validateDescription(value)
    setFormState((prev) => ({
      ...prev, 
      description: {
        value,
        message: validation.message,
        state: validation.state
    }}))
  }

  // Handle email
  const handleEmail = (e) => {
    const value = e.target.value
    const validation = validateEmail(value)
    setFormState((prev) => ({
      ...prev, 
      email: {
        value,
        message: validation.message,
        state: validation.state
    }}))
  }

  // Enable sketching
  const enableSketching = () => {
    props.view.graphics.removeAll()
    sketchLayer.removeAll()
    sketchViewModel.create("point")
    setSketchBtnState("sketching")
  } 

  useEffect(() => { 
    if (!props.view) { return }

    // Sketch View Model
    const sketchLayerInit = new GraphicsLayer({listMode: "hide"})
    props.view.map.add(sketchLayerInit)
    setSketchLayer(sketchLayerInit)
    setSketchBtnState("active")
    setLocateBtnState("active")

    const sketchSymbol = {
      type: "simple-marker",
      style: "circle",
      size: 15,
      color: "#00F700",
      outline: {
        color: "#ffffff",
        width: 1.5
      }
    }

    setSketchViewModel( 
      new SketchViewModel({
        view: props.view,
        layer: sketchLayerInit,
        pointSymbol: sketchSymbol,
        defaultUpdateOptions: {highlightOptions: {enabled: false}}
      })
    )
  }, [props.view])

  useEffect(() => { 
    const savedEmail = localStorage.getItem(LOCAL_ST_EMAIL)
    if (savedEmail || typeof savedEmail === 'string') {
      const validation = validateEmail(savedEmail)
      setFormState((prev) => ({
        ...prev, 
        email: {
          value: prev.email.value,
          message: validation.message,
          state: validation.state
      }}))
    }
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
              className={`feedback-btn ${sketchBtnState}`}
              onClick={enableSketching}
            >
              <img src={iconPen} alt="zakreslit" />
              {props.config.appLabels.appWidgetFeedbackDrawPlace}
            </div>
            <div 
              className={`feedback-btn ${locateBtnState}`}
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
              scale="s" 
              value={formState.description.value}
              onCalciteTextAreaInput={handleDescription}
            />
        </div>
        <div className="feedback-part-footer">
          <CalciteInputMessage scale="m" className={`state-${formState.description.state}`}>
            <img src={formState.description.state === "OK" ? iconCheckActive : formState.description.state === "NONE" ? iconInfo : iconCaution} alt="status" />
            {formState.description.message}
          </CalciteInputMessage>
        </div>
      </div>
      {/* Email feedback */}
      <div className="feedback-part">
        <div className="feedback-part-header">
          {props.config.appLabels.appWidgetFeedbackEmailTitle}
        </div>
        <div className="feedback-part-body">
          <CalciteInput 
            className="feedback-input" 
            input-mode="email" 
            scale="s" 
            type="email" 
            icon="envelope"
            value={formState.email.value}
            onCalciteInputInput={handleEmail}
           />
        </div>
        <div className="feedback-part-footer">
          <CalciteInputMessage scale="m" className={`state-${formState.email.state}`}>
            <img src={formState.email.state === "OK" ? iconCheckActive : formState.email.state === "NONE" ? iconInfo : iconCaution} alt="status" />
            {formState.email.message}
          </CalciteInputMessage>
        </div>
      </div>
      {/* Send feedback */}
      <div className="feedback-part">
        <div className="feedback-part-body feedback-buttons">
          <div 
            className={`feedback-btn send-btn ${isFormValid() && "active"}`}
            onClick={sendFeedback}  
            >
            <img src={isFormValid() ? iconCheckActiveBtn : iconCheck} alt="odeslat"/>Odeslat
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBack;