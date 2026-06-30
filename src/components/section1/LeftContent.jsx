import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import HeroText from './HeroText';



const LeftContent = () => {
  return (
    <div className='h-full flex flex-col  w-1/3 '> 
        <HeroText />
        <ArrowUpRight />
    </div>
  )
}

export default LeftContent