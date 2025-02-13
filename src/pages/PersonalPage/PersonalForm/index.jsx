import { useState } from "react";
import { updateUserInfo } from "../../../features/user"; // ✅ API 요청 함수 임포트
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

const PersonalForm = () => { 
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [section, setSection] = useState(0);
  const [type, setType] = useState("NOTHING");
  const [major, setMajor] = useState("NOTHING");
  const [attendance, setAttendance] = useState(true);
  const [grade, setGrade] = useState(4);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      section: Number(section),
      type,
      major,
      attendance,
      grade: Number(grade),
    };

    try {
      const userId = location.state.userId | 1
      const response = await updateUserInfo(userId, formData);
      console.log(response)
      alert("개인정보 수정을 성공하였습니다.")
      navigate("/main", {state: {userId : userId}})
    } catch (err) {
      alert("개인정보 수정을 실패하였습니다.")
    }
  };

  return (
    <form className="personal__form" onSubmit={handleSubmit}>
      <label className="BodyR">
        <div className="income__wrapper">
          이메일
          <input
            className="income__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          소득 분위
          <select className="select__input BoldR" value={section} onChange={(e) => setSection(Number(e.target.value))} required>
            <option value="0">0분위</option>
            <option value="1">1분위</option>
            <option value="2">2분위</option>
            <option value="3">3분위</option>
            <option value="4">4분위</option>
            <option value="5">5분위</option>
            <option value="6">6분위</option>
            <option value="7">7분위</option>
            <option value="8">8분위</option>
            <option value="9">9분위</option>
            <option value="10">10분위</option>
          </select>
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          특성
          <select className="select__input BoldR" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="NOTHING">선택하세요</option> 
            <option value="LIVING">생활비</option>
            <option value="ENROLLMENT">등록금</option>
          </select>
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          전공계열
          <select className="select__input BoldR" value={major} onChange={(e) => setMajor(e.target.value)} required>
            <option value="NOTHING">선택하세요</option> 
            <option value="SCIENCE">이공계</option>
            <option value="HUMANITIES">인문계</option>
          </select>
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          재학 여부
          <select className="select__input BoldR" value={attendance} onChange={(e) => setAttendance(e.target.value === "true")} required>
            <option value="true">재학중</option>
            <option value="false">휴학중</option>
          </select>
        </div>
      </label>

      <label className="BodyR">
        <div className="income__wrapper">
          학년  
          <select className="select__input BoldR" value={grade} onChange={(e) => setGrade(Number(e.target.value))} required>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
            <option value="4">4학년</option>
          </select>
        </div>
      </label>

      <button className="BoldR" type="submit"> 제출
      </button>
    </form>
  );
};

export default PersonalForm;