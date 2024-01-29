import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

//create context
const personContext = React.createContext();
//now we have access to provider and consumer, we just need provider
//wrap the return of the root in the provider in this case ContextAPI/ or the whole application
//not that useful if you only have 1 level

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
    <personContext.Provider value={{removePerson, people}}>
      <h3>prop drilling w Context</h3>
      <List/>
    </personContext.Provider>
    </>
  );
};

const List = () => {
  //get context data
  const mainData = useContext(personContext)
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  //get context data (destructure object, you dont have to do it like this)
  const {removePerson} = useContext(personContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
