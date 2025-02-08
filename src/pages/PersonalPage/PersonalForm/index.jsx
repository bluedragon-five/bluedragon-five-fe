import { useState } from "react";
import "./style.css";

const PersonalForm = () => {
  const [formData, setFormData] = useState({
    income: "",
    email: "",
    charac: "",
    lesson: "",
    enrollment: "",
    grade: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("입력된 개인정보:", formData);
    alert("개인정보가 제출되었습니다!");
  };

  return (
    <form className="personal__form" onSubmit={handleSubmit}>
      
        <label className="BodyR">
          <div className="income__wrapper">
            이메일
            <input
              className="income__input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </label>

      {/* 🔹 소득분위 (숫자 입력) */}
      <label>
        소득분위:
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          min="0"
          max="10"
          required
        />
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          특성
          <select className='select__input BoldR' name="charac" value={formData.charac} onChange={handleChange} required>
            <option value="">선택하세요</option> 
            <option value="생활비">생활비</option>
            <option value="등록금">등록금</option>
          </select>
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          개별
          <select className="select__input BoldR" name="lesson" value={formData.lesson} onChange={handleChange} required>
            <option value="">선택하세요</option> 
            <option value="이공계">이공계</option>
            <option value="인문계">인문계</option>
          </select>
        </div>
      </label>
      
      <label className="BodyR" >
        <div className="income__wrapper">
          재학 여부
          <select className="select__input BoldR" name="enrollment" value={formData.enrollment} onChange={handleChange} required>
            <option value="">선택하세요</option> 
            <option value="재학중">재학중</option>
            <option value="휴학중">휴학중</option>
          </select>
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          학년  
          <select className="select__input BoldR" name="grade" defaultValue="" value={formData.grade} onChange={handleChange} required>
            <option value="">선택하세요</option> 
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
            <option value="4학년">4학년</option>
          </select>
        </div>
      </label>

      <button className="BoldR" type="submit">제출</button>
    </form>
  );
};

export default PersonalForm;
