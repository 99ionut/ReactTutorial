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
    title:"aaa",
    author:"ewqeqwe"
  },
  {
    title:"bbbb",
    author:"kkkkk99"
  }
];

const names = ["jon","arc","pot"];
const newName = names.map((name)=>{
  return <h1>{name}</h1>
})
function Booklist(){
    return (
      <div>
        {newName}
      </div>
      
    )
}


const Book = (props) =>{
  const {title, author} = props;
  return (
    <section style={{color:"red", fontWeight:"bold"}}>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
      <p>--------------</p>
    </section>
  )
}

//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Booklist/>, document.getElementById("root"));

