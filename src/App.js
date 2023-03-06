import "./App.css";
import Header from "./components/Header";
import mtd from "./assets/mtd.png";
import BtnLayout from "./components/BtnLayout";
import AnswerBtn from "./components/AnswerBtn";
import QuestionHeader from "./components/QuestionHeader";
import Questionnaire from "./components/Questionnaire";

function App() {
  return (
    <div className="flex flex-col p-4 bg-cloudy h-screen" id="1">
      <img src={mtd} alt="" className="self-end" />
      <Header />
      {/* <Questionnaire input={{ name: "bonbons", img: "../assets/tooth.png" }} /> */}
      {/*<p className="mt-12 mx-4">
        Bienvenue sur ton application préférée pour prendre soin de tes dents !
      </p>
      <>
        <BtnLayout input={{ text: "test" }} />
      </>
      <div className="my-8">
        <AnswerBtn input={{ text: "poop" }} />
      </div>
      <div className="my-8">
        <QuestionHeader input={{ text: "poop ?" }} />
      </div> */}
    </div>
  );
}
export default App;
