
var modifyDisplay = function(e){
    
    var ul  = e.target.id;
    
   var childNode = document.getElementById(ul.replace("Father", ""));
    
    var estado = childNode.style.display;

     if (estado == "none"){
        childNode.style.display = "block";
    }else{
        childNode.style.display = "none";            
    };    
}

var listas = document.querySelectorAll(".dropDown ul");

for(let nodo of listas) {
    nodo.style.display = "none"; 
   var nodoFather  = document.getElementById(nodo.id + "Father");
    nodoFather.addEventListener("click", modifyDisplay, false); 
}
