import React from 'react';
import './style.css';

const LoginForm = () => {
  return (
    <form className="LoginForm">
      <input type="text" placeholder="ID" />
      <input type="password" placeholder="PW" />
      <button type="submit">로그인</button>
      <button type="button">회원가입</button>
    </form>
  );
};

export default LoginForm;