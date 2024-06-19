import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from './Carousel';

export default function Posts({ post }) {
  // {
  //   "date": "21st September, 2024",
  //   "images": ["/2.webp","/1.webp"],
  //   "title": "A Busy day",
  //   "description": "Another description story with more details about the busy day.",
  //   "buttons": [{"text":"Read More", "link":""}, {"text":"Read More", "link":""},{"text":"Read More", "link":""}]
  // },
  return (
    <div className="flex  flex-col overflow-hidden justify-between  min-h-[600px]    p-3 md:w-1/3">
      <div className="flex flex-col overflow-hidden w-full gap-y-5">
        <div className="flex flex-col  overflow-hidden  text-gray-300 text-2xl">
          {post.date}
        </div>
        <div className="flex flex-col overflow-hidden justify-center ">
          <Carousel images={post.images} />
        </div>
        <div className="flex flex-col overflow-hidden  text-xl">
          {post.title}
        </div>
        <div className="flex flex-col overflow-hidden text-gray-300 text-md">
          <p style={{ whiteSpace: "pre-wrap" }} className="overflow-hidden">{post.description}</p>
        </div>
        <div className="flex flex-row space-x-3 overflow-hidden  text-md">
          {post.buttons.map((button, btnIndex) => (
            button &&
            <button key={btnIndex} className="px-4 py-2 overflow-hidden bg-black border text-white hover:scale-105 origin-top">
              <Link target="_blank" rel="noopener noreferrer" href={button.link}>
                {button.text}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
