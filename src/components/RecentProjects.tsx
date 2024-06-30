'use client'
import React from 'react'
import { projects } from '../../data'
import { PinContainer } from './ui/3d-pin'
import { totalmem } from 'os'

const RecentProjects = () => {
  return (

    <div className='py-20'>
        <h1 className='heading'>
            a small section of {''}
            <span className='text-purple'> recent project</span>
        </h1>
       
        <div className='flex flex-wrap items-center justify-center  p-4 gap-16 mt-10'>
            {/* Destructuring Item */}

            {projects.map(({id,title, des,img, iconLists, link ,}) => (
                <div className='flex items-center justify-center h-[25rem] lg:min-h-[32.5rem] sm:w-96 w-[80vw]'
                    key={id}>
                       <PinContainer
                        title={title}
                        href={link}
                            >
                                <div className=' relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]'>
                                    <div>
                                        <img 
                                            src="/bg.png" 
                                            alt="bg-img" />
                                    </div>
                                    <img src={img} 
                                         alt={title}
                                         className='z-10  absolute bottom-0' />
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </h1>

                                <p className='lg:text.xl lg:font-normal font-light text-sm line-clamp-'>
                                    {des}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center '>   
                                        {iconLists.map((icon) => (
                                            <div key={icon}
                                                 className='border border-white/[0.2] rounded-xl bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8'>
                                                <img src={icon} alt={icon}
                                                     className='p-2 '/>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                       </PinContainer>

                </div>
               
            ))}
        </div>
        
    </div>
  )
}

export default RecentProjects