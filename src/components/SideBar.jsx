import {
  Clock,
  GalleryHorizontalEnd,
  HardDriveDownload,
  IdCard,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="border border-black w-[300px] min-h-screen p-6 ">
      <div className="flex items-center">
        <div className="bg-orange-600 text-white py-1 px-1 rounded-full flex flex-col w-[100px]">
          <p className="font-bold text-center">Examen Final</p>
        </div>
      </div>

      <div className=" flex flex-col mt-14 gap-20">
        <ul className="flex flex-col gap-5">
          <Link href={"/cardGenerator"}>
            <div className="flex gap-5 text-gray-700 hover:text-black hover:scale-[1.05]">
              <IdCard />
              <li>Card Generator</li>
            </div>
          </Link>

          <Link href={"/digitalClock"}>
            <div className="flex gap-5 text-gray-700 hover:text-black hover:scale-[1.05]">
              <Clock />
              <li>Digital Clock</li>
            </div>
          </Link>

          <Link href={"/drilingInfo"}>
            <div className="flex gap-5 text-gray-700 hover:text-black hover:scale-[1.05]">
              <HardDriveDownload />
              <li>Driling Info</li>
            </div>
          </Link>

          <Link href={"/galleryCards"}>
            <div className="flex gap-5 text-gray-700 hover:text-black hover:scale-[1.05]">
              <GalleryHorizontalEnd />
              <li>Galeria de Cartas</li>
            </div>
          </Link>
        </ul>
        <Link href={"/"}>
          <button className="bg-cyan-700 px-4 py-2 rounded-md font-bold text-white hover:scale-[1.05] hover:bg-cyan-600">
            Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
