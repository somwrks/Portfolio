import React from "react";

export default function Player({ toggleAudio }) {
  return (
    <>
      <div className="flex flex-col  right-8 top-5 w-0 h-0 md:w-[250px] md:h-[250px] rounded-full circleoutline  fixed ">
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
        className="flex flex-col right-[55px] top-[45px] w-0 h-0   md:h-[200px] md:w-[200px] rounded-full  circle  fixed"
      > </div>
    </>
  );
}
