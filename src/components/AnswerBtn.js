function handleClick() {
  console.log("i")
}

export default function AnswerBtn({ data, handleClick }) {
  return (
    <button id={data} onClick={handleClick} className="bg-btnBlue py-3 px-6 w-3/4 text-white text-center rounded-full flex justify-center font-semibold my-2" >
       {data}
      </button>
  );
}
