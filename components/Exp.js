import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Exp({  title, detail1, icon, skills,name }) {
  const slug = name 
    ? name.trim().toLowerCase().replace(/\s+/g, '') 
    : title.trim().toLowerCase().replace(/\s+/g, '');
  return (
    <div
      className={`flex flex-col md:flex-row z-0   md:space-x-5  items-start md:items-center  w-full h-full md:justify-between`}
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
        <div className="flex flex-col gapy-y-3">
          <h1 className=" text-[6vw] md:text-[1.5vw]">{title}</h1>
          <h1 className=" text-[5vw] md:text-[1.3vw] text-gray-300">{name}</h1>
        </div>
        <div className="space-y-2 flex flex-col">
          <p className=" text-[6w] md:text-[1vw]">{detail1}</p>
          <p className=" text-[5.9w] text-gray-200 md:text-[0.9vw]">
            {skills?.map((e) => e + ", ")}
          </p>
        </div>
        <div>
            <Link
            href={`/${name ? "experience" : "project"}/${slug}`}
            >
          <button
            className="w-full py-[2vw]  md:py-[0.5vw] backdrop-blur-3xl font-bold  rounded-xl text-white border-2 border-gray-200"
          >
            Explore
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
