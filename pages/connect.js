import Box from "@/components/Box";
import Loading from "@/components/Loading";
import Player from "@/components/Player";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

export default function connect({ toggleAudio }) {
  const [change, setChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);

  return (
    <>
     <Head>
        <title>Som Srivastava</title>
        <meta
          name="description"
          content="Connect with me! I'm available on almost all social platforms. You can reach me out via email at somwrks.queries@gmail.com"
        />
        <meta
          name="keywords"
          content="Som Srivastava, somwrks, SOMWRKS, SomWrks, Software Developer, Entrepreneur, Mental Health Advocate, Full Stack Developer, Innovator, Technology Enthusiast, About Me"
        />
      </Head>
      {change && <Loading />}
      <div
        className={`flex ${
          change ? "opacity-0" : "opacity-100"
        } transition-all flex-col justify-center items-center w-full min-h-screen`}
      >
        <Player toggleAudio={toggleAudio} />
        <div className="flex flex-col w-[60%] mx-auto p-4 space-y-4 backdrop-blur-md">
          <div className="flex items-center flex-row space-x-3">
            <div>
              <h1 className="text-[4vw] text-gray-400">Super Friendly!</h1>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between gap-5 pt-8 text-[1.5vw]">
            <Box
              imageUrl="/linkedin.webp"
              icon="linkedinicon"
              overlayText="https://linkedin.com/in/somwrks"
            />
            <Box
              imageUrl="/instagram.webp"
              icon="instagramicon"
              overlayText="https://instagram.com/somwrks"
            />
            <Box
              imageUrl="/twitter.webp"
              icon="twittericon"
              overlayText="https://twitter.com/somwrks"
            />
            <Box
              imageUrl="/github.webp"
              icon="githubicon"
              overlayText="https://github.com/somwrks"
            />
          </div>
        </div>
      </div>
    </>
  );
}
