import React, { useEffect, useRef } from "react"

import LegendWidget from "@arcgis/core/widgets/Legend"

function Legend(props) {

	// Refs
  const legendDiv = useRef(null);

  useEffect(() => {
		if (legendDiv.current && props.view) {

			// Legend widget
			new LegendWidget({
					view: props.view,
					container: legendDiv.current
			});

    }
		
  }, []);

  return (
    <div className="legend-div" ref={legendDiv}></div>
  );
}

export default Legend;