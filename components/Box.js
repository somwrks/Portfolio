import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Box = ({ imageUrl, overlayText, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
const [width, setWidth] = useState(null)
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {

      if (width <= 768) {
        setIsHovered(true);
      } else{
        setIsHovered(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize immediately to set initial state
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render


  return (
    <div
      className="relative transition-all w-[70vw] h-[100vw] md:w-[12vw] cursor-none md:h-[30vw] bg-cover bg-center "
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => width>768? setIsHovered(true):""}
      onMouseLeave={() => width>768?setIsHovered(false):""}
    >
      {isHovered && (
        <div className="absolute inset-0 flex cursor-none fade items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl ">
          <Link
            href={overlayText}
            className="text-white text-[1vw] font-semibold  up"
          >
            <Image src={`/${icon}.svg`} width={50} height={50} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Box;
