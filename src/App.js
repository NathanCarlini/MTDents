import "./App.css";
import Header from "./components/Header";
import mtd from "./assets/mtd.png";
import Quizz from "./components/page/Quizz";
import AccountList from "./components/AccountList";
import { accounts } from "./Data/accounts";
import Connexion from "./components/page/Connexion";
import AnswerList from "./components/AnswerList";
import Timer from "./components/Timer";
import Chronometre from "./components/page/Chronometre";

function App() {
  return (
    <div className="flex flex-col p-4 bg-cloudy h-screen" id="1">
      <div className="flex flex-col">
        <img src={mtd} alt="" className="self-end" />
        <Header />
        {/* <Quizz /> */}
        <Chronometre />
      </div>
    </div>
  );
}
export default App;
