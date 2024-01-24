import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
  <>
    <h1>first: {firstValue}</h1>
    <h1>second: {secondValue}</h1>
  {
  //this doesnt work, we need an expression that returns a value
  //if(){console.log("hello world")}
  }
    {
      //this ALWASY return something, either text or something else
    }
    <h1>{text || "default text"}</h1>
    {
      //this returns ONLY return if text is true
    }
    <h1>{text && <h1>Hello world</h1>}</h1>
  </>
  );
};

export default ShortCircuit;
