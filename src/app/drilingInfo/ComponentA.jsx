import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
    const numValueX = 42
  return (
    <div>
      <div className="flex flex-col gap-2 p-5 items-start w-[700px] h-[400px] bg-slate-200 mb-16 border-[2px] border-black rounded-2xl">
        <h1 className="text-3xl">ComponentA</h1>
        <p className="text-xl">x = {numValueX}</p>

        <ComponentB numValueX={numValueX} />
      </div>
    </div>
  );
};

export default ComponentA;
