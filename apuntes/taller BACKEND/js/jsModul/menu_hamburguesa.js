export default function humburgerMenu(panelBtn, panel, menuLink){
   
    const d = document;
    d.addEventListener("click",(e) =>{
        if(e.target.matches(panelBtn)  || e.target.matches(`${panelBtn} *`)){ // * descendientes
            d.querySelector(panel).classList.toggle("my-is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
           // d.querySelector(panel).style.display = "";
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("my-is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
           // d.querySelector(panel).style.display = "none";

        }
    });
}