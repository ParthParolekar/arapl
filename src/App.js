import { useEffect } from 'react'
import './App.css'
import { Home, MovieDetails } from './pages'
import { Route, Routes } from 'react-router-dom'
import { useMovie } from './context/movieContext/movieContext'

function App() {
  const [movieState, movieDispatch] = useMovie()
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(movieState))
  }, [movieState, movieState.liked, movieState.viewed])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
