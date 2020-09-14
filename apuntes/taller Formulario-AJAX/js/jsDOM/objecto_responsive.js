const d = document,
w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq); // detecta la media query el punto de ruptura
    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
        console.log("MQ" ,breakpoint , breakpoint.matches, e.matches);
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);

}