import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-700 text-red-500")
      }
    >
      <div>
        <input
          className="p-2 border border-black w-72"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="ml-2"
          onClick={() => setIsDarkTheme((isDarkTheme) => !isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <h1>nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
