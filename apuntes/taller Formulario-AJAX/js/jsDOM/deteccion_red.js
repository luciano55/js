const d = document,
w = window,
n = navigator;

export default function networkStatus(){
    const isOnline = () =>{
        const $div = d.createElement("div");
        if(n.onLine){
            $div.textContent = "Conexión Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else {
            $div.textContent = "Conexión perdida";
            $div.classList.remove("online");
            $div.classList.add("offline");
        }
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(() => d.body.removeChild($div),2000);
    }
    w.addEventListener("online",(e)=> isOnline());
    w.addEventListener("offline",(e)=> isOnline());
}