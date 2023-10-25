import Loading from "@/components/Loading";
import Player from "@/components/player";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useBeforeUnload } from 'react-router-dom';

export default function Template({toggleAudio,image,title,detail1,detail2,detail3,link}) {
  const [change, setChange] = useState(true);
  const [animation, setAnimation] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
      setAnimation(false);
    }, 3000);
    const handleBeforeUnload = (event) => {
      // Trigger leave animation before unloading the page
      setAnimation(true);
      // You can also prevent the default behavior of the event to delay the unload
      // event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  

  return ( <>
     {change && <Loading/>}
    <div
      className={`flex ${
        change ? "opacity-0" : "opacity-100"
      }  transition-all flex-col justify-center items-center  w-full min-h-screen  `}
    >
      <Player toggleAudio={toggleAudio}/>
      <div className={`flex flex-col  w-[60%] mx-auto p-4 space-y-14 backdrop-blur-md `}>
     <div className={`flex items-center ${!animation? "enter":"leave"} flex-row space-x-3`}>
     <div ><Image src={`/${image}.webp`} width={150} height={150}  /></div>
     <div >
        <h1 className="text-[3vw] text-gray-400">{title}</h1>
     </div>

     </div>
     <div className="text-gray-300 space-y-12 pt-8 text-[1.5vw]">
     <p className={`${!animation? "enter":"leave"}`}>
      {detail1}
     </p>
     <p className={`${!animation? "enter":"leave"}`}>
      {detail2}
     </p>
     <p className={`${!animation? "enter":"leave"}`}>
      {detail3}
     </p>
      </div>
      {link&& 
      <div>
        <button className="px-4 enter py-2 backdrop-blur-3xl font-bold  rounded-xl text-white border-2 border-gray-200">
          <a href={`${link}`}>Know More</a>
        </button>
      </div>
      }
      </div>
    </div>
  </>

  );
}