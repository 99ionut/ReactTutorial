import React from 'react';

const ErrorExample = () => {
  
  let title = "random title";
  const handleClick = () =>{
    title="NUOVO TITOLO";
    console.log(title);
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>CHANGEEE Random</button>
    </>
  );
};

export default ErrorExample;
