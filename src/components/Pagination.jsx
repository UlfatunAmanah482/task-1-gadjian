import React from 'react'

export default function Pagination({ previousPage, nextPage, currentPage, totalPages }) {
  return (
    <nav>
      <ul>
        <div className='flex items-center justify-center mt-12'>
          {
            currentPage <= 1 ? (
              <div className='mx-4'>
                <button className="text-[#b8b8b7] font-semibold md:text-base text-sm hover:cursor-not-allowed">
                  {' < '} Previous Page
                </button>
              </div>
            ) : (
              <div className='mx-4'>
                <button className='text-[#5f5f5f] hover:text-[#464646] font-semibold md:text-base text-sm' onClick={previousPage}>
                  {' < '} Previous Page
                </button>
              </div>
            )
          }

          {
            currentPage === totalPages ? (
              <div className='mx-4'>
                <button className="text-[#b8b8b7] font-semibold md:text-base text-sm hover:cursor-not-allowed">
                  Next Page {' > '}
                </button>
              </div>
            ) : (
              <div className='mx-4'>
                <button className='text-[#5f5f5f] hover:text-[#464646] font-semibold md:text-base text-sm' onClick={nextPage}>
                  Next Page {' > '}
                </button>
              </div>
            )
          }
        </div>
      </ul>
    </nav>
  )
}
