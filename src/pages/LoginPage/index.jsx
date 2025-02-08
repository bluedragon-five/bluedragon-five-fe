import LoginForm from "./LoginForm"
import "./style.css"

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <h1 className="BoldL">Five Guys</h1>
      <LoginForm />
      <small className="BodyS">Five Guys</small>
    </div>
  )
}

export default LoginPage