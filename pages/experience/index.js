import Exp from "@/components/Exp";
import Loading from "@/components/Loading";
import Template from "@/components/Template";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import data from "@/public/data.json";
import Buttons from "@/components/Buttons";
import Sorting from "@/components/Sorting";
import Player from "@/components/Player";

export default function experience({ toggleAudio, isPlaying,setEmailSent,emailSent }) {
  const [show, setShow] = useState(null);
  const [search, setSearch] = useState("All");
  const options = [
    "All",
    "Presidential",
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
        <title>Som Srivastava | Experience</title>
        <meta
          name="description"
          content="Explore the diverse experiences and projects that have shaped Som Srivastava's journey as a software developer and entrepreneur. Discover his expertise across various technologies, programming languages, and tools, showcasing his versatility and passion for innovation."
        />
        <meta
          name="keywords"
          content="Som Srivastava, Aishwarya, Aishwarya Srivastava, Arizona State University, ASU, Go Devils, Devils, Sun Devils, Lucknow, India, Indian, Uttar Pradesh, Mesa, Phoenix, Metro Phoenix,  Experience, Software Development, Entrepreneurship, Projects, Technologies, Programming Languages, Tools, Skills, Expertise, Innovation"
        />{" "}
        <meta property="og:title" content="Som Srivastava | Experience" />
        <meta
          property="og:description"
          content="Explore the diverse experiences and projects that have shaped Som Srivastava's journey as a software developer and entrepreneur. Discover his expertise across various technologies, programming languages, and tools, showcasing his versatility and passion for innovation."
        />
        <meta property="og:url" content="https://somwrks.com/experience" />
        <meta property="og:image" content="me2.webp" />
      </Head>
       
          <Buttons setEmailSent={setEmailSent} emailSent={emailSent}/>
          <div
            className={`flex fade transition-all flex-col justify-center items-center w-full min-h-screen`}
          >
            <Player toggleAudio={toggleAudio} isPlaying={isPlaying} />

            <div className="flex flex-col flex-grow h-full md:w-[60%] mx-auto p-4 space-y-12">
              {data[0].title ? (
                <Exp
                  title={data[0].title}
                  detail1={data[0].detail1}
                  index={0}
                  icon={data[0].icon}
                  setShow={setShow}
                />
              ) : (
                <div className="flex flex-col w-full  text-white text-2xl text-center mt-5">
                  Nothing to see here...
                </div>
              )}
              <Sorting
                setSearch={setSearch}
                options={options}
                search={search}
              />
              {/* Mapping experience data */}
              {search == "All" ? (
                data.map(
                  (item, index) =>
                    index != 0 && (
                      <Exp
                        key={index}
                        title={item.title}
                        detail1={item.detail1}
                        index={index}
                        name={item.name}

                        icon={item.icon}
                        setShow={setShow}
                      />
                    )
                )
              ) : filteredData != 0 ? (
                data.map(
                  (item, index) =>
                    item.category.includes(search) &&
                    index != 0 && (
                      <Exp
                        key={index}
                        title={item.title}
                        detail1={item.detail1}
                        name={item.name}
                        index={index}
                        icon={item.icon}
                        setShow={setShow}
                        
                      />
                    )
                )
              ) : (
                <div className="flex flex-col   w-full text-white text-2xl text-center mt-5 ">
                  Nothing to see here...
                </div>
              )}
            </div>
          </div>
      
    </>
  );
}
