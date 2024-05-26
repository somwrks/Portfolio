import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Posts({post}) {
  return (
    <div className="flex flex-col  space-y-4 min-h-[40vw] p-3  w-[30vw]">
    
        <div  className="flex flex-col space-y-4">
          <div className="flex flex-col w-full text-left text-gray-300 text-2xl">
            {post.date}
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <Image src={post.image} width={300} height={300} alt={`Image for ${post.title}`} />
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
              <button key={btnIndex} className='px-4 py-2 bg-gray-400 text-gray-200 hover:mt-2 origin-top'><Link href={`${button.link}`}>
              {button.text}
              </Link>
              </button>
            ))}
          </div>
        </div>
     
    </div>
  )
}
