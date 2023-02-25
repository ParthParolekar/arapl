import React from 'react'

const MovieSearchInput = ({ search, setSearch, formHandler }) => {
  return (
    <form onSubmit={formHandler}>
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
