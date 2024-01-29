import React, { useState } from 'react';
import {data} from "../../../data";
// more components
// fix - context api, redux (for more complex cases)


//when you have to pass things from top components to bottom components
const PropDrilling = () => {
  const [people,setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people)=>{
      return people.filter((person)=>person.id !== id);
    })
  }

  return (
    <>
      <h3>propr drilling</h3>
      <List people={people}/>
    </>
  );
};

const List = ({people})=>{
  return (
  <>
    {
     people.map((person)=>{
      return <SinglePerson key={person.id}/>
     }) 
    }
  </>
  )
}

const SinglePerson = ({id,item}) => {
  return (
  <div>
    <h4>single item</h4>
  </div>
  )
}

export default PropDrilling;
