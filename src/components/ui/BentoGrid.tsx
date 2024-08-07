"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { tecStackLeft, tecStackRight } from "../../../data";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '../../../data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  
  
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  
}) => {

  const [copied,setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("orc_hero@hotmail.com");
    setCopied(true)
  }



  return (
    
    <div
        className={cn(
          "row-span-1 rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1]",
          className
        )}
        
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:' linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);'
        }}
      > 
   
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="absolute w-full h-full">
             {/* Loop Picture from Data */}
            {img && (
              <img 
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>

        <div className={`absolute  right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"/>
            )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName,"relative  group-hover/bento:translate-x-2 transition duration-200  md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >  
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
          
            <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
             {title}
            </div>
          
        {id === 2 && <GlobeDemo/> }

        {id === 3 && (
          
            <div className=" flex gap-4 lg:gap-5 w-fit absolute -right-3 lg:right-2">

            
              <div className="flex flex-col gap-3 lg:gap-8 ">
                {tecStackLeft.map((item) => (
                  <span
                    key={item.id}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center  bg-[#10132e]">
                        {item.title}
                    </span>
                ))}
              
              </div>
              
             
              <div className="flex flex-col gap-3 lg:gap-8 md-gap-3 ">
              
                {tecStackRight.map((item) => (
                  <span
                    key={item.id}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center  bg-[#10132e]">
                        {item.title}
                    </span>
                ))}
              
              </div>
            </div>
            )}

            {id === 6 && (
              <div className=" mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings:{
                      preserveAspectRatio: "xMidYMid slice",
                    }
                  }}/>
                </div>
                <MagicButton 
                  title={copied ? 'Email Copied' : 'Copy My Email'}
                  icon={<IoCopyOutline/>} 
                  position="left"
                  otherClasses='bg-[#161a31]'
                  handleClick={handleCopy}
                  />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
