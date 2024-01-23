import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:"peter",
    age:24,
    message:"random mess"
  });

  const [name,setName] = useState("Peter");
  const [age,setAge] = useState(24);
  const [message,setMessage] = useState("random messsss aa");

  const changeMessage = () => {
    setMessage("hello world");
  }

  return (
  <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button onClick={changeMessage}>ChangeName</button>
  </>
  );
};

export default UseStateObject;
