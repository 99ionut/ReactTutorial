import React from 'react';
//serve a injectare il JS nell'html
import ReactDOM from 'react-dom';//questo file è un js entry point

//import books func from books file
import {books} from './books.js'
//this import can be named whatever
import DifferentBookName from './book.js'
//CSS
import "./index.css";
//la funzione deve avere la prima lettera grande cosi react sa che è un componente

//vars
let author = "BOOK AUTHOR";



function Booklist(){
    return (
      <div>
        {books.map((book, index)=>{
          return(
            <DifferentBookName key={book.id} {...book} />
          );
        })}
      </div>
      
    )
}




//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Booklist/>, document.getElementById("root"));

