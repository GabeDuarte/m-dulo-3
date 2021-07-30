//<Link>: componente que pertence ao pacote react-router-dom e vai substitui a tag <a> do HTML para acessar as páginas do próprio projeto. Além disso, recebe o parâmetro to. Ele representa o nome da rota que será acessada pela URL.

//O componente Link possui duas tags: uma de abertura e uma de fechamento. Entre as duas tags (abertura e fechamento) será inserido o conteúdo que ficará disponível para ser clicado.

import React from 'react';
import { Link } from 'react-router-dom';
import App from './inicio'
import './inicio.css'

const Home = () =>{
  return (
    <div>
      <App></App>
      <footer>
           <ul>
             <li>Desenvolvido por: Gabriel Soares.</li>
             <li> WhatsApp: 61 99445-2945 </li>
           </ul>
         </footer>
    </div>
  );
}

export default Home;