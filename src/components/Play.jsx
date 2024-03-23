import React, { useEffect, useState } from 'react'

function Play() {

    
    const [rotate, setRotate] = useState(0);

    useEffect(()=> {
        window.addEventListener("mousemove", (e)=>{
            let mouseX= e.clientX;
            let mouseY= e.clientY;

            let deltaX= mouseX- window.innerWidth/2;
            let deltaY= mouseY- window.innerHeight/2;

            var angle= Math.atan2(deltaY, deltaX) * (180/Math.PI); 
            setRotate(angle-180);
        })
    })

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2' className='play w-full h-screen overflow-hideen'>
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            
            <div className='absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-1/3 h-42 '>
                <div className='bg-zinc-50 flex items-center justify-center w-[14vw] h-[14vw] rounded-full'>
                    <div className='relative w-2/3 h-2/3 bg-zinc-950 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute left-1/2 top-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                        <div className='h-8 w-8 bg-zinc-50 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-50 flex items-center justify-center w-[14vw] h-[14vw] rounded-full'>
                    <div className='relative w-2/3 h-2/3 bg-zinc-950 rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute left-1/2 top-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                        <div className='h-8 w-8 bg-zinc-50 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}


export default Play