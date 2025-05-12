// CSS
import "./FeedBack.css";

// Modules
import React, { useEffect, useState, useRef } from "react"

// Esri
import LocateVM from "@arcgis/core/widgets/Locate/LocateViewModel"  
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel" 
import Graphic from "@arcgis/core/Graphic" 
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"

// Calcite
import "@esri/calcite-components/dist/components/calcite-text-area";
import "@esri/calcite-components/dist/components/calcite-input-message";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-icon";
import { 
  CalciteTextArea, CalciteInputMessage, CalciteInput, CalciteIcon } from "@esri/calcite-components-react";

// Images
import iconPen from "./../../images/icon-pen.svg"
import iconPenActive from "./../../images/icon-pen-active.svg"
import iconGps from "./../../images/icon-gps.svg"
import iconGpsActive from "./../../images/icon-gps-active.svg"
import iconRefresh from "./../../images/icon-refresh.svg"
import iconRefreshActive from "./../../images/icon-refresh-active.svg"

import iconCheck from "./../../images/icon-check.svg"
import iconCheckActive from "./../../images/icon-check-active.svg"
import iconCheckActiveBtn from "./../../images/icon-check-active-btn.svg"
import iconInfo from "./../../images/icon-info.svg"
import iconCaution from "./../../images/icon-caution.svg"
import iconNext from "./../../images/icon-next.svg"
import iconNextActive from "./../../images/icon-next-active.svg"

import iconLoading from "./../../images/icon-loading.svg"

// Global variables
const MESSAGE_PLACE_NONE = "Místo nevybráno."
const MESSAGE_PLACE_OK = "Místo úspěšně vybráno."
const MESSAGE_DESC_NONE = "Popis nevložen."
const MESSAGE_DESC_MANY_CHAR = "Překročen povolený počet znaků."
const MESSAGE_DESC_OK = "Popis vložen."
const MESSAGE_EMAIL_NONE = "Email nevložen."
const MESSAGE_EMAIL_BAD_FORMAT = "Chybný email."
const MESSAGE_EMAIL_OK = "Email vložen."

const LOCAL_ST_EMAIL = "parking_feedback_form_email"
const MAX_EMAIL_CHARACTERS = 250
const MAX_DESC_CHARACTERS = 500

function FeedBack(props) {
  // State
  const [sketchViewModel, setSketchViewModel] = useState(false) 
  const [sketchBtnState, setSketchBtnState] = useState("disabled") 
  const [locateBtnState, setLocateBtnState] = useState("disabled") 
  const [removeBtnState, setRemoveBtnState] = useState("disabled") 
  const [locateViewModel, setLocateViewModel] = useState(false) 
  const [locatingActive, setLocatingActive] = useState(false) 
  const [loadingVisible, setLoadingVisible] = useState(false)
  const [feedbackSuccessMessage, setFeedbackSuccessMessage] = useState(false)
  const [formVisibility, setFormVisibility] = useState(false)
  const [feedbackErrorMessage, setFeedbackErrorMessage] = useState(false)
  const [formState, setFormState] = useState({
    place: {
      value: null,
      message: MESSAGE_PLACE_NONE,
      state: "NONE"
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

  // Refs
  const descriptionTextAreaRef = useRef()
  const emailInputAreaRef = useRef()


  const PLACE_SYMBOL = {
    type: "simple-marker",
    style: "circle",
    size: props.config.appWidget.feedbackMapSymbol.size,
    color: props.config.appWidget.feedbackMapSymbol.color,
    outline: {
      color: props.config.appWidget.feedbackMapSymbol.outline.color,
      width: props.config.appWidget.feedbackMapSymbol.outline.width
    }
  }

  // Whole form validation
  const isFormValid = () => {
    return formState.place.state === "OK" &&
           formState.description.state === "OK" &&
           formState.email.state === "OK";
  }

  // Send feedback
  const sendFeedback = async () => {
    if (isFormValid()) {
      // Before sending...
      setLoadingVisible(true)
      setSketchBtnState("disabled")
      setLocateBtnState("disabled")
      setRemoveBtnState("disabled")
      descriptionTextAreaRef.current.disabled = true
      emailInputAreaRef.current.disabled = true
      localStorage.setItem(LOCAL_ST_EMAIL, formState.email.value)
      const sendResponse = await sendData()

      // After sending
      resetForm()
      setLoadingVisible(false)
      if (sendResponse !== "ERROR") {
        setFeedbackSuccessMessage(true)
      } else {
        setFeedbackErrorMessage(true)
      }
      setSketchBtnState("ready")
      setLocateBtnState("ready")
      setRemoveBtnState("disabled")
      descriptionTextAreaRef.current.disabled = false
      emailInputAreaRef.current.disabled = false
      setTimeout(() => {
        setFeedbackErrorMessage(false)
        setFeedbackSuccessMessage(false)
      }, 5000)
    }
  }

  // Send data through Feature layer
  const sendData = async () => {
    const featureLayer = new FeatureLayer({
      url: props.config.appWidget.feedbackServiceUrl
    })

    const attributes = {
      [props.config.appWidget.feedbackAttributes.typeAttr]: props.config.appWidget.feedbackAttributes.typeAttrValue,
      [props.config.appWidget.feedbackAttributes.emailAttr]: formState.email.value,
      [props.config.appWidget.feedbackAttributes.zadalAttr]: props.config.appWidget.feedbackAttributes.zadalAttrValue,
      [props.config.appWidget.feedbackAttributes.descriptionAttr]: formState.description.value,
      [props.config.appWidget.feedbackAttributes.idUliceAttr]: props.config.appWidget.feedbackAttributes.idUliceAttrValue,
      [props.config.appWidget.feedbackAttributes.dateAttr]: Date.now()
    }

    const geometry = formState.place.value.geometry

    const feature = {
      geometry: geometry,
      attributes: attributes
    }

    try {
      const response = await featureLayer.applyEdits({
        addFeatures: [feature]
      })
      return response
    }
    catch {
      return "ERROR"
    }
  }

  // Reset form
  const resetForm = () => {
    removeFeedbackGrapgic()
    setRemoveBtnState("disabled")
    setFormState((prev) => ({
      ...prev, 
      place: {
        value: null,
        message: MESSAGE_PLACE_NONE,
        state: "NONE"
      },
      description: {
        value: "",
        message: MESSAGE_DESC_NONE,
        state: "NONE"
      }
    }))
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
    else return {message: MESSAGE_EMAIL_BAD_FORMAT, state: "CAUTION"}
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
    // Remove old sketch
    removeFeedbackGrapgic()
    setFormState((prev) => ({
      ...prev, 
      place: {
        value: null,
        message: MESSAGE_PLACE_NONE,
        state: "NONE"
    }}))

    // Add new sketch
    sketchViewModel.create("point")
    setSketchBtnState("active")
    setRemoveBtnState("disabled")
  } 

  // Handle when place is created in the map
  const handlePlaceCreated = (graphic) => {
    setFormState((prev) => ({
      ...prev, 
      place: {
        value: graphic,
        message: MESSAGE_PLACE_OK,
        state: "OK"
    }}))
    setSketchBtnState("ready")
    setLocateBtnState("ready")
    setRemoveBtnState("ready")
  }

  // Handle when place is removed from map
  const handlePlaceRemoved = () => {
    removeFeedbackGrapgic()
    setFormState((prev) => ({
      ...prev, 
      place: {
        value: null,
        message: MESSAGE_PLACE_NONE,
        state: "NONE"
    }}))
    setSketchBtnState("ready")
    setLocateBtnState("ready")
    setRemoveBtnState("disabled")
  }

  // Enable locating
  const handleLocate = async () => {
    // Locating...
    removeFeedbackGrapgic()
    setSketchBtnState("disabled")
    setLocateBtnState("disabled")
    setLocatingActive(true)
    const place = await locateViewModel.locate()

    // Located
    setLocatingActive(false)
    setSketchBtnState("ready")
    setLocateBtnState("ready")
    handlePlaceCreated(new Graphic({
      geometry: {
        type: "point",
        longitude: place.coords.longitude, 
        latitude: place.coords.latitude
      }
    }))
  }

  // Remove feedback graphic
  const removeFeedbackGrapgic = () => {
    props.view.graphics.remove(formState.place.value)  
    props.view.graphics.remove(locateViewModel.graphic) 
  }

  useEffect(() => { 
    if (!props.view) { return }

    // Sketch View Model
    setSketchBtnState("ready")
    setLocateBtnState("ready")

    const SketchViewModelInit = new SketchViewModel({
      view: props.view,
      layer: props.view.graphics,
      pointSymbol: PLACE_SYMBOL,
      defaultUpdateOptions: {highlightOptions: {enabled: false}}
    })

    setSketchViewModel(SketchViewModelInit)
    SketchViewModelInit.on("create", (e) => {
      handlePlaceCreated(e.graphic)
    })

    // Locate View Model
    const locateVMInit = new LocateVM({
      view: props.view,
      scale: 500,
      popupEnabled: false,
      graphic: new Graphic({
        symbol: PLACE_SYMBOL
      })
    })
    setLocateViewModel(locateVMInit)

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
      {/* Locate feedback */}
      {removeBtnState === "disabled" && <div className="feedback-step">
        <div className="feedback-part">
          <div className="feedback-part-header">
            {props.config.appLabels.appWidgetFeedbackPlaceTitle}
          </div>
          <div className="feedback-part-body">
            <div className="feedback-buttons">
              {/* Draw */}
              <div 
                className={`feedback-btn ${sketchBtnState}`}
                onClick={enableSketching}
              >
                <img src={sketchBtnState === "active" || sketchBtnState === "ready" ? iconPenActive : iconPen} alt="zakreslit" />
                {sketchBtnState === "ready" ||  sketchBtnState === "disabled" ? props.config.appLabels.appWidgetFeedbackDrawPlace : props.config.appLabels.appWidgetFeedbackDrawingPlace}
              </div>
              {/* Locate */}
              <div 
                className={`feedback-btn ${locateBtnState}`}
                onClick={handleLocate}
              >
                <img src={locateBtnState === "active" || locateBtnState === "ready" ? iconGpsActive : iconGps}  alt="lokalizovat" />
                {locatingActive ? props.config.appLabels.appWidgetFeedbackLocatingPlace : props.config.appLabels.appWidgetFeedbackLocatePlace}
              </div> 
            </div>
          </div>
        </div>
      </div>}
      
      {/* Next step */}
      {removeBtnState === "ready" && <div className="feedback-step">
        <div className="feedback-part">
          <div className="feedback-part-body feedback-buttons">
            <div className="feedback-part-header">
              <img src={iconCheckActive} alt="check ikona" style={{paddingRight: "5px", top: "3px", position: "relative"}}/>
              {props.config.appLabels.appWidgetFeedbackPlaceLocated}
            </div>
            {/* Remove */}
            <div 
              className={`feedback-btn ${removeBtnState} remove`}
              onClick={handlePlaceRemoved}
            >
              <img src={removeBtnState === "ready" ? iconRefreshActive : iconRefresh}  alt={props.config.appLabels.appWidgetFeedbackRemovePlace} />
              {props.config.appLabels.appWidgetFeedbackRemovePlace}
            </div>  
            {/* Next button */}
            <div 
              className={`feedback-btn send-btn ${removeBtnState === "ready" ? "active" : ""}`}
              onClick={()=> {removeBtnState === "ready" ? setFormVisibility(true) : null}}  
              >
              <img src={removeBtnState === "ready" ? iconNextActive : iconNext} alt={props.config.appLabels.appWidgetFeedbackNextBtn}/>
              {props.config.appLabels.appWidgetFeedbackNextBtn}
            </div>
          </div>
        </div>
      </div>}

      {/* Form */}
      { formVisibility && <div className="feedback-form-overlay">
        <div className="feedback-form-container">
          <div className="feedback-form">
            <div className="feedback-form-header">
              <div className="feedback-form-title">
                {props.config.appLabels.appWidgetFeedbackFormTitle}
              </div>
              <div className="feedback-form-close" onClick={() => setFormVisibility(false)}>
                <CalciteIcon icon="x" scale="l" title="Zavřít" text-label="Zavřít" aria-hidden="false" aria-label="Zavřít" role="img" calcite-hydrated=""></CalciteIcon>
              </div>
            </div>
            {/* Describe feedback */}
            <div className="feedback-part">
              <div className="feedback-part-header">
                {props.config.appLabels.appWidgetFeedbackDescribeTitle}
              </div>
              <div className="feedback-part-body">
                  <CalciteTextArea 
                    ref={descriptionTextAreaRef}
                    className="feedback-textarea" 
                    maxLength={MAX_DESC_CHARACTERS}
                    placeholder="Popište..." 
                    resize="vertical" 
                    rows={props.isMobile ? "3" : "4"}
                    scale={"m"}
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
                  ref={emailInputAreaRef}
                  className="feedback-input" 
                  maxLength={MAX_EMAIL_CHARACTERS}
                  input-mode="email" 
                  scale={"m"}
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
                  className={`feedback-btn send-btn ${isFormValid() && !loadingVisible ? "active" : ""}`}
                  onClick={sendFeedback}  
                  >
                  <img src={isFormValid() && !loadingVisible ? iconCheckActiveBtn : isFormValid() && loadingVisible ? iconLoading : iconCheck} alt="odeslat"/>{!loadingVisible ?props.config.appLabels.appWidgetFeedbackSendBtn : props.config.appLabels.appWidgetFeedbackSendingBtn}
                </div>
              </div>
              {feedbackSuccessMessage && <div className="feedback-buttons">
                <div 
                  className="feedback-btn send-btn feedback-message success"
                  >
                  <img src={iconCheckActive} alt="zpětná vazba odeslána"/>{props.config.appLabels.appWidgetFeedbackSuccess}
                </div>
              </div>}
              {feedbackErrorMessage && <div className="feedback-buttons">
                <div 
                  className="feedback-btn send-btn feedback-message error"
                  >
                  <img src={iconCaution} alt="zpětná vazba nebyla odeslána"/>{props.config.appLabels.appWidgetFeedbackError}
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div> }
    </div>
  )
}

export default FeedBack;