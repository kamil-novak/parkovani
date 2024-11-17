import React, { useEffect, useRef } from "react"

import MapView from "@arcgis/core/views/MapView"
import WebMap from "@arcgis/core/WebMap"
import Home from "@arcgis/core/widgets/Home"
import Search from "@arcgis/core/widgets/Search"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Locate from "@arcgis/core/widgets/Locate"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle"
import Basemap from "@arcgis/core/Basemap"

// CSS
import "./Map.css";

function Map(props) {

	// Refs
  const mapDiv = useRef(null);

  // Set visible layers according to the configuration
  const setVisibleLayers = (view) => {
    if (props.urlParams.size > 0 && ( props.urlParams.get("theme") || props.urlParams.get("THEME"))) {

      const appThemeName = props.urlParams.get("theme") || props.urlParams.get("THEME")
      const appTheme = props.config.appThemes.filter((themeItem) => {
        if (themeItem.paramValue.toLowerCase() === appThemeName.toLowerCase()) {
          return themeItem
        }
      })

      if (appTheme.length > 0) {
        view.map.layers.forEach((layer) => {
          layer.visible = false
          
          if (appTheme[0].visibleLayers.includes(layer.title)) {
            layer.visible = true
          }
        })
      }
    }
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
          map,
          padding: {
            left: 49
          }
        })
        props.view(view)

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
        view.ui.add(searchWidget, "top-trailing")
				view.ui.add(homeWidget, "top-right")
				view.ui.move([ "zoom" ], "top-right")
				view.ui.add(locateWidget, "top-right")
				view.ui.add(basemapContainer, "bottom-right")

        view.when(() => {
   
          // Disable loader
          props.loaded(true)

          // Layer visibility - app theme
          setVisibleLayers(view)
          
				});

      }
  }, [mapDiv])

  return (
    <div className="map-div" ref={mapDiv}></div>
  );
}

export default Map;