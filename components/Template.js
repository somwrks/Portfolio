import Loading from "@/components/Loading";
import Player from "@/components/Player";
import React, { useState, useEffect } from "react";
import SuspenseImage from "@/components/SuspenseImage";
import "react-loading-skeleton/dist/skeleton.css";
import Buttons from "./Buttons";
import Head from "next/head";

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
  isPlaying,
  skills,
  category,
}) {
  const [change, setChange] = useState(true);
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
      setAnimation(false);
    }, 3000);
    const handleBeforeUnload = (event) => {
      setAnimation(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const [fullback, setFullback] = useState(false);

  return (
    <>
      <Head>
        <title>Som Srivastava | {title}</title>
        <meta
          name="description"
          content={`${detail1}`}

        />
        <meta
          name="og:description"
          content={`${detail1}`}
        />
        <meta property="og:title" content={`Som Srivastava | ${title}`} />
        <meta property="og:image" content="/me2.webp" />
        <link rel="icon" href="som.webp" />

        <meta
          name="keywords"
          content="Som Srivastava, Aishwarya, Aishwarya Srivastava, Arizona State University, ASU, Go Devils, Devils, Sun Devils, Lucknow, India, Indian, Uttar Pradesh, Mesa, Phoenix, Metro Phoenix,  About, High School Graduate, Software Developer, Entrepreneur, Tech Enthusiast, Creative Thinker, Mental Health Advocate, Innovation, Self-Development, Passion, Curiosity"
        />
      </Head>
      {change && <Loading toggleAudio={toggleAudio} isPlaying={isPlaying} />}
      <Player toggleAudio={toggleAudio} isPlaying={isPlaying} />
      <div
        className={`flex ${
          change ? "opacity-0" : "opacity-100"
        }  transition-all flex-col select-none justify-start mt-12 items-center z-0 w-full h-full`}
      >
        <Buttons />
        {!isNaN(image) && (
          <div className="absolute top-0 md:top-10 left-0 md:left-10 m-4">
            <SuspenseImage
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
          className={`flex flex-col overflow-hidden w-full md:w-[60%] mx-auto p-4 space-y-14`}
        >
          <div
            className={`flex items-center ${
              !animation ? "enter" : "leave"
            } flex-row space-x-3 overflow-hidden`}
          >
            <div>
              {icon ? (
                <SuspenseImage
                  loading="lazy"
                  src={`${icon}`}
                  width={150}
                  height={150}
                />
              ) : (
                <SuspenseImage
                  loading="lazy"
                  src={`/${image}.webp`}
                  width={150}
                  height={150}
                />
              )}
            </div>
            <div>
              <h1 className="text-[7vw] md:text-[3vw] text-gray-200">
                {title}
              </h1>
            </div>
          </div>
          <div className="text-gray-300 space-y-3 overflow-hidden text-[4vw] md:text-[1.3vw]">
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3`}
            >
              {img1 && (
                <SuspenseImage
                  loading="lazy"
                  width={1000}
                  height={1000}
                  src={`${img1}`}
                />
              )}
              <p style={{ whiteSpace: "pre-wrap" }}>{detail1}</p>
            </div>
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3 overflow-hidden`}
            >
              {img2 && (
                <SuspenseImage
                  loading="lazy"
                  width={1000}
                  height={1000}
                  src={`${img2}`}
                />
              )}
              <p
                style={{ whiteSpace: "pre-wrap" }}
                className={`${!animation ? "enter" : "leave"} overflow-hidden`}
              >
                {detail2}
              </p>
            </div>
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3 overflow-hidden`}
            >
              {img3 && (
                <SuspenseImage
                  loading="lazy"
                  width={1000}
                  height={1000}
                  src={`${img3}`}
                />
              )}
              <p
                style={{ whiteSpace: "pre-wrap" }}
                className={`${!animation ? "enter" : "leave"} overflow-hidden`}
              >
                {detail3}
              </p>
            </div>
            <div
              className={`${
                !animation ? "enter" : "leave"
              } flex flex-col space-y-3 overflow-hidden`}
            >
              <p className=" text-gray-300 ">{skills?.map((e) => e + ", ")}</p>
            </div>
          </div>
          {link && (
            <div>
              <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                <button className="w-full enter py-2 backdrop-blur-3xl font-bold rounded-xl text-white border-2 border-gray-200">
                  View
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
