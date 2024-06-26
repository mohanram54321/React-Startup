import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Value() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
    <h2 className="text-2xl">Useref task </h2>
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
    </div>
  );
}

export default Value;
