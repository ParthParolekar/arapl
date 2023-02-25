import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMovie } from '../../context/movieContext/movieContext'

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
    <div onClick={() => movieClickHandler(movie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt='poster'
      />
      <h1>{movie.title}</h1>
      {movieState.liked.includes(movie.id) ? (
        <button onClick={movieUnlikeHandler}>Unlike</button>
      ) : (
        <button onClick={movieLikeHandler}>Like</button>
      )}
    </div>
  )
}

export default MovieCard
