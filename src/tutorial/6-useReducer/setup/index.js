import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name,setName] = useState("");
  const [people,setPeople] = useState(data);
  const [showModal,setShowModal] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
      setShowModal(false);
      setPeople([...people,name]);
      setName("");
    }else{
      setShowModal(true);
    }
  }

  return(
    <>
    {showModal && <Modal/>}
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <button type='submit'>add</button>
    </form>
    {people.map((person)=>{
      return <div>{person.name}</div>
    })}
    </>
  )
};

export default Index;
