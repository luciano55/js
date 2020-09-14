

// Modul Box look 

(( function(candidateBoxLookList){
  var candidateBoxLookList = candidateBoxLookList || [".boxLook a"];   
  if (Array.isArray(candidateBoxLookList)){
    candidateBoxLookList.forEach(element => { 
                     
      manageSetColor(element);
    }); 
  } else
  {
    manageSetColor(candidateBoxLookList);
  }  

  function manageSetColor(patter){
    const listBoxLookNodes = document.querySelectorAll(patter);
    for(let nodo of listBoxLookNodes) {
       setColor(nodo, 1);
    }
    for(let i = 0; i < listBoxLookNodes.length ; i++){  
      listBoxLookNodes[i].onmouseover = function(t){
                                                  return function(){ setColor(t, 1);};
                                      }(listBoxLookNodes[i]);
    }  
  }
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

})( (typeof HARNINA20.boxLook === 'undefined')?undefined:HARNINA20.boxLook)); 