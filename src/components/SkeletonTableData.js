import React from "react";

function SkeletonTableData() {
  return (
    <div className="shadow-lg overflow-y-auto rounded-lg">
      <table className="table-auto w-full text-left scrollable-tbody">
        <thead className="bg-[#111] text-white px-4 py-2 animate-pulse">
          <tr>
            <th className="px-4 py-2 rounded-tl-lg">
              <div className="flex items-center space-x-4">
                <div className="animate-pulse bg-[#111] rounded text-white rounded-lg h-8 w-24"></div>
              </div>
            </th>
            <th className="px-4 py-2 rounded-tr-lg">
              <div className="animate-pulse bg-[#111] rounded text-white rounded-lg h-8 w-16"></div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white even:bg-[#A0C1D120]">
          <tr className="">
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-40"></div>
            </td>
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-16"></div>
            </td>
          </tr>
          <tr className="">
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-40"></div>
            </td>
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-16"></div>
            </td>
          </tr>
          <tr className="">
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-40"></div>
            </td>
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-16"></div>
            </td>
          </tr>
          <tr className="">
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-40"></div>
            </td>
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-16"></div>
            </td>
          </tr>
          <tr className="">
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-40"></div>
            </td>
            <td className="pl-4 pr-2 py-1">
              <div className="animate-pulse bg-gray-300 rounded h-6 w-16"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SkeletonTableData;
