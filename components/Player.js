import React from "react";

export default function Player({ toggleAudio,isPlaying }) {
  return (
    <>
     
      <div
        onClick={() => toggleAudio()}
        className={`flex ${
            isPlaying ? "circleanimation" : "circleanimation pause"
          } flex-col right-[55px] top-[45px] w-0 h-0   md:h-[200px] md:w-[200px] rounded-full  circle  fixed`}
      > </div>
    </>
  );
}
