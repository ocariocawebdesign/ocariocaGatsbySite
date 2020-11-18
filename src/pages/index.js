import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

//import { Link } from "gatsby"
//https://www.youtube.com/watch?v=fLCiSSu6-sI

//Aqui criei uma função contrutora
//para pegar um elemento que seja Array (No caso "li" que retorna uma nodeList)
/*function ClassLista(seletor) {
  //adiciona classe
  this.adiciona = function (classe) {
    //Coloquei o argumento classe
    const element = document.querySelectorAll(seletor);
    element.forEach((item) => {
      item.classList.add(classe); // Aqui também com parâmetro classe
    });
  };
  //Remove classe
  this.remove = function (classe) {
    //Coloquei o argumento classe
    const element = document.querySelectorAll(seletor);
    element.forEach((item) => {
      item.classList.remove(classe); // Aqui também com parâmetro classe
    });
  };
}
const imgs = new ClassLista("img");
imgs.adiciona("efeito-pulse");
//imgs.remove("efeito-pulse");*/

//Efeito pulse


const Home = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

export default Home;
