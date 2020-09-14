
function generateNumber(max, min) {
  return parseInt((Math.random() * (max - min + 1) + min));
}

function generateColor(opacidad) {
  /* Valores maximos y minimos de Red, Green y Blue al generar el numero */
  var MAXR = 170;//25;
  var MAXG = 25; //200;
  var MAXB = 200;//170;

  var MINR = 120;//20;
  var MING = 20;//150;
  var MINB = 150;// 120;

  return 'rgba(' + generateNumber(MAXR, MINR) + ', ' + generateNumber(MAXG, MING) + ', '
  + generateNumber(MAXB, MINB) + ', ' + opacidad + ')';
}

function setColor(input, opacidad) {
    input.style.background = generateColor(opacidad);
}
/*
var body = document.getElementById('body');
body.addEventListener('mouseover',  function () {
            window.setTimeout(setColor(body, .2), 1000);
          }, false);
*/ 
/* Antiguos y muy usados
document.getElementById(id) // devuelve un nodo
document.getElementsByTagName('a'); // devuelve un array de nodos
document.getElementsByClassName("example"); // devuelve un array de nodos

/*
Nuevas Versiones 
document.querySelectorAll()
element.querySelector()
element.querySelectorAll()
Snippets para querySelector

*/

var myIndexCell = document.getElementsByTagName('a');
// Color inical 
for(var i = 0; i < myIndexCell.length ; i++){
        setColor(myIndexCell[i], 1);
    } 


// Color al mover mouse
for(var i = 0; i < myIndexCell.length ; i++){    
            this.nodo = myIndexCell[i];
            this.nodo.onmouseover = function(t){
                                        return function(){ setColor(t, 1);};
                                    }(myIndexCell[i]);
        }  



