import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
  const { firstName, lastName, phone, email, birthday, image} = props;
  return (
    <div className='bg-white rounded-xl'>
      <div className='flex items-center justify-between px-4 py-3'>
        <p className='text-[#8a8a88] md:text-sm text-xs'>Personnel ID: <span className='text-[#1cc1bf]'>123456</span></p>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <hr />
      <div className='flex md:flex-col flex-row px-4 py-3'>
        <div className='flex items-center justify-center mx-auto md:w-auto w-[50%]'>
          <img src={image} alt="img-thumbnail" className='rounded-full' />
        </div>
        <div className='mt-4 md:w-auto w-[50%]'>
          <div className='mb-1'>
            <p className='lg:text-sm text-xs text-[#8a8a88] font-bold'>Name</p>
            <p className='text-[#8a8a88] lg:text-base text-sm text-clip overflow-hidden'>{firstName} {lastName}</p>
          </div>
          <div className='mb-1'>
            <p className='lg:text-sm text-xs text-[#8a8a88] font-bold'>Telephone</p>
            <p className='text-[#8a8a88] lg:text-base text-sm text-clip overflow-hidden'>{phone}</p>
          </div>
          <div className='mb-1'>
            <p className='lg:text-sm text-xs text-[#8a8a88] font-bold'>Birthday</p>
            <p className='text-[#8a8a88] lg:text-base text-sm text-clip overflow-hidden'>{birthday}</p>
          </div>
          <div className='mb-1'>
            <p className='lg:text-sm text-xs text-[#8a8a88] font-bold'>Email</p>
            <p className='text-[#8a8a88] lg:text-base text-sm text-clip overflow-hidden'>{email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

