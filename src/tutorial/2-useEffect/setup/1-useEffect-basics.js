import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

////USE EFFECT =  work outside of component
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);

  //runs after every render (side effects)
  //its a hook
  useEffect(()=>{
    console.log("callse useEffect");
    if(value>=1){
      document.title = `val ${value}`;
    }
  });

  //called 2 times because of react strict mode in app.js
  console.log("render");
  return (
  <>
  <h1>{value}</h1>
  <button onClick={()=>setValue(value+1)}>Increase</button>
  </>
  );
};

export default UseEffectBasics;
