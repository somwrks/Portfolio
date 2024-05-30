// pages/connect.js
import Box from "@/components/Box";
import Loading from "@/components/Loading";
import Player from "@/components/Player";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import Buttons from "@/components/Buttons";

export default function Connect({ toggleAudio, isPlaying }) {
  const [change, setChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 3000);
  }, []);
  // const [display, setDisplay] = useState(false);
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
      {change && <Loading toggleAudio={toggleAudio} isPlaying={isPlaying} />}
      {/* <div className="flex  fixed h-full w-full right-5 bottom-5 items-end justify-end  flex-col">
        {display && (
          <iframe
            className="mb-4 z-50 h-1/2"
            src="https://www.chatbase.co/chatbot-iframe/kPOPka9XYJQlI1nISptE2"
            title="Som"
          ></iframe>
        )}
        <button
          onClick={() => {
            display ? setDisplay(false) : setDisplay(true);
          }}
          className="py-4 px-3 w-1/12 rounded-full bg-white text-xl text-center"
        >
          {display ? "Close" : "Chat"}
        </button>
      </div> */}

      <div
        className={`flex ${
          change ? "opacity-0" : "opacity-100"
        } transition-all flex-col justify-center items-center w-full `}
      >
        <Buttons />
        <Player toggleAudio={toggleAudio} isPlaying={isPlaying} />
        <div className="flex flex-col w-full  md:w-[60%] md:mx-auto p-4 space-y-4 backdrop-blur-md">
          <div className="flex items-center flex-row ">
            <h1 className="text-[9vw] md:text-[4vw] text-gray-200">Connect</h1>
          </div>
          <div>
            <h1 className="text-white text-[3vw] md:text-[1vw] font-semibold">
              Business Email : somwrks.queries@gmail.com
            </h1>
          </div>
          <ContactForm />
          <div className="flex flex-col md:flex-row flex-wrap w-full items-center justify-between gap-5 pt-3 ">
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
      {/* <script>
        {`window.embeddedChatbotConfig = {
          chatbotId: "kPOPka9XYJQlI1nISptE2",
          domain: "www.chatbase.co"
        }`}
      </script>
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="kPOPka9XYJQlI1nISptE2"
        domain="www.chatbase.co"
        defer
      ></script> */}
    </>
  );
}
