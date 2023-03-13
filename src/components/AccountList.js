import React from 'react'
import BtnLayout from './BtnLayout'

export default function AccountList(data) {  
    let UsableData = data.input.input
    // console.log(UsableData);
    return(UsableData.map(person =>
        <BtnLayout input={person.name}/>
      ))
}
