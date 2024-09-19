import React from "react";

const ContainGeneratorCard = () => {
  return (
    <div className="border-[5px] border-black w-[900px] h-[400px]">
      <div className="bg-purple-800 text-white flex justify-center items-center h-14">
        <h1 className="font-bold text-2xl">ID Card generator</h1>
      </div>

      <div className="grid grid-cols-2 h-[334px]">
        <div className="flex flex-col gap-5 justify-center items-center px-10 py-6 border-r border-black">
          <h1 className="font-bold text-2xl">Input form</h1>
          <form className="flex flex-col h-full w-full justify-between items-start">
            <div className="flex justify-between w-full">
              <label htmlFor="">Enter Name:</label>
              <input className="border border-black rounded-md" type="text" />
            </div>
            <div className="flex justify-between w-full">
              <label htmlFor="">Enter College Name:</label>
              <input className="border border-black rounded-md" type="text" />
            </div>
            <div className="flex justify-between w-full">
              <label htmlFor="">Enter Location:</label>
              <input className="border border-black rounded-md" type="text" />
            </div>
            <input
              type="submit"
              value="Generate Card"
              className="bg-purple-800 text-white font-bold px-2 py-1 rounded-md"
            />
          </form>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center p-6">
          <h1 className="font-bold text-2xl">Generated Card</h1>
          <div className="flex h-full w-full rounded-md bg-yellow-100 p-3">
            <div className="bg-green-200 w-[35%]">imagen</div>
            <div className="bg-white w-[65%]">texto</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainGeneratorCard;
