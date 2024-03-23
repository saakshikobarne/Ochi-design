import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full rounded-tl-3xl rounded-tr-3xl py-14 bg-[rgb(173,201,75)] mt-16'>
        <div className='text border-t-2 text-zinc-900 border-b-2 border-zinc-300 flex overflow-hidden  whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold pr-20 uppercase mb-[1vw]'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold pr-20 uppercase mb-[1vw]'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee