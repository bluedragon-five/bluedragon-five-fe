import React from 'react'
import './style.css'

const ScholarshipItem = ({scholarship}) => {
  return (
    <div className="scholarship__item">
      <h3 className="DisplayR">{scholarship.name}</h3>
      <div className="scholarship__item__info">
        <p className="BoldR">{scholarship.money} 만원</p>
        <p className="BoldR">D - {scholarship.remainDays}</p>
      </div>
      <a href={scholarship.redirectUrl} className="scholarship__apply-btn BoldR" target="_blank">
        자세히 보기
      </a>
    </div>
  )
}

export default ScholarshipItem