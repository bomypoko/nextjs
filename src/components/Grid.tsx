import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItem } from '../../data'

const Grid = () => {
  return (
    
    <section id="about">
      {/* Loop Data from folder Data */}
      <BentoGrid>
        {gridItem.map((item,index) => (
          <BentoGridItem
            id={item.id}
            description={item.description}
            title={item.title}
            key={item.id}
            /> 
        ))}
      </BentoGrid>
    
    </section>
    
  )
}

export default Grid