import React from 'react'
import AnswerBtn from '../AnswerBtn'
import EnTeteQuiz from '../EnTeteQuiz'
import Header from '../Header'
import QuestionHeader from '../QuestionHeader'

export default function Quizz() {
  return (
    <div className='flex flex-col '>

        <div className='mt-8'>
            <EnTeteQuiz />
        </div>

        <div className='my-8'>
            <QuestionHeader input={{ text : "poop"}} />
        </div>

        <div className='flex flex-col items-center'>
            <AnswerBtn input={{ text : "poopanswer"}} />
        </div>
    </div>


  )
}
