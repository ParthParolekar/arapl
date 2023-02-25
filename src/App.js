import './App.css'
import { Home, MovieDetails } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
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
