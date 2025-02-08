import React, { useState } from 'react'
import SearchingForm from './SearchingForm'
import ScholarshipList from './ScholarshipList'
import './style.css'

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='main__page'>
      <h1 className='DisplayL'>장학금 목록</h1>
      <SearchingForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScholarshipList searchQuery={searchQuery} />
      <small className="BodyS">Five Guys</small>
    </div>
  )
}

export default MainPage