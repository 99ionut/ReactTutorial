import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);

  const getUsers = async() =>{
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  }

  //you cant use async await here, thats why we use a diff function
  useEffect(()=>{
    getUsers();
    //if u dont add this, infinite loop because the setUsers in the function you call triggers rerender.
  }, [])

  return (
    <>
    <ul>
    <h1>users</h1>
    {users.map((user)=>{
      return (
      <li>{user.login}
      <img src={user.avatar_url} style={{"width":"40px"}}/>
      </li>
      )
    })}
    </ul>
    </>
  )
};

export default UseEffectFetchData;
