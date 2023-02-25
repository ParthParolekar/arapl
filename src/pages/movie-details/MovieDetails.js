import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US`

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await fetch(MOVIE_API)
      console.log(await response.json())
    }
    getMovieDetails()
  }, [MOVIE_API])
  return <div>MovieDetails</div>
}

export default MovieDetails
