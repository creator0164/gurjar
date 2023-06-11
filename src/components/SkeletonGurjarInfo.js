import React from "react";

function SkeletonGurjarInfo() {
  return (
    <div className="mb-10">
      <p className="animate-pulse bg-gray-300 h-5 w-1/2 mb-2"></p>
      <p className="animate-pulse bg-gray-300 h-5 w-1/3 mb-2"></p>
      <p className="animate-pulse bg-gray-300 h-5 w-1/4 mb-2"></p>
      <p className="animate-pulse bg-gray-300 h-5 w-1/5"></p>
    </div>
  );
}

export default SkeletonGurjarInfo;
