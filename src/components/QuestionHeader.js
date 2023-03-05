import React from 'react'
import mdd from '../assets/mdd.png'

export default function QuestionHeader({input}) {
  return (
    <div className="flex flex-row">
        <img src={mdd} alt="mdd" />
        <div className="bg-bulle w-3/5 bg-no-repeat flex justify-center items-top"><p className='mt-4'>{input.text}</p></div>
    </div>
  )
}
