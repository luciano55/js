import humburgerMenu from "./jsDOM/menu_hamburguesa.js";
//import {digitalClock,alarm} from "./jsDOM/reloj.js";

import scrollTopButton from "./jsDOM/boton_scroll.js"
import darkTheme from "./jsDOM/tema_oscuro.js";

import slider from "./jsDOM/slider.js";
import scrollSpy from "./jsDOM/scroll_espia.js";

import contactFormValidations from "./jsDOM/validaciones_formularios.js";
import speechReader from "./jsDOM/narrador.js";


const d = document; // todo el arbol html DOM


d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    scrollTopButton(".scroll-top-btn");   
    slider();
    scrollSpy();   
    contactFormValidations();

}); 
darkTheme(".dark-theme-btn", "dark-mode");
speechReader();

