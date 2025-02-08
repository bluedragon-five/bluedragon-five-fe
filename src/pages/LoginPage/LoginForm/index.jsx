import React from 'react';
import './style.css';

const LoginForm = () => {
  return (
    <form className="login__form">
      <input className="BoldS" type="text" placeholder="ID" />
      <input className="BoldS" type="password" placeholder="PW" />
      <button className="BodyS" type="submit">로그인</button>
      <button className="BodyS" type="button">회원가입</button>
    </form>
  );
};

export default LoginForm;