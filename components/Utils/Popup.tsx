"use client";
import { Image } from '@nextui-org/react';
import React, { useState, useRef } from 'react';

interface PopupProps {
  section: string;
  isClosing: boolean;
  onClose: () => void;
}

export default function Popup({ section, isClosing, onClose }: PopupProps) {
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [currentDrag, setCurrentDrag] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart(clientY);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;
    
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const delta = clientY - dragStart;
    
    if (delta > 0) {
      setCurrentDrag(delta);
    }
  };

  const handleTouchEnd = () => {
    if (currentDrag > 150) { // Threshold to trigger close
      onClose();
    }
    setDragStart(null);
    setCurrentDrag(0);
  };

  const dummyData = {
    projects: [
      {
        title: 'SparkyAI',
        description: 'A Discord bot designed to assist Arizona State University students with access to resources, including news, events, scholarships, courses, and more.',
        image: '/path-to-image.jpg'
      },
    ],
    experience: [
      {
        title: 'SparkyAI',
        description: 'A Discord bot designed to assist Arizona State University students with access to resources, including news, events, scholarships, courses, and more.',
        image: '/path-to-image.jpg'
      },
    ],
    stories: [
      {
        title: 'SparkyAI',
        description: 'A Discord bot designed to assist Arizona State University students with access to resources, including news, events, scholarships, courses, and more.',
        image: '/path-to-image.jpg'
      },
    ]
  };

  const data = dummyData[section as keyof typeof dummyData];

  return (
    <div 
      ref={popupRef}
      className={`bg-[#0E0E0E] absolute z-50 w-11/12 md:w-2/5 rounded-3xl px-6 pb-8 mt-4 bottom-0 min-h-[90vh] overflow-y-auto ${
        isClosing ? 'slide-out' : 'slide-in'
      }`} 
      style={{
        transform: `translateY(${currentDrag}px)`,
        transition: dragStart ? 'none' : 'transform 0.3s ease-out'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Draggable Handle */}
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

      <h1 className="text-white text-center text-4xl font-bold my-6 capitalize">{section}</h1>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 bg-[#1A1A1A] p-4 rounded-xl">
            <Image 
              src={item.image} 
              alt={item.title}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
