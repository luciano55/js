const d = document, // todo el arbol html DOM
ls = localStorage,
w = window;

function humburgerMenu(panelBtn, panel, menuLink){
   
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
function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
  
    w.addEventListener("scroll",(e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
       if(scrollTop > 600){
        $scrollBtn.classList.remove("hidden");
       }else{
        $scrollBtn.classList.add("hidden");
       }
       // console.log(w.pageXOffset,d.documentElement.scrollTop);
    });
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top:0
            });
        }
    });

}
function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
   // console.log( $selectors);
    let moon="🌙",
    sun="☀️";
    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }
    d.addEventListener("click",(e=>{
        if(e.target.matches(btn)){
           // console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();  
            }else{
                lightMode();
            }
        }
    }));
    d.addEventListener("DOMContentLoaded",(e)=>{
       // alert("Hola desde la función darktheme")
       if(ls.getItem("theme") === null) ls.setItem("theme","light");
       if(ls.getItem("theme") === "light") lightMode();
       if(ls.getItem("theme") === "dark") darkMode(); 
    });

}
function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
          $prevBtn = d.querySelector(".slider-btns .prev"),
          $slides = d.querySelectorAll(".slider-slide");
   
   let i = 0;
    d.addEventListener("click", (e)=>{
        if(e.target === $prevBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            if(i<0){
                i= $slides.length - 1;
            }
            $slides[i].classList.add("active");
        }
        if(e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            if(i >= $slides.length){
                i= 0;
            }
            $slides[i].classList.add("active");
        }
    });
    
}
function scrollSpy(){
    const $section = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) =>{
       console.log("entries",entries);
       entries.forEach((entry) =>{
           // console.log("entry",entry);
           const id = entry.target.getAttribute("id");
           console.log(id);
        if(entry.isIntersecting){
            //console.log(d.querySelector(`a[data-scroll-spy][href="#${id}"]`));
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
        }else{
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
        }

       })
    }
    const observer = new IntersectionObserver(cb,{
        //root
        //rootMargin: "-250px",
        threshold: [0.5,0.75] 
    });
   // console.log("observer",observer);
    $section.forEach((el) => observer.observe(el));
}
function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");
    console.log($inputs);
    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(".contact-form [required]")){}
        let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
        //console.log($input,pattern);
        if(pattern && $input.value !==""){
            //console.log("Tiene patrón");
            let regex = new RegExp(pattern);
            return !regex.exec($input.value) 
            ? d.getElementById($input.name).classList.add("is-active")
            :  d.getElementById($input.name).classList.remove("is-active");
        }
        if(!pattern){
           //console.log("Tiene NO patrón");
            return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            :  d.getElementById($input.name).classList.remove("is-active");
        }

    });
}


d.addEventListener("DOMContentLoaded",(e) =>{
    humburgerMenu(".panel-btn",".panel",".menu a");
    scrollTopButton(".scroll-top-btn");   
    slider();
    scrollSpy();   
    contactFormValidations();

}); 
darkTheme(".dark-theme-btn", "dark-mode");

