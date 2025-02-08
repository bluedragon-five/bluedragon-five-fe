import React, { useState } from 'react'
import './style.css'

const scholarshipsData = [
  { id: 1, name: '국가장학금', amount: '200만원', eligibility: '소득분위 8분위 이하' },
  { id: 2, name: '교내장학금', amount: '150만원', eligibility: '학교 성적 우수자' },
  { id: 3, name: '기업장학금', amount: '300만원', eligibility: '특정 기업 후원' },
];

const SearchingForm = ({ searchQuery, setSearchQuery, setResults }) => {
  const handleSearch = () => {
    // ✅ 검색어를 포함하는 장학금만 필터링
    const filteredResults = scholarshipsData.filter(scholarship =>
      scholarship.name.includes(searchQuery)
    );

    setResults(filteredResults); // ✅ MainPage로 검색 결과 전달
  };

  return (
    <div className="searching__form">
      <input
        type="text"
        className="searching__input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="장학금 이름을 입력하세요"
      />
      <button className="searching__btn" onClick={handleSearch}>
        <img src='/search-icon.png' className='searching__icon'>
        </img>
      </button>
    </div>
  );
}

export default SearchingForm;