import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export default function Downarrow() {

  return (
    <div className="fixed  animatearrow -z-1 flex min-h-screen w-full items-center justify-center  text-gray-300 text-3xl">
    <FontAwesomeIcon icon={faArrowDown}/>
    </div>
  );
}
