import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (

    <div className='pb-20 pt-36'>
      {/* Spotlight Here */}

        <div>
            <Spotlight className='-left-10 -top-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]'fill='blue'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]'fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute flex items-center justify-center  top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='p-2 flex justify-center relative my-20 z-10'>
            <div className=' max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h1 className='uppercase text-xl tracking-widest text-center text-blue-100'>
                Dynamic Web Magic with NextJs
              </h1>
            </div>
        </div>

    </div>
  )
}

export default Hero