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

export function digitalClock(clock, btnPlay, btnStop){
    let clockTemp;
    let nodoReloj =  d.querySelector(clock);
    nodeDisabledInitial(btnPlay,btnStop);
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            nodeDisabledAlternate(btnPlay,btnStop);
            clockTemp = setInterval(()=>{
                    let clockHour = new Date().toLocaleTimeString();
                    nodoReloj.innerHTML = `<h3>${clockHour}</h3>`;
                },1000);          
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTemp);
            nodoReloj.innerHTML = null;
            nodeDisabledAlternate(btnPlay,btnStop);           
        }
    });

}
export function alarm(sound, btnPlay, btnStop){
    const $myAlarma = d.getElementById("myAlarma"), 
             $audio = d.createElement("audio");
    let alarmTempo;
    $myAlarma.style.display = "none";    
    $audio.src = sound;
    nodeDisabledInitial(btnPlay,btnStop);
    const showEntryTime = () => {
        $myAlarma.style.display = "";
        nodeDisabledAlternate(btnPlay,btnStop);        
    };
    const mountAlarm = () => {
        stopAudio();
        let alarmTime = new Date("2020-1-1 " + d.getElementById("myTime").value),
             currentTime;             
        d.getElementById("myTimeForId").innerHTML = "Selected time";   
        alarmTempo = setInterval(()=>{
            currentTime = new Date();
            if(alarmTime.getHours() == currentTime.getHours() &&  alarmTime.getMinutes() == currentTime.getMinutes()){
                playAudio();
               clearInterval(alarmTempo);               
            }            
        },1000);        
        
    };
    const playAudio = () => {
        $audio.play();
        nodeDisabledAlternate(btnPlay,btnStop);
    };
    const stopAudio = () => {
        $audio.pause();
        $audio.currentTime = 0;
        nodeDisabledAlternate(btnPlay,btnStop);
    };
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            showEntryTime();     
        }
        if(e.target.matches(btnStop)){
            clearInterval(alarmTempo);
            stopAudio();           
        }
        if(e.target.matches("#myButtonTime")){
            mountAlarm();           
        }
    });
}
export function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime =  countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60 )) / (1000 * 60))).slice(-2),
        seconds = ("0" + Math.floor((limitTime % (1000 * 60 )) / (1000))).slice(-2);
        $countdown.innerHTML = `<h3>Faltan:${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`
       // console.log(countdownDate, now, limitTime);
       if(limitTime < 0){
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
           clearInterval(countdownTempo);
       }
    },1000);
}