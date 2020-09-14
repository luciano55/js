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

// 1. A traves de la propiedad HARNINA20.menuDropDown que es un array
// 2. El usuario debe definir patrón de busqueda para localizar los elementos a ocultar
// 3. Los nodos que sean parte visible en su id debe contener la palabra "Visible"
// 4. Ejemplo HARNINA20.menuDropDown = ".dropDown ul";
// 4. Ejemplo HARNINA20.menuDropDown = ".list-item-1";    // No porque hay nodos que NO tienen parte "Visible"
// 4. Ejemplo HARNINA20.menuDropDown = ".hiddenPart";  

// 5. El módulo hará el resto

// V.2_1 le vamos a pasar un array de diferentes tipos de nodos



((function(propertiesNodesCollapse){
   
    var propertiesNodesCollapse = propertiesNodesCollapse || [".hiddenPart"];

    if (Array.isArray(propertiesNodesCollapse)){
        propertiesNodesCollapse.forEach(element => {                
            manageHiddenNode(element);
        }); 
    } else
    {
        manageHiddenNode(propertiesNodesCollapse);
    }  

    function manageHiddenNode(patter){
        const listHideNodes = document.querySelectorAll(patter);
        for(let nodo of listHideNodes) {
                nodo.style.display = "none"; 
            let nodoVisible  = $(nodo.id + "Visible");
                nodoVisible.setAttribute('data-after', ' ↓');   
                nodoVisible.addEventListener("click", modifyDisplay, false); 
    }

    }
   
    function modifyDisplay(e){    
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
             
  })      
  ((typeof HARNINA20.menuDropDown === 'undefined')?undefined:HARNINA20.menuDropDown));