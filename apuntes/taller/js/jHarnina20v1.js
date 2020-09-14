// ---------------------------- F U N C I O N E S    G L O B A L E S -----------------------
const $ = function(string){
    return document.getElementById(string);
};

// ------------------    Mi Universo HARNINA20--------------------------------------
// https://www.arquitecturajava.com/ejempo-de-javascript-namespace/
// ¿Cómo creo un espacio de nombres en JavaScript para que mis objetos 
// y funciones NO sean sobrescritos por otros objetos y funciones con el mismo nombre? 

var HARNINA20 = HARNINA20 || {};

// Control del Universo
HARNINA20.namespace = function(namespace){ 
    let parts = namespace.split('.'); // HARNINA20.myMenu.Look.lolo
    let parent = HARNINA20;
    if (parts[0] === "HARNINA20") {
        parts = parts.slice(1); // myMenu  Look lolo
    }
    else return false;
    for (let i = 0; i < parts.length; i += 1) {

        if (typeof parent[parts[i]] === "undefined") {  // HARNINA20.myMenu

            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

/*
HARNINA20{
    myMenu{
        Look{
            lolo{}
        }
    }
}*/
