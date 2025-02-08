import PersonalForm from "./PersonalForm";
import "./style.css";

const PersonalPage = () => {
  return (
    <div className="personal__page">
      <h1 className="DisplayL">개인정보 입력</h1>
      <PersonalForm />
      <small className="BodyS">Five Guys</small>
    </div>
  );
};

export default PersonalPage;

