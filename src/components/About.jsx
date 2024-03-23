import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[4vw] leading-[3.5vw] font-normal tracking-tight'>
            Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full border-t-[1px] flex gap-5 pt-10 mt-14  border-[#353630]'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Our Approach:</h1>
                <button className='flex gap-6 uppercase items-center px-4 mt-8 py-2 bg-zinc-900 rounded-full text-white'>
                    Read More
                    <div className='w-2 h-2 rounded-full bg-zinc-100'>
                        <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"/>
                    </div>
                </button>
            </div>
            <div className='w-1/2 rounded-3xl h-[70vh] bg-[#c1d870]'>
                
            </div>
        </div>
    </div>
  )
}

export default About