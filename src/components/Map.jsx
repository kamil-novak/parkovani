import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom/client";

import MapView from "@arcgis/core/views/MapView"
import WebMap from "@arcgis/core/WebMap"
import Home from "@arcgis/core/widgets/Home"
import Search from "@arcgis/core/widgets/Search"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Locate from "@arcgis/core/widgets/Locate"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle"
import Basemap from "@arcgis/core/Basemap"
import Expand from "@arcgis/core/widgets/Expand"

import Themes from "./widgets/Themes"

// CSS
import "./Map.css";

function Map(props) {

  // State
  const [mapView, setMapView] = useState(null);
  const [appWidgetRoot, setAppWidgetRoot] = useState(null);

	// Refs
  const mapDiv = useRef(null);
  const appWidgetDiv = useRef(document.createElement("div"));
  
  // Test
  const testEl = <div>Další App widget element</div>

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

        // App widget
        const appWidget = new Expand({
          view,
          label: "Témata a oblasti parkování",
          expandTooltip: "Témata a oblasti parkování",
          collapseTooltip: "Sbalit Témata a oblasti parkování",
					content: appWidgetDiv.current,
          placement: "left-start",
          group: "top-left",
          expandIcon: "apps",
          collapseIconClass: "app-widget-icon-collapsed"
				})
        if (!appWidgetRoot) { 
          const newAppWidgetRoot = ReactDOM.createRoot(appWidgetDiv.current) 
          setAppWidgetRoot(newAppWidgetRoot)
          newAppWidgetRoot.render(
            <>
              {testEl}
              <Themes 
                view={view}
                config={props.config} 
                setActualTheme={props.setActualTheme} 
                actualThemeInfo={props.actualThemeInfo}
                setVisibleLayers={props.setVisibleLayers}
              />
            </>); 
        } 

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
        view.ui.add(searchWidget, "top-right")
        view.ui.add(appWidget, "top-left")
				view.ui.add(homeWidget, "top-left")
				view.ui.move([ "zoom" ], "top-left")
				view.ui.add(locateWidget, "top-left")
				view.ui.add(basemapContainer, "bottom-right")

        view.when(() => {
   
          // Disable loader
          props.loaded(true)

          // Layer visibility - app theme
          props.setVisibleLayers(view, null)
          setMapView(view)
          
				});

      }
  }, [mapDiv])

  useEffect(() => { 
    if (appWidgetRoot) { 
      appWidgetRoot.render( 
        <>
          {testEl}
          <Themes 
            view={mapView} 
            config={props.config} 
            setActualTheme={props.setActualTheme} 
            actualThemeInfo={props.actualThemeInfo} 
            setVisibleLayers={props.setVisibleLayers} 
          /> 
        </>)
    } 
  }, [ appWidgetRoot, props.actualThemeInfo, mapView ])

  return (
    <div className="map-div" ref={mapDiv}></div>
  );
}

export default Map;