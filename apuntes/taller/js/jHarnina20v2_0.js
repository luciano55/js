// ---------------------------- F U N C I O N E S    G L O B A L E S -----------------------
const $ = function(string){
    return document.getElementById(string);
};

// ------------------    Mi Universo HARNINA20--------------------------------------
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

//-----------------------Como crear  Menu desplegable ------------------------------------------

//  A traves de la propiedad HARNINA20.menuDropDown
// 1. Contamos con nodos siempre visibles y nodos a ocultar
// 2. El usuario debe definir patrón de busqueda para localizar los elementos a ocultar
// 3. Los nodos que sean parte visible en su id debe contener la palabra "Visible"
// 4. Ejemplo HARNINA20.menuDropDown = ".dropDown ul";
// 4. Ejemplo HARNINA20.menuDropDown = ".list-item-1";    // No porque hay nodos que NO tienen parte "Visible"
// 4. Ejemplo HARNINA20.menuDropDown = ".hiddenPart";  

// 5. El módulo hará el resto

HARNINA20.menuDropDown = HARNINA20.namespace("HARNINA20.menuDropDown");




((function(profile){
    var profile = profile || ".hiddenPart";
    const modifyDisplay = function(e){
          
                let ul  = e.target.id; 
                let hideNode = $(ul.replace("Visible", ""));
                let estado = hideNode.style.display;
               
                if (estado == "none"){
                    hideNode.style.display = "block";
                    e.target.setAttribute('data-after', ' ↑');
                   
                }else{
                    hideNode.style.display = "none"; 
                    e.target.setAttribute('data-after', ' ↓');                               
                };    
            };

    const listaNodosOcultos = document.querySelectorAll(profile);

    for(let nodo of listaNodosOcultos) {
                nodo.style.display = "none"; 
            let nodoVisible  = $(nodo.id + "Visible");
                nodoVisible.setAttribute('data-after', ' ↓');   
                nodoVisible.addEventListener("click", modifyDisplay, false); 
           }
  })      
  (".dropDown ul"));