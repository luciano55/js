import {humburgerMenu, scrollTopButton} from "./libreryJs/utilityMenu.js";
import {digitalClock, alarm, countdown} from "./libreryJs/reloj.js";
import darkTheme from "./libreryJs/appearance.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/perforar_1.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Jun 21,2020 0:01:01", "Feliz cumpleaños ....😀");
     scrollTopButton(".scroll-top-btn");
    
}); 
darkTheme(".dark-theme-btn", "dark-mode");
/*
d.addEventListener("keydown",(e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

*/