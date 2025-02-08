import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'
import VerifyPage from './pages/VerifyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} /> {/* MainPage 추가 */}
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App