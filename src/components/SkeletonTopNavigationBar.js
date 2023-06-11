import React from "react";
import logo from "../images/logo.png";

function SkeletonTopNavigationBar() {
  return (
    <div className="flex justify-between items-center px-7 py-3 bg-[#111] text-gray-50 shadow">
      <div className="animate-pulse">
      <img src={logo} className="h-10 w-10" />

      </div>

      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-transparent hover:ring-white cursor-pointer active:ring-transparent">
        <div className="animate-pulse">
          <div className="overflow-hidden rounded-full w-9 h-9 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonTopNavigationBar;
