"use client";
import { User2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContainGeneratorCard = () => {
  const [user, setUser] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const userData = [...user, data];
    setUser(userData);
  };

  console.log(user);

  return (
    <div className="border-[5px] border-black w-[900px] h-[400px]">
      <div className="bg-purple-800 text-white flex justify-center items-center h-14">
        <h1 className="font-bold text-2xl">ID Card generator</h1>
      </div>

      <div className="grid grid-cols-2 h-[334px]">
        <div className="flex flex-col gap-5 justify-center items-center px-10 py-6 border-r border-black">
          <h1 className="font-bold text-2xl">Input form</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full w-full justify-between items-start"
          >
            <div className="flex justify-between w-full">
              <label htmlFor="nameUser">Enter Name:</label>
              <input
                id="nameUser"
                className="border border-black rounded-md px-2"
                type="text"
                {...register("nameUser")}
              />
            </div>

            <div className="flex justify-between w-full">
              <label htmlFor="collageName">Enter College Name:</label>
              <input
                id="collageName"
                className="border border-black rounded-md px-2"
                type="text"
                {...register("collageName")}
              />
            </div>

            <div className="flex justify-between w-full">
              <label htmlFor="location">Enter Location:</label>
              <input
                id="location"
                className="border border-black rounded-md px-2"
                type="text"
                {...register("location")}
              />
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
          {user.map((user, index) => {
            return (
              <div
                key={index}
                className="flex h-full w-full rounded-md bg-yellow-100 p-3"
              >
                <div className="bg-green-200 w-[35%] h-full"><User2 className="size-[100%]"/></div>
                <div className="bg-white w-[65%] flex flex-col gap-5 justify-center p-5">
                    <p className="text-xl font-semibold">Name: {user.nameUser}</p>
                    <p>College Name: {user.collageName}</p>
                    <p>Location: {user.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContainGeneratorCard;
