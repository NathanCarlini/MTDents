import CircledImg from "./CircledImg";
import LightText from "./LightText";

export default function Questionnaire({input}) {
  return (
    <div className="flex flex-col p-8 bg-white w-min rounded-xl items-center aspect-square">
    <CircledImg />
    <div className="mt-3 ">
      <LightText input={input}/>
    </div>
    </div>
  )
}
