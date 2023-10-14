import "@/styles/globals.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [yes, setYes] = useState(false);

  // Create a ref for the audio element
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if(!yes){
        document.body.style.background="black";
      }
      else{
        document.body.style.background="transparent";
        document.body.style.backgroundImage="linear-gradient(45deg, #2355d5, #000000)";
      }
      // Initialize the audio element and store it in the ref
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.volume = 0.6;

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
      {!yes ? (
        <div className="flex-col flex w-full justify-center items-center min-h-screen  ">
          <div className="flex flex-col h-[10vw] rounded-full circle w-[10vw] absolute"></div>
          <div className="flex flex-col h-[10vw] rounded-full bg-[#0000008a] justify-center items-center w-[10vw] absolute cursor-pointer">
            <Image src={"/play.svg"} width={200} onClick={start} height={200} />
          </div>
        </div>
      ) : (
        <Component {...pageProps} toggleAudio={toggleAudio} />
      )}
    </>
  );
}
