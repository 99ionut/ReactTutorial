import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys


const ControlledInputs = () => {
  //const [firstName, setFirstName] = useState("");
  //const [email,setEmail] = useState("");
  //const [age,setAge] = useState("");
  const [person,setPerson] = useState({firstName:"",email:"",age:""});
  const [people,setPeople] = useState([]);

  //If you have 15-20 inputs, you cant have a state for each one, so you do this.
  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age){
      setPeople([...people,person]);
      setPerson({firstName:"",email:"",age:""});
    }
  }


  //value on form depends on a state value
  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name: </label>
          <input type='text' id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type='text' id="email" name="email" value={person.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="age">age: </label>
          <input type='text' id="age" name="age" value={person.age} onChange={handleChange}/>
        </div>
        <button type='submit' onClick={handleSubmit}>add person</button>
      </form>
      {
        people.map((person)=>{
          return(
            <div>
              <p>----------------</p>
              <p>{person.firstName}</p>
              <p>{person.email}</p>
              <p>{person.age}</p>
            </div>
          )
        })
      }
    </>
  )
};

export default ControlledInputs;
