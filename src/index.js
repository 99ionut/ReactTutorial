import React from 'react';
//serve a injectare il JS nell'html
import ReactDOM from 'react-dom';
//questo file è un js entry point

//la funzione deve avere la prima lettera grande cosi react sa che è un componente
//ritorno html (jsx)

function Greetings(){
    return <h1>ciao</h1>
}

//cerca cosa c'è da renderizzare e dove
ReactDOM.render(<Greetings/>, document.getElementById("root"));

