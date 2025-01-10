// components/Utils/Navbar.tsx
"use client";
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarContent,
  Avatar,
} from "@nextui-org/react";
import AvatarPopup from './AvatarPopup';

interface NavbarProps {
  setZoom: (zoom: boolean) => void;
  zoom: boolean | null;
}

export default function NavbarComponent({ setZoom,zoom }: NavbarProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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
  const handleClose = () => {
    setIsClosing(true);
    setZoom(false)
    setTimeout(() => {
      setIsPopupOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <div className={`px-4 pt-4 ${
          zoom? 'zoom-out' : 'zoom-in'
        }`}>
        <Navbar 
          maxWidth="full" 
          className="bg-[#0E0E0E] rounded-full"
        >
          <div className="w-full flex flex-row justify-between items-center py-4 px-6">
            <h1 className="text-xl font-semibold text-white">Resume</h1>
            <NavbarContent as="div" className="items-center" justify="end"> 
              <Avatar
                isBordered
                as="button"
                className="transition-transform bg-[#0d0d0d]"
                color="default"
                name="Ash Srivastava"
                size="sm"
                src="https://avatars.githubusercontent.com/u/85481905?v=4"
                onClick={() => {setIsPopupOpen(true);setZoom(true)}}
              />
            </NavbarContent>
          </div>
        </Navbar>
      </div>

      {isPopupOpen && (
        <div 
          className="fixed backdrop-blur-sm justify-center w-full items-center flex inset-0 z-10 backdrop-animate"
          onClick={handleClose}
        >
          <AvatarPopup 
            isClosing={isClosing}
            onClose={handleClose}
          />
        </div>
      )}
    </>
  );
}
