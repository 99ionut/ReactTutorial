import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log("use effect");
    //if you look at console in the event listeners tab you will see 10s of window resize listeners,
    //this will caouse a memory leak
    window.addEventListener("resize",checkSize);
    //this will be called when you exit
    return ()=>{
      console.log("cleanup----");
      window.removeEventListener("resize",checkSize)
    }

    //or you could add [] so it applies the event listener once at the initial render, but if you have a component
    //that appears and disappears, you need to rerun it every time and clean after.
  })

  console.log("render");
  return (
  <>
  <h1>Window</h1>
  <h2>{size}PX</h2>
  </>
  )
}

export default UseEffectCleanup;
