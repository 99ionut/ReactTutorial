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
        <Title/>
      </div>
      
    )
}
const Title = () =>{
  return <section style={{color:"blue"}}>
    title
  </section>
}

const Book = () =>{
  return <section style={{color:"red", fontWeight:"bold", fontSize:"30px"}}>
    book
  </section>
}

//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Booklist/>, document.getElementById("root"));

