import Loading from "@/components/Loading";
import Player from "@/components/player";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

export default function work({toggleAudio}) {
  const [change, setChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);

  return ( <>
     {change && <Loading/>}
    <div
      className={`flex ${
        change ? "opacity-0" : "opacity-100"
      }  transition-all flex-col   w-full min-h-screen  `}
    >
      <Player toggleAudio={toggleAudio}/>
      <div className="flex flex-col  w-[50%] mx-auto p-4 space-y-4 backdrop-blur-xl ">
     <div className="w-full h-[10vw] banner" ></div>
     <div className="flex items-center  flex-row space-x-3">
     <div ><Image src={"/som.webp"} width={150} height={150}  /></div>
     <div >
        <h1 className="text-[4vw] text-gray-400">Som Srivastava</h1>
     </div>

     </div>
     <div className="text-gray-300 space-y-5 pt-8 text-[1.5vw]">
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat asperiores quae velit eos dolorem facere hic corrupti illum, a, tempora minima quisquam fugiat numquam earum aspernatur quos repudiandae atque.
     </p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat asperiores quae velit eos dolorem facere hic corrupti illum, a, tempora minima quisquam fugiat numquam earum aspernatur quos repudiandae atque.
     </p>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat asperiores quae velit eos dolorem facere hic corrupti illum, a, tempora minima quisquam fugiat numquam earum aspernatur quos repudiandae atque.
     </p>
      </div>
      </div>
    </div>
  </>

  );
}
