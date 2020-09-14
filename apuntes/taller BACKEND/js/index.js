import humburgerMenu from "./jsModul/menu_hamburguesa.js";

import scrollTopButton from "./jsModul/boton_scroll.js";
import darkTheme from "./jsModul/tema_oscuro.js";

import slider from "./jsModul/slider.js";
import scrollSpy from "./jsModul/scroll_espia.js";

 
document.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    scrollTopButton(".scroll-top-btn");   
    slider();
    scrollSpy();   
   
}); 
darkTheme(".dark-theme-btn", "dark-mode");
