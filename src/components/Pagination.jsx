import React from 'react'

export default function Pagination({ postPerPage, totalPosts, previousPage, nextPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul>
        <div className='flex items-center justify-center mt-12'>
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
        </div>
      </ul>
    </nav>
  )
}
