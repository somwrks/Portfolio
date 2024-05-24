import Loading from "@/components/Loading";
import Player from "@/components/Player";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Template({
  icon,
  img1,
  img2,
  img3,
  toggleAudio,
  image,
  title,
  detail1,
  detail2,
  detail3,
  link,
  setShow,
}) {
  const [change, setChange] = useState(true);
  const [animation, setAnimation] = useState(true);
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
  const [fullback, setFullback] = useState(false);
  return (
    <>
      {change && <Loading />}
        <Player toggleAudio={toggleAudio} />
      <div
        className={`flex ${
          change ? "opacity-0" : "opacity-100"
        }  transition-all flex-col justify-start mt-12 items-center  w-full h-full  `}
      >
        {!isNaN(image) && (
          <div className="absolute top-0 md:top-10 left-0 md:left-10 m-4">
            <Image
              src={`/${fullback ? "fullback" : "back"}.svg`}
              alt="Go Back"
              className={"transition-all fade"}
              onMouseEnter={() => setFullback(true)}
              onMouseLeave={() => setFullback(false)}
              width={50}
              height={50}
              onClick={() => setShow(null)}
            />
          </div>
        )}
        <div
          className={`flex flex-col overflow-hidden w-full md:w-[60%] mx-auto p-4 space-y-14  `}
        >
          <div
            className={`flex items-center   ${
              !animation ? "enter" : "leave"
            } flex-row space-x-3 overflow-hidden`}
          >
            <div>
              {icon ? (
                <Image src={`${icon}`} width={150} height={150} />
              ) : (
                <Image src={`/${image}.webp`} width={150} height={150} />
              )}
            </div>
            <div>
              <h1 className="text-[7vw] md:text-[3vw] text-gray-200">
                {title}
              </h1>
            </div>
          </div>
          <div className="text-gray-300  space-y-1 overflow-hidden  text-[4vw] md:text-[1.5vw]">
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3`}
            >
              {img1 && <Image width={1000} height={1000} src={`${img1}`} />}
              <p>{detail1}</p>
            </div>
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3 overflow-hidden`}
            >
              {img2 && <Image width={1000} height={1000} src={`${img2}`} />}

              <p className={`${!animation ? "enter" : "leave"} overflow-hidden `}>{detail2}</p>
            </div>
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3 overflow-hidden`}
            >
              {img3 && <Image width={1000} height={1000} src={`${img3}`} />}
              <p className={`${!animation ? "enter" : "leave"} overflow-hidden`}>{detail3}</p>
            </div>
          </div>
          {link && (
            <div>
              <button className="px-4 enter py-2 backdrop-blur-3xl font-bold  rounded-xl text-white border-2 border-gray-200">
                <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
