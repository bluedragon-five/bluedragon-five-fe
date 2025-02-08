import { useState } from "react";

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
    <form className="PersonalForm" onSubmit={handleSubmit}>
      <h2>개인정보 입력</h2>

      {/* 🔹 소득분위 (숫자 입력) */}
      <label>
        소득분위:
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          required
        />
      </label>

      {/* 🔹 이메일 입력 */}
      <label>
        이메일:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      {/* 🔹 특성 (드롭다운) */}
      <label>
        특성:
        <select name="charac" value={formData.charac} onChange={handleChange} required>
          <option value="">선택하세요</option> 
          <option value="생활비">생활비</option>
          <option value="등록금">등록금</option>
        </select>
      </label>

      {/* 🔹 개별 (드롭다운) */}
      <label>
        개별:
        <select name="lesson" value={formData.lesson} onChange={handleChange} required>
          <option value="">선택하세요</option> 
          <option value="이공계">이공계</option>
          <option value="인문계">인문계</option>
        </select>
      </label>

      {/* 🔹 재학 여부 (드롭다운) */}
      <label>
        재학 여부:
        <select name="enrollment" value={formData.enrollment} onChange={handleChange} required>
          <option value="">선택하세요</option> 
          <option value="재학중">재학중</option>
          <option value="휴학중">휴학중</option>
        </select>
      </label>

      {/* 🔹 학년 (드롭다운) */}
      <label>
        학년:
        <select name="grade" value={formData.grade} onChange={handleChange} required>
          <option value="">선택하세요</option> 
          <option value="1학년">1학년</option>
          <option value="2학년">2학년</option>
          <option value="3학년">3학년</option>
          <option value="4학년">4학년</option>
        </select>
      </label>

      <button type="submit">제출</button>
    </form>
  );
};

export default PersonalForm;
