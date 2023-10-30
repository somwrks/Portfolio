import Image from 'next/image'
import React from 'react'

export default function Exp({setShow,change,title,detail1,index,icon}) {
  return (
    <div
    className={`flex flex-col md:flex-row   ${
      !change ? "enter" : "leave"
    }   space-y-5 items-start md:items-center md:justify-center`}
  >
    <div className="flex md:w-3/5  flex-col">
    {icon? 
      <Image src={`${icon}`} className=" md:h-[400px] md:w-[400px] " width={400} height={400} />
    :  <Image src={`/${index}.webp`} width={400} height={400} className=" md:h-[400px] md:w-[400px] " />
    }
    </div>
    <div className="flex flex-col w-full md:w-4/5 justify-between text-white  space-y-4">
      <div>
        <h1 className=" text-[6vw] md:text-[1.5vw]">
          {title}
        </h1>
      </div>
      <div>
        <p className=" text-[5w] md:text-[1vw]">
          {detail1}
        </p>
      </div>
      <div>
        <button className="px-4 py-2 backdrop-blur-3xl font-bold  rounded-xl text-white border-2 border-gray-200">
          <a  onClick={()=> setShow(index)}>Explore</a>
        </button>
      </div>
    </div>
  </div>
  )
}
