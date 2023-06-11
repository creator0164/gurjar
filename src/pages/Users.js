import React from "react";
import TableData from "../components/TableData";

function Users() {
  return (
    <div className="bg-[#f0f0f0] h-full rounded-tl-[3.5rem] rounded-bl-[3.5rem] p-10">
      <div className="h-full">
        <div className="flex flex-col justify-between text-white bg-[#666] h-full w-full rounded-[1.5rem] p-10 shadow">
         <TableData />
        </div>
      </div>
    </div>
  );
}

export default Users;
