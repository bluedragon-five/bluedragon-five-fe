import React, { useState } from 'react'
import SearchingForm from './SearchingForm'
import ScholarshipList from './ScholarshipList'
import './style.css'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='main__page'>
      <h1 className='DisplayL'>장학금 목록</h1>
      <SearchingForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScholarshipList searchQuery={searchQuery} />
      <small className="BodyS">Five Guys</small>
      <button className="user__info__btn" onClick={() => navigate('/info')}>
        <img src="/user-icon.png" alt="User" className="user-icon" />
      </button>
    </div>
  )
}

export default MainPage