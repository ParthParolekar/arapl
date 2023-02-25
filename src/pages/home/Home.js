import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoviesList, Pagination } from '../../components'
import MovieSearchInput from '../../components/movie-search-input/MovieSearchInput'

const Home = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [pagination, setPagination] = useState([])

  const formHandler = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query=${search}&page=1&include_adult=false`
    )
    const data = await response.json()
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
    setMovies(data)
  }

  return (
    <div>
      <MovieSearchInput
        search={search}
        setSearch={setSearch}
        formHandler={formHandler}
      />
      <MoviesList movies={movies} />
      <Pagination
        movies={movies}
        pagination={pagination}
        changePage={changePage}
      />
    </div>
  )
}

export default Home
