import Loading from "@/components/Loading";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import Buttons from "@/components/Buttons";

const DynamicStory = dynamic(() => import("@/components/Story"));

export default function Home({
  toggleAudio,
  isPlaying,
  setEmailSent,
  emailSent,
}) {
  const app = useRouter();
  const go = (e) => {
    if (typeof window !== "undefined") {
      app.push(e);
    }
  };
  const [change, setChange] = useState(true);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const storyRef = useRef(null);

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
  const targetTransformRef = useRef(0);
  const scrollingRef = useRef(null);
  const previousScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const delta = e.deltaY;
      const container = document.querySelector(".story-container");
      const scrollingText = container.querySelector(".scrolling-text-content");

      if (scrollingText) {
        const windowWidth = window.innerWidth;
        const scrollingTextWidth = scrollingText.scrollWidth;
        const maxTransform = scrollingTextWidth - windowWidth;

        targetTransformRef.current = Math.max(
          0,
          Math.min(maxTransform, targetTransformRef.current - delta)
        );

        if (!scrollingRef.current) {
          scrollingRef.current = true;
          requestAnimationFrame(scrollStep);
        }
      }
    };

    const scrollStep = () => {
      const container = document.querySelector(".story-container");
      const scrollingText = container.querySelector(".scrolling-text-content");

      if (scrollingText) {
        const currentTransform = transformAmountRef.current;
        const distance = targetTransformRef.current - currentTransform;
        const easing = 0.04; // Adjust the easing value for smoother scrolling

        if (Math.abs(distance) > 0.1) {
          transformAmountRef.current += distance * easing;
          scrollingText.style.transform = `translateX(-${transformAmountRef.current}px)`;
          requestAnimationFrame(scrollStep);
        } else {
          scrollingRef.current = false;
          transformAmountRef.current = targetTransformRef.current;
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStoryVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.01, // Trigger when 10% of the component is visible
      }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <>
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
      {change && <Loading toggleAudio={toggleAudio} isPlaying={isPlaying} />}

      <div
        className={`flex  ${
          change ? " opacity-0 " : " opacity-100 "
        } select-none transition-all flex-col overflow-none md:items-center  justify-center cursor-none  w-full min-h-screen`}
      >
        <Buttons setEmailSent={setEmailSent} emailSent={emailSent} />

        <div
          onClick={start}
          className={`flex ${
            isPlaying ? "circleanimation" : "circleanimation pause"
          } flex-col overflow-none right-16 top-12  md:top-auto md:right-auto transition-all  md:h-[13vw] h-[150px] w-[150px] rounded-full  circle md:w-[13vw] absolute cursor-none`}
        ></div>

        <div className="flex flex-col md:flex-row justify-between ">
          <div
            className="md:w-[50vw]  border border-l-0 border-t-0    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
            onClick={() => go("/about")}
          >
            <div>
              <h1 className="text-[15vw] md:text-[4vw] text-white effect">
                About
              </h1>
            </div>
          </div>
          <div
            className="md:w-[50vw]  border border-r-0 border-l-0 border-t-0   shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
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
            className="md:w-[50vw] border border-l-0  border-t-0 md:border-b-0   shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
            onClick={() => go("/project")}
          >
            <div>
              <h1 className="text-[15vw] md:text-[4vw] text-white effect">
                Projects
              </h1>
            </div>
          </div>
          <div
            className="md:w-[50vw] border border-l-0 border-r-0  border-t-0 md:border-b-0   shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
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
      <div
        className="story-container sticky top-0 overflow-y-hidden"
        ref={storyRef}
      >
        <div className="scrolling-text overflow-y-hidden">
          <h2 className="scrolling-text-content text-gray-300 overflow-y-hidden">
            STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY
            STORIES STATUS JOURNEY STORIES STATUS JOURNEY STORIES STATUS JOURNEY
            STORIES STATUS JOURNEY STORIES STATUS JOURNEY
          </h2>
        </div>
      </div>
      {isStoryVisible && <DynamicStory />}
    </>
  );
}
