import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCard = (props) => {
  return (
    <div className='h-full mr-2 w-80 overflow-hidden relative  rounded-4xl'>
        <img className='h-full w-full object-cover opacity-80 ' src={props.src} />
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                     itaque recusandae sequi voluptates laudantium laboriosam.</p>
                <div className='flex justify-between'>
                    <button className=' bg-gray-600 text-white font-medium px-7 py-4 text-lg rounded-full'>Satisfied</button>
                    <button className='bg-gray-600 text-white font-medium px-4 py-3 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard