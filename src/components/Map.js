import React, { useEffect, useRef, useState } from "react";
import L, { Control } from "leaflet";
import "./../App.css";
import Loading from "../pages/Loading";
import Legend from "../pages/Legend";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  GeoJSON,
  useMapEvents,
  useMap,
} from "react-leaflet"; //import react-leaflet packages
import { getColorOpacity } from "../functions/getColorOpacity";

function Map({ mergedData }) {
  const maxBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  const [countryData, setCountryData] = useState(false); //country data will go here
  const locationStyle = (feature) => {
    return {
      fillColor: "#a52a2acc",
      weight: 1,
      color: "#555",
      fillOpacity: getColorOpacity(feature.properties.population),
    };
  };

  const handleCountryHover = (countryName, population, opacity) => {
    const container = document.querySelector(".containerInfo");
    const nameElement = document.querySelector(".country-name");
    const populationElement = document.querySelector(".country-population");
    container.style.opacity = opacity;
    nameElement.innerHTML = `<b>${countryName}</b>`;

    if (population === 0) {
      populationElement.innerHTML = null;
      populationElement.style.padding = 0;
    } else {
      populationElement.innerHTML = `<b>Population</b>: ${population}`;
      populationElement.style.padding = "10px";
    }
  };
  const CountryNameControl = () => {
    const map = useMap();

    const CountryName = Control.extend({
      onAdd: function () {
        const container = L.DomUtil.create(
          "div",
          "containerInfo bg-white shadow-md rounded-lg"
        );
        L.DomUtil.create(
          "div",
          "country-name text-center bg-[#555] text-white rounded-lg shadow p-3",
          container
        );
        L.DomUtil.create(
          "div",
          "country-population text-center text-black p-3",
          container
        );
        container.style.opacity = 0;
        return container;
      },
    });

    map.eachLayer((layer) => {
      if (layer instanceof CountryName) {
        map.removeControl(layer);
      }
    });

    const countryNameControl = new CountryName({ position: "topright" });
    countryNameControl.addTo(map);

    return null;
  };

  const countryMouseOver = (event) => {
    event.target.setStyle({
      weight: 5,
      color: "#111",
    });
    event.target.openPopup();
    handleCountryHover(
      event.target.feature.properties.ADMIN,
      event.target.feature.properties.population,
      1
    );
  };

  const countryMouseOut = (event) => {
    event.target.setStyle({
      weight: 1,
      color: "#555",
    });
    event.target.closePopup();
    handleCountryHover("", "", 0);
  };

  const movePopup = (event) => {
    const popup = event.target.getPopup();
    if (popup && popup.isOpen()) {
      popup.setLatLng(event.latlng);
    } else {
      event.target.openPopup();
    }
  };

  const initialBounds = [0, -0];
  const mapRef = useRef();

  const featureClicked = (event) => {
    mapRef.current.fitBounds(event.target.getBounds());
  };

  const lookPopulation = (population) => {
    if (population === 0) {
      return "";
    } else {
      return population;
    }
  };

  const onEachCountry = (country, layer) => {
    // const countryUser = JSON.stringify(country);
    // console.log(countryUser);
    // const population = country.properties.population; //Population Data

    // layer.bindPopup(``, {
    //   closeButton: false,
    //   autoPan: false,
    // });
    layer.on({
      mouseover: countryMouseOver,
      mouseout: countryMouseOut,
      mousemove: movePopup, // Call the movePopup function on mousemove event
      click: featureClicked,
    });
  };

  const handleFindLocation = () => {
    setIsEnabledLocation(true);
  };

  const handleLocationFound = () => {
    setIsEnabledLocation(false);
  };

  const [isLocationEnabled, setIsEnabledLocation] = useState(false);
  const FindCurrentLocation = ({ isEnabled, onLocationFound }) => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        if (isEnabled) {
          map.locate();
        }
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(), map.zoomIn(5));
        onLocationFound();
      },
    });
    useEffect(() => {
      if (isEnabled) {
        map.locate();
      }
    }, [isEnabled, map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };
  useEffect(() => {
    setCountryData(true);
    handleFindLocation();
  }, []);

  return (
    <div>
      <div className="my-2 shadow">
        {/* Map Container, where all map the customizing goes... */}
        <MapContainer
          center={initialBounds}
          ref={mapRef}
          zoom={2}
          // scrollWheelZoom={false}
          style={{ height: "70vh", zIndex: 0 }}
          maxBounds={maxBounds} // Set the maxBounds option
          maxBoundsViscosity={1.0} // Adjust the viscosity as needed
        >
          <div>
            {countryData && (
              <div>
                <TileLayer
                  attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a> contributors'
                  url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=FV1r2QcIKUsCze0nuxUg"
                  zIndex={0}
                  minZoom={2}
                />
                {mergedData.features.map((country) =>
                  country.properties.users.map((user, key) => {
                    // const [lng, lat] = country.geometry.coordinates[0][0]; // Get the first set of coordinates for the country const [lng, lat] = user.userCoordinates; // Access the coordinates correctly
                    // const [lng, lat] = user.userCoordinates; // Access the coordinates correctly

                    const { userDetails, userCoordinates, pictureSrc } = user; // Destructure the user object

                    // console.log(user);
                    return (
                      <Marker
                        key={key}
                        position={userCoordinates}
                        icon={L.divIcon({
                          className: "custom-icon",
                          html: `<img class="rounded-full h-5 w-5 ring-[#333] ring-2" src=${pictureSrc} />`,

                          // iconSize: [38, 95], // size of the icon
                          // shadowSize: [50, 64], // size of the shadow
                          // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                          // shadowAnchor: [4, 62], // the same for the shadow
                          // popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
                        })}
                      >
                        <Popup className="custom-popup">
                          <p>Name:<b> {userDetails.name}</b></p>
                          <p>Blood group:<b> {userDetails.blood_group}</b></p>
                          <p>Country:<b> {userDetails.country}</b></p>
                          <p>State:<b> {userDetails.state}</b></p>
                          <p>City:<b> {userDetails.city}</b> </p>
                          <p>Village:<b> {userDetails.village}</b> </p>
                        </Popup>
                      </Marker>
                    );
                  })
                )}

                <Legend />
                <CountryNameControl />

                <GeoJSON
                  style={locationStyle}
                  data={mergedData.features}
                  onEachFeature={onEachCountry}
                />

                {/* The Marker and the popup tells the place you started. (A follow up feature where you will start at your current location should be added ) */}
                <FindCurrentLocation
                  isEnabled={isLocationEnabled}
                  onLocationFound={handleLocationFound}
                />
              </div>
            )}
          </div>

          {/* Here as you can see, I put a different tile layer (Carto maps) to continue customizing panes*/}
        </MapContainer>
      </div>

      <button
        className="bg-[#0B77FB] text-white rounded-lg p-2 w-full mb-10 shadow-lg hover:bg-[#222]"
        onClick={handleFindLocation}
      >
        Find Current Location
      </button>
    </div>
  );
}

export default Map;
