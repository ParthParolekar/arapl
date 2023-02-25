const persistedMovieData = JSON.parse(localStorage.getItem('user'))

export const initialState = persistedMovieData
  ? persistedMovieData
  : { liked: [], viewed: [] }

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'LIKE_MOVIE':
      return { ...state, liked: [...state.liked, action.payload] }

    case 'UNLIKE_MOVIE':
      return {
        ...state,
        liked: state.liked.filter((id) => id !== action.payload)
      }

    case 'VIEW_MOVIE':
      const check = state.viewed.filter((movie) => movie.id === action.payload)

      if (check.length <= 0) {
        return {
          ...state,
          viewed: [...state.viewed, { id: action.payload, views: 1 }]
        }
      } else {
        return {
          ...state,
          viewed: state.viewed.map((movie) =>
            movie.id === action.payload
              ? { ...movie, views: movie.views + 1 }
              : { ...movie }
          )
        }
      }
    default:
      return state
  }
}
