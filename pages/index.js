import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home({ toggleAudio }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const app = useRouter();
  const go = (e) => {
    if (typeof window !== "undefined") {
      app.push(e);
    }
  };
  const calculateGradient = (x, y) => {
    if (typeof window !== "undefined") {
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.sqrt(
        window.innerWidth * window.innerWidth +
          window.innerHeight * window.innerHeight
      );
      const gradient = distance / maxDistance; // Normalize to range [0,1]
      return `linear-gradient(49deg, rgba(0,38,150,1) 0%, rgba(6,2,37,${gradient}) 100%)`;
    }
    return ""; // Return a default value or handle the case when window is not defined
  };
  const [change, setChange] = useState(true);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };
    setTimeout(() => {
      setChange(false);
    }, 3000); 

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const start =()=>{
    
    toggleAudio()
  }

  return (
    <>

    {change && <Loading/>}
    <div
      className={`flex  ${
        change ? " opacity-0 " : " opacity-100 "
      } transition-all flex-col items-center  justify-center  w-full min-h-screen`}
      style={{ background: calculateGradient(x, y) }}
    >
      <div className="flex flex-col h-[16vw] rounded-full circleoutline w-[16vw] absolute">
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
        className="flex flex-col h-[13vw] rounded-full  circle w-[13vw] absolute"
      ></div>
      <div className="flex flex-row justify-between ">
        <div
          className="w-[50vw]  bg-[#ffffff22]  shadow-2xl flex items-center justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/about")}
        >
          <div>
            <h1 className="text-7xl text-white effect">About</h1>
          </div>
        </div>
        <div
          className="w-[50vw]  bg-[#ffffff22]  shadow-2xl flex items-center justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/work")}
        >
          <div>
            <h1 className="text-7xl text-white effect">Work</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between ">
        <div
          className="w-[50vw]  bg-[#ffffff22]  shadow-2xl flex items-center justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/project")}
        >
          <div>
            <h1 className="text-7xl text-white effect">Projects</h1>
          </div>
        </div>
        <div
          className="w-[50vw]  bg-[#ffffff22]  shadow-2xl flex items-center justify-center h-[26.3vw]  effectbg"
          onClick={() => go("/connect")}
        >
          <div>
            <h1 className="text-7xl text-white effect">Connect</h1>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
