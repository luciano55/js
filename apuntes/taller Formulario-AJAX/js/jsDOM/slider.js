const d = document;
export default function slider(){
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

/* Plantilla 

<div class="slider">
    <div class="slider-slides">
        <div class="slider-slide active">
            p.e. <img src="https://placeimg.com/200/200/animals" alt="Animals">
        </div>
        .........
    </div>
    <div class="slider-btns">
        <a class="prev" href="#">&laquo;</a>
        <a class="next" href="#">&raquo;</a>
    </div>
</div>  

fin plantilla*/