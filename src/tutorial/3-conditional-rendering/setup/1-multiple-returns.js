import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState("default user");

  useEffect(()=>{
    setIsLoading(true);

    fetch(url)
    .then((resp)=>{
      if(resp.status >= 200 && resp.status <=299){
        return resp.json();
      }else{
        setIsLoading(false);
        setIsError(true);
      }
    })
    .then((user)=> {
      const {login} = user;
      setUser(login);
      setIsLoading(false);
    })
    .catch(error=>console.log(error));
  },[])

  if(isLoading){
    return <h2>Loading....</h2>
  }

  if(isError){
    return <h2>error....</h2>;
  }

  return (
    <h2>{user}</h2>
  )

};

export default MultipleReturns;
