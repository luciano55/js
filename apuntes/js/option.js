

//var opciones2 = ["id203","id204","id205","id206","id207","id208","id209","id210","id211","id212","id213","id214","id215","id216","id217","id218","id219","id220","id221","id222","id223","id224","id225","id226","id227","id228","id229","id30"];



var nodos = [];
var nodosPro = [];
var myDecena1 = ["myVar_let","myCons","myString","myConcat","myNumber","myBoolean","myNullUnN","myFunction"];
var myDecena2 = ["myArray","myObject","myExprOp","myExpConBl","myEsReBuIt","myGestErr","myBreCont","myAsigDest","myObectLit","myParRest"];
var myDecena3 = ["myArrwFun","myProto","myHerenProto","myClases","myMeestSstGet","myConsole","myDate","myMath","myCortoci","myAlertPromptComfirm"];
var myDecena4 = ["myExpRegu","myFunAnoAuto","myModImpoExpor"];

var myProg1 = ["myProgram01"];

var myDecenas = myDecena1.concat(myDecena2.concat(myDecena3.concat(myDecena4)));

var identificator = "id2";
opciones = [];
for (let i = 3; i < (myDecenas.length + 3); i++){
    identificator = "id2";
    if (i < 10) { identificator = identificator + "0";} 
    opciones.push(identificator + i);
   // console.log(identificator + i);
}


opciones.forEach((element,index)=>{
    nodos[index] = document.getElementById(element);
})


var identificatorPro = "id3";
opcionesPro = [];
for (let i = 1; i < (myProg1.length + 1); i++){
    identificatorPro = "id3";
    if (i < 10) { identificatorPro = identificatorPro + "0";} 
    opcionesPro.push(identificatorPro + i);
   // console.log(identificator + i);
}


opcionesPro.forEach((element,index)=>{
    nodosPro[index] = document.getElementById(element);
})



var myBody = document.getElementById("myBody");

var listas = document.querySelectorAll(".dropDown ul");

var colapse = function(){
    for(let nodo of listas) {
        nodo.style.display = "none";    
    }    
}

nodos.forEach((element,key)=>{
    element.addEventListener("click", function(){
        myBody.innerHTML = eval(myDecenas[key]);
        colapse();
    } , false); 
})

nodosPro.forEach((element,key)=>{
    element.addEventListener("click", function(){
        myBody.innerHTML = eval(myProg1[key]);
        colapse();
    } , false); 
})


