import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0);

  /*clicking 3 times doesnt work*/
  const complexIncrease = () => {
    setTimeout(()=>{
      //setValue(value+1);

      //function in setValue allows you to get current value, you can use it for prev. examples as well, whatever u return is the new val.
      setValue((prevState)=>{
        return prevState + 1;
      });
    },2000)
  }

  return( 
  <>
  <section>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button onClick={() => setValue(value-1)}>decrease</button>
    <button onClick={() => setValue(value+1)}>increase</button>
    <button onClick={() => setValue(0)}>reset</button>
  </section>

  <section>
    <h2>complex counter</h2>
    <h1>{value}</h1>
    <button onClick={complexIncrease}>increase later</button>
  </section>
  </>
  );
};

export default UseStateCounter;
