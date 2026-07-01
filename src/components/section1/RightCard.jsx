import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCard = ({ img, intro, tag, active }) => {
  return (
    <div
      className=' h-full shrink-0 w-70 overflow-hidden relative rounded-3xl transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:scale-115
    hover:shadow-2xl'
    >
      <img
        className='h-full w-full object-cover opacity-95'
        src={img}
      />

      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h3 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>
          {intro}
        </h3>

        <div>
          <p className='leading-normal text-shadow-lg text-white mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className='flex justify-between'>
            <button className='bg-gray-600 text-white font-medium px-7 py-4 text-lg rounded-full'>
              {tag}
            </button>

            <button className='bg-gray-600 text-white font-medium px-4 py-3 rounded-full'>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard