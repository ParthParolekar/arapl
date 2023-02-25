import React, { useEffect, useState } from 'react'
import './movie-details.css'
import { useParams } from 'react-router-dom'
import { useMovie } from '../../context/movieContext/movieContext'

const MovieDetails = () => {
  const { id } = useParams()
  const [movieState, movieDispatch] = useMovie()
  const [movie, setMovie] = useState()
  const [views, setViews] = useState(1)
  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US`

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch(MOVIE_API)
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getMovieDetails()
  }, [MOVIE_API])

  useEffect(() => {
    movieDispatch({ type: 'VIEW_MOVIE', payload: id })
  }, [])

  useEffect(() => {
    const movieViews = movieState.viewed.filter((movie) => movie.id === id)
    if (movieViews.length > 0) {
      setViews(movieViews[0].views)
    } else {
      setViews(1)
    }
  }, [movieState.viewed])

  return (
    <div>
      {movie?.success === false && <h1>Movie not found</h1>}

      {movie?.title && (
        <div className='movie-details'>
          <div className='backdrop'></div>
          {movie?.backdrop_path && (
            <img
              className='backdrop-img'
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
            />
          )}
          <div>
            {movie?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt='poster'
              />
            ) : (
              <div className='no-image'>
                <h4>{movie?.title}</h4>
                <h4>Image not available</h4>
              </div>
            )}
          </div>
          <div className='movie-info'>
            <h1>{movie?.title}</h1>
            {movie?.runtime.length > 0 && <h4>{movie?.runtime} minutes</h4>}
            {movie?.release_date.length > 0 && <h4>{movie?.release_date}</h4>}
            <h4>Views: {views}</h4>
            {movie?.overview.length > 0 && <p>{movie?.overview}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails
