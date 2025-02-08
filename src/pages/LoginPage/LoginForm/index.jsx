import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../features/user'
import './style.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await login(id, password)

    if (result) {
      alert('로그인 성공')
      navigate('/main')
    } else {
      alert('로그인에 실패했습니다.')
    }
  }

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <input
        className="BoldS"
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="BoldS"
        type="password"
        placeholder="PW"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button className="BodyS" type="submit">로그인</button>
      <button className="BodyS" type="button" onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </form>
  )
}

export default LoginForm