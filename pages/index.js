import Loading from "@/components/Loading";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Story from "@/components/Story";

export default function Home({ toggleAudio }) {
  const app = useRouter();
  const go = (e) => {
    if (typeof window !== "undefined") {
      app.push(e);
    }
  };
  const [change, setChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 1000);
  }, []);

  const start = () => {
    toggleAudio();
  };

  // Ref to store the scroll amount
  const transformAmountRef = useRef(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const delta = e.deltaY;
      const container = document.querySelector(".story-container");
      const scrollingText = container.querySelector(".scrolling-text-content");

      if (scrollingText) {
        const windowWidth = window.innerWidth;
        const scrollingTextWidth = scrollingText.scrollWidth;
        const transformSpeed = 9; // Adjust speed as needed
        const maxTransform = scrollingTextWidth - windowWidth;

        if (delta > 0) {
          transformAmountRef.current = Math.min(transformAmountRef.current + transformSpeed, maxTransform);
        } else {
          transformAmountRef.current = Math.max(transformAmountRef.current - transformSpeed, 0);
        }

        scrollingText.style.transform = `translateX(-${transformAmountRef.current}px)`;
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 50); // Throttle to reduce frequency

    window.addEventListener("wheel", throttledHandleScroll);

    return () => {
      window.removeEventListener("wheel", throttledHandleScroll);
    };
  }, []);

  // Throttle function to limit scroll event calls
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
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
          content="Som Srivastava, somwrks, SOMWRKS, SomWrks, Software Developer, Entrepreneur, Mental Health Advocate, Full Stack Developer, Innovator, Technology Enthusiast"
        />

        <link rel="icon" href="som.webp" />
      </Head>
      {change && <Loading />}
      <div
        className={`flex  ${
          change ? " opacity-0 " : " opacity-100 "
        } select-none transition-all flex-col overflow-none md:items-center  justify-center cursor-none  w-full min-h-screen`}
      >
        <div className="flex flex-col overflow-hidden  right-8 top-5 md:h-[17vw] h-[200px] w-[200px] rounded-full circleoutline md:w-[17vw] absolute md:top-auto md:right-auto">
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
          <div className="circle-word">I</div>
        </div>

        <div
          onClick={start}
          className="flex flex-col overflow-none right-16 top-12  md:top-auto md:right-auto  md:h-[13vw] h-[150px] w-[150px] rounded-full  circle md:w-[13vw] absolute cursor-none"
        ></div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div
            className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
            onClick={() => go("/about")}
          >
            <div>
              <h1 className="text-[15vw] md:text-[4vw] text-white effect">
                About
              </h1>
            </div>
          </div>
          <div
            className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
            onClick={() => go("/experience")}
          >
            <div>
              <h1 className="text-[15vw] md:text-[4vw] text-white effect">
                Experience
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div
            className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
            onClick={() => go("/project")}
          >
            <div>
              <h1 className="text-[15vw] md:text-[4vw] text-white effect">
                Projects
              </h1>
            </div>
          </div>
          <div
            className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
            onClick={() => go("/connect")}
          >
            <div>
              <h1 className="text-[15vw] md:text-[4vw] text-white effect">
                Connect
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="story-container">
        <div className="scrolling-text">
          <h2 className="scrolling-text-content">
          STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY 
          </h2>
        </div>
      </div>
      <Story/>

    </>
  );
}
