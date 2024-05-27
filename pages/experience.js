import Exp from "@/components/Exp";
import Loading from "@/components/Loading";
import Template from "@/components/Template";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import data from "../public/data.json";
import Buttons from "@/components/Buttons";

export default function experience({ toggleAudio,isPlaying }) {
  const [change, setChange] = useState(true);
  const [show, setShow] = useState(null);

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
        <title>Som Srivastava | Experience</title>
        <meta
    name="description"
    content="Explore the diverse experiences and projects that have shaped Som Srivastava's journey as a software developer and entrepreneur. Discover his expertise across various technologies, programming languages, and tools, showcasing his versatility and passion for innovation."
  />
       <meta
    name="keywords"
    content="Som Srivastava, Experience, Software Development, Entrepreneurship, Projects, Technologies, Programming Languages, Tools, Skills, Expertise, Innovation"
  /> <meta property="og:title" content="Som Srivastava | Experience" />
  <meta
    property="og:description"
    content="Explore the diverse experiences and projects that have shaped Som Srivastava's journey as a software developer and entrepreneur. Discover his expertise across various technologies, programming languages, and tools, showcasing his versatility and passion for innovation."
  />
    <meta property="og:url" content="https://somwrks.com/experience" />
    <meta property="og:image" content="me2.webp" />

      </Head>
      {show === null ? (
        <>
          {change &&  <Loading toggleAudio={toggleAudio} isPlaying={isPlaying}/>}
          <div
            className={`flex ${
              change ? "opacity-0" : "opacity-100"
            } transition-all flex-col justify-center items-center w-full min-h-screen`}
          >
           <Buttons/>
            <div className="flex flex-col h-full md:w-[60%] mx-auto p-4 space-y-12">
              <div className="flex mt-5 flex-col justify-center space-y-4">
                <div className="flex flex-row justify-between gap-4">
                  {/* Updated technical skills section */}
                  <div className="flex flex-col space-y-4">
                    <h2 className="md:text-[1.4vw] text-[2.5vw] font-semibold text-gray-400">
                      C# <br />
                      C++ <br />
                      Python <br />
                      Java <br />
                      Node JS <br />
                      Javascript
                       <br />
                      MySQL
                      
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <h2 className="md:text-[1.4vw] text-[2.5vw] font-semibold text-gray-400">
                      Django <br />
                      Flask <br />
                      Electron JS <br />
                      TensorFlow <br />
                      Three JS <br />
                      Next JS <br />
                      React
                       <br />
                      Tailwind
                       <br />
                      Scikit Learn
                       <br />
                       LangChain
                       <br />
                       Keras
                      
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <h2 className="md:text-[1.4vw] text-[2.5vw] font-semibold text-gray-400">
                      PostgreSQL <br />
                      MongoDB <br />
                      Sanity Database
                      <br />Firestore 
                      <br />Amazon Web Services Cloud
                      <br />Google Cloud 
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <h2 className="md:text-[1.4vw] text-[2.5vw] font-semibold text-gray-400">
                      Git <br />
                      Linux<br />
                      Figma <br />
                      Adobe After Effects <br />
                      Adobe Premiere Pro<br />
                      Adobe Illustrator
                    </h2>
                  </div>
                </div>
              </div>

              {/* Mapping experience data */}
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
      ) : (
        <>
          {change && <Loading />}
          {/* Displaying detailed experience */}
          <Template
          isPlaying={isPlaying}
            img1={data[show].img1 || ""}
            img2={data[show].img2 || ""}
            img3={data[show].img3 || ""}
            toggleAudio={toggleAudio}
            title={data[show].title}
            image={show}
            link={data[show].link}
            setShow={setShow}
            detail1={data[show].detail1}
            detail2={data[show].detail2}
            detail3={data[show].detail3}
          />
        </>
      )}
    </>
  );
}
