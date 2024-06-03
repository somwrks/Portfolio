import React from 'react'
import Posts from './Posts'
import posts from "../public/post.json";


export default function Story() {
  
  return (
    <div className="flex flex-col items-center  w-full text-white  ">
    {posts[0] ? posts.map((post, index) => (
        <Posts key={index} post={post}/>
    )) 
    : <div className='flex text-2xl mt-5'>Nothing to see here...</div>}
    </div>
  )
}
