import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Box = ({ imageUrl, overlayText, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-all w-[12vw] cursor-none h-[30vw] bg-cover bg-center "
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
