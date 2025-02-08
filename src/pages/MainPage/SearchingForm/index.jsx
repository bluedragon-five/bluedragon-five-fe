import React from 'react'
import './style.css'

const SearchingForm = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="searching__form">
      <input
        type="text"
        placeholder="장학금 검색"
        value={searchQuery}
        onChange={handleChange}
        className="searching__input"
      />
    </div>
  )
}

export default SearchingForm