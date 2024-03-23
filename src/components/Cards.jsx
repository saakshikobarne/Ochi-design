import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-28 gap-5'>
        <div className='cardContainer  w-1/2'>
            <div className=' card relative h-[50vh] w-full rounded-xl bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>©2019-22</button>
            </div>
        </div>
        <div className='cardContainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative w-1/2 h-[50vh] rounded-xl bg-zinc-800 flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>5.0 Rating on Clutch</button>
            </div>
            <div className='card relative w-1/2 h-[50vh] rounded-xl bg-zinc-800 flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>Business Bootcamp</button>
            </div>
        </div>
    </div>
  )
}

export default Cards