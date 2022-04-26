import React from 'react'
import CardList from '../components/CardList'
import Navbar from '../components/Navbar'

export default function PersonnelList() {
  return (
    <div className="container mx-auto py-[2%]">
      <div className='grid md:grid-cols-4'>
        <Navbar />
        <div className="md:col-span-3">
          <CardList />
        </div>
      </div>
    </div>
  )
}
