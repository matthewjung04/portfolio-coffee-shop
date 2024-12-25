import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MenuPage from './pages/MenuPage/MenuPage'
import './App.scss'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/menu" element={<MenuPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App