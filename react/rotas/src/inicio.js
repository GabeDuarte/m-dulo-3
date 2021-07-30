import React from "react";

import "./inicio.css";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          nome: "The Big Bang Theory",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
        },
        {
          nome: "gabriel duarte",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
        },
        {
          nome: "Friends",
          imagem_url: "https://br.web.img3.acsta.net/pictures/19/12/20/21/27/3055482.jpg",
          ano_lancamento: "1994",
          qtd_temp: "10",
        },
        {
          nome: "Sex Education",
          imagem_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgnY2O8FTQtRqSDJNZpDlYMysAW5i7Z59V1jbbazOQRBKyXHaVRg8gA3wY123eihrTAU&usqp=CAU",
          ano_lancamento: "2019",
          qtd_temp: "3",
        },
        {
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
          nome: "The Big Bang Theory",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
        },
        {
          nome: "The Big Bang Theory",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
        },
      ],
      nomeSerie:'',
      imagem_urlSerie:'',
      ano_lancamentoSerie:'',
      qtd_tempSerie:'',
      editando: false,
      indexEditando: null,
    };
  }

  onSubmit= (e) =>{
    e.preventDefault();

    const {series, editando, indexEditando, nomeSerie,  imagem_urlSerie, qtd_tempSerie, ano_lancamentoSerie } = this.state;

    if (editando){
      const seriesAtualizadas = series.map((serie, index) => {
        if (indexEditando === index){
          serie.nome = nomeSerie;
          serie.ano_lancamento = ano_lancamentoSerie;
          serie.imagem_url = imagem_urlSerie;
          serie.qtd_temp = qtd_tempSerie;

        }
        return serie;

      });
      this.setState({
        series: seriesAtualizadas,
        indexEditando: null,
        editando: false,
      });

    } else {
      this.setState({
        series: [
          ...series,
          {
            nome: nomeSerie,
            ano_lancamento: ano_lancamentoSerie,
            imagem_url: imagem_urlSerie,
            qtd_temp: qtd_tempSerie
          },
        ]
      });
    };
    this.setState({
      nomeSerie: '',
      imagem_urlSerie:'',
      qtd_tempSerie: '',
      ano_lancamentoSerie:''
    });
  };

  deletar =(index) => {
    const {series} = this.state;
    this.setState({
      series: series.filter((serie, i)=> i!== index),
    })
  };

  render(){
    const {series, nomeSerie, imagem_urlSerie, ano_lancamentoSerie, qtd_tempSerie, editando, indexEditando} = this.state;
    return (
    <html> 
      <body>
        <main className="main">
          <header>
            <div className="Cabecalho">
              <nav>
              
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/series'>Series</Link></li>
                  <li><Link to ='/sobre'>Sobre</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='Conteudo-inicio1'>
            <h1>Lorem Ipsum</h1>
            <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <hr></hr>
          </div>
          <div className='Conteudo-inicio2'>
            <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

          </div>
        </main>
      </body>
    </html> 
    )
  }
}
