import React from 'react';
//serve a injectare il JS nell'html
import ReactDOM from 'react-dom';
//questo file è un js entry point

//CSS
import "./index.css";

//la funzione deve avere la prima lettera grande cosi react sa che è un componente
//ritorno html (jsx)

function Booklist(){
    return (
      <div>
        <Book/>
      </div>
      
    )
}

let author = "BOOK AUTHOR";
const Book = () =>{
  let title = "BOOK TITLE";
  return (
    <section style={{color:"red", fontWeight:"bold"}}>
      <h1>{title}</h1>
      <h4>{author}</h4>
    
    {/* questo non va <p>{let x = 6}</p> perchè non è un'espressione*/}
    <p>{6 + 6}</p>
    {/* questo si oppure author.toUpperCase() */}
    </section>
  )
}

//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Booklist/>, document.getElementById("root"));

