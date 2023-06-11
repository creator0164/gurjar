import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import jsonData from "../data/countries.json";
import sampleDatabase from "../data/SampleDatabase";
// import { getColorOpacity } from './getColorOpacity';

const MyComponent = () => {
  const [mergedData, setMergedData] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchPopulationData = async () => {
    try {
      // Fetch or use axios to get the database here...
      // Code here...

      // Merging the data in the database with the JSON
      const mergedData = jsonData.features.map((feature) => {
        const population = sampleDatabase.find(
          (data) => data.ADMIN === feature.properties.ADMIN
        );

        return {
          ...feature,
          properties: {
            ...feature.properties,
            population: population ? population.population : 0,
          },
        };
      });

      const updatedMergedData = {
        type: jsonData.type,
        features: mergedData,
      };
      setMergedData(updatedMergedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching population data:", error);
    }
  };

  useEffect(() => {
    fetchPopulationData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading state while data is being fetched
  }

  // Render the desired component with the merged data
  return <button onClick={() => console.log(mergedData)}>look</button>;
};

export default MyComponent;
