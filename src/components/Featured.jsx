import React from 'react'

function Featured() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 bg-zinc-100 text-black'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl tracking-tight'>Featured</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
                <div className='cardContainer relative w-1/2 h-[80vh] '>
                    <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] z-[9] text-8xl leading-none tracking-tighter'></h1>
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"/> 
                    </div>
                </div>

                <div className='cardContainer relative w-1/2 h-[80vh] '>
                    <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea68] z-[9] text-8xl leading-none tracking-tighter'>TRAWA & VISE</h1>
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured




















