import React from 'react'
import Posts from './Posts'
import posts from "../public/post.json";


export default function Story() {
  return (
    <div className="flex flex-col items-center  w-full text-white  h-[90vh]  mx-2  overflow-y-scroll">
    {posts ? posts.map((post, index) => (
        <Posts key={index} post={post}/>
    )) : "Nothing here to see..."}
    </div>
  )
}
