import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Pagination from './Pagination';
import axios from 'axios';
import { GET_USERS } from '../redux/constants/users'
import { useDispatch } from 'react-redux'

export default function PersonnelList(props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [users, setUsers] = useState([])

  const dispatch = useDispatch()
  const userPerPage = 4;
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=28')
      .then((res) => {
        dispatch({
          type: GET_USERS,
          payload: {
            data: res.data.results
          }
        })
        setUsers(res.data.results);
      });
  }, [dispatch]);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / userPerPage)

  const nextPage= (e) => {
    e.preventDefault()
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1)
  }

  const previousPage = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1)
  }

  return (
    <div className='md:static relative'>
      <div className="flex items-center justify-end text-center mb-5 md:static absolute md:top-0 top-[-65px] right-0">
        <div className='text-[#8a8a88] md:text-base text-sm'>Hallo, <span className='text-[#1cc1bf] font-bold'>Gadjian User</span></div>
        <div className='border border-black rounded-full w-[50px] h-[50px] mx-3'>
          <div className='md:text-xs text-[10px] py-4'>Photo</div>
        </div>
      </div>
      <div className='bg-[#f9f9f6] p-7'>
        <div className='bg-white flex justify-between items-center p-4'>
          <div className='w-[50%]'>
            <p className='uppercase text-[#1cc1bf] lg:text-xl text-xs font-bold'>personnel list</p>
            <p className='text-[#8a8a88] lg:text-lg text-xs font-medium'>List of all personnel</p>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center justify-center border border-[#f0f0ed] p-2 mx-2'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#1cc1bf]' />
              <span className='text-[#8a8a88] mx-2 font-medium'>
                <input type="text" placeholder="Find Personnels" className='text-[#8a8a88] lg:text-base text-xs mx-2 font-medium' />
              </span>
            </div>
            <div className='flex items-center justify-center border border-[#f0f0ed] bg-[#1cc1bf] px-2 py-3 mx-2 text-white'>
              <button className='uppercase lg:text-xs text-[8px] mx-2 font-medium'>Add Personnel</button>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
        <div>
          {
            users.length > 0 ? (
              <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-none lg:grid-rows-none md:grid-rows-2 grid-rows-4 gap-7 mt-7'>
                {
                  currentUser.map ((user) => (
                    <Card key={user.login.uuid} lastName={user.name.last} firstName={user.name.first} phone={user.phone} birthday={user.dob.date} email={user.email} image={user.picture.medium} />
                  ))
                }
              </div>
            ) : null
          }
        </div>
        <Pagination nextPage={nextPage} previousPage={previousPage} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}