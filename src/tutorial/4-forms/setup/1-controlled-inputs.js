import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange


//either onSubmit on the form or onClick on the button
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email,setEmail] = useState("");
  const [people,setPeople] = useState([]);


  const handleSubmit = (e) => {
    //prevent page refresh on form submit
    e.preventDefault();
    console.log(firstName,email);
    if(firstName && email){
      console.log("submit");

      const person = {firstName:firstName,email:email};
      setPeople((people)=>{
        return [...people,person]
      })

      setFirstName("");
      setEmail("");
      console.log(people);
    }else{
      console.log("empty");
    }
  }

  //value on form depends on a state value
  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name: </label>
          <input type='text' id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type='text' id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type='submit'>add person</button>
      </form>
      {
        people.map((person)=>{
          return(
            <div>
              <p>----------------</p>
              <p>{person.firstName}</p>
              <p>{person.email}</p>
            </div>
          )
        })
      }
    </>
  )
};

export default ControlledInputs;
