import React from "react";
import "./../App.css";
import SkeletonMap from "../components/SkeletonMap";
import SkeletonTopNavigationBar from "../components/SkeletonTopNavigationBar";
import SkeletonTableData from "../components/SkeletonTableData";
import SkeletonGurjarInfo from "../components/SkeletonGurjarInfo";
import SkeletonWelcome from "../components/SkeletonWelcome";

function Loading() {
  return (
    <div>
      <SkeletonTopNavigationBar />
      <div className="container mx-auto max-w-5xl">
        <SkeletonWelcome />
        <SkeletonMap />
        <SkeletonGurjarInfo />
        <SkeletonTableData />
      </div>
      s<div className="h-[100px]"></div>
    </div>
  );
}

export default Loading;
