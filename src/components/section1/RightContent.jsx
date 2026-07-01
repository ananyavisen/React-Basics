import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import HeroText from './HeroText';
import RightCard from './RightCard';


const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto rounded-4xl p-6 gap-10 flex w-2/3'>
        {props.users.map(function(ele){
          return <RightCard img={ele.img} tag={ele.tag} intro={ele.intro} />
        })}
    </div>
  )
}

export default RightContent