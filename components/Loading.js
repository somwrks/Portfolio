import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col fade overflow-hidden w-full min-h-screen bg justify-center items-center fixed z-50">
      <div
        className="flex z-50 flex-col h-[100px]  rounded-full circleoutline w-[100px]  fixed"
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
