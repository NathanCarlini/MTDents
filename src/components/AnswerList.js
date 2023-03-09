import React from "react";
import AnswerBtn from "./AnswerBtn";

export default function AnswerList() {
    let data = [
        "Les dents définitives",
        "Les dents de lait",
        "Les deux types de dents",
        "Aucune",
        
    ]    
    return(data.map(person =>
        <AnswerBtn data={person} />
      ))

}