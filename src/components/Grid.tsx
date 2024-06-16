import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '../../data'

const Grid = () => {
  return (
    
    <section id="about"
      >
      {/* Loop Data from folder Data */}

      <BentoGrid>
        {gridItems.map(({id , title , description,className,img,imgClassName,titleClassName,spareImg}) => (
          <BentoGridItem
            id={id}
            description={description}
            title={title}
            key={id}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            /> 
        ))}
      </BentoGrid>

    
    </section>
    
  )
}

export default Grid