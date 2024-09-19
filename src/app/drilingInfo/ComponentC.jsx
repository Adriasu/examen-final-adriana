import React from "react";

const ComponentC = ({numValueX, sumNumber}) => {
  return (
    <div className="flex flex-col gap-1 px-5 py-4 items-start w-[600px] h-[150px] border-[2px] border-black rounded-2xl">
      <h1 className="text-3xl">ComponentC</h1>
      <p className="text-xl">x = {numValueX}</p>
      <button
        className="h-[40px] w-[80px] bg-[#006fff] text-xl rounded-lg text-white font-bold"
        onClick={sumNumber}
      >
        x++
      </button>
    </div>
  );
};

export default ComponentC;
