import React, { useState } from "react";

export default function Buttons() {
  const [show, setShow] = useState("");
  return show ? (
    <div
      onClick={(e) => e.target.classList.contains("outer-box") && setShow("")}
      className="flex fade flex-col w-full min-h-screen fixed outer-box items-center backdrop-blur-lg z-50 "
    >
      <div className="flex bg-gray-800 space-y-3 flex-col w-full md:w-1/2 md:mt-14  h-full p-4 items-start">
        <div className="flex flex-row w-full  h-full bg-gray-600">
          <button className="px-3  text-black text-xl  bg-gray-100">
            Resume
          </button>
          <button className="px-3  text-white bg-black text-xl  ">
            Freelance
          </button>
        </div>
        {show == "resume" ? (
          <div className="flex flex-col p-2 w-full"></div>
        ) : (
          <div className="flex flex-col p-2 w-full"></div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col -right-8 gap-y-16 h-full  top-64 fixed ">
      <button
        onClick={() => setShow("freelance")}
        className=" px-4 bg-black rounded-sm -rotate-90 mt-12 text-white border-b-0 border text-xl z-50 "
      >
        Freelance
      </button>
      <button
        onClick={() => setShow("resume")}
        className=" px-4 bg-white rounded-sm -rotate-90 mt-12 text-black border-b-0 border text-xl z-50"
      >
        Resume
      </button>
    </div>
  );
}
