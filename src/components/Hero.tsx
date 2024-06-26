import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    // Start MAIN Container 
    // pb-20 pt-36
    <div className='pb-20  pt-36 relative overflow-hidden'>

      {/* Spotlight Here */}
      {/* -left-10 -top-10 md:-left-32 md:-top-20 */}
        <div className='-left-10 -top-10 md:-left-32 md:-top-20 '> 
            <Spotlight className='-left-10 -top-20' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]'fill='blue'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]'fill='blue'/>
        </div>
      {/* Spotlight End  */}

      {/* Grid Zone  */}
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
        </div>
      {/* Grid Zone End */}

        <div className='p-2 flex justify-center relative my-20 z-10 '>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h1 className='uppercase text-xl tracking-widest text-center '>
                Dynamic Web Magic with NextJs
              </h1>
              
      {/* Text Timing  */}
              <TextGenerateEffect 
              className="text-center text-[40px] md:text-5xl lg:text-6xl  "
              words='Transforming Concepts into Seamless Experiences'/>

                <p className='text-center md:tracking-wider mt-2 mb-4 text-sm md:text-lg lg:text-2xl '>
                  Hi, I&apos;m Ratchasri, a Next.Js Developer base in Thailand
                </p>
                <a href="#about">
                  <MagicButton 
                    title= "Show my work"
                    icon={<FaLocationArrow/>}
                    position='right'
                    
                    />
                </a>
                

            </div>
        </div>
    </div>
  )
}

export default Hero