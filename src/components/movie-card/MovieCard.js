import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMovie } from '../../context/movieContext/movieContext'
import './movie-card.css'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const [movieState, movieDispatch] = useMovie()

  const movieClickHandler = (id) => {
    navigate(`/${id}`)
  }

  const movieLikeHandler = (e) => {
    e.stopPropagation()
    movieDispatch({ type: 'LIKE_MOVIE', payload: movie.id })
  }

  const movieUnlikeHandler = (e) => {
    e.stopPropagation()
    movieDispatch({ type: 'UNLIKE_MOVIE', payload: movie.id })
  }

  return (
    <div onClick={() => movieClickHandler(movie.id)} className='movie-card'>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt='poster'
        />
      ) : (
        <div className='no-image'>
          <h4>{movie.title}</h4>
          <h4>Image not available</h4>
        </div>
      )}
      <div className='card-details'>
        {movieState.liked.includes(movie.id) ? (
          <button onClick={movieUnlikeHandler}>Unlike</button>
        ) : (
          <button onClick={movieLikeHandler}>Like</button>
        )}
      </div>
    </div>
  )
}

export default MovieCard
