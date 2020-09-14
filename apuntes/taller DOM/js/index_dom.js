import humburgerMenu from "./jsDOM/menu_hamburguesa.js";
//import {digitalClock,alarm} from "./jsDOM/reloj.js";
import {digitalClock,alarm} from "./jsDOM/reloj_r01.js";
import {moveBall, shortcuts} from "./teclado.js";
import countdown from "./jsDOM/cuenta_regresiva.js";
import scrollTopButton from "./jsDOM/boton_scroll.js"
import darkTheme from "./jsDOM/tema_oscuro.js";
import responsiveMedia from "./jsDOM/objecto_responsive.js";
import responsiveTester from "./jsDOM/prueba_responsive.js";
import userDeviceInfo from "./jsDOM/deteccion_dispositivos.js";
import networkStatus from "./jsDOM/deteccion_red.js";
import webCam from "./jsDOM/deteccion_webcam.js";
import getGeolocalizacion from "./jsDOM/geolocalizacion.js";
import searchFilter from "./jsDOM/filtros_busquedas.js";
import draw from "./jsDOM/sorteo.js";
import slider from "./jsDOM/slider.js";
import scrollSpy from "./jsDOM/scroll_espia.js";
import smartVideo from "./jsDOM/video_inteligente.js";


const d = document; // todo el arbol html DOM



d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");

    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

    alarm("assets/perforar_1.mp3","#activar-alarma","#desactivar-alarma");

    countdown("countdown",
    "Jun 21,2020 0:01:01", 
    "Feliz cumpleaños ....😀");

    scrollTopButton(".scroll-top-btn");

    responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    ` <a href="https://www.youtube.com/watch?v=4PRlofmLSb8" target="_blank" rel="noopener">Patrones ver video</a>`,
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/4PRlofmLSb8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);


     responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    ` <a href="https://goo.gl/maps/xScRiT9kAxp1GvVK8" target="_blank" rel="noopener">Ver Mapa</a>`,
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565512!2d-99.16869369208443!3d19.427023126223627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2ses!4v1591976127782!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocalizacion("geolocation");
    searchFilter(".card-filter",".card");
    draw(".winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();

}); 

d.addEventListener("keydown",(e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();