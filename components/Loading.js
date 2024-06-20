import React from "react";
import Player from "./Player";

export default function Loading({ toggleAudio, isPlaying }) {
  return (
    <div className="flex flex-col select-none   overflow-hidden w-full min-h-screen bg-black justify-center items-center fixed z-50">
      <div
        className={`flex circleanimation flex-col overflow-none right-16 top-12  md:top-auto md:right-auto  md:h-[13vw] h-[150px] w-[150px] rounded-full  circle md:w-[13vw] absolute cursor-none`}
      ></div>
    </div>
  );
}
