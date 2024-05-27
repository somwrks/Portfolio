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
    <div className="flex flex-col overflow-none justify-between space-y-4 min-h-[600px] min-w-[500px] md:min-h-[700px]  p-3 md:min-w-[600px]">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col w-full text-left text-gray-300 text-2xl">
          {post.date}
        </div>
        <div className="flex flex-col justify-center w-full">
          <Carousel images={post.images} />
        </div>
        <div className="flex flex-col w-full text-left text-xl">
          {post.title}
        </div>
        <div className="flex flex-col w-full text-left text-md">
          <p>{post.description}</p>
        </div>
        <div className="flex flex-row space-x-3 w-full text-left text-md">
          {post.buttons.map((button, btnIndex) => (
            button &&
            <button key={btnIndex} className="px-4 py-2 bg-gray-600 text-white hover:mt-2 origin-top">
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
