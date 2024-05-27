import React, { useState } from 'react'

export default function Buttons() {
    const [setshow, setSetshow] = useState('')
  return (
    <div className="flex flex-col -right-8 gap-y-16 h-full  top-64 fixed ">
        <button className=' px-4 bg-black rounded-sm -rotate-90 mt-12 text-white border-b-0 border text-xl z-50 '>Freelance</button>
        <button className=' px-4 bg-white rounded-sm -rotate-90 mt-12 text-black border-b-0 border text-xl z-50'>Resume</button>
    </div>
  )
}
