import React, { useState } from 'react'
import { fetchScholarships } from '../../../features/scholar' // ✅ API 요청 함수 임포트
import './style.css'

const SearchingForm = ({ setResults }) => {
  const [section, setSection] = useState(0);
  const [type, setType] = useState('NOTHING');
  const [major, setMajor] = useState('NOTHING');
  const [sortCondition, setSortCondition] = useState('NOTHING');
  const [attendance, setAttendance] = useState(true);
  const [grade, setGrade] = useState(4);

  const handleSearch = async () => {
    try {
      const results = await fetchScholarships(
        {section, type, major, sortCondition, attendance, grade}
      ); // ✅ API 요청
      setResults(results);
    } catch (err) {
      console.log("에러 발생", err);
    }
  };

  return (
    <div className="searching__form">

      <select className="filter__input BoldR" value={section} onChange={(e) => setSection(Number(e.target.value))}>
        <option value="0">전체</option>
        <option value="1">학부</option>
        <option value="2">대학원</option>
      </select>

      <select className="filter__input BoldR" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="NOTHING">장학금 유형</option>
        <option value="ENROLLMENT">등록금</option>
        <option value="LIVING">생활비</option>
      </select>

      <select className="filter__input BoldR" value={major} onChange={(e) => setMajor(e.target.value)}>
        <option value="NOTHING">전공 선택</option>
        <option value="SCIENCE">이공계</option>
        <option value="HUMANITIES">인문계</option>
      </select>

      <select className="filter__input BoldR" value={grade} onChange={(e) => setGrade(Number(e.target.value))}>
        <option value="4">학년 선택</option>
        <option value="1">1학년</option>
        <option value="2">2학년</option>
        <option value="3">3학년</option>
        <option value="4">4학년</option>
      </select>

      <select className="filter__input BoldR" value={sortCondition} onChange={(e) => setSortCondition(e.target.value)}>
        <option value="NOTHING">정렬 기준</option>
        <option value="MONEY">금액순</option>
        <option value="TIME">마감일순</option>
      </select>

      <label className="checkbox__input BodyS">
        <input
          type="checkbox"
          checked={attendance}
          onChange={(e) => setAttendance(e.target.checked)}
        />
        재학 여부
      </label>

      <button className="searching__btn" onClick={handleSearch}>
        <img src='/search-icon.png' className='searching__icon' alt="검색" />
      </button>
    </div>
  );
}

export default SearchingForm;