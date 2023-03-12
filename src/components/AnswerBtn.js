import { questions } from "../Data/question";


function handleClick(element){
  // console.log(element.currentTarget.value);
  // console.log(questions.answerOptions.indexOf(questions.answerOptions.answerText="London"))
  if(element.currentTarget.value == 'true'){
    element.currentTarget.classList.add('bg-lime-500')
    console.log("gagné");
  }else{
    element.currentTarget.classList.add('bg-red-600') 
    console.log("perdu");

  }
}


export default function AnswerBtn({ data }) {
  return (
    <button onClick={handleClick} value={data[1]} className="bg-btnBlue py-3 px-6 w-3/4 text-white text-center rounded-full flex justify-center font-semibold my-2" >
       {data[0]}
      </button>
  );
}
