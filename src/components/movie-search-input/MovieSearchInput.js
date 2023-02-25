import React from 'react'
import './movie-search-input.css'

const MovieSearchInput = ({ search, setSearch, formHandler }) => {
  return (
    <form onSubmit={formHandler} className='search'>
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button type='submit'>Enter</button>
    </form>
  )
}

export default MovieSearchInput
