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
    default:
      return state
  }
}
