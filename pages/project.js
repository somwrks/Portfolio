import Exp from "@/components/Exp";
import Loading from "@/components/Loading";
import Player from "@/components/Player";
import Template from "@/components/Template";
import Head from "next/head";
import React, { useState } from "react";
import { useEffect } from "react";
import data from "../public/project.json";
import Buttons from "@/components/Buttons";
import Sorting from "@/components/Sorting";

export default function project({ toggleAudio, isPlaying ,setEmailSent,emailSent}) {
  const [change, setChange] = useState(true);
  const [show, setShow] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);
  const [search, setSearch] = useState("All");
  const options = [
    "All",
    "Artificial Intelligence",
    "Software Development",
    "Website Development",
    "App Development",
    "Software Design",
    "Website Design",
    "App Design",
    "Video Editing",
    "Community Service",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [show]);
  const filteredData = data.filter((item) => item.category.includes(search));

  return (
    <>
      <Head>
        <title>Som Srivastava | Projects</title>
        <meta
          name="description"
          content="Explore the innovative projects and initiatives undertaken by Som Srivastava, a software developer and entrepreneur driven by a passion for solving real-world problems. Discover his diverse portfolio showcasing his technical expertise and creative problem-solving abilities."
        />
        <meta
          name="keywords"
          content="Som Srivastava, Aishwarya, Aishwarya Srivastava, Arizona State University, ASU, Go Devils, Devils, Sun Devils, Lucknow, India, Indian, Uttar Pradesh, Mesa, Phoenix, Metro Phoenix,  Projects, Software Development, Entrepreneurship, Portfolio, Innovative Solutions, Problem-Solving, Technical Expertise, Creativity"
        />
        <meta property="og:title" content="Som Srivastava | Projects" />
        <meta
          property="og:description"
          content="Explore the innovative projects and initiatives undertaken by Som Srivastava, a software developer and entrepreneur driven by a passion for solving real-world problems. Discover his diverse portfolio showcasing his technical expertise and creative problem-solving abilities."
        />
        <meta property="og:image" content="me.webp" />
        <meta property="og:url" content="https://somwrks/projects" />
      </Head>
      {show === null ? (
        <>
         
          <Buttons setEmailSent={setEmailSent} emailSent={emailSent}/>

          <div
            className={`flex fade transition-all flex-col justify-center items-center  w-full min-h-screen  `}
          >
            <Player toggleAudio={toggleAudio} isPlaying={isPlaying} />
            <div className="flex flex-col flex-grow h-full md:w-[60%] mx-auto p-4  space-y-12  ">
            <div className="flex mt-5 flex-col justify-center space-y-4">
                <div className="flex flex-row justify-between w-full gap-4">
                  {/* Updated technical skills section */}
                  <div className="flex flex-col w-full space-y-4">
                    <h2 className="md:text-[1.4vw] text-[2.3vw] font-semibold text-gray-400">
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
                  <div className="flex w-full flex-col space-y-4">
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
                  <div className="flex w-full flex-col space-y-4">
                    <h2 className="md:text-[1.4vw] text-[2.5vw] font-semibold text-gray-400">
                      PostgreSQL <br />
                      MongoDB <br />
                      Sanity Database
                      <br />Firestore 
                      <br />Amazon Web Services Cloud
                      <br />Google Cloud 
                    </h2>
                  </div>
                  <div className="flex w-full flex-col space-y-4">
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

              <Sorting
                setSearch={setSearch}
                options={options}
                search={search}
              />
              {/* Mapping experience data */}
              {search == "All" ? (
                data.map(
                  (item, index) =>
                   
                      <Exp
                        key={index}
                        title={item.title}
                        detail1={item.detail1}
                        index={index}
                        icon={item.icon}
                        setShow={setShow}
                        
                      />
                )
              ) : filteredData != 0 ? (
                data.map(
                  (item, index) =>
                    item.category.includes(search) &&
                      <Exp
                        key={index}
                        title={item.title}
                        detail1={item.detail1}
                        index={index}
                        icon={item.icon}
                        setShow={setShow}
                        
                      />
                )
              ) : (
                <div className="flex flex-col  w-full text-white text-2xl text-center mt-10 z-50">
                  Nothing to see here...
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {change && (
            <Loading toggleAudio={toggleAudio} isPlaying={isPlaying} />
          )}
          <Template
            img1={data[show].img1 ? data[show].img1 : ""}
            img2={data[show].img2 ? data[show].img2 : ""}
            img3={data[show].img3 ? data[show].img3 : ""}
            toggleAudio={toggleAudio}
            title={data[show].title}
            image={show}
            isPlaying={isPlaying}
            link={data[show].link}
            icon={data[show].icon}
            setShow={setShow}
            detail1={data[show].detail1}
            detail2={data[show].detail2}
            detail3={data[show].detail3}
            skills={data[show].skills}
            category={data[show].category}
          />
        </>
      )}
    </>
  );
}
