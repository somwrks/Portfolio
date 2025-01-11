// components/AvatarPopup.tsx
"use client";
import { Skeleton } from "@nextui-org/react";
import React, { useState, useRef } from "react";

interface ResumePopupProps {
  isClosing: boolean;
  onClose: () => void;
}

export default function ResumePopup({ isClosing, onClose }: ResumePopupProps) {
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [currentDrag, setCurrentDrag] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const handleIframeLoad = () => {
      setIsLoading(false);
    };

  const popupRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragStart(clientY);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const delta = clientY - dragStart;
    if (delta > 0) {
      setCurrentDrag(delta);
    }
  };

  const handleTouchEnd = () => {
    if (currentDrag > 150) {
      onClose();
    }
    setDragStart(null);
    setCurrentDrag(0);
  };

  return (
    <div
      ref={popupRef}
      className={`bg-[#0E0E0E] absolute z-50 w-11/12 justify-center items-center md:w-4/5 rounded-3xl px-6 pb-8 mt-4 bottom-0 min-h-[90vh] ${
        isClosing ? "slide-out" : "slide-in"
      }`}
      style={{
        transform: `translateY(${currentDrag}px)`,
        transition: dragStart ? "none" : "transform 0.3s ease-out",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="w-full flex justify-center py-2 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-6 mt-4">
  {isLoading && (
    <Skeleton 
      className="rounded-xl w-full h-[73vh]"
      classNames={{
        base: "bg-gray-800",
      }}
    >
      <div className="h-[73vh] rounded-xl"></div>
    </Skeleton>
  )}
  <iframe
    src="https://drive.google.com/file/d/165w5EF5gtC2w7vRot5xZiRWuhIg38A4z/preview"
    className={`w-full h-[73vh] rounded-xl  ${isLoading ? 'hidden' : ''}`}
    allow="autoplay"
    onLoad={handleIframeLoad}
  ></iframe>
</div>

    </div>
  );
}
