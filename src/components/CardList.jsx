import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from './Card'

export default function CardList() {
  return (
    <div>
      <div className="flex items-center justify-end text-center mb-5 md:static relative">
        <div className='text-[#8a8a88] md:static absolute'>Hallo, <span className='text-[#1cc1bf] font-bold'>Gadjian User</span></div>
        <div className='border border-black rounded-full w-[50px] h-[50px] mx-3 md:static absolute'>
          <div className=' text-[12px] py-4'>Photo</div>
        </div>
      </div>
      <div className='bg-[#f9f9f6] p-7'>
        <div className='bg-white flex justify-between items-center p-4'>
          <div>
            <p className='uppercase text-[#1cc1bf] text-xl font-bold'>personnel list</p>
            <p className='text-[#8a8a88] text-lg font-medium'>List of all personnel</p>
          </div>
          <div className='flex items-center'>
            <div className='border border-[#f0f0ed] p-2 mx-2'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#1cc1bf]' />
              <span className='text-[#8a8a88] mx-2 font-medium'>Find Personnels</span>
            </div>
            <div className='border border-[#f0f0ed] bg-[#1cc1bf] p-2 mx-2 text-white'>
              <FontAwesomeIcon icon={faPlus} />
              <span className='uppercase mx-2 font-medium'>Add Personnel</span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-7 mt-7'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='flex items-center justify-center mt-12'>
          <div className='mx-4'>
            <button className='text-[#8a8a88]'>
              {' < '} Previous Page
            </button>
          </div>
          <div className="mx-4">
            <button className='text-[#8a8a88]'>
              Next Page {' > '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
