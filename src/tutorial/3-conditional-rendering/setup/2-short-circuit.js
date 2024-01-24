import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState("");
  const [isError,setIsError] = useState(false);

  return (
  <>
    <button onClick={()=>setIsError(true)}>toggle error</button>
    {
      //this ALWASY return something, either text or something else
    }
    <h1>{isError || "default text"}</h1>
    {
      //this returns ONLY return if text is true
    }
    <h1>{isError && <h1>Error...</h1>}</h1>
    {isError ? <h1>error is true</h1> : <h1>error is false</h1>}
  </>
  );
};

export default ShortCircuit;
