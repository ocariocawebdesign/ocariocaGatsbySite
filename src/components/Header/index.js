import React from "react"
import "./styles.css"
import Logo from "../Header/img/logo-grey.png"
import Ilustracao from "../Header/img/ocarioca-ilustracao-1.png"
import Ocarioca from "../Header/img/ocarioca-rounded.png"
import GitHub from "../Header/img/GitHub_Logo.png"
import LinkedIn from "../Header/img/linkedin.png"

const Header = () => (
  <>
    <header id="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div id="logo">
              <img className="img-fluid" src={Logo} alt="" />
            </div>
            <div className="centralizar">
              <img className="img-fluid" src={Ocarioca} alt="" />
            </div>
            <p class="text-letf p-sobre">
              Meu nome é Carlos Abreu, trabalho com desenvolvimento de sites
              focado no front-end. Atualmente estou como freelancer e sempre em
              busca de novos desafios. Uma das minhas paixões e motivo de
              orgulho é ser usuário do Ubuntu Linux onde busco realizar todos os
              processos do meu trabalho usando software livre. Tenho experiência
              com HTML5, CSS3, Bootstrap e no momento estudando Javascript.
            </p>
            <div className="centralizar">
              <a href="https://github.com/ocariocawebdesign" target="_blank" title="Acesse meu GitHub" alt="Perfil do Github">
                <img className="img-fluid" src={GitHub} alt="" />
              </a>
            <a href="" target="_blank" title="Acesse meu LinkedIn" alt="Perfil do LinkedIn">
                <img className="img-fluid" src={LinkedIn} alt="" />
              </a>
            </div>
            <div className="centralizar">
              <a
                href="https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites..."
                target="_blank"
              >
                <button class="btn btn-primary-mod-02 text-button-size">
                  Me mande uma mensagem!
                </button>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 box-02">
            <h1 class="text-left h1-header">Desenvolvimento de websites</h1>
            <img className="img-fluid" src={Ilustracao} alt="" />
          </div>
        </div>
      </div>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#440055"
        fill-opacity="0.8"
        d="M0,96L1440,192L1440,320L0,320Z"
      ></path>
    </svg>
  </>
)

export default Header
