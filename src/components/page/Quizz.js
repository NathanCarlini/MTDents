import React from "react";
import AnswerList from "../AnswerList";
import EnTeteQuiz from "../EnTeteQuiz";
import QuestionHeader from "../QuestionHeader";
import { questions } from "../../Data/question";


export default function Quizz() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <EnTeteQuiz />
      </div>

      <div className="my-4">
        <QuestionHeader input={questions} />
      </div>

      <div className="flex flex-col items-center h-full justify-evenly">
        <AnswerList input={questions.answerOptions}/>
      </div>
    </div>
  );
}
