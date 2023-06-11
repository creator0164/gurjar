import React from "react";

function SkeletonMap() {
  return (
    <div>
      <div className="my-2 shadow bg-gray-200 animate-pulse">
        {/* Map Container, where all map the customizing goes... */}
        <div className="h-[70vh] relative z-0">
          <div className="bg-gray-300 w-full h-full"></div>
          {/* Placeholder for map */}
        </div>
      </div>

      <button
        className="bg-[#555] text-white rounded-lg p-2 w-full mb-10 shadow-lg hover:bg-[#222] animate-pulse"
        disabled
      >
        
      <p className="animate-pulse bg-gray-300 h-5 w-2/5 mx-auto"></p>
      </button>
    </div>
  );
}

export default SkeletonMap;
