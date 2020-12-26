const next = document.querySelector(".next");
const prew = document.querySelector(".prew");
const slides = document.querySelectorAll(".slide");

let index = 0;
function nextSlide(){
    index++;
    if(index> slides.length-1){
        index = 0;
    }
    slides.forEach((slide)=>{
        slide.style.display = "none";
    });
    slides[index].style.display = "flex";
 }
function prewSlide(){
    index--;
    if(index<0){
        index = slides.length-1;
    }
    slides.forEach((slide)=>{
        slide.style.display = "none";
    });
    slides[index].style.display = "flex";
}
next.addEventListener("click", nextSlide);
prew.addEventListener("click", prewSlide);

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-lu");
hamburger.addEventListener("click", ()=>{
      navUl.classList.toggle("show");
});