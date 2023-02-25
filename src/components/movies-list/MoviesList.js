import React from 'react'
import MovieCard from '../movie-card/MovieCard'

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies?.results?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default MoviesList
