import L from "leaflet";
import { useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";

function HighlightedFeatured({ infoRef }) {
  const map = useMap();
  const infoControlRef = useRef(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const info = L.control({ position: "topright" });

    info.onAdd = function () {
      this.div = L.DomUtil.create("div", "info");
      this.update();
      return this.div;
    };

    info.update = function (props) {
      this.div.innerHTML =
        "<h4>US Population Density</h4>" +
        (props
          ? "<b>" +
            props.countryNames +
            "</b><br />" +
            props.populationData +
            " people / mi<sup>2</sup>"
          : "Hover over a state");
    };
    //   infoControlRef.current = info;
    //   if (infoRef) {
    //     infoRef(info);
    //   }
    info.addTo(map);

    return () => {
      info.remove(map);
    };
  }, [map]);

  return null;
}

export default HighlightedFeatured;
