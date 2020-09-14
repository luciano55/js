const d = document;

export default function draw(btn,selector){
    const getWinner = (sele) => {
        const $players = document.querySelectorAll(sele),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];        
        console.log($players, random, winner);
        return `El ganador es ${winner.textContent}`;
    };
    d.addEventListener("click", (e) =>{        
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}

/**
 * 
 * Sorteo para los comentarios de YouTube
 * 
 
const getWinnerComment = (sele) => {
    const $players = document.querySelectorAll(sele),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];
    
    //console.log($players, random, winner);
    return `El ganador es ${winner.textContent}`;
};
getWinnerComment("ytd-comment-thread-renderer #author-text span");*/


