import React from 'react'
import './style.css'

const ScholarshipItem = ({scholarship}) => {
  console.log(scholarship)
  return (
    <div className="scholarship__item">
      <h3 className="DisplayR">{scholarship.name}</h3>
      <div className="scholarship__item__info">
        <p className="BodyR">금액: {scholarship.money} 만원</p>
        <p className="BodyR">남은 기간: {scholarship.remainDays} 일</p>
      </div>
      <a href={scholarship.redirectUrl} className="scholarship__apply-btn BoldR" target="_blank">
        신청하기
      </a>
    </div>
  )
}

export default ScholarshipItem