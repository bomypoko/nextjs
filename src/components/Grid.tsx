import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    
    <section id="about">

      <BentoGrid>
        {[{title:'title1',description:'Disc1',id: 1},
          {title:'title1',description:'Disc1',id: 1},
          {title:'title1',description:'Disc1',id: 1},
        ].map((item,index) => (
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