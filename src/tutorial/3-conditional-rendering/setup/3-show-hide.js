import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow] = useState(false);
  return (
  <>
    <button className='btn' onClick={()=>setShow(!show)}>Show hide</button>
    {show && <Item/>}
  </>
  );
};

const Item = () =>{
  const [size,setSize] = useState(window.innerWidth);

  const checkSize = () =>{
    setSize(window.innerWidth);
  }

  //if u dont remove it, it will create an event listener each time it shows/displays
  useEffect(()=>{
    window.addEventListener("resize",checkSize);
    return () =>{
      window.removeEventListener("resize",checkSize);
    }
  },[])

  return (
  <div>
    <h1>window</h1>
    <h1>size: {size}</h1>
  </div>
  )
}

export default ShowHide;
