import humburgerMenu from "./jsDOM/menu_hamburguesa.js";
//import {digitalClock,alarm} from "./jsDOM/reloj.js";
import {digitalClock,alarm} from "./jsDOM/reloj_r01.js";
import {shortcuts} from "./teclado.js";


const d = document; // todo el arbol html DOM




d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/perforar_1.mp3","#activar-alarma","#desactivar-alarma");
}); 

d.addEventListener("keydown",(e) =>{
    shortcuts(e);
});
/*
d.addEventListener("keyup",(e) =>{
    shortcuts(e);
});
d.addEventListener("keypress",(e) =>{
    shortcuts(e);
})*/