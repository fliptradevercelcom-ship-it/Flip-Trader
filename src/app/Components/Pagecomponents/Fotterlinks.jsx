import Link from 'next/link'
import React from 'react'

const Fotterlinks = ({title,linklist,border}) => {
  return (
    <div className={`w-[85%] md:w-[70%] m-auto`}>
      <p className='text-base md:text-xl 2xl:text-2xl font-semibold w-max text-subprimary'>
       {title}
      </p> 
      <ul className='font_secondary pt-6 flex flex-col gap-2 md:gap-4 2xl:gap-4'>
        {
          linklist.map((data,index)=>(
            <Link href={data.pagelink} key={index}>
              <li className='text-[14px] md:text-lg 2xl:text-xl font-light text-white hover:underline'>{data.pagename}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Fotterlinks
