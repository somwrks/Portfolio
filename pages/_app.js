import "@/styles/globals.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/router";
import { ClerkProvider } from "@clerk/nextjs";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
      // Initialize the audio 7 and store it in the ref
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.volume = 0.1;
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
      const circle = document.querySelector(".circle");
      if (isPlaying) {
        audioRef.current.pause();
        // Add the 'no-animation' class to stop the animation
      } else {
        audioRef.current.play();
        // Remove the 'no-animation' class to start the animation
      }
      setIsPlaying(!isPlaying);
    }
  };

  const start = () => {
    setYes(true);
    toggleAudio();
  };
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile devices

  useEffect(() => {
    // Check if the screen width is less than or equal to 767 pixels (typical mobile device width)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Call the checkIsMobile function on component mount and window resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);

  return (
    
    <>
    <ClerkProvider publishableKey="pk_test_cHJvdmVuLWJhYm9vbi03Ny5jbGVyay5hY2NvdW50cy5kZXYk">

    {router.pathname!="/about" &&
       <Head>
        <title>Som Srivastava | Software Developer and Entrepreneur</title>
        <meta
          name="description"
          content="Passionate and forward-thinking tech enthusiast with a focus on constant learning. Experienced in software development, AI, and diverse areas of knowledge. Ready to create impactful solutions and contribute to a better world."
        />
        <meta
          name="keywords"
          content="Som Srivastava, Aishwarya, Aishwarya Srivastava, Arizona State University, ASU, Go Devils, Devils, Sun Devils, Lucknow, India, Indian, Uttar Pradesh, Mesa, Phoenix, Metro Phoenix,  Som, Aishwarya, Aishwarya Srivastava somwrks, SOMWRKS, SomWrks, Entrepreneur, Software Developer, Startup Founder, Mental Health, App Development, Web Development, AI, Machine Learning, Deep Learning, Tech Innovator, Problem Solver, Product Development, Som Srivastava, somwrks, SOMWRKS, SomWrks, Entrepreneur, Tech Innovator, Startup Founder, Software Developer, AI Developer, ML Developer, DL Developer, Web Developer, App Developer, Problem Solver, Investing, Impactful Solutions"
        />
        <meta property="og:image" content="me.webp" />
        <link rel="icon" href="som.webp" />
      </Head>
    }
      {!isMobile && (
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
      )}

      {!yes ? (
        <div className="flex-col flex w-full overflow-hidden justify-center  items-center min-h-screen  ">
          <div className="flex flex-col h-[100px] rounded-full  circle w-[100px] absolute"></div>
          <div className="flex flex-col backdrop-blur-xl h-[100px] rounded-full  justify-center items-center w-[100px] absolute ">
            <Image
              loading="lazy"
              onError={(err) => console.error("Error loading image:", err)}
              src={"/play.svg"}
              width={200}
              onClick={start}
              height={200}
            />
          </div>
        </div>
      ) : (
        <Component {...pageProps} emailSent={emailSent} setEmailSent={setEmailSent} toggleAudio={toggleAudio} isPlaying={isPlaying} />
      )}
      </ClerkProvider>
      <SpeedInsights />
    </>
  );
}
