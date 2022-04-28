import React from 'react'
import PersonnelList from '../components/PersonnelList'
import Navbar from '../components/Navbar'

export default function PersonnelListPage() {
  return (
    <div className="container mx-auto py-[1%]">
      <div className='grid md:grid-cols-4'>
        <Navbar />
        <div className="md:col-span-3">
          <PersonnelList />
        </div>
      </div>
    </div>
  )
}
