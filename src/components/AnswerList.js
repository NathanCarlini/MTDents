import React from "react";
import AnswerBtn from "./AnswerBtn";
import { questions } from "../Data/question";


function handleClic(){
  // console.log(questions.answerOptions[0].isCorrect);
  // if(questions.answerOptions.isCorrect == true){
  //   element.style.backgroundColor = 'green'
  // }else{
  //   element.style.backgroundColor = 'red' 
  // }
}


export default function AnswerList(data) {
  handleClic()
    let test = data.input
    return(test.map(person =>
        <AnswerBtn data={[person.answerText, person.isCorrect]}/>
      ))

}