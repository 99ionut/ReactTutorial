import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log("hello world");
    //if you look at console in the event listeners tab you will see 10s of window resize listeners,
    //this will caouse a memory leak
     window.addEventListener("resize",checkSize)
  })

  return (
  <>
  <h1>Window</h1>
  <h2>{size}PX</h2>
  </>
  )
}

export default UseEffectCleanup;
