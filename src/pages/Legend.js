import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

function Legend() {
  const map = useMap();
  useEffect(() => {
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = `
  <h4 class="text-black">Legend Population</h4>
  <div class="legend-item">
    <span class="legend-color" style="background-color: #a52a2a; opacity: 0"></span>
    <span class="legend-label">0</span>
  </div>
  <div class="legend-item">
    <span class="legend-color" style="background-color: #a52a2a; opacity: 0.3"></span>
    <span class="legend-label">1 - 100</span>
  </div>
  <div class="legend-item">
    <span class="legend-color" style="background-color: #a52a2a; opacity: 0.4"></span>
    <span class="legend-label">101 - 1000</span>
  </div>
  <div class="legend-item">
    <span class="legend-color" style="background-color: #a52a2a; opacity: 0.6"></span>
    <span class="legend-label">1001 - 2000</span>
  </div>
  <div class="legend-item">
    <span class="legend-color" style="background-color: #a52a2a; opacity: 0.8"></span>
    <span class="legend-label">2000+</span>
  </div>
`;

      return div;
    };
    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map]);
  return null;
}

export default Legend;
