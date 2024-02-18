import { useState } from "react";
import AnswerForm from "../components/AnswerForm";
import { Question } from "../types/types";

const UserDashboard: React.FC = () => {
  const [questions] = useState<Question[]>(
    JSON.parse(localStorage.getItem("questions") || "[]")
  );
  return (
    <div>
      <AnswerForm questions={questions} />
    </div>
  );
};

export default UserDashboard;
