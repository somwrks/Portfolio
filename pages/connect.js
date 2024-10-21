// pages/connect.js
import Box from "@/components/Box";
import Loading from "@/components/Loading";
import Player from "@/components/Player";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import Buttons from "@/components/Buttons";

export default function Connect({ toggleAudio, isPlaying, setEmailSent,emailSent }) {


  return (
    <>
      <Head>
        <title>Som Srivastava | Connect</title>
        <meta
          name="description"
          content="Connect with Som Srivastava, an innovative entrepreneur and software developer. Explore opportunities for collaboration, partnerships, or simply engage in thought-provoking discussions. Reach out via email or connect on social media platforms."
        />
        <meta
          name="keywords"
          content="Som Srivastava, Connect, Collaboration, Partnerships, Software Developer, Entrepreneur, Social Media, LinkedIn, Instagram, Twitter, GitHub, Contact"
        />
        <meta property="og:url" content="https://somwrks.com/connect" />
        <meta property="og:image" content="me2.webp" />
        <link rel="icon" href="som.webp" />
      </Head>
     

      <div
        className={`flex fade transition-all flex-col justify-center items-center w-full `}
      >
        <Buttons setEmailSent={setEmailSent} emailSent={emailSent} />
        <div className="flex flex-col w-full  md:w-[60%] md:mx-auto p-4 space-y-4 backdrop-blur-md">
          <div className="flex items-center flex-row ">
            <h1 className="text-[9vw] md:text-[4vw] text-gray-200">Connect</h1>
          </div>
          <div>
            <h1 className="text-white text-[3vw] md:text-[2vw] ">
             somwrks.queries@gmail.com
            </h1>
          </div>
          <ContactForm />
          {/* <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full items-center   pt-3 ">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
