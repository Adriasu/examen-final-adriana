"use client";
import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [numValueX, setNumValueX] = useState(0);

  // const numValueX = 42;
  return (
    <div>
      <div className="flex flex-col gap-2 p-5 items-start w-[700px] h-[400px] bg-slate-200 mb-16 border-[2px] border-black rounded-2xl">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-5 justify-between">
            <h1 className="text-3xl">ComponentA</h1>
            <div className="flex items-center gap-3">
              <label htmlFor="numValue">Ingrese número</label>
              <input
                id="numValue"
                className="border-[2px] border-black rounded-xl appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-14 text-center"
                type="number"
                onChange={(e) => setNumValueX(e.target.value)}
              />
            </div>
          </div>
          <p className="text-xl">x = {numValueX}</p>
        </div>

        <ComponentB numValueX={numValueX} />
      </div>
    </div>
  );
};

export default ComponentA;
