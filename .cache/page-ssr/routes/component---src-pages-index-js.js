exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/Content/efeito.js":
/*!******************************************!*\
  !*** ./src/components/Content/efeito.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class Efeito extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  componentDidMount() {
    //Efeito nas imagens
    function Efeito(seletor) {
      const element = document.querySelectorAll(seletor);

      this.adiciona = function (classe) {
        element.forEach(item => {
          const estado01 = item.classList.contains(classe);

          if (estado01 === false) {
            item.addEventListener("mouseenter", () => {
              item.classList.toggle(classe);
            });
          }
        });
      };
    }

    const imgAtiva = new Efeito(".works");
    imgAtiva.adiciona("efeito-pulse");
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Efeito);

/***/ }),

/***/ "./src/components/Content/index.js":
/*!*****************************************!*\
  !*** ./src/components/Content/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _efeito_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./efeito.js */ "./src/components/Content/efeito.js");
/* harmony import */ var _Content_img_forCasa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Content/img/forCasa.png */ "./src/components/Content/img/forCasa.png");
/* harmony import */ var _Content_img_espirales_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Content/img/espirales.png */ "./src/components/Content/img/espirales.png");
/* harmony import */ var _Content_img_coffe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Content/img/coffe.png */ "./src/components/Content/img/coffe.png");
/* harmony import */ var _Content_img_perfil2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Content/img/perfil2.png */ "./src/components/Content/img/perfil2.png");
/* harmony import */ var _Content_img_primoCappo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Content/img/primoCappo.png */ "./src/components/Content/img/primoCappo.png");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./src/components/Content/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);









const Content = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "text-center p-content"
}, "Tipos de sites"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
  className: "text-center text-content"
}, "Escolha o plano ideal para o seu neg\xF3cio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "row"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "card"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "host1"
}, "Est\xE1tico"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: "",
  class: "card-img-top img-color",
  alt: ""
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "card-body card-bacckground-color-1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "card-text"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Sem mensalidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Modelo de Site one page "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Site responsivo (Mobile) "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Integra\xE7\xE3o com Instagram Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Bot\xE3o para Whatsapp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Acompanhamento de m\xE9tricas Google Analytics "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Marca\xE7\xE3o em tags (palavras-chaves)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#",
  class: "btn btn-primary"
}, "Quero saber mais...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "card"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "host2"
}, "Din\xE2mico / Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "card-body card-bacckground-color-1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "card-text"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - N\xE3o existe mensalidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Site one page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Site PWA (Se comporta como um APP no celular)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#",
  class: "btn btn-primary"
}, "Quero saber mais...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "card"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "host3"
}, "E-commerce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "card-body card-bacckground-color-1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "card-text"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - N\xE3o existe mensalidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Site one page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, " - Site PWA (Se comporta como um APP no celular)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#",
  class: "btn btn-primary"
}, "Quero saber mais...")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container container-content"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
  id: "",
  className: "text-center text-uppercase title-works"
}, "Alguns trabalhos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_efeito_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "row"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "content-box-01",
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://ocariocawebdesign.github.io/promocoes-delivery/",
  rel: "noreferrer",
  target: "_blank"
}, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-thumbnail works",
  src: _Content_img_primoCappo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  alt: ""
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "content-box-02",
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.forlifeburiticlube.com.br/",
  rel: "noreferrer",
  target: "_blank"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-thumbnail img-fluid works",
  src: _Content_img_forCasa_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: ""
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "content-box-01",
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://espirales.netlify.app",
  rel: "noreferrer",
  target: "_blank"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-thumbnail img-fluid works",
  src: _Content_img_espirales_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: ""
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "content-box-01",
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://ocariocawebtemplate.gatsbyjs.io/",
  rel: "noreferrer",
  target: "_blank"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-thumbnail img-fluid works",
  src: _Content_img_perfil2_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  alt: ""
}))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "centralizar-coffe"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites...",
  target: "_blank",
  rel: "noreferrer",
  cacak7: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
  className: "btn btn-primary-mod-02 text-button-size coffe-button swing "
}, "Vamos tomar um caf\xE9?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _Content_img_coffe_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  className: "img-fluid"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1440 320"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  fill: "#440055",
  "fill-opacity": "0.8",
  d: "M0,96L1440,192L1440,320L0,320Z"
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/components/Footer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
  id: "footer-main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "text-center p-text-footer",
  alt: "",
  title: "Clique para saber mais!"
}, "Copyright \xA9 2020 O Carioca Web todos os direitos reservados. Desenvolvido com ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "red"
}, "\u2764 "), "por O Carioca WebDesign"));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/components/Header/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/img/logo.png */ "./src/components/Header/img/logo.png");
/* harmony import */ var _Header_img_logo_mobile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/img/logo-mobile.png */ "./src/components/Header/img/logo-mobile.png");
/* harmony import */ var _css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/animate.min.css */ "./src/components/css/animate.min.css");
/* harmony import */ var _css_animate_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__);



 //import Blog from "../Blog/index";

 //import AnimateClass from "./script";

const Header = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
  id: "header-top"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "row"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-xs-12 col-sm-12 col-md-8 col-lg-8 section-1-logo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "logo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-fluid",
  src: _Header_img_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "Logo O Carioca Web"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "centralizar"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
  className: "h1header"
}, "D\xEA vida e voz para o seu neg\xF3cio na internet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
  className: "h2header"
}, "Descubra como \xE9 simples criar p\xE1ginas e enviar campanhas de email marketing para converter visitantes em clientes e fazer seu neg\xF3cio", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: ""
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites...",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
  className: "btn btn-primary-mod-02 text-button-size swing"
}, "Saiba mais!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 box-02"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "ilustracao-margin"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-fluid img-ilustracao",
  src: _Header_img_logo_mobile_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "wp-posts"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "row"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "result",
  className: "animate__animated animate__fadeIn animate__repeat-6"
}, " "))))))))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);







const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Content__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Content/styles.css":
/*!*******************************************!*\
  !*** ./src/components/Content/styles.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Footer/styles.css":
/*!******************************************!*\
  !*** ./src/components/Footer/styles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Header/styles.css":
/*!******************************************!*\
  !*** ./src/components/Header/styles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/css/animate.min.css":
/*!********************************************!*\
  !*** ./src/components/css/animate.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Content/img/coffe.png":
/*!**********************************************!*\
  !*** ./src/components/Content/img/coffe.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/components/Content/img/espirales.png":
/*!**************************************************!*\
  !*** ./src/components/Content/img/espirales.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/espirales-b20d0819b99241200be4747843b03752.png");

/***/ }),

/***/ "./src/components/Content/img/forCasa.png":
/*!************************************************!*\
  !*** ./src/components/Content/img/forCasa.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/forCasa-3bb6e07b88b70fa6892a37c292291e3e.png");

/***/ }),

/***/ "./src/components/Content/img/perfil2.png":
/*!************************************************!*\
  !*** ./src/components/Content/img/perfil2.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/perfil2-5ed58af89cc169b2fe37c09cf9b6ef97.png");

/***/ }),

/***/ "./src/components/Content/img/primoCappo.png":
/*!***************************************************!*\
  !*** ./src/components/Content/img/primoCappo.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/primoCappo-220971a8568d64b434accf84b87a7142.png");

/***/ }),

/***/ "./src/components/Header/img/logo-mobile.png":
/*!***************************************************!*\
  !*** ./src/components/Header/img/logo-mobile.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/logo-mobile-7365f06b45d889c191c1bb2c20df88dc.png");

/***/ }),

/***/ "./src/components/Header/img/logo.png":
/*!********************************************!*\
  !*** ./src/components/Header/img/logo.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/logo-72d20a8365351b693d4428dd5b96829f.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map