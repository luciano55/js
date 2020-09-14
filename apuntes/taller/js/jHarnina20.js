// ---------------------------- F U N C I O N E S    G L O B A L E S -----------------------
const $ = function(string){
    return document.getElementById(string);
};

function funcDelegate(obj, methodName) {
    return function (e) {
        e = e || window.event;
        return obj[methodName](this, e);
    };
}

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

//-----------------------Como animar Menu desplegable ------------------------------------------

// 1. A traves de la propiedad HARNINA20.menuDropDown
// 2. El usuario debe definir patrón de busqueda para localizar los elementos a ocultar
// 3. Los nodos que sean parte visible en su id debe contener la palabra "Visible"
// 4. Ejemplo HARNINA20.menuDropDown = ".dropDown ul";
// 4. Ejemplo HARNINA20.menuDropDown = ".list-item-1";    // No porque hay nodos que NO tienen parte "Visible"
// 4. Ejemplo HARNINA20.menuDropDown = ".hiddenPart";  

// 5. El módulo hará el resto


// V.2_1 le vamos a pasar un array de diferentes tipos de nodos

HARNINA20.menuDropDown = HARNINA20.namespace("HARNINA20.menuDropDown");

 // Modul Menu collapse
((function(propertiesNodesCollapse){
    const modifyDisplay = function(e){    
                let ul  = e.target.id; 
                let childNode = $(ul.replace("Visible", ""));
                let estado = childNode.style.display;
               
                if (estado == "none"){
                    childNode.style.display = "block";
                    e.target.setAttribute('data-after', ' ↑');
                   
                }else{
                    childNode.style.display = "none"; 
                    e.target.setAttribute('data-after', ' ↓');                               
                };    
            };        
            
            if (Array.isArray(propertiesNodesCollapse)){
                propertiesNodesCollapse.forEach(element => {                
                    const listNodesCollapse = document.querySelectorAll(element);
                    for(let nodo of listNodesCollapse) {
                            nodo.style.display = "none"; 
                        let nodoFather  = $(nodo.id + "Visible");
                            nodoFather.setAttribute('data-after', ' ↓');   
                            nodoFather.addEventListener("click", modifyDisplay, false); 
                }

                }); 
            }                         
   
  })      
  (HARNINA20.menuDropDown));


  //-----------------------Como animar apariencia Menu  ------------------------------------------

  HARNINA20.menuLook = HARNINA20.namespace("HARNINA20.menuLook");

  
  // Modul Menu look  
(( function(candidateList){
   
    if (candidateList === undefined){
        candidateList = [".menuLook"];
    }

HARNINA20.namespace('HARNINA20.myMenuLook');

HARNINA20.myMenuLook = function(id){
                this._node = $(id);
                if (this._node) {
                    this._node.onmouseover = funcDelegate(this, "customOnMouseOver");
                    this._node.onmouseout = funcDelegate( this, "customOnMouseOut");
                }
        };

    HARNINA20.myMenuLook.prototype.customOnMouseOver = function (obj, event) {
                obj.style.cursor = "help";
                obj.style.color = "olive";
                obj.style.fontSize = "2em";
                obj.style.background = "#EAEDEE";
                obj.style.borderRadius = "25px 25px 25px 25px";
                obj.className = "colapse";//"boton s9";
    };

    HARNINA20.myMenuLook.prototype.customOnMouseOut = function (obj, event) {
                obj.style.cursor = "pointer";
                obj.style.color = "#88B3BB";
                obj.style.fontSize = "1em";
                obj.style.borderRadius = "0px 0px 0px 0px";
                obj.style.background = "";
                obj.className = "colapse";//"boton s12";
            };      
            
       if(Array.isArray(candidateList)) {
      
            candidateList.forEach((candidate,index)=>{
                    const listaNodosLook = document.querySelectorAll(candidate);

                    for(let nodo of listaNodosLook) {
                                new HARNINA20.myMenuLook(nodo.id);
                        }  
                })
       }         
}
)( (typeof HARNINA20.menuLook === 'undefined')?undefined:HARNINA20.menuLook));
