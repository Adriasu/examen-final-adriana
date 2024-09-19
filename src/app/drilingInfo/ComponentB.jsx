"use client"
import React, {useState} from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({numValueX}) => {
    const [valueX, setValueX] = useState(0)

    const sumNumber = () => {
      setValueX((prev) => (prev + 1))
    }
  return (
    <div className="flex flex-col gap-2 p-5 items-start w-[650px] h-[300px] border-[2px] border-black rounded-2xl">
      <h1 className="text-3xl">ComponentB</h1>
      <p className="text-xl">x = {parseInt(numValueX) + valueX}</p>

      <ComponentC numValueX={numValueX} sumNumber={sumNumber} />
    </div>
  );
};

export default ComponentB;
