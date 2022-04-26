import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
  const { firstName, lastName, phone, email, birthday} = props;
  return (
    <div className='bg-white rounded-xl'>
      <div className='flex items-center justify-between px-4 py-3'>
        <p className='text-[#8a8a88] text-sm'>Personnel ID: <span className='text-[#1cc1bf]'>123456</span></p>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <hr />
      <div className='px-4 py-3'>
        <div className='flex items-center justify-center border border-[#8a8a88] rounded-full w-[150px] h-[150px] mx-auto text-[#8a8a88] font-bold'>
          Photo
        </div>
        <div className='mt-4'>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Name</p>
            <p className='text-[#8a8a88] text-base'>{firstName} {lastName}</p>
          </div>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Telephone</p>
            <p className='text-[#8a8a88] text-base'>{phone}</p>
          </div>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Birthday</p>
            <p className='text-[#8a8a88] text-base'>{birthday}</p>
          </div>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Email</p>
            <p className='text-[#8a8a88] text-base'>{email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

