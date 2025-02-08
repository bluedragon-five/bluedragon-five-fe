import { useNavigate } from "react-router-dom";
import "./style.css";

const VerifyPage = () => {
  const navigate = useNavigate(); // ✅ 네비게이션 함수 사용

  const handleEditClick = () => {
    navigate("/main"); // ✅ 확인 버튼 클릭 시 '/main'으로 이동
  };

  const formData = {
    income: 5, 
    email: "fiveguys@gmail.com",
    charac: "생활비",
    lesson: "이공계",
    enrollment: "재학",
    grade: "2학년",
  };

  return (
    <div className="VerifyPage">
      <h1 className="BoldL">개인 정보</h1>
      <h1 className="BoldL">확인</h1>

      <p><strong>소득분위</strong>: <span className="highlight">{formData.income}</span></p>
      <p><strong>이메일</strong>: <span className="highlight">{formData.email}</span></p>
      <p><strong>특성</strong>: <span className="highlight">{formData.charac}</span></p>
      <p><strong>계열</strong>: <span className="highlight">{formData.lesson}</span></p>
      <p><strong>재학 여부</strong>: <span className="highlight">{formData.enrollment}</span></p>
      <p><strong>학년</strong>: <span className="highlight">{formData.grade}</span></p>

      {/* ✅ "확인" 버튼 클릭 시 즉시 /main 페이지로 이동 */}
      <button className="edit-button" onClick={handleEditClick}>확인</button>
    </div>
  );
};

export default VerifyPage;

