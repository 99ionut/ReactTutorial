import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state,action) => {
  const newItems = [...state.people,action.payload]
  if(action.type=="ADD_ITEM"){
    //returning new state
    return ({...state,people:newItems,isModalOpen:true,modalContent:"item added"});
  }
  if(action.type=="NO_VALUE"){
    return ({...state,isModalOpen:true,modalContent:"please add val"})
  }
  if(action.type=="CLOSE_MODAL"){
    return ({...state,isModalOpen:false})
  }
  if(action.type=="REMOVE_ITEM"){
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    }
  }

  throw new Error("no matching action type")
} 

const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:"hello world"
}

const Index = () => {
  const [name,setName] = useState("");
  //reducer function gets called when you call dispatch and changes the state.
  const [state,dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {name}
    if(name){
      //always you have to pass proprety "type"
      dispatch({type:"ADD_ITEM", payload:newItem})
      setName("");
    }else{
      dispatch({type: "NO_VALUE"})
    }
  }

  const closeModal = () =>{
    dispatch({type:"CLOSE_MODAL"})
  }

  return(
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <button type='submit'>add</button>
      <button onClick={dispatch({type:"REMOVE_ITEM", payload:person.id})}>remove</button>
    </form>
    {state.people.map((person)=>{
      return <div>{person.name}</div>
    })}
    </>
  )
};

export default Index;
