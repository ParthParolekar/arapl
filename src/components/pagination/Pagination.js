import React from 'react'
import './pagination.css'

const Pagination = ({ movies, pagination, changePage }) => {
  return (
    <>
      {movies?.results?.length > 0 && pagination.length > 0 && (
        <div className='pagination'>
          {pagination.map((page) => (
            <p key={page} onClick={() => changePage(page)}>
              {page}
            </p>
          ))}
        </div>
      )}
    </>
  )
}

export default Pagination
