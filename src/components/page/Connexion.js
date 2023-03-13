import React from 'react'
import AccountList from "../AccountList";
import mdd from "../../assets/mdd.png";


export default function Connexion(input) {
    // console.log(input);
  return (
    <div className='flex flex-col space-between h-max justify-between'>
    <img src={mdd} alt="" className='aspect-square w-1/3 self-center'/>
    <div className="flex items-center flex-col mb-16">
    <AccountList input={input} />
  </div>
  </div>
  )
}
