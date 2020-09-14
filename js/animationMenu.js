// Objetivo localizar extraer las referencias a los nodos etiquetas a

//var listLabel_A = document.getElementsByTagName("a");

//var listLabel_A = document.querySelectorAll("div.myIndex div.myIndexTable a");

/*
console.dir(listLabel_A[0]);
console.log(listLabel_A.length);
console.log(Array.isArray(listLabel_A));


for(let nodo of listLabel_A) {
    console.log(nodo.href);
    for(let prop in nodo) {
        console.log("Key:" + prop);       
        console.log("Value:" + nodo[prop]);
    }
}


for(var i = 0; i < listLabel_A.length ; i++){
    console.count("Código for", i);
} 

var listLabel_Array = [listLabel_A];

console.log(Array.isArray(listLabel_Array));

listLabel_Array.forEach(element=>{
    console.log(element);
})

alt + shift + a

*/
function generateNumber(max, min) {
    return parseInt((Math.random() * (max - min + 1) + min));
  }

function generateColor(opacidad) {
    /* Valores maximos y minimos de Red, Green y Blue al generar el numero */
    const MAXR = 170;//25;
    const MAXG = 25; //200;
    const MAXB = 200;//170;
  
    const MINR = 120;//20;
    const MING = 20;//150;
    const MINB = 150;// 120;
  
    return 'rgba(' + generateNumber(MAXR, MINR) + ', ' + generateNumber(MAXG, MING) + ', '
    + generateNumber(MAXB, MINB) + ', ' + opacidad + ')';
  }



function setColor(input, opacidad) {
    input.style.background =  generateColor(opacidad);
}


// Inicio del proceso

var listLabel_A = document.querySelectorAll("div.myIndex div.myIndexTable a");

// Color inical 
for(var i = 0; i < listLabel_A.length ; i++){
    setColor(listLabel_A[i], 1);
} 


// Color al mover mouse
for(let i = 0; i < listLabel_A.length ; i++){   

   
     listLabel_A[i].onmouseover = function(t){
                                                 return function(){ setColor(t, 1);};
                                     }(listLabel_A[i]);
}  


// Cuando un ámbito interno  utiliza variables del ámbito externo entonces JS puede hacer clausure













