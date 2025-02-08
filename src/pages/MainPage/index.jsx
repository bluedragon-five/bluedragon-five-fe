import React, { useState } from 'react'
import SearchingForm from './SearchingForm'
import ScholarshipList from './ScholarshipList'
import './style.css'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [scholarships, setScholarships] = useState([]); // ✅ 처음에는 빈 배열

  // ✅ 검색 결과를 받아서 상태 업데이트하는 함수
  const handleSearchResults = (results) => {
    setScholarships(results);
  };

  return (
    <div className='main__page'>
      <h1 className='DisplayL'>장학금 목록</h1>
      {/* ✅ 검색 결과를 MainPage에서 받고, ScholarshipList로 전달 */}
      <SearchingForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} setResults={handleSearchResults} />
      <ScholarshipList scholarships={scholarships} /> {/* ✅ 빈 배열이면 빈 페이지 유지 */}
      <small className="BodyS">Five Guys</small>
      <button className="user__info__btn" onClick={() => navigate('/info')}>
        <img src="/user-icon.png" alt="User" className="user-icon" />
      </button>
    </div>
  )
}

export default MainPage