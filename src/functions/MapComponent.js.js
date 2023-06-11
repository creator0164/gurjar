import React from "react";

const getColorOpacity = (value) => {
  let opacity = 1;

  switch (true) {
    case value <= 100:
      opacity = 0.2;
      break;
    case value >= 101 && value <= 1000:
      opacity = 0.4;
      break;
    case value >= 1001 && value <= 2000:
      opacity = 0.6;
      break;
    default:
      opacity = 1;
      break;
  }

  return opacity;
};

const MapComponent = () => {
  const casesData = [
    { country: "China", cases: 10000000 },
    { country: "America", cases: 20 },
    { country: "Philippines", cases: 1023 },
    { country: "Brazil", cases: 2003 },
    { country: "Korea", cases: 200 },
    // Add more cases data for other countries
  ];

  return (
    <div>
      {casesData.map((data) => (
        <div
          key={data.country}
          style={{
            backgroundColor: "orange",
            opacity: getColorOpacity(data.cases),
            width: "100px",
            height: "100px",
            margin: "10px",
          }}
        >
          {data.country}
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <h3>Legend:</h3>
        <div>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "orange",
              opacity: 0.2,
            }}
          ></span>{" "}
          Lighter Orange (Population &lt; 10,000)
        </div>
        <div>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "orange",
              opacity: 0.4,
            }}
          ></span>{" "}
          Orange (10,000 &lt; Population &lt; 20,000)
        </div>
        <div>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "orange",
              opacity: 0.6,
            }}
          ></span>{" "}
          Heavier Orange (20,000 &lt; Population &lt; 30,000)
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
