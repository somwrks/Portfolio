"use client";
import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/Utils/NavbarComponent";
import Footer from "../components/Utils/Footer";
import Popup from "../components/Utils/Popup";
import LandingPage from "../components/Utils/LandingPage";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [zoom, setZoom] = useState<boolean | null>(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsClosing(true);
    setZoom(false);
    setTimeout(() => {
      setSelectedSection(null);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row w-full justify-between flex-grow  min-h-screen">
        <div
          className={`flex justify-between  min-h-screen items-center py-24  flex-col w-1/2  h-full  transition-all duration-400 ease-out ${
            zoom ? "zoom-out blur-sm" : "zoom-in"
          }`}
        >
          <div>
            <Image
              src="/asu.svg"
              width={150}
              className=" brightness-75 cursor-pointer hover:brightness-100"
              height={150}
              alt="Arizona State University Logo"
              onClick={() => {
                router.push("https://www.asu.edu/");
              }}
            />
          </div>
          <div>
            <Image
              src="/cms.jpg"
              width={150}
              className=" brightness-75 cursor-pointer hover:brightness-100"
              height={150}
              alt="City Montessori School Logo"
              onClick={() => {
                router.push("https://www.cmseducation.org");
              }}
            />
          </div>
        </div>
        <div
          className={`flex flex-col  w-full md:w-1/2  relative transition-all duration-400 ease-out ${
            zoom ? "zoom-out" : "zoom-in"
          }`}
        >
          <NavbarComponent zoom={zoom} setZoom={setZoom} />
          <LandingPage />
          <Footer setSelectedSection={setSelectedSection} setZoom={setZoom} />
        </div>
        <div
          className={`flex justify-between  min-h-screen items-center py-24  flex-col w-1/2  h-full  transition-all duration-400 ease-out ${
            zoom ? "zoom-out blur-sm" : "zoom-in"
          }`}
        >
          <div>
            <Image
              src="/asu.svg"
              width={150}
              className=" brightness-75 cursor-pointer hover:brightness-100"
              height={150}
              alt="Arizona State University Logo"
              onClick={() => {
                router.push("https://www.asu.edu/");
              }}
            />
          </div>
          <div>
            <Image
              src="/cms.jpg"
              width={150}
              className=" brightness-75 cursor-pointer hover:brightness-100"
              height={150}
              alt="City Montessori School Logo"
              onClick={() => {
                router.push("https://www.cmseducation.org");
              }}
            />
          </div>
        </div>
      </div>

      {selectedSection && (
        <div
          className="fixed backdrop-blur-sm justify-center w-full items-center flex inset-0 z-10 backdrop-animate"
          onClick={handleClose}
        >
          <Popup
            section={selectedSection}
            isClosing={isClosing}
            onClose={handleClose}
          />
        </div>
      )}
    </>
  );
}
