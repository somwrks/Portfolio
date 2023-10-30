import Loading from "@/components/Loading";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    }, 3000); 

  }, []);

  const start =()=>{
    
    toggleAudio()
  }

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
    {change && <Loading/>}
    <div
      className={`flex  ${
        change ? " opacity-0 " : " opacity-100 "
      } transition-all flex-col overflow-none md:items-center  justify-center cursor-none  w-full min-h-screen`}
    >
      <div className="flex flex-col overflow-none cursor-none right-8 top-5 md:h-[17vw] h-[250px] w-[250px] rounded-full circleoutline md:w-[17vw] absolute md:top-auto md:right-auto">
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
        className="flex flex-col overflow-none right-16 top-12  md:top-auto md:right-auto cursor-none md:h-[13vw] h-[200px] w-[200px] rounded-full  circle md:w-[13vw] absolute"
      ></div>
      <div className="flex flex-col md:flex-row justify-between ">
        <div
          className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/about")}
        >
          <div>
            <h1 className="text-[20vw] md:text-[4vw] text-white effect">About</h1>
          </div>
        </div>
        <div
          className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/experience")}
        >
          <div>
            <h1 className="text-[20vw] md:text-[4vw] text-white effect">Experience</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between ">
        <div
          className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/project")}
        >
          <div>
            <h1 className="text-[20vw] md:text-[4vw] text-white effect">Projects</h1>
          </div>
        </div>
        <div
          className="md:w-[50vw]    shadow-2xl flex items-center md:justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/connect")}
        >
          <div>
            <h1 className="text-[20vw] md:text-[4vw] text-white effect">Connect</h1>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
