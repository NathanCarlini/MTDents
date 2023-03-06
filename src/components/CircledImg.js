import React from "react";
import logoquiz from "../assets/tooth.png"


export default function CircledImg(input) {
  return (
    <div className="rounded-full p-3 bg-slate-300">
      <img src={logoquiz} alt="logo du Quiz" />
    </div>
  );
}
