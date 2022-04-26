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
        <img src='/assets/images/logo-gadjian.png' alt='logo-gadjian' className='w-[10%]' />
      </div>
      <div className='hidden md:block' id='list'>
        <ul>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={faHouseChimney} className='mx-2 w-4' />
              <span>Beranda</span>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={faUsers} className='mx-2 w-4' />
              <span>Personnel List</span>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={faCalendarDays} className='mx-2 w-4' />
              <span>Daily Attendance</span>
            </a>
          </li>
        </ul>
      </div>
    </div>


    // <div className='container mx-auto'>
    //   <div className='flex justify-between items-center justify-items-center py-[3%]'>
    //     <img src='/assets/images/logo-gadjian.png' alt='logo-gadjian' className='w-[10%]' />
    //     <div className="flex items-center text-center">
    //       <div className=''>Hallo, <span className='text-[#1cc1bf] font-bold'>Gadjian User</span></div>
    //       <div className='border border-black rounded-full w-[50px] h-[50px] mx-3'>
    //         <div className=' text-[12px] py-4'>Photo</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  )
}
