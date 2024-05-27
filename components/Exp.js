import Image from 'next/image'
import React from 'react'

export default function Exp({setShow,change,title,detail1,index,icon}) {
  return (
    <div
    className={`flex flex-col md:flex-row   ${
      !change ? "enter" : "leave"
    }  space-y-5 md:space-x-5 items-start md:items-center md:justify-between`}
  >
    <div className="flex md:w-3/5  flex-col ">
    
                  <Image loading="lazy"    onError={(err) => console.error('Error loading image:', err)}
  src={`${icon}`} className=" " width={400} height={400} />
   
   
    </div>
    <div className="flex flex-col w-full md:w-4/5 justify-between text-white  space-y-4">
      <div>
        <h1 className=" text-[6vw] md:text-[1.5vw]">
          {title}
        </h1>
      </div>
      <div>
        <p className=" text-[6w] md:text-[1vw]">
          {detail1}
        </p>
      </div>
      <div>
        <button onClick={()=> setShow(index)}  className="px-[3.5vw] py-[2vw] md:px-[1.5vw] md:py-[0.5vw] backdrop-blur-3xl font-bold  rounded-xl text-white border-2 border-gray-200">
          <a  >Explore</a>
        </button>
      </div>
    </div>
  </div>
  )
}
