import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div  className='w-full h-screen bg-zinc-100 pt-1 text-black'>
      <div className="textstructure mt-40 px-20">
      
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) =>{
          return (
            <div className="masker ">
              <div className='w-fit flex'>
                {index===1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] rounded-lg w-[9vw] h-[5vw] relative top-[0.6vw] bg-[#cdea68]'></motion.div>)}
                <h1 className='uppercase text-8xl leading-[6vw] tracking-tighter font-semibold'>{item}</h1>
              </div>
            </div>
          )})}
      </div>

      <div className='border-t-[1px] mt-32 border-zinc-700 py-5 px-20 flex justify-between items-center'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
            return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
          })}

        <div className='start flex items-center gap-2 '>
          <div className='px-5 py-2 border-[2px] rounded-full border-zinc-500 text-md uppercase font-light '>
            start the project
          </div>
          <div className='w-9 h-9 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

