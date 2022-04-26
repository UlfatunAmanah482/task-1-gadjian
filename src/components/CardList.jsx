import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Card from './Card'
import { getAllUsers } from '../redux/actions/users';
import Pagination from './Pagination';
import axios from 'axios';

function CardList(props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(3)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=28')
      .then((res) => {
        setUsers(res.data.results);
      });
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentUser = users.slice(indexOfFirstPost, indexOfLastPost); 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

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
              <div className='grid grid-cols-3 gap-7 mt-7'>
                {
                  currentUser.map ((user) => (
                    <Card users={users} key={user.login.uuid} lastName={user.name.last} firstName={user.name.first} phone={user.phone} birthday={user.dob.date} email={user.email} />
                  ))
                }
              </div>
            ) : null
          }
        </div>
        <Pagination postPerPage={postPerPage} totalPosts={users.length} nextPage={nextPage} previousPage={previousPage} />
        {/* <Pagination postPerPage={postPerPage} totalPosts={users.length} paginate={paginate} nextPage={nextPage} previousPage={previousPage} /> */}
        {/* <div className='flex items-center justify-center mt-12'>
          <div className='mx-4'>
            <button className='text-[#8a8a88] hover:text-[#5f5f5f] font-semibold' onClick={previousPage}>
              {' < '} Previous Page
            </button>
          </div>
          <div className="mx-4">
            <button className='text-[#8a8a88] hover:text-[#5f5f5f] font-semibold' onClick={nextPage}>
              Next Page {' > '}
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: (data) => dispatch(getAllUsers(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);