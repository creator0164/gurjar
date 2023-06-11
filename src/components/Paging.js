import React from "react";

function Paging({ currentPage, totalPages, handlePageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center space-x-2">
      {/* <button
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button> */}

      {/* Bullets */}
      <ul className="flex items-center">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`border border-black rounded-full overflow-hidden mx-2 ${
              pageNumber === currentPage
                ? "bg-gray-800 w-4 h-4"
                : "bg-white w-2 h-2"
            }`}
          ></li>
        ))}
      </ul>
{/* 
      <button
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button> */}
    </div>
  );
}

export default Paging;
