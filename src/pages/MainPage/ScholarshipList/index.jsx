import React from 'react'
import ScholarshipItem from './ScholarshipItem'
import './style.css'

const scholarships = [
  { id: 1, name: '국가장학금', amount: '200만원', eligibility: '소득분위 8분위 이하' },
  { id: 2, name: '교내장학금', amount: '150만원', eligibility: '학교 성적 우수자' },
  { id: 3, name: '기업장학금', amount: '300만원', eligibility: '특정 기업 후원' },
]

const ScholarshipList = ({ searchQuery }) => {
  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.name.includes(searchQuery)
  )

  return (
    <div className="scholarship__list">
      {filteredScholarships.length > 0 ? (
        filteredScholarships.map(scholarship => (
          <ScholarshipItem
            key={scholarship.id}
            name={scholarship.name}
            amount={scholarship.amount}
            eligibility={scholarship.eligibility}
          />
        ))
      ) : (
        <p className="no-results">검색 결과가 없습니다.</p>
      )}
    </div>
  )
}

export default ScholarshipList