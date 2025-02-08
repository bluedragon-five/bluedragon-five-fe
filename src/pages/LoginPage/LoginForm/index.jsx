import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const LoginForm = () => {
  const navigate = useNavigate()

  return (
    <form className="login__form">
      <input className="BoldS" type="text" placeholder="ID" />
      <input className="BoldS" type="password" placeholder="PW" />
      <button className="BodyS" type="submit">로그인</button>
      <button className="BodyS" type="button" onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </form>
  )
}

export default LoginForm