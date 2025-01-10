/* eslint-disable @typescript-eslint/no-unused-vars */
// components/Utils/Footer.tsx
"use client";
import React from "react";
import { Button } from "@nextui-org/react";

interface FooterProps {
  setSelectedSection: (section: string) => void;
  setZoom: (zoom: boolean) => void;
}

export default function Footer({ setSelectedSection,setZoom }: FooterProps) {
  return (
    <div className="fixed bottom-4 md:w-full  w-full p-4 space-y-4">
      <div className="flex justify-between px-4 mb-4">
        <Button 
          className="bg-[#0E0E0E] text-white rounded-full px-4 md:px-12 py-2"
          onPress={() => {setSelectedSection('projects');
            setZoom(true);
          }}
          
        >
          Projects
        </Button>
        <Button 
          className="bg-[#0E0E0E] text-white rounded-full px-4 md:px-12 py-2"
          onPress={() => {setSelectedSection('experience');
            setZoom(true);
          }}
        >
          Experience
        </Button>
        <Button 
        
          className="bg-[#0E0E0E] text-white rounded-full px-4 md:px-12 py-2"
          onPress={() => {setSelectedSection('stories');
            setZoom(true);
          }}
        >
          Stories
        </Button>
      </div>

      <div className="flex items-center bg-[#0E0E0E] rounded-full p-4 mx-4">
        <input
          type="text"
          placeholder=".....but who is ash anyway?"
          className="flex-1 bg-transparent text-white outline-none"
        />
        <button className="ml-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.881858 0.0638419L19.6587 9.44398C19.9616 9.5953 20.0862 9.96692 19.9369 10.274C19.8773 10.3965 19.7795 10.4957 19.6587 10.5561L0.882244 19.936C0.57933 20.0873 0.21277 19.9611 0.063508 19.654C-0.00175992 19.5197 -0.0168896 19.366 0.0209135 19.2213L1.88124 12.0991C1.94276 11.8636 2.13468 11.6864 2.37175 11.6464L10.7864 10.224C10.8895 10.2065 10.9747 10.1376 11.0157 10.0438L11.0377 9.96919C11.0615 9.82447 10.9822 9.68647 10.8542 9.63227L10.7864 9.61251L2.32424 8.18267C2.08708 8.1426 1.8951 7.96534 1.83363 7.72969L0.0204896 0.778443C-0.0658838 0.447476 0.128744 0.108187 0.455202 0.0206206C0.597905 -0.0176565 0.749448 -0.00230475 0.881858 0.0638419Z"
              fill="white"
              fillOpacity="0.56"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
