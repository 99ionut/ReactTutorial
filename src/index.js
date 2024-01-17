import React from 'react';
//serve a injectare il JS nell'html
import ReactDOM from 'react-dom';
//questo file è un js entry point

//CSS
import "./index.css";
//la funzione deve avere la prima lettera grande cosi react sa che è un componente

//vars
let author = "BOOK AUTHOR";

const books = [
  {
    id:1,
    title:"aaa",
    author:"ewqeqwe"
  },
  {
    id:2,
    title:"bbbb",
    author:"kkkkk99"
  },
  {
    id:3,
    title:"CCCC",
    author:"523532"
  }
];

function Booklist(){
    return (
      <div>
        {books.map((book, index)=>{
          return(
            <Book key={book.id} {...book} />
          );
        })}
      </div>
      
    )
}


const Book = (props) =>{
  //event handler
  const clickHandler = () =>{
    alert("hello");
  }
  const {title, author} = props;
  return (
    <section style={{color:"red", fontWeight:"bold"}}>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
      <button type='button' onClick={clickHandler}>PRESS</button>
      <p>--------------</p>
    </section>
  )
}

//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Booklist/>, document.getElementById("root"));

