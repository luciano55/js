//var myIndexCell = document.querySelectorAll("div.myIndexTable a");
var myIndexCell = document.querySelectorAll("div.myIndex div.myIndexTable a");

console.log(myIndexCell.length);

console.table(myIndexCell);

for(var i = 0; i < myIndexCell.length ; i++){
    console.count("Código for", i);
} 


/*

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
*/