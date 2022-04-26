import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { getAllUsers } from '../redux/actions/users';
// import axios from 'axios';
import { useEffect } from 'react';
// import { useState } from 'react';

function Card(props) {
  // const [users, setUsers] = useState('')
  // useEffect(() => {
  //   axios.get('https://randomuser.me/api/?results=28')
  //     .then((res) => {
  //       setUsers(res.data.results);
  //       console.log(users);
  //     });
  // }, [users]);
  const { getAllUsers } = props;
  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])
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
            <p className='text-[#8a8a88] text-base'>First Name Last Name</p>
          </div>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Telephone</p>
            <p className='text-[#8a8a88] text-base'>Phone Number</p>
          </div>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Birthday</p>
            <p className='text-[#8a8a88] text-base'>DD-MM</p>
          </div>
          <div className='mb-1'>
            <p className='text-sm text-[#8a8a88] font-bold'>Email</p>
            <p className='text-[#8a8a88] text-base'>Email Address</p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);