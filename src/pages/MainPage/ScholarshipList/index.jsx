import React from 'react'
import ScholarshipItem from './ScholarshipItem'
import './style.css'

const ScholarshipList = ({ scholarships }) => {
  return (
    <div className="scholarship__list">
      {scholarships.length > 0 ? (
        scholarships.map(scholarship => (
          <ScholarshipItem
            key={scholarship.id}
            name={scholarship.name}
            amount={scholarship.amount}
            eligibility={scholarship.eligibility}
          />
        ))
      ) : (
        <p className="no-results BoldR">검색 결과가 없습니다.</p> // ✅ 처음에는 아무것도 안 보임
      )}
    </div>
  )
}

export default ScholarshipList