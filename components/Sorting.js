import React from 'react'

export default function Sorting({search, setSearch,options}) {
  return (
    <div className="flex flex-row w-full z-0 p-2 bg-black "> <select
    name="subject"
    id="subject"
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    required
    className="shadow z-0 bg-gray-600 appearance-none w-full py-2 px-3 text-gray-200 leading-tight "
  >
  {options.map((e,i)=>{
    return(
    <option className='z-0' key={i} value={e}>{e}</option>

    )

  })}
  </select></div>
  )
}
