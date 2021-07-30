import React from 'react';

const Equipe = (props) => {
    return(
        <div>
           
           <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
           <hr/>
 
        </div>
    );
};

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá, sou o(a) {props.nome}!</h2>
            <h3>Cargo: {props.cargo}.</h3>
            <h3>idade: {props.idade} anos.</h3>
        </div>
    );

};

function App(){
    return (
        <div>
            <h1>Conheça nossos colaboradores</h1>
            <Equipe nome="gabriel" cargo="Dev" idade="25"/>
            <Equipe nome="lucas" cargo="Digitador" idade="14"/>
            <h1>Primeira aula de react</h1>
        </div>
    );
};

export default App;