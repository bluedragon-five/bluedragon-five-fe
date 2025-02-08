import { useState } from 'react'
import './style.css'
import { register } from '../../../features/user'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    const result = await register(userId, password)

    if (result) {
      alert('회원가입 성공')
      navigate('/main')
    } else {
      alert('회원가입에 실패했습니다.')
    }
  }

  return (
    <form className="signup__form" onSubmit={handleSubmit}>
      <input
        className="BoldS"
        type="text"
        name="username"
        placeholder="아이디"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <input
        className="BoldS"
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="BodyS" type="submit">가입하기</button>
    </form>
  )
}

export default SignupForm