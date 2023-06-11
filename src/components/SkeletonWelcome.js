import React from "react";

function SkeletonWelcome() {
  return (
    <div className="flex flex-col items-center text-3xl my-7">
      <p className="animate-pulse bg-gray-300 h-5 w-1/2 mb-2"></p>
      <p className="animate-pulse bg-gray-300 h-5 w-1/3 mb-2"></p>
    </div>
  );
}

export default SkeletonWelcome;
