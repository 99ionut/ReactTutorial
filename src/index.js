import React from 'react';
//serve a injectare il JS nell'html
import ReactDOM from 'react-dom';
//questo file è un js entry point

//CSS
import "./index.css";
//la funzione deve avere la prima lettera grande cosi react sa che è un componente

//vars
let author = "BOOK AUTHOR";

function Booklist(){
    return (
      <div>
        <Book title="ok1 we" author="gggg"/>
        <Book title="oeqwe f" author="ppp"/>
        <Book title="o 2323 2" author="twrwr"/>
      </div>
      
    )
}


const Book = ({title, author}) =>{
  return (
    <section style={{color:"red", fontWeight:"bold"}}>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
    </section>
  )
}

//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Booklist/>, document.getElementById("root"));

