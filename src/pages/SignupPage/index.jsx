import SignupForm from "./SignupForm"
import "./style.css"

const SignupPage = () => {
  return (
    <div className="signup__page">
      <h1 className="DisplayL">회원가입</h1>
      <SignupForm />
      <small className="BodyS">Five Guys</small>
    </div>
  )
}

export default SignupPage