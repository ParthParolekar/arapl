import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [pagination, setPagination] = useState([])
  const navigate = useNavigate()

  const formHandler = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query=${search}&page=1&include_adult=false`
    )
    const data = await response.json()
    // console.log(data)
    setMovies(data)
    const pages = Array.from(
      { length: Number(data.total_pages) },
      (_, i) => i + 1
    )
    setPagination(pages)
  }

  const changePage = async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query=${search}&page=${page}&include_adult=false`
    )
    const data = await response.json()
    console.log(data)

    setMovies(data)
  }

  const movieClickHandler = (id) => {
    navigate(`/${id}`)
  }
  return (
    <>
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
      {movies?.results?.map((movie) => (
        <div key={movie.id} onClick={() => movieClickHandler(movie.id)}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt='poster'
          />
          <h1>{movie.original_title}</h1>
        </div>
      ))}
      <div className='pagination'>
        {pagination.map((page) => (
          <p key={page} onClick={() => changePage(page)}>
            {page}
          </p>
        ))}
      </div>
    </>
  )
}

export default Home
