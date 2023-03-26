import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  let ref = useRef(0);
  const [Y, setY] = useState(0);
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black bg-slate-50">
      <h1 className="font-bold text-xl m-2">let x = {x}</h1>
      <button
        className="p-2 border border-black"
        onClick={() => {
          x++;
          console.log("x =", x);
        }}
      >
        Increase x
      </button>
      <h1 className="font-bold text-xl m-2">State = {Y}</h1>
      <button
        className="p-2 border border-black"
        onClick={() => {
          setY(Y + 1);
        }}
      >
        Increase y
      </button>
      <h1 className="font-bold text-xl m-2">Ref = {ref.current}</h1>
      <button
        className="p-2 border border-black"
        onClick={() => {
          ref.current++;
          console.log("ref =", ref.current);
        }}
      >
        Increase ref
      </button>
    </div>
  );
};

export default Demo2;
