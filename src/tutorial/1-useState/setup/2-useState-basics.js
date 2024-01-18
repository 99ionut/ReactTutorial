import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState("random Title")
  const handleClick = () => {
    if(text=="random Title"){
      setText("hello world");
    }else{
      setText("random Title");
    }
    
  }
  return (
    <>
      <h2>{text}</h2>
      <button onClick={handleClick}>CLICK</button>
  </>
  );
};

export default UseStateBasics;
