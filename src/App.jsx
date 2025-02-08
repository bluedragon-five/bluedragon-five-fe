import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'
import VerifyPage from './pages/VerifyPage'
import PersonalPage from './pages/PersonalPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/info" element={<PersonalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App