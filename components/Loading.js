import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col fade cursor-none w-full min-h-screen bg justify-center items-center absolute z-50">
      <div
        className="flex z-50 flex-col h-[100px] cursor-none rounded-full circleoutline w-[100px]  absolute"
      >
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
        <div className="circle-word text-white">I</div>
      </div>
    </div>
  );
}
