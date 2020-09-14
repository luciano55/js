const d = document;

function nodeDisabledInitial(btnPlay,btnStop){
    d.querySelector(btnPlay).disabled = false;
    d.querySelector(btnStop).disabled = true;
}

function nodeDisabledAlternate(btnPlay,btnStop){
    if (d.querySelector(btnPlay).disabled == false){        
        d.querySelector(btnStop).disabled = false;
        d.querySelector(btnPlay).disabled = true;
    } else {
        d.querySelector(btnStop).disabled = true;
        d.querySelector(btnPlay).disabled = false;
    }    
}

export function digitalClockAlarma(clock, sound, btnPlay, btnStop){
    let varTemp;
    nodeDisabledInitial(btnPlay,btnStop);

    
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay+"-reloj") || e.target.matches(btnPlay+"-alarma") ){
            nodeDisabledAlternate(btnPlay,btnStop);
}



export function digitalClock(clock, btnPlay, btnStop){
    let clockTemp;
    nodeDisabledInitial(btnPlay,btnStop);
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            nodeDisabledAlternate(btnPlay,btnStop);
            clockTemp = setInterval(()=>{
                    let clockHour = new Date().toLocaleTimeString();
                    d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
                },1000);          
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTemp);
            d.querySelector(clock).innerHTML = null;
            nodeDisabledAlternate(btnPlay,btnStop);           
        }
    })

}
export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    nodeDisabledInitial(btnPlay,btnStop);
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            nodeDisabledAlternate(btnPlay,btnStop);
            alarmTempo = setTimeout(()=>{
                $alarm.play();
            },2000);          
        }
        if(e.target.matches(btnStop)){
            clearInterval(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            nodeDisabledAlternate(btnPlay,btnStop);
        }
    });
}