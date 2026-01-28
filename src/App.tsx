import './App.scss'
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';


const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
  )
}

export default App
