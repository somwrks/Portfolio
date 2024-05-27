import Exp from "@/components/Exp";
import Loading from "@/components/Loading";
import Player from "@/components/Player";
import Template from "@/components/Template";
import Head from "next/head";
import React, { useState } from "react";
import { useEffect } from "react";
import data from "../public/project.json";

export default function project({ toggleAudio,isPlaying }) {
  const [change, setChange] = useState(true);
const [show, setShow] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [show]);
  return (
    <>
       <Head>
        <title>Som Srivastava</title>
        <meta
          name="description"
          content="Passionate and innovative high school senior with expertise in software development and design. Specialized in building impactful solutions that promote mental health awareness and support."
        />
        <meta
          name="keywords"
          content="Som Srivastava, somwrks, SOMWRKS, SomWrks, Software Developer, Entrepreneur, Mental Health Advocate, Full Stack Developer, Innovator, Technology Enthusiast, About Me"
        />
      </Head>
      {show===null ?<>

      {change && <Loading />}
      <div
        className={`flex ${
          change ? "opacity-0" : "opacity-100"
        }  transition-all flex-col justify-center items-center  w-full min-h-screen  `}
      >
        <Player toggleAudio={toggleAudio} isPlaying={isPlaying} />
        <div className="flex flex-col h-full md:w-[60%] mx-auto p-4  space-y-12  ">
          {data.map((item, index) => (
            <Exp
              key={index}
              title={item.title}
              detail1={item.detail1}
              index={index}
              icon={item.icon}
              setShow={setShow}
              change={change}
            />
          ))}
        </div>
      </div>
      </>
      : <>
      {change && <Loading />}
      <Template
      img1={data[show].img1? data[show].img1:""}
      img2={data[show].img2? data[show].img2:""}
      img3={data[show].img3? data[show].img3:""}
          toggleAudio={toggleAudio}
          title={data[show].title}
          image={show}
          link={data[show].link}
          icon={data[show].icon}
          setShow={setShow}
          detail1={data[show].detail1}
          detail2={data[show].detail2}
          detail3={data[show].detail3}
        />
      </> 
        }
    </>
  );
}
