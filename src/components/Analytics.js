import React from "react";

function Analytics() {

    

  return (
    <div className="bg-[#f0f0f0] h-full rounded-tl-[3.5rem] rounded-bl-[3.5rem] p-10">
      <div className="grid grid-cols-3 gap-5 h-full">
        <div className="flex flex-col justify-between text-white bg-[#666] w-full rounded-[1.5rem] p-10 shadow">
          Card
          <p>
            Anim deserunt deserunt aliquip elit sint velit irure culpa magna
            consectetur enim adipisicing sint fugiat.
          </p>
          <button className="border">Go to details</button>
        </div>
        <div className="flex flex-col justify-between col-span-2 text-white bg-[#444] w-full rounded-[1.5rem] p-10 shadow">
          Card 2
          <p>
            Ullamco in laboris id nulla laborum ex sit ut ex id reprehenderit.
            Ullamco in laboris id nulla laborum ex sit ut ex id reprehenderit.
            Ullamco in laboris id nulla laborum ex sit ut ex id reprehenderit.
          </p>
          <button className="border">Go to details</button>
        </div>
        <div className="flex flex-col justify-between col-span-3 text-white bg-[#222] w-full rounded-[1.5rem] p-10 shadow">
          Card 3
          <p>
            Consectetur deserunt do incididunt magna consectetur sint aliqua
            consectetur nisi cillum sunt aute.
          </p>
          <button className="border">Go to details</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
