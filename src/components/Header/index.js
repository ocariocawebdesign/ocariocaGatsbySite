import React from "react";
import "./styles.css";
import Logo from "../Header/img/logo-grey.png";
import Ilustracao from "../Header/img/ocarioca-ilustracao-1.png";
import Ocarioca from "../Header/img/ocarioca-rounded.png";
import GitHub from "../Header/img/GitHub_Logo.png";
import LinkedIn from "../Header/img/linkedin.png";
import HomeOffice from "../Header/img/homeOffice.jpg";

//import Blog from "../Blog/index";
import "../css/animate.min.css";
//import AnimateClass from "./script";
const Header = () => (
  <>
    <header id="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 section-1-logo">
            <div id="logo">
              <img className="img-fluid" src={Logo} alt="Logo O Carioca Web" />
            </div>
            <div className="centralizar">
              <img
                className="img-fluid img-perfil"
                src={Ocarioca}
                alt="Foto de Carlos Abreu"
              />
            </div>
            <main>
              <p className="text-letf p-sobre animate__animated animate__fadeIn animate__repeat-6">
                Meu nome é Carlos Abreu, trabalho com desenvolvimento de sites
                focado no front-end. Atualmente estou como freelancer e sempre
                em busca de novos desafios. Uma das minhas paixões e motivo de
                orgulho é ser usuário do Ubuntu Linux onde busco realizar todos
                os processos do meu trabalho usando software livre. Tenho
                experiência com HTML5, CSS3, Bootstrap e no momento estudando
                Javascript.
              </p>
            </main>

            <div className="centralizar">
              <a
                href="https://github.com/ocariocawebdesign"
                target="_blank"
                rel="noreferrer"
                title="Acesse meu GitHub"
                alt="Perfil do Github"
              >
                <img className="img-fluid" src={GitHub} width="82" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/ocariocawebdesign/"
                target="_blank"
                rel="noreferrer"
                title="Acesse meu LinkedIn"
                alt="Perfil do LinkedIn"
              >
                <img className="img-fluid" src={LinkedIn} width="82" alt="" />
              </a>
            </div>
            <div className="centralizar">
              <a
                href="https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites..."
                target="_blank"
                rel="noreferrer"
                cacak7
              >
                <button className="btn btn-primary-mod-02 text-button-size swing">
                  Me mande uma mensagem!
                </button>
              </a>
            </div>
            <br />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 box-02">
            <h1 className="text-left h1-header">Desenvolvimento de websites</h1>
            <div className="ilustracao-margin">
              <img
                className="img-fluid img-ilustracao"
                src={Ilustracao}
                alt=""
              />
              <div className="p-sobre-2">
                <a
                  href="https://ocariocawebdesign.com/estudo-de-objetos-em-javascript/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-thumbnail works img-border"
                    src={HomeOffice}
                  />
                  <h1 className="text-center text-uppercase">Javascript</h1>
                </a>{" "}
                <h4 className=""></h4>
              </div>
            </div>
            <section id="wp-posts">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div
                      id="result"
                      className="animate__animated animate__fadeIn animate__repeat-6"
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
