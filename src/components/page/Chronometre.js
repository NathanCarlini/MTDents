import React from 'react';
import Timer from '../Timer';
import masc from "../../assets/mascotte.png";

export default function Chronometre() {
  return (
    <div className="flex flex-col justify-center h-full">
        <div>
            <Timer />
        </div>

        <div>
            <img src={masc} />
        </div>

    </div>
  )
}
