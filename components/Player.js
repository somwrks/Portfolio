import Image from "next/image";
import React from "react";

export default function Player({ toggleAudio }) {
  return (
    <>
      <div className="flex  flex-col cursor-none h-[13vw] rounded-full circleoutline w-[13vw] right-[1.6vw] top-3 absolute">
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
        <div className="circle-word">I</div>
      </div>
      <div
        onClick={() => toggleAudio()}
        className="flex flex-col h-[10vw] hover:backdrop-blur-xl cursor-none rounded-full right-16 top-10 circle w-[10vw] absolute"
      > </div>
    </>
  );
}
