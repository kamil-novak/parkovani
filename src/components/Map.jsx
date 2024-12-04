import React, { useEffect, useRef, useState } from "react"

import MapView from "@arcgis/core/views/MapView"
import WebMap from "@arcgis/core/WebMap"
import Home from "@arcgis/core/widgets/Home"
import Search from "@arcgis/core/widgets/Search"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Locate from "@arcgis/core/widgets/Locate"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle"
import Basemap from "@arcgis/core/Basemap"
import Expand from "@arcgis/core/widgets/Expand"

import AppWidget from "./widgets/AppWidget"

// CSS
import "./Map.css";

function Map(props) {

  // State
  const [mapView, setMapView] = useState(null);
  const [appWidgetOpened, setAppWidgetOpened] = useState(false);

	// Refs
  const mapDiv = useRef(null);
  const appWidgetEl = useRef(null)
  
  // Toggle App Widget
  const toggleAppWidget = () => {
    appWidgetOpened ? setAppWidgetOpened(false) : setAppWidgetOpened(true)
  }

  useEffect(() => {
  
      if (mapDiv.current && props.config) {
 
        // Map
        const map = new WebMap({
          portalItem: {
            id: props.config.webMapId,
            portal: {
              url: props.config.portal
            }
          }
        })

				// View
        const view = new MapView({
          container: mapDiv.current,
          map
        })

   		  // Home widget
				const homeWidget = new Home({
					view
				})

				// Locate widget
				const locateWidget = new Locate({
					view
				})

        // Basemap Toggle widget
        const basemapContainer = document.createElement("div")
        basemapContainer.classList.add("toggle-basemap-container")
        new BasemapToggle({
          view,
          container: basemapContainer,
          nextBasemap: new Basemap({
            portalItem: {
              id: props.config.nextBasemap.portalItemId
            }
          })
        })

				// Search widget 
				const searchWidget = new Search({ 
          view,
          includeDefaultSources: false,
          sources: [
            {
              layer: new FeatureLayer({
								url: props.config.search.layerUrl,
								outFields: ["*"],
								definitionExpression: props.config.search.layerUrl.definitionExpression
							}),
              searchFields: props.config.search.layerUrl.searchFields,
              displayField: props.config.search.layerUrl.displayField,
              exactMatch: false,
              outFields: ["*"],
              name: "Adresní místa",
              placeholder: "Hledat adresu",
              maxResults: 6,
              maxSuggestions: 6,
              suggestionsEnabled: true,
              minSuggestCharacters: 3,
              popupEnabled: false,
              resultSymbol: {
                type: "simple-marker",
                size: "12px",  
                color: [0, 0, 0, 0],
                outline: {  
                  color: [217, 0, 18],
                  width: 2  
                }
              }
            }
          ]
        })
				
        // Add widgets
        view.ui.add(searchWidget, "manual")
				view.ui.add(homeWidget, "top-left")
				view.ui.move([ "zoom" ], "top-left")
				view.ui.add(locateWidget, "top-left")
				view.ui.add(basemapContainer, "manual")
				view.ui.add(appWidgetEl.current, "manual")

        view.when(() => {
   
          // Disable loader
          props.loaded(true)

          // Layer visibility - app theme
          props.setVisibleLayers(view, null)
          setMapView(view)
          
				});

      }
  }, [mapDiv])

  return (
    <div className="map-div" ref={mapDiv}>
      <div ref={appWidgetEl}
        title="Témata a oblasti parkování" 
        className="app-button" 
        onClick={toggleAppWidget}
      >
        <div className="icon"></div>
        <div className="label">{props.config.appLabels.appWidgetTitle}</div>
      </div>

      <AppWidget
        opened={appWidgetOpened}
        toggleAppWidget={toggleAppWidget}
        view={mapView} 
        config={props.config} 
        setActualTheme={props.setActualTheme} 
        actualThemeInfo={props.actualThemeInfo} 
        setVisibleLayers={props.setVisibleLayers} 
      />
    </div>
  );
}

export default Map;