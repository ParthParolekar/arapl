import { createContext, useContext, useReducer } from 'react'
import { initialState, movieReducer } from './movieReducer'

const movieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movieState, movieDispatch] = useReducer(movieReducer, initialState)
  return (
    <movieContext.Provider value={[movieState, movieDispatch]}>
      {children}
    </movieContext.Provider>
  )
}

export const useMovie = () => useContext(movieContext)
