import Image from "next/image";
import React from "react";

export default function Exp({ setShow, title, detail1, index, icon, skills }) {
  return (
    <div
      className={`flex flex-col md:flex-row z-0 enter  md:space-x-5  items-start md:items-center  w-full h-full md:justify-between`}
    >
      <div className="flex md:w-3/5 h-full flex-col ">
        <Image
          loading="lazy"
          onError={(err) => console.error("Error loading image:", err)}
          src={`${icon}`}
          className=" "
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col gap-y-4 w-full md:w-4/5  text-white   ">
        <div>
          <h1 className=" text-[6vw] md:text-[1.5vw]">{title}</h1>
        </div>
        <div className="space-y-2 flex flex-col">
          <p className=" text-[6w] md:text-[1vw]">{detail1}</p>
          <p className=" text-[5.9w] text-gray-300 md:text-[0.9vw]">
            {skills?.map((e) => e + ", ")}
          </p>
        </div>
        <div>
          <button
            onClick={() => setShow(index)}
            className="w-full py-[2vw]  md:py-[0.5vw] backdrop-blur-3xl font-bold  rounded-xl text-white border-2 border-gray-200"
          >
            <a>Explore</a>
          </button>
        </div>
      </div>
    </div>
  );
}
