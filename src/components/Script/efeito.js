import React from "react";
class Efeito extends React.Component {
  componentDidMount() {
    //Aqui criei uma função contrutora aqui
    //para pegar um elemento que seja Array (No caso "li" que retorna uma nodeList)
    function ClassLista(seletor) {
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
    //imgs.remove("efeito-pulse");
  }
}

const efeitos = document.querySelector("#efeitos");
ReactDOM.render(element, document.querySelector("#efeitos"));

export default Efeito;
