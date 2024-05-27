import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Box = ({ imageUrl, overlayText, icon }) => {
  const [isHovered, setIsHovered] = useState(true);



  return (
    <div
      className="relative transition-all w-[70vw] h-[100vw] md:w-[12vw]  md:h-[30vw] bg-cover bg-center "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
       
        <div className={`absolute ${isHovered ? "visible":"hidden"} inset-0 flex  fade items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl `}>
          <Link
            href={overlayText}
            className="text-white text-[1vw] font-semibold  up"
          >
                        <Image loading="lazy"    onError={(err) => console.error('Error loading image:', err)}
  src={`/${icon}.svg`} width={50} height={50} />
          </Link>
        </div>
      
    </div>
  );
};

export default Box;
