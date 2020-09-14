const d = document;
let x=0,
y=0;






export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect(),
    INTERVAL = 10;
    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall, limitsStage);
  

    switch(e.keyCode){
        case 37:    //Izq             
            if(limitsBall.left > limitsStage.left){
                if((limitsBall.left - INTERVAL) < limitsStage.left ){
                    $ball.style.left = $stage.style.left;
                }else {
                    e.preventDefault();
                    x--;
                    $ball.style.transform = `translate(${x * INTERVAL}px,${y * INTERVAL}px)`;
                }               
            }
            break;
        case 38:    //Arriba 
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                if((limitsBall.top - INTERVAL) < limitsStage.top ){
                    $ball.style.top = $stage.style.top;
                }else {                   
                    y--;
                    $ball.style.transform = `translate(${x * INTERVAL}px,${y * INTERVAL}px)`;
                }               
            }          
             break;
        case 39:    //derecha  
            if(limitsBall.right < limitsStage.right){
                if((limitsBall.right + INTERVAL) > limitsStage.right ){
                    $ball.style.right = $stage.style.right;
                }else {                   
                    e.preventDefault();
                    x++;
                    $ball.style.transform = `translate(${x * INTERVAL}px,${y * INTERVAL}px)`;
                }               
            }          
             break;
        case 40:    // Abajo   
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                if((limitsBall.bottom + INTERVAL) > limitsStage.bottom ){
                    $ball.style.right = $stage.style.right;
                }else { 
                    y++;
                    $ball.style.transform = `translate(${x * INTERVAL}px,${y * INTERVAL}px)`;
                }               
            }            
            break;
        default:
            break;
    }
   
}
export function shortcuts(e){
    
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl:${e.ctrlKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(`alt:${e.altKey}`);
    console.log(e);
    if (e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if (e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmación con el teclado");
    }
    if (e.key === "p" && e.altKey){
        prompt("Haz solicitado un dato por el teclado");
    }
}