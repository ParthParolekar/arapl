import React from 'react'
import MovieCard from '../movie-card/MovieCard'
import './movies-list.css'

const MoviesList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies?.results?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default MoviesList
