import React from 'react'
import CircledImg from './CircledImg'
import LightText from './LightText'


export default function HomepageBtn({input}) {
  return (
    <div className='flex flex-row rounded-3xl bg-white  drop-shadow-md'>
        <CircledImg />
        <LightText input={{text:"mon calendrier de suivi"}}/>
    </div>
  )
}
