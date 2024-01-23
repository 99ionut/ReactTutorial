import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0);

  return( 
  <>
  <section>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button onClick={() => setValue(value-1)}>decrease</button>
    <button onClick={() => setValue(value+1)}>increase</button>
    <button onClick={() => setValue(0)}>reset</button>
  </section>
  </>
  );
};

export default UseStateCounter;
