import React from 'react'
import './style.css'

const ScholarshipItem = ({ name, amount, eligibility }) => {
  return (
    <div className="scholarship__item">
      <h3 className="DisplayR">{name}</h3>
      <div className="scholarship__item__info">
      <p className="BodyR">금액: {amount}</p>
      <p className="BodyR">자격조건: {eligibility}</p>
      </div>
    </div>
  )
}

export default ScholarshipItem