import "@/styles/globals.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [yes, setYes] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!yes) {
        document.body.style.background = "black";
      } else {
        document.body.style.background = "transparent";
        document.body.style.backgroundImage =
          "linear-gradient(45deg, #2355d5, #000000)";
      }
      // Initialize the audio element and store it in the ref
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.volume = 0.3;
      audioRef.current.addEventListener("ended", () => {
        // Reset the audio to the beginning when it ends to loop infinitely
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      });
      // Set up an event listener for the 'ended' event
      audioRef.current.addEventListener("ended", () => {
        // Reset the audio to the beginning when it ends to loop infinitely
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      });
    }

    // Clean up the event listener on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", () => {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        });
      }
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const start = () => {
    setYes(true);
    toggleAudio();
  };

  return (
    <>
     <Head>
        <title>Som Srivastava | Software Developer and Entrepreneur</title>
        <meta
          name="description"
          content="Passionate and innovative high school senior with expertise in software development and design. Specialized in building impactful solutions that promote mental health awareness and support."
        />
        <meta
          name="keywords"
          content="Som Srivastava, Software Developer, Entrepreneur, Mental Health Advocate, Full Stack Developer, Innovator, Technology Enthusiast"
        />
      <meta name="google-site-verification" content="aTOZJhusoDASbAL_Ham6HSmn5C_sUWPocQjbu97c7uk" />
        <link rel="icon" href="som.webp" />
      </Head>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
      />

      {!yes ? (
        <div className="flex-col flex w-full justify-center bg items-center min-h-screen  ">
          <div className="flex flex-col h-[100px] rounded-full circle w-[100px] absolute"></div>
          <div className="flex flex-col backdrop-blur-xl h-[100px] rounded-full  justify-center items-center w-[100px] absolute ">
            <Image src={"/play.svg"} width={200} onClick={start} height={200} />
          </div>
        </div>
      ) : (
        <Component {...pageProps} toggleAudio={toggleAudio} />
      )}
    </>
  );
}
