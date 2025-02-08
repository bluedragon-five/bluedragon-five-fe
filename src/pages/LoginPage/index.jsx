import LoginForm from "./LoginForm"
import "./style.css"

const LoginPage = () => {
  return (
    <div className="login__page">
      <h1 className="DisplayL">Scolar Link</h1>
      <LoginForm />
      <small className="BodyS">Five Guys</small>
    </div>
  )
}

export default LoginPage