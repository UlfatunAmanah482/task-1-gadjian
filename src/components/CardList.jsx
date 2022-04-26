import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Pagination from './Pagination';
import axios from 'axios';
import { getAllUsers } from '../redux/actions/users'
import { useDispatch } from 'react-redux'

export default function CardList(props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [users, setUsers] = useState([])

  const dispatch = useDispatch()

  const postPerPage = 4;
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=28')
      .then((res) => {
        setUsers(res.data.results);
      });
      dispatch(getAllUsers())
  }, [dispatch]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentUser = users.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(users.length / postPerPage)

  const nextPage= () => {
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1)
  }

  const previousPage = () => {
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1)
  }

  return (
    <div className='md:static relative'>
      <div className="flex items-center justify-end text-center mb-5 md:static absolute md:top-0 top-[-65px] right-0">
        <div className='text-[#8a8a88]'>Hallo, <span className='text-[#1cc1bf] font-bold'>Gadjian User</span></div>
        <div className='border border-black rounded-full w-[50px] h-[50px] mx-3'>
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
        <div>
          {
            users.length > 0 ? (
              <div className='grid grid-cols-4 gap-7 mt-7'>
                {
                  currentUser.map ((user) => (
                    <Card key={user.login.uuid} lastName={user.name.last} firstName={user.name.first} phone={user.phone} birthday={user.dob.date} email={user.email} image={user.picture.medium} />
                  ))
                }
              </div>
            ) : null
          }
        </div>
        <Pagination postPerPage={postPerPage} totalPosts={users.length} nextPage={nextPage} previousPage={previousPage} />
      </div>
    </div>
  )
}