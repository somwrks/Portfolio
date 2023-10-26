import Image from 'next/image'
import React from 'react'

export default function Exp({setShow,change,title,detail1,index,icon}) {
  return (
    <div
    className={`flex flex-row   ${
      !change ? "enter" : "leave"
    } md:flex-nowrap flex-wrap space-x-4 items-center`}
  >
    <div className="flex w-3/5  flex-col">
    {icon? 
      <Image src={`${icon}`} width={400} height={400} />
    :  <Image src={`/${index}.webp`} width={400} height={400} />
    }
    </div>
    <div className="flex flex-col  w-4/5 justify-between text-white  space-y-3">
      <div>
        <h1 className="text-[1.5vw]">
          {title}
        </h1>
      </div>
      <div>
        <p className="text-justify text-[1vw]">
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
