import Exp from "@/components/Exp";
import Loading from "@/components/Loading";
import Player from "@/components/player";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import data from "../public/data.json"

export default function work({ toggleAudio }) {
  const [change, setChange] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);

  return (
    <>
      {change && <Loading />}
      <div
        className={`flex ${
          change ? "opacity-0" : "opacity-100"
        }  transition-all flex-col justify-center items-center  w-full min-h-screen  `}
      >
        <Player toggleAudio={toggleAudio} />
        <div className="flex flex-col h-full w-[60%] mx-auto p-4  space-y-12 backdrop-blur-md ">
        {data.map((item, index) => (
  <Exp
    key={index}
    title={item.title}
    detail1={item.detail1}
    index={index}
    change={change}
  />
))}
        </div>
      </div>
    </>
  );
}
