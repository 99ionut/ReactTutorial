import React from 'react'

const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target);
  }
  
  const complexExample = (author) =>{
    console.log(author);
  }

const Book = (props) =>{
    const {title, author} = props;
    return (
      <section style={{color:"red", fontWeight:"bold"}}>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{6 + 6}</p>
        <button type='button' onClick={clickHandler}>PRESS</button>
        <button type='button' onClick={() => complexExample(title)}>more complex example</button>
        <p>--------------</p>
      </section>
    )
}

//with this method you can rename it whatever you want in the imported file
export default Book
