import React, { useState } from "react";

export default function Buttons() {
  const [show, setShow] = useState("");
  return show ? (
    <div
      onClick={(e) => e.target.classList.contains("outer-box") && setShow("")}
      className="flex fade flex-col top-0 w-full min-h-screen fixed outer-box items-center backdrop-blur-lg z-40 "
    >
      <div className="flex fade bg-gray-900 space-y-3 flex-col w-full md:w-1/2 mt-14  min-h-[700px] md:min-h-[50vw]  items-start">
        <div className="flex flex-row w-full justify-between h-full ">
          <button
            onClick={() => setShow("resume")}
            className="w-full py-4 text-black text-xl  bg-gray-100"
          >
            Resume
          </button>
          <button
            onClick={() => setShow("freelance")}
            className="w-full py-4  text-white bg-black text-xl  "
          >
            Freelance
          </button>
        </div>
        {show == "resume" ? (
          <div className="flex flex-col p-2 w-full h-full">
            <h1 className="text-2xl text-white">Coming Soon...</h1>
          </div>
        ) : (
          <div className="flex flex-col p-2 w-full h-full">
            <h1 className="text-2xl text-white">Coming Soon...</h1>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col fade md:-right-10 -right-11 gap-y-16 h-full z-40  top-64 fixed ">
      <button
        onClick={() => setShow("freelance")}
        className=" px-4 bg-black rounded-sm fade -rotate-90 mt-12 text-white border-b-0 border text-xl z-40 "
      >
        Freelance
      </button>
      <button
        onClick={() => setShow("resume")}
        className=" px-4 bg-white rounded-sm fade -rotate-90 mt-12 text-black border-b-0 border text-xl z-40"
      >
        Resume
      </button>
    </div>
  );
}
