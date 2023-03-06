import React from "react";

export default function BtnLayout({ input }) {
  return (
    <button className="bg-btnBlue py-1 px-6 w-3/4 text-white rounded-full flex justify-center font-semibold">
      {input.text}
    </button>
  );
}
