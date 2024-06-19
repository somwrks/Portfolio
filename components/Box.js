import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Box = ({ imageUrl, overlayText, icon }) => {
  const [isHovered, setIsHovered] = useState(true);



  return (
    <div
      className="relative transition-all h-[100vw] w-full md:gap-y-0 gap-y-1 md:h-[30vw] bg-cover bg-center "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
       
        <div className={`absolute ${isHovered ? "visible":"hidden"} inset-0 flex  fade items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl `}>
          <Link
            href={overlayText}
            className="text-white text-[1vw] font-semibold  up"
          >
                        <Image loading="lazy"    onError={(err) => console.error('Error loading image:', err)}
  src={`/${icon}.svg`} width={70} height={70} />
          </Link>
        </div>
      
    </div>
  );
};

export default Box;
