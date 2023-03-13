import "./App.css";
import Header from "./components/Header";
import mtd from "./assets/mtd.png";
import Quizz from "./components/page/Quizz";
import AccountList from "./components/AccountList";
import { accounts } from "./Data/accounts";
import Connexion from "./components/page/Connexion";

function App() {
  return (
    <div className="flex flex-col p-4 bg-cloudy h-screen" id="1">
      <div className="flex flex-col">
      <img src={mtd} alt="" className="self-end" />
      <Header />
      </div>
      {/* <Quizz /> */}
    <Connexion input={accounts}/>
    </div>
  );
}
export default App;
