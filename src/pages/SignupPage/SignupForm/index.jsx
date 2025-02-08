import { useState } from 'react'
import './style.css'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('회원가입 정보:', formData)
  }

  return (
    <form className="signup__form" onSubmit={handleSubmit}>
      <input
        className="BoldS"
        type="text"
        name="username"
        placeholder="아이디"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        className="BoldS"
        type="password"
        name="password"
        placeholder="비밀번호"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button className="BodyS" type="submit">가입하기</button>
    </form>
  )
}

export default SignupForm