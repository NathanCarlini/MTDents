import React from "react";
import CircledImg from "../CircledImg";
import masc from "../../assets/mascotte.png";

export default function accueil() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <CircledImg input={masc} />
      </div>
    </div>
  );
}
