import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouseChimney, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  const handleOnClick = () => {
    const list = document.getElementById('list');
    if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
    } else {
      list.classList.add('hidden');
    }
  }
  return (
    <div className='container mx-auto'>
      <div className='flex items-center'>
        <button className='md:hidden mx-2' onClick={handleOnClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <img src='/assets/images/logo-gadjian.png' alt='logo-gadjian' className='md:w-[30%] w-[20%]' />
      </div>
      <div className='hidden md:block' id='list'>
        <ul>
          <li>
            <a href='/beranda' className='hover:text-[#1cc1bf]'>
              <FontAwesomeIcon icon={faHouseChimney} className='mx-2 w-4' />
              <span className='text-[#5f5f5f] md:text-base text-sm font-semibold hover:text-[#1cc1bf]'>Beranda</span>
            </a>
          </li>
          <li>
            <a href='/' className='hover:text-[#1cc1bf]'>
              <FontAwesomeIcon icon={faUsers} className='mx-2 w-4' />
              <span className='text-[#5f5f5f] md:text-base text-sm font-semibold hover:text-[#1cc1bf] active:text-[#1cc1bf]'>Personnel List</span>
            </a>
          </li>
          <li>
            <a href='/daily-attendance' className='hover:text-[#1cc1bf]'>
              <FontAwesomeIcon icon={faCalendarDays} className='mx-2 w-4' />
              <span className='text-[#5f5f5f] md:text-base text-sm font-semibold hover:text-[#1cc1bf]'>Daily Attendance</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
