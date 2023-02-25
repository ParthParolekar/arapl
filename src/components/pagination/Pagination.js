import React from 'react'

const Pagination = ({ pagination, changePage }) => {
  return (
    <>
      {pagination.length > 0 && (
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
