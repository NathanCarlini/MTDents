import "./App.css";
import Header from "./components/Header";
import mtd from "./assets/mtd.png";
import BtnLayout from "./components/BtnLayout";
import AnswerBtn from "./components/AnswerBtn";
import QuestionHeader from "./components/QuestionHeader";
import Questionnaire from "./components/Questionnaire";
import EnTeteQuiz from "./components/EnTeteQuiz";

function App() {
  return (
    <div className="flex flex-col p-4 bg-cloudy h-screen" id="1">
      <img src={mtd} alt="" className="self-end" />
      <Header />
      {/* <Questionnaire input={{ name: "bonbons", img: "../assets/tooth.png" }} /> */}
      <EnTeteQuiz/>
    </div>
  );
}
export default App;
