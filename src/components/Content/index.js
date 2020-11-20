import React from "react";
import Efeito from "./efeito";
import Forcasa from "../Content/img/forCasa.png";
import Tanto from "../Content/img/tanto.png";
import PostoSeis from "../Content/img/posto-seis.png";
import Espirales from "../Content/img/espirales.png";
import PrimoCappo from "../Content/img/primoCappo.png";
import "./styles.css";

const Content = () => (
  <>
    <div className="container container-content">
      <h1 id="" className="text-center text-uppercase title-works">
        Alguns trabalhos
      </h1>
      <Efeito />
      <div className="row">
        <div
          id="content-box-01"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a href="http://primocappo.com.br" rel="noreferrer" target="_blank">
            {" "}
            <img className="img-thumbnail works" src={PrimoCappo} alt="" />
          </a>
        </div>
        <div
          id="content-box-02"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="https://www.forlifeburiticlube.com.br/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="img-thumbnail img-fluid works"
              src={Forcasa}
              alt=""
            />
          </a>
        </div>
        <div
          id="content-box-03"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="http://tantoarquitetura.com.br/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img className="img-thumbnail img-fluid works" src={Tanto} alt="" />
          </a>
        </div>

        <div
          id="content-box-01"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="https://espirales.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="img-thumbnail img-fluid works"
              src={Espirales}
              alt=""
            />
          </a>
        </div>
        <div
          id="content-box-02"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <img
            className="img-thumbnail img-fluid works"
            src={PostoSeis}
            alt=""
          />
        </div>
        <div
          id="content-box-03"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        ></div>
      </div>
      <div id="content-main">
        <div id="box01">Oi</div>

        <div id="box02">Olá</div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#440055"
        fill-opacity="0.8"
        d="M0,96L1440,192L1440,320L0,320Z"
      ></path>
    </svg>
  </>
);

export default Content;
