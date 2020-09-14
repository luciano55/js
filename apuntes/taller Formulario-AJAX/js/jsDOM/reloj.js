const d = document;
export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;
    d.querySelector(btnPlay).disabled = false;
    d.querySelector(btnStop).disabled = true;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            d.querySelector(btnStop).disabled = false;
            clockTempo = setInterval(()=>{
                    let clockHour = new Date().toLocaleTimeString();
                    d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
                },1000);
                e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            //clockTempo = null;
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
            d.querySelector(btnStop).disabled = true;
           
        }
    })

}
export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    d.querySelector(btnPlay).disabled = false;
    d.querySelector(btnStop).disabled = true;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            d.querySelector(btnStop).disabled = false;
            alarmTempo = setTimeout(()=>{
                $alarm.play();
            },2000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
            d.querySelector(btnStop).disabled = true;
        }
    });
}